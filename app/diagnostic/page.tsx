import type { Metadata } from "next";
import DiagnosticForm from "./DiagnosticForm";
import Eyebrow from "@/components/Eyebrow";
import Accent from "@/components/Accent";

export const metadata: Metadata = {
  title: "AI Agents & Automation Diagnostic",
  description:
    "Tell us about your organisation. This short intake form is the first step in your AI Agents & Automation Diagnostic.",
};

export default function DiagnosticPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Eyebrow>AI Agents & Automation Diagnostic</Eyebrow>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
          Tell us about <Accent>your organisation.</Accent>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600">
          This takes a few minutes. It gives us the context we need to begin
          your AI Agents & Automation Diagnostic. There is nothing to prepare
          in advance.
        </p>

        <div className="mt-12">
          <DiagnosticForm />
        </div>
      </div>
    </section>
  );
}
