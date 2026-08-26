import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";
import CheckList from "@/components/CheckList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Opportunity Diagnostic for Growing Organisations",
  description: siteConfig.description,
};

const problemPoints = [
  "Where AI should actually be applied",
  "What should be automated",
  "What should remain human",
  "Which opportunities are worth building",
  "What should be built first",
  "What will actually produce measurable value",
];

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

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-content px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-600">
              AI Opportunity Diagnostic
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Find out what AI your organisation should actually build.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-600">
              We analyse how your organisation operates, identify where AI and
              automation can create measurable value, and give you a
              prioritised roadmap for what to build first.
            </p>
            <div className="mt-10">
              <CtaButton location="home_hero" />
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The Problem"
        title="Most organisations know AI can create value. Few know where to start."
        description="Leadership teams don't lack ambition — they lack a clear, evidence-based answer to a small set of questions that determine whether an AI investment succeeds or stalls."
      >
        <div className="mt-10">
          <CheckList items={problemPoints} columns={2} />
        </div>
      </Section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-600">
                The Diagnostic
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
                Don&rsquo;t start by building AI. Start by understanding the
                business.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Before any technology decision, we examine how your
                organisation actually operates — not how it appears in a
                process diagram. That grounding is what makes an AI roadmap
                credible instead of speculative.
              </p>
              <p className="mt-5 text-base font-medium leading-relaxed text-ink-950">
                Our job is to determine where AI belongs — and where it
                doesn&rsquo;t.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaButton location="home_diagnostic_section" />
                <Link
                  href="/ai-diagnostic"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-950 underline decoration-ink-300 underline-offset-4 hover:decoration-ink-950"
                >
                  Learn how the diagnostic works
                </Link>
              </div>
            </div>
            <div className="rounded-sm border border-ink-200 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                What we examine
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {examinedAreas.map((area) => (
                  <li key={area} className="text-sm text-ink-700">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Find out where AI can create the most value in your organisation."
        description="A structured diagnostic — not a sales pitch — that tells you what to build, in what order, and why."
        location="home_final"
      />
    </>
  );
}
