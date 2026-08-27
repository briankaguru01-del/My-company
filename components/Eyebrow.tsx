type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export default function Eyebrow({ children, tone = "light" }: EyebrowProps) {
  const classes =
    tone === "dark"
      ? "bg-white/10 text-signal-400"
      : "bg-signal-500/10 text-signal-600";

  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide ${classes}`}
    >
      {children}
    </span>
  );
}
