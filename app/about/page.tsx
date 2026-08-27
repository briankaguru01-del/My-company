import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are an AI transformation and diagnostic partner — not a chatbot agency or generic automation shop. We start with the organisation, not the technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An AI transformation and diagnostic partner — not an AI agency."
        description="We don't sell chatbots, automations, or off-the-shelf AI tools. We help organisations decide, with evidence, what to build and in what order."
      />

      <Section
        eyebrow="Why This Approach"
        title="AI should solve a business problem — not create another one."
      >
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-700">
          <p>
            We don&rsquo;t begin with a technology and search for somewhere to
            use it. We begin with the organisation.
          </p>
          <p className="text-ink-950 font-medium">We understand the work.</p>
          <p className="text-ink-950 font-medium">We identify the friction.</p>
          <p className="text-ink-950 font-medium">
            We quantify the opportunity where possible.
          </p>
          <p className="text-ink-950 font-medium">
            We assess feasibility and risk.
          </p>
          <p className="text-ink-950 font-medium">
            Then we determine what technology, if any, should be built.
          </p>
        </div>
      </Section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-lg border-t-4 border-t-signal-500 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-ink-950">
                What we are
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                An AI transformation and diagnostic partner. We analyse how
                organisations operate, identify where AI and automation can
                create measurable value, and provide a practical roadmap for
                implementation.
              </p>
            </div>
            <div className="rounded-lg border-t-4 border-t-signal-500 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-ink-950">
                What we are not
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                A generic AI agency, chatbot vendor, or automation shop. We do
                not begin with a product to sell — we begin by understanding
                whether, and where, AI belongs in your organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Find out where AI can create the most value in your organisation."
        location="about_final"
      />
    </>
  );
}
