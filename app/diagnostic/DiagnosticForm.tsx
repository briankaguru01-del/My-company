"use client";

import { useRef, useState } from "react";
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

type FieldConfig = {
  name: keyof DiagnosticFormValues;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  options?: readonly string[];
  span?: "full" | "half";
  autoComplete?: string;
};

const fields: FieldConfig[] = [
  { name: "client_name", label: "Full Name", span: "half", autoComplete: "name" },
  { name: "job_title", label: "Job Title", span: "half", autoComplete: "organization-title" },
  { name: "email", label: "Email", type: "email", span: "half", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", span: "half", autoComplete: "tel" },
  { name: "company_name", label: "Company Name", span: "half", autoComplete: "organization" },
  {
    name: "website",
    label: "Website",
    span: "half",
    placeholder: "https://www.yourcompany.com",
    autoComplete: "url",
  },
  {
    name: "company_vertical",
    label: "Company Vertical / Industry",
    span: "half",
    placeholder: "e.g. Professional Services",
  },
  {
    name: "number_of_departments",
    label: "Number of Departments",
    type: "select",
    span: "half",
    options: departmentRanges,
  },
  {
    name: "products_services",
    label: "Products / Services",
    type: "textarea",
    span: "full",
    placeholder: "Briefly describe what your company sells or provides.",
  },
  {
    name: "client_types",
    label: "Types of Clients / Customers You Serve",
    type: "textarea",
    span: "full",
    placeholder: "e.g. Mid-market manufacturers, regional healthcare providers, etc.",
  },
  {
    name: "approximate_employees",
    label: "Approximate Number of Employees",
    type: "select",
    span: "half",
    options: employeeRanges,
  },
  {
    name: "approximate_annual_revenue",
    label: "Approximate Annual Revenue",
    type: "select",
    span: "half",
    options: revenueRanges,
  },
];

export default function DiagnosticForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasStarted = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues: diagnosticFormDefaults,
    mode: "onBlur",
  });

  const handleFirstInteraction = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackFormStarted();
  };

  const onSubmit = async (values: DiagnosticFormValues) => {
    setErrorMessage(null);
    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

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
      <div
        role="status"
        className="rounded-sm border border-signal-500/30 bg-signal-500/5 p-8 text-center sm:p-12"
      >
        <p className="font-serif text-2xl font-semibold text-ink-950">Thank you.</p>
        <p className="mt-3 text-base leading-relaxed text-ink-600">
          We&rsquo;ve received your information and will be in touch regarding the
          next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleFirstInteraction}
      noValidate
      className="space-y-8"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {fields.map((field) => {
          const error = errors[field.name];
          const inputId = `field-${field.name}`;
          const describedBy = error ? `${inputId}-error` : undefined;
          const wrapperClass = field.span === "full" ? "sm:col-span-2" : "";

          return (
            <div key={field.name} className={wrapperClass}>
              <label
                htmlFor={inputId}
                className="block text-sm font-medium text-ink-800"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={inputId}
                  rows={4}
                  placeholder={field.placeholder}
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={describedBy}
                  className="mt-2 block w-full rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 focus:border-ink-950 focus:outline-none"
                  {...register(field.name)}
                />
              ) : field.type === "select" ? (
                <select
                  id={inputId}
                  defaultValue=""
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={describedBy}
                  className="mt-2 block w-full rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 focus:border-ink-950 focus:outline-none"
                  {...register(field.name)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={describedBy}
                  className="mt-2 block w-full rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 focus:border-ink-950 focus:outline-none"
                  {...register(field.name)}
                />
              )}

              {error && (
                <p id={`${inputId}-error`} className="mt-2 text-sm text-red-600">
                  {error.message}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-sm border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-sm bg-ink-950 px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-150 hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
