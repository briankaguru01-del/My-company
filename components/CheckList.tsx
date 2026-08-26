type CheckListProps = {
  items: string[];
  tone?: "light" | "dark";
  columns?: 1 | 2;
};

export default function CheckList({ items, tone = "light", columns = 1 }: CheckListProps) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-4 ${
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg
            className={`mt-1 h-4 w-4 flex-shrink-0 ${
              tone === "dark" ? "text-signal-400" : "text-signal-600"
            }`}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8.5L6.2 11.5L13 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={tone === "dark" ? "text-ink-200" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
