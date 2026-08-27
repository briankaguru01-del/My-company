import Eyebrow from "@/components/Eyebrow";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
