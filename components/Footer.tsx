import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

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
                      className="text-sm text-ink-300 hover:text-white"
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
          <p>Registered address available on request.</p>
        </div>
      </div>
    </footer>
  );
}
