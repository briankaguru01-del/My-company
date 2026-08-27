export const siteConfig = {
  name: "Meridian AI Advisory",
  tagline: "AI Agents & Automation Diagnostic",
  description:
    "We analyse how your organisation actually works, identify where AI and automation can create the greatest measurable value, prioritise the best use cases, and provide a practical roadmap for implementation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  contactEmail: "hello@example.com",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AI Diagnostic", href: "/ai-diagnostic" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CTA_LABEL = "Find Where AI Can Help";
export const CTA_HREF = "/diagnostic";
