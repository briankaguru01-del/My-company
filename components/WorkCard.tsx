import Image from "next/image";
import type { WorkItem } from "@/lib/work";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full border-b border-ink-100 bg-ink-50">
        {item.screenshot ? (
          <Image
            src={item.screenshot}
            alt={item.screenshotAlt || item.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-ink-400">
            Screenshot coming soon
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-ink-950">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          {item.description}
        </p>
        {item.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
              >
                {tool}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
