import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Accent from "@/components/Accent";
import WorkCard from "@/components/WorkCard";
import { workItems } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A look at automations we've built for clients, what each one does, and the tools behind it.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Automations we&rsquo;ve <Accent>actually built.</Accent>
          </>
        }
        description="Real examples of what we ship, not mockups. Each one solves a specific operational bottleneck for a real organisation."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2">
            {workItems.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
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
        location="work_final"
      />
    </>
  );
}
