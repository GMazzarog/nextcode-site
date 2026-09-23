import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

export default function WhyNextCode() {
  const reveal = useReveal();

  return (
    <section className="py-24 md:py-32 border-t hairline bg-graphite/20">
      <div
        ref={reveal.ref}
        className={`reveal ${reveal.className} container-px max-w-content mx-auto`}
      >
        <p className="section-eyebrow mb-6">Por que a NextCode?</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-2xl mb-16">
          Tecnologia, design e estratégia do seu lado.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {siteConfig.differentials.map((item) => (
            <div key={item.title} className="border-t hairline pt-5">
              <h3 className="font-display font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
