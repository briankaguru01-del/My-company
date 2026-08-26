import CtaButton from "@/components/CtaButton";

type FinalCtaProps = {
  title: string;
  description?: string;
  location: string;
};

export default function FinalCta({ title, description, location }: FinalCtaProps) {
  return (
    <section className="bg-ink-950 text-white">
      <div className="mx-auto max-w-content px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
            {description}
          </p>
        )}
        <div className="mt-9 flex justify-center">
          <CtaButton location={location} variant="inverse" />
        </div>
      </div>
    </section>
  );
}
