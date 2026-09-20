"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  diagnosticFormDefaults,
  diagnosticFormSchema,
  type DiagnosticFormValues,
  employeeRanges,
  revenueRanges,
  departmentRanges,
} from "@/lib/diagnosticForm";
import { trackFormStarted, trackFormSubmitted } from "@/lib/analytics";
import styles from "./diagnostic.module.css";

type FieldConfig = {
  name: keyof DiagnosticFormValues;
  label: string;
  kind: "text" | "email" | "tel" | "textarea" | "choice";
  placeholder?: string;
  hint?: string;
  optional?: boolean;
  options?: readonly string[];
  autoComplete?: string;
  rows?: number;
};

type StepConfig = {
  id: string;
  short: string;
  title: string;
  blurb: string;
  fields: FieldConfig[];
};

// The form is split into three short, friendly steps. Every field from the
// original form is still here, with the same names and the same validation
// schema (lib/diagnosticForm.ts), so the data sent to /api/diagnostic is
// exactly the same as before.
const steps: StepConfig[] = [
  {
    id: "you",
    short: "You",
    title: "First, who are we speaking with?",
    blurb: "Just the basics so we know who to get back to.",
    fields: [
      {
        name: "client_name",
        label: "Your full name",
        kind: "text",
        placeholder: "First and last name",
        autoComplete: "name",
      },
      {
        name: "job_title",
        label: "Your job title",
        kind: "text",
        placeholder: "e.g. Managing Director",
        autoComplete: "organization-title",
      },
      {
        name: "email",
        label: "Your email address",
        kind: "email",
        placeholder: "you@company.com",
        hint: "The best address to reach you on.",
        autoComplete: "email",
      },
      {
        name: "phone",
        label: "Your phone number",
        kind: "tel",
        placeholder: "Include the country code",
        hint: "In case a quick call is easier than email.",
        autoComplete: "tel",
      },
    ],
  },
  {
    id: "company",
    short: "Company",
    title: "Now, tell us about your company.",
    blurb: "This helps us understand the kind of business we're looking at.",
    fields: [
      {
        name: "company_name",
        label: "Company name",
        kind: "text",
        placeholder: "Your company's name",
        autoComplete: "organization",
      },
      {
        name: "website",
        label: "Company website",
        kind: "text",
        optional: true,
        placeholder: "https://www.yourcompany.com",
        hint: "Skip this if you don't have a website yet.",
        autoComplete: "url",
      },
      {
        name: "company_vertical",
        label: "What industry are you in?",
        kind: "text",
        placeholder: "e.g. Professional Services",
        hint: "The type of business you run.",
      },
      {
        name: "number_of_departments",
        label: "How many departments do you have?",
        kind: "choice",
        optional: true,
        options: departmentRanges,
        hint: "A rough idea is fine.",
      },
    ],
  },
  {
    id: "business",
    short: "Business",
    title: "Last step: what you do and how big you are.",
    blurb: "A sentence or two is plenty. There are no wrong answers.",
    fields: [
      {
        name: "products_services",
        label: "What does your company sell or provide?",
        kind: "textarea",
        rows: 3,
        placeholder: "Briefly describe your products or services.",
      },
      {
        name: "client_types",
        label: "Who are your clients or customers?",
        kind: "textarea",
        rows: 3,
        placeholder: "e.g. Mid-market manufacturers, regional healthcare providers",
      },
      {
        name: "approximate_employees",
        label: "About how many people work at your company?",
        kind: "choice",
        options: employeeRanges,
      },
      {
        name: "approximate_annual_revenue",
        label: "About how much revenue do you make each year?",
        kind: "choice",
        options: revenueRanges,
        hint: "A rough estimate is fine.",
      },
    ],
  },
];

const LAST_STEP = steps.length - 1;

// Show ranges with a plain hyphen. The value sent to the server is unchanged.
const plain = (text: string) => text.replace(/[\u2013\u2014]/g, "-");

const nextSteps = [
  "Our team reviews the answers you just gave us.",
  "We get in touch about the next step.",
  "Your AI Agents & Automation Diagnostic begins.",
];

function Progress({ current }: { current: number }) {
  const scale = (current + 1) / steps.length;
  return (
    <nav aria-label="Form progress">
      <ol className={styles.steps}>
        {steps.map((step, index) => {
          const done = index < current;
          const active = index === current;
          const state = active ? styles.stepActive : done ? styles.stepDone : "";
          return (
            <li key={step.id} aria-current={active ? "step" : undefined} className={`${styles.stepItem} ${state}`}>
              <span className={styles.stepNum}>{index + 1}</span>
              <span className={styles.stepLabel}>{step.short}</span>
              <span className="sr-only">
                {done ? " (completed)" : active ? " (current step)" : ""}
              </span>
            </li>
          );
        })}
      </ol>
      <div className={styles.track} aria-hidden="true">
        <span className={styles.trackFill} style={{ transform: `scaleX(${scale})` }} />
      </div>
    </nav>
  );
}

