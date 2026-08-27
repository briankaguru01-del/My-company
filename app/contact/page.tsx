import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import Accent from "@/components/Accent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch, or start your AI Agents & Automation Diagnostic directly.",
};

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title={
        <>
          The fastest way to start is{" "}
          <Accent>the diagnostic itself.</Accent>
        </>
      }
      description="The intake form takes a few minutes and gives us what we need to begin. If you have a general question first, reach out by email."
    >
      <div className="mt-9 flex flex-wrap items-center gap-6">
        <CtaButton location="contact_hero" />
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-sm font-medium text-ink-950 underline decoration-ink-300 underline-offset-4 hover:decoration-ink-950"
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </PageHero>
  );
}
