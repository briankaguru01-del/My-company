"use client";

import Link from "next/link";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import { trackCtaClick } from "@/lib/analytics";

type CtaButtonProps = {
  location: string;
  variant?: "primary" | "inverse";
  className?: string;
};

export default function CtaButton({
  location,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles =
    variant === "primary"
      ? "bg-ink-950 text-white hover:bg-ink-800 focus-visible:outline-ink-950"
      : "bg-white text-ink-950 hover:bg-ink-100 focus-visible:outline-white";

  return (
    <Link
      href={CTA_HREF}
      onClick={() => trackCtaClick(location)}
      className={`${base} ${styles} ${className}`}
    >
      {CTA_LABEL}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
