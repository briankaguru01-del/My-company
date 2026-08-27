type AccentProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export default function Accent({ children, tone = "light" }: AccentProps) {
  return (
    <span className={tone === "dark" ? "text-signal-400" : "text-signal-500"}>
      {children}
    </span>
  );
}
