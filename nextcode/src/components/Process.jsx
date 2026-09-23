import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

export default function Process() {
  const reveal = useReveal();

  return (
    <section id="processo" className="py-24 md:py-32 border-t hairline">
      <div
        ref={reveal.ref}
        className={`reveal ${reveal.className} container-px max-w-content mx-auto`}
      >
        <p className="section-eyebrow mb-6">Processo</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-xl mb-16">
          Do primeiro contato ao seu novo site.
        </h2>

        <ol className="relative flex flex-col md:flex-row md:gap-6">
          <div
            className="hidden md:block absolute top-3 left-0 right-0 h-px bg-steel/20"
            aria-hidden="true"
          />
          {siteConfig.process.map((step) => (
            <li key={step.number} className="relative flex-1 pl-8 md:pl-0 pb-10 md:pb-0">
              <div className="md:mb-6 flex md:block items-start">
                <span
                  className="absolute md:relative left-0 top-1 md:top-auto w-2.5 h-2.5 rounded-full bg-bone shrink-0"
                  aria-hidden="true"
                />
                <div className="hidden md:block h-6" />
              </div>
              <span className="font-display text-xs text-steel">{step.number}</span>
              <h3 className="font-display font-semibold text-lg mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