export default function DiagnosticForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const hasStarted = useRef(false);
  const hasMoved = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues: diagnosticFormDefaults,
    // Validate when the person presses Continue / Send, not when they click
    // away from a field. Blur-time errors appearing or disappearing shift the
    // layout between mouse-down and mouse-up and can swallow a click on the
    // next control (e.g. the choice pills).
    mode: "onSubmit",
  });

  // Once a field is showing an error, re-check it as the person fixes it so
  // the message clears as soon as the answer is valid.
  const handleFieldChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as keyof DiagnosticFormValues;
    if (name && errors[name]) void trigger(name);
  };

  // After moving between steps (or finishing), bring the new heading into
  // view and move keyboard/screen-reader focus to it.
  useEffect(() => {
    if (!hasMoved.current) return;
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ block: "center" });
  }, [step]);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
      successRef.current?.scrollIntoView({ block: "center" });
    }
  }, [status]);

  const handleFirstInteraction = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackFormStarted();
  };

  const goNext = async () => {
    const names = steps[step].fields.map((f) => f.name);
    const valid = await trigger(names, { shouldFocus: true });
    if (!valid) return;
    hasMoved.current = true;
    setStep((s) => Math.min(s + 1, LAST_STEP));
  };

  const goBack = () => {
    hasMoved.current = true;
    setErrorMessage(null);
    setStatus("idle");
    setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async (values: DiagnosticFormValues) => {
    setErrorMessage(null);
    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "We couldn't submit your information. Please try again."
        );
        return;
      }

      setStatus("success");
      trackFormSubmitted();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach our server. Please check your connection and try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div role="status">
        <svg className={styles.doneMark} viewBox="0 0 56 56" width="56" height="56" aria-hidden="true" focusable="false">
          <rect className={styles.doneRing} x="2" y="2" width="52" height="52" rx="4" />
          <path className={styles.doneTick} d="M17 29l8 8 14-16" />
        </svg>
        <p ref={successRef} tabIndex={-1} className={styles.thanks}>
          Thank you.
        </p>
        <p className={styles.thanksLine}>
          We&rsquo;ve received your information and will be in touch regarding
          the next step.
        </p>

        <p className={styles.nextHead}>What happens next</p>
        <ol className={styles.nextList}>
          {nextSteps.map((text, index) => (
            <li key={text}>
              <span>{index + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const current = steps[step];
  const isLast = step === LAST_STEP;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isLast) {
          void handleSubmit(onSubmit)(event);
        } else {
          void goNext();
        }
      }}
      onFocus={handleFirstInteraction}
      onChange={handleFieldChange}
      noValidate
    >
      <Progress current={step} />

      <div key={current.id} className={`${styles.stepIn} mt-8`}>
        <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
          {current.title}
        </h2>
        <p className={styles.blurb}>{current.blurb}</p>

        <div className={`${styles.fields} mt-9 space-y-8`}>
          {current.fields.map((field) => {
            const error = errors[field.name];
            const inputId = `field-${field.name}`;
            const hintId = `${inputId}-hint`;
            const errorId = `${inputId}-error`;
            const describedBy =
              [field.hint ? hintId : null, error ? errorId : null]
                .filter(Boolean)
                .join(" ") || undefined;

            const labelContent = (
              <>
                {field.label}
                {field.optional && (
                  <span className={styles.optional}>Optional</span>
                )}
              </>
            );

            const hintNode = field.hint ? (
              <p id={hintId} className={styles.hint}>
                {field.hint}
              </p>
            ) : null;

            const errorNode = error ? (
              <p id={errorId} role="alert" className={styles.error}>
                {error.message}
              </p>
            ) : null;

            if (field.kind === "choice") {
              return (
                <fieldset
                  key={field.name}
                  aria-describedby={describedBy}
                  aria-invalid={error ? "true" : "false"}
                  className="m-0 border-0 p-0"
                >
                  <legend className={`${styles.label} p-0`}>{labelContent}</legend>
                  {hintNode}
                  <div className={styles.choices}>
                    {field.options?.map((option) => (
                      <label key={option} className={styles.choice}>
                        <input
                          type="radio"
                          value={option}
                          className={styles.choiceInput}
                          {...register(field.name)}
                        />
                        <span className={styles.choiceFace}>{plain(option)}</span>
                      </label>
                    ))}
                  </div>
                  {errorNode}
                </fieldset>
              );
            }

            const inputClass = `${styles.input} ${error ? styles.inputError : ""}`;

            return (
              <div key={field.name}>
                <label htmlFor={inputId} className={styles.label}>
                  {labelContent}
                </label>
                {hintNode}
                <div className="mt-3">
                  {field.kind === "textarea" ? (
                    <textarea
                      id={inputId}
                      rows={field.rows ?? 3}
                      placeholder={field.placeholder}
                      aria-invalid={error ? "true" : "false"}
                      aria-describedby={describedBy}
                      className={inputClass}
                      {...register(field.name)}
                    />
                  ) : (
                    <input
                      id={inputId}
                      type={field.kind}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      aria-invalid={error ? "true" : "false"}
                      aria-describedby={describedBy}
                      className={inputClass}
                      {...register(field.name)}
                    />
                  )}
                </div>
                {errorNode}
              </div>
            );
          })}
        </div>
      </div>

      {status === "error" && errorMessage && (
        <div role="alert" className={styles.banner}>
          {errorMessage}
        </div>
      )}

      <div className={styles.actions}>
        {step > 0 ? (
          <button type="button" onClick={goBack} className={styles.back}>
            Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}

        <button type="submit" disabled={isSubmitting} className={styles.cta}>
          {isSubmitting ? "Sending..." : isLast ? "Send my answers" : "Continue"}
        </button>
      </div>

      <p className={styles.note}>Your answers go straight to our team.</p>
    </form>
  );
}
