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

const prioritisationCriteria = [
  {
    title: "Value to the business",
    description:
      "First and non-negotiable. We quantify the opportunity using your own figures: how many people do this work, for how many hours, at what cost. If it does not move a number you already track, it does not make the roadmap.",
  },
  {
    title: "Feasibility",
    description:
      "How hard this is to deliver against what it returns. Data availability, systems access, security requirements, and whether the build cost is proportionate to the saving. There is no case for a six-figure build returning five figures a year.",
  },
  {
    title: "Risk",
    description:
      "Exposure to the organisation and its stakeholders, including data and security risk, over-reliance on AI where judgement is required, and the opposite failure of staff quietly refusing to use it at all.",
  },
  {
    title: "Speed to value",
    description:
      "How quickly this produces something measurable. We sequence the roadmap so the first solution delivers visible impact within about four weeks, because momentum early is what keeps a programme funded.",
  },
];

const deliverables = [
  "AI Maturity Assessment",
  "Current-State Operational Findings",
  "Workflow Analysis",
  "Prioritised AI & Automation Use Cases",
  "Working Prototypes of Priority Use Cases",
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
            <Eyebrow>How We Prioritise</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              Four criteria, <Accent>applied in order.</Accent>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Every opportunity we find is tested against the same four
              questions. The order matters: a use case that fails the first
              test does not earn a place on the roadmap by passing the other
              three.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {prioritisationCriteria.map((criterion, index) => (
              <li
                key={criterion.title}
                className="rounded-lg border-t-4 border-t-signal-500 bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink-950">
                  {criterion.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {criterion.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow>What You Receive</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              A clear answer to the question:{" "}
              <Accent>what should we build?</Accent>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              The findings are presented in a working session, not posted over
              as a two-hundred-page document. You get the ranked roadmap and
              prototypes you can actually operate, so the decision in front of
              you is which use case to build first, rather than whether any of
              this is real.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-lg border-t-4 border-t-signal-500 bg-ink-50 p-6 shadow-sm"
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
