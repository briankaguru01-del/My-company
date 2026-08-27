import Eyebrow from "@/components/Eyebrow";

type SectionProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
};

export default function Section({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
  children,
}: SectionProps) {
  const toneClasses =
    tone === "dark" ? "bg-ink-950 text-white" : "bg-white text-ink-950";

  return (
    <section className={`${toneClasses} ${className}`}>
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-5 text-base leading-relaxed ${
                  tone === "dark" ? "text-ink-300" : "text-ink-600"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
