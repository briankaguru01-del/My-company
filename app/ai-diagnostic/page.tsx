import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";
import CtaButton from "@/components/CtaButton";
import CheckList from "@/components/CheckList";
import Eyebrow from "@/components/Eyebrow";
import Accent from "@/components/Accent";

export const metadata: Metadata = {
  title: "AI Agents & Automation Diagnostic",
  description:
    "The AI Agents & Automation Diagnostic examines your business objectives, people, workflows, technology and data to determine where AI belongs, and where it doesn't.",
};

const examinedAreas = [
  "Business objectives",
  "People and roles",
  "Workflows",
  "Operational friction",
  "Technology",
  "Data",
  "Existing automation",
  "AI maturity",
  "Risks",
  "Potential value",
];

const deliverables = [
  "AI Maturity Assessment",
  "Current-State Operational Findings",
  "Workflow Analysis",
  "Prioritised AI & Automation Use Cases",
  "Recommended Proofs of Concept",
  "Business Value Assessment",
  "90-Day Implementation Roadmap",
  "12-Month AI Roadmap",
];

export default function AiDiagnosticPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Agents & Automation Diagnostic"
        title={
          <>
            Don&rsquo;t start by building AI. Start by{" "}
            <Accent>understanding the business.</Accent>
          </>
        }
        description="Before we recommend any technology, we examine how your organisation actually operates. That's what separates a credible AI roadmap from a speculative one."
      >
        <div className="mt-9">
          <CtaButton location="ai_diagnostic_hero" />
        </div>
      </PageHero>

      <Section
        eyebrow="What We Examine"
        title={
          <>
            A structured view of the entire business,{" "}
            <Accent>not just its technology.</Accent>
          </>
        }
        description="The diagnostic looks across ten dimensions of how your organisation runs today, so recommendations are grounded in how work actually happens, not assumptions about it."
      >
        <div className="mt-10 rounded-lg bg-ink-50 p-8 lg:p-10">
          <CheckList items={examinedAreas} columns={2} />
        </div>
        <p className="mt-10 max-w-2xl text-lg font-medium leading-relaxed text-ink-950">
          Our job is to determine where AI belongs, and where it doesn&rsquo;t.
        </p>
      </Section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow>What You Receive</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              A clear answer to the question:{" "}
              <Accent>what should we build?</Accent>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-lg border-t-4 border-t-signal-500 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-ink-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            See exactly where AI can{" "}
            <Accent tone="dark">create value</Accent> in your organisation.
          </>
        }
        description="The diagnostic starts with a short intake form, followed by a structured review of your business."
        location="ai_diagnostic_final"
      />
    </>
  );
}
