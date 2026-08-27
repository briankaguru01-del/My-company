import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";
import CheckList from "@/components/CheckList";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The AI Opportunity Diagnostic is built for organisations across professional services, field services, healthcare, financial services, logistics, construction, manufacturing, hospitality and technology.",
};

const whoItsFor = [
  "Know AI is important but don't know where to start",
  "Have too many manual processes",
  "Rely heavily on spreadsheets, email or repetitive administrative work",
  "Have inefficient workflows",
  "Want to improve operational efficiency",
  "Want to increase employee capacity",
  "Want to improve customer experience",
  "Want a practical AI strategy rather than AI hype",
];

const industries = [
  "Professional Services",
  "Field Services",
  "Healthcare",
  "Financial Services",
  "Logistics",
  "Construction",
  "Manufacturing",
  "Hospitality",
  "Technology",
  "Other Service Businesses",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who It's For"
        title="Built for organisations ready to move past AI hype."
        description="The diagnostic is designed for leadership teams that know AI matters but need a structured, evidence-based way to decide what to actually do about it."
      />

      <Section
        eyebrow="Is This For You?"
        title="The diagnostic is a strong fit if your organisation:"
      >
        <div className="mt-10 max-w-3xl">
          <CheckList items={whoItsFor} />
        </div>
      </Section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-600">
              Industries
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              We work with organisations across a range of industries.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Every diagnostic is grounded in your organisation&rsquo;s own
              operations, roles and data — not assumed industry templates.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-lg border-t-4 border-t-signal-500 bg-white px-5 py-6 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-ink-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Find out where AI can create the most value in your organisation."
        location="industries_final"
      />
    </>
  );
}
