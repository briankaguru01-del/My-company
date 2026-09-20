import type { CSSProperties } from "react";
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

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function DiagnosticPage() {
  return (
    <div className={styles.page}>
      <section>
        <div className="mx-auto max-w-[1100px] px-6 pb-20 pt-14 lg:pb-28 lg:pt-20">
          <div className={styles.intro}>
            <h1 className={`${styles.h1} ${styles.rise}`}>
              Find where AI <span className={styles.mark}>belongs</span> in your business.
            </h1>

            <p className={`${styles.lead} ${styles.rise}`} style={delay(120)}>
              Tell us a little about your company. It is the first step of
              your AI Agents &amp; Automation Diagnostic.
            </p>

            <dl className={`${styles.facts} ${styles.rise}`} style={delay(220)}>
              {facts.map((item) => (
                <div key={item.title} className={styles.fact}>
                  <dt>{item.title}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="diagnostic-form" className={`${styles.panel} ${styles.rise} scroll-mt-28`} style={delay(340)}>
            <DiagnosticForm />
          </div>
        </div>
      </section>

      <section className={styles.after}>
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <h2 className={`${styles.h2} ${styles.reveal}`}>After you send it</h2>
          <ol className={styles.afterList}>
            {afterSteps.map((item, index) => (
              <li key={item.title} className={styles.reveal}>
                <span className={styles.afterNum}>{index + 1}</span>
                <div>
                  <p className={styles.afterTitle}>{item.title}</p>
                  <p className={styles.afterText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
