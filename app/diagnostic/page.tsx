import type { Metadata } from "next";
import DiagnosticForm from "./DiagnosticForm";
import styles from "./diagnostic.module.css";

export const metadata: Metadata = {
  title: { absolute: "AI Agents & Automation Diagnostic | Wilvo AI" },
  description:
    "Tell us about your organisation. This short intake form is the first step in your AI Agents & Automation Diagnostic.",
};

const facts = [
  {
    title: "About 3 minutes",
    text: "Three short steps, at your own pace.",
  },
  {
    title: "Nothing to prepare",
    text: "Answer from memory. Rough numbers are fine.",
  },
  {
    title: "No technical knowledge",
    text: "The questions are about how your business runs.",
  },
];

const afterSteps = [
  {
    title: "We read your answers",
    text: "Our team looks over what you have told us about your company.",
  },
  {
    title: "We get in touch",
    text: "You will hear from us about the next step, by email or phone.",
  },
  {
    title: "Your diagnostic begins",
    text: "We look at how your business runs and where AI can help.",
  },
];

export default function DiagnosticPage() {
  return (
    <div className={styles.page}>
      <section>
        <div className="mx-auto max-w-content px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className={styles.eyebrow}>AI Agents &amp; Automation Diagnostic</p>

              <h1 className={styles.h1}>Find where AI belongs in your business.</h1>

              <p className={styles.lead}>
                Tell us a little about your company. It is the first step of
                your diagnostic.
              </p>

              <dl className={styles.facts}>
                {facts.map((item) => (
                  <div key={item.title} className={styles.fact}>
                    <dt>{item.title}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>

              <a href="#diagnostic-form" className={styles.startLink}>
                Go to the form
              </a>
            </div>

            <div id="diagnostic-form" className={`${styles.panel} scroll-mt-28`}>
              <DiagnosticForm />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.after}>
        <div className="mx-auto max-w-content px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <h2 className={styles.h2}>After you send it</h2>
            <ol className={styles.afterList}>
              {afterSteps.map((item, index) => (
                <li key={item.title}>
                  <span className={styles.afterNum}>{index + 1}</span>
                  <div>
                    <p className={styles.afterTitle}>{item.title}</p>
                    <p className={styles.afterText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
