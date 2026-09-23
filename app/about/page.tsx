import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";
import Eyebrow from "@/components/Eyebrow";
import Accent from "@/components/Accent";

const systemLayers = [
  {
    title: "Your data",
    description:
      "The foundation. Connecting an organisation's own data to tools it already pays for is usually the single largest step change available to it.",
  },
  {
    title: "Your workflows",
    description:
      "The structure. How work actually moves through the business, mapped during the diagnostic rather than assumed from an org chart.",
  },
  {
    title: "Your guardrails",
    description:
      "The limits. What the system may decide alone, what it must escalate to a person, and the rules it is continuously checked against.",
  },
  {
    title: "The tools",
    description:
      "Interchangeable by design. Models and vendors are chosen last and swapped freely as better ones arrive, without disturbing anything beneath them.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "We are an AI transformation and diagnostic partner, not a chatbot agency or generic automation shop. We start with the organisation, not the technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An AI transformation and diagnostic partner,{" "}
            <Accent>not an AI agency.</Accent>
          </>
        }
        description="We don't sell chatbots, automations, or off-the-shelf AI tools. We help organisations decide, with evidence, what to build and in what order."
      />

      <Section
        eyebrow="Why This Approach"
        title={
          <>
            AI should solve a business problem,{" "}
            <Accent>not create another one.</Accent>
          </>
        }
      >
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-700">
          <p>
            We don&rsquo;t begin with a technology and search for somewhere to
            use it. We begin with the organisation.
          </p>
          <p className="text-ink-950 font-medium">We understand the work.</p>
          <p className="text-ink-950 font-medium">We identify the friction.</p>
          <p className="text-ink-950 font-medium">
            We quantify the value where possible.
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
          <div className="max-w-2xl">
            <Eyebrow>Methodology, Not Tools</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              Tools come and go.{" "}
              <Accent>The way you decide has to outlast them.</Accent>
            </h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-700">
              <p>
                The AI tooling market turns over faster than most procurement
                cycles. OpenAI launched its Agent Builder in October 2025,
                announced its retirement the following June, and shut it down
                that November. Anyone who had built their operation around it
                started again.
              </p>
              <p>
                We are deliberately not a reseller for any one platform. What
                we bring is a repeatable way of working out where AI belongs
                in a specific organisation, which holds regardless of which
                model or vendor is ahead this quarter.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {systemLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-lg border-t-4 border-t-signal-500 bg-white p-7 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-ink-950">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-ink-950">
            Buy only the tools and you have furniture standing in a field.
            The value is in the three layers underneath.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-lg border-t-4 border-t-signal-500 bg-ink-50 p-8 shadow-sm">
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
            <div className="rounded-lg border-t-4 border-t-signal-500 bg-ink-50 p-8 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-ink-950">
                What we are not
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                A generic AI agency, chatbot vendor, or automation shop. We do
                not begin with a product to sell, we begin by understanding
                whether, and where, AI belongs in your organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            Find out where AI can create{" "}
            <Accent tone="dark">the most value</Accent> in your organisation.
          </>
        }
        location="about_final"
      />
    </>
  );
}
