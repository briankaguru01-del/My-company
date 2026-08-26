import type { Metadata } from "next";
import DiagnosticForm from "./DiagnosticForm";

export const metadata: Metadata = {
  title: "Start Your AI Diagnostic",
  description:
    "Tell us about your organisation. This short intake form is the first step in your AI Opportunity Diagnostic.",
};

export default function DiagnosticPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-600">
          Start Your AI Diagnostic
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
          Tell us about your organisation.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600">
          This takes a few minutes. It gives us the context we need to begin
          your AI Opportunity Diagnostic. There is nothing to prepare in
          advance.
        </p>

        <div className="mt-12">
          <DiagnosticForm />
        </div>
      </div>
    </section>
  );
}
