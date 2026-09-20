"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // On the diagnostic form page the footer is a slim single row, without the
  // registered-address line. Every other page keeps the full footer below.
  if (pathname.startsWith("/diagnostic")) {
    return (
      <footer className="border-t border-white/10 bg-ink-950 text-ink-300">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <p className="font-serif text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Site
              </p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-300 hover:text-highlight-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Contact
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-sm text-ink-300 hover:text-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>Registered address available on request.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
