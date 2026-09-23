import { getWhatsAppLink } from "../config/whatsapp";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const reveal = useReveal();

  return (
    <section className="py-24 md:py-36 border-t hairline">
      <div
        ref={reveal.ref}
        className={`reveal ${reveal.className} container-px max-w-content mx-auto text-center`}
      >
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-3xl mx-auto">
          Pronto para levar seu negócio para a próxima versão?
        </h2>
        <p className="mt-6 text-silver text-lg max-w-xl mx-auto leading-relaxed">
          Vamos transformar sua presença digital em uma experiência que
          representa o valor da sua marca.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base mt-12 px-8 py-5"
        >
          Falar com a NextCode no WhatsApp
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#0B0B0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
