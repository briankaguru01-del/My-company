import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A five-step process: discover, map, identify, prioritise, and prove — ending in a practical implementation roadmap.",
};

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the organisation, its objectives and how it operates.",
  },
  {
    number: "02",
    title: "Map",
    description: "Examine how important work actually gets done.",
  },
  {
    number: "03",
    title: "Identify",
    description:
      "Find repetitive, manual, inefficient and high-value opportunities.",
  },
  {
    number: "04",
    title: "Prioritise",
    description:
      "Evaluate opportunities based on business value, feasibility, risk and speed to value.",
  },
  {
    number: "05",
    title: "Prove & Roadmap",
    description:
      "Recommend the best opportunities to prototype and provide a practical implementation roadmap.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A structured process, from first conversation to implementation roadmap."
        description="Every diagnostic follows the same disciplined sequence — so findings are grounded in evidence, and recommendations are ranked by the value they actually create."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <ol className="divide-y divide-ink-100 border-y border-ink-100">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 py-10 sm:grid-cols-[100px_1fr] sm:gap-8 lg:grid-cols-[140px_1fr]"
              >
                <span className="font-serif text-3xl font-semibold text-highlight-500">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta
        title="Ready to see where your organisation stands?"
        description="Start with a short intake form. We'll take it from there."
        location="how_it_works_final"
      />
    </>
  );
}
