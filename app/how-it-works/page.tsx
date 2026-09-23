import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Eyebrow from "@/components/Eyebrow";
import Accent from "@/components/Accent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Three stages: diagnose where AI belongs, build the priority use cases, then drive adoption. The diagnostic follows a five-step sequence ending in a ranked implementation roadmap.",
};

type Stage = {
  label: string;
  title: string;
  summary: string;
  steps: { number: string; title: string; description: string }[];
};

const stages: Stage[] = [
  {
    label: "Stage One",
    title: "Diagnose",
    summary:
      "Before any technology decision, we establish which problems are worth solving and what they are costing you today.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "Understand the organisation, its objectives and how it operates. We meet every key stakeholder, not just the person who signed the engagement, because the people doing the work describe it differently to the people describing it on a slide.",
      },
      {
        number: "02",
        title: "Map",
        description:
          "Examine how important work actually gets done, step by step, including the workarounds and spreadsheets nobody documents. This is also where we establish which decisions must stay with a human.",
      },
      {
        number: "03",
        title: "Identify",
        description:
          "Find the repetitive, manual, inefficient and high-value work where AI and automation could realistically apply, and size each one using your own numbers: how many people, how many hours, at what rate.",
      },
      {
        number: "04",
        title: "Prioritise",
        description:
          "Rank every use case against four criteria in order: value to the business, feasibility, risk, and speed to value. Anything that cannot demonstrate a return worth the build cost does not make the roadmap.",
      },
      {
        number: "05",
        title: "Prove & Roadmap",
        description:
          "Deliver a ranked roadmap with working prototypes of the highest-priority use cases, so you can use the thing before committing to build it.",
      },
    ],
  },
  {
    label: "Stage Two",
    title: "Build",
    summary:
      "The roadmap is sequenced so the first delivery moves a real number quickly, rather than arriving as one large release months later.",
    steps: [
      {
        number: "06",
        title: "Sequence",
        description:
          "Work is phased across the first 30, 60 and 90 days and onward, each solution scoped and priced separately against the value it is expected to create. You always know what is being built next and why it is next.",
      },
      {
        number: "07",
        title: "Deliver",
        description:
          "We target measurable impact from the first solution within four weeks. Where possible we build on the tools you already own and have already approved, rather than introducing new vendors and a new security review.",
      },
      {
        number: "08",
        title: "Instrument",
        description:
          "Every solution ships with the reporting needed to see whether it is working, in terms the business already uses. A result nobody can see is a result nobody will fund again.",
      },
    ],
  },
  {
    label: "Stage Three",
    title: "Adopt",
    summary:
      "Delivering the build is a minority of the work. Most AI projects that fail have already been built successfully and were then quietly abandoned.",
    steps: [
      {
        number: "09",
        title: "Train",
        description:
          "Treat a new system the way you would treat a new hire. Every team that touches it is trained on what it does, what it does not do, and when to escalate to a person.",
      },
      {
        number: "10",
        title: "Support",
        description:
          "Regular working sessions during rollout to resolve the problems people actually hit in live use. When something feels confusing, the path of least resistance is the old way, and that is how implementations end up gathering dust.",
      },
      {
        number: "11",
        title: "Review",
        description:
          "Measure the result against what the diagnostic predicted, and feed what we learn back into the roadmap for the next phase.",
      },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            Diagnose first. Build second.{" "}
            <Accent>Then make sure it gets used.</Accent>
          </>
        }
        description="Every engagement follows the same disciplined sequence, so findings are grounded in evidence, recommendations are ranked by the value they actually create, and what gets built is still in use a year later."
      />

      {stages.map((stage, index) => (
        <section
          key={stage.title}
          className={
            index % 2 === 0
              ? "bg-white"
              : "border-y border-ink-100 bg-ink-50"
          }
        >
          <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <Eyebrow>{stage.label}</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
                {stage.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                {stage.summary}
              </p>
            </div>

            <ol className="mt-10 divide-y divide-ink-100 border-y border-ink-100">
              {stage.steps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-4 py-9 sm:grid-cols-[100px_1fr] sm:gap-8 lg:grid-cols-[140px_1fr]"
                >
                  <span className="font-serif text-3xl font-semibold text-highlight-500">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <FinalCta
        title={
          <>
            Ready to see where{" "}
            <Accent tone="dark">your organisation stands?</Accent>
          </>
        }
        description="Start with a short intake form. We'll take it from there."
        location="how_it_works_final"
      />
    </>
  );
}
