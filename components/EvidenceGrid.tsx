import { failureEvidence } from "@/lib/evidence";

export default function EvidenceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {failureEvidence.map((stat) => (
        <div
          key={stat.source}
          className="flex flex-col rounded-lg border-t-4 border-t-signal-500 bg-white p-7 shadow-sm"
        >
          <p className="font-serif text-4xl font-semibold tracking-tight text-ink-950">
            {stat.figure}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
            {stat.claim}
          </p>
          <a
            href={stat.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500 underline decoration-ink-300 underline-offset-4 hover:text-signal-500"
          >
            {stat.source}
          </a>
        </div>
      ))}
    </div>
  );
}
