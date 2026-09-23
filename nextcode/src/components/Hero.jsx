import siteConfig from "../config/siteConfig";
import { getWhatsAppLink } from "../config/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      {/* textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F2F0EB 1px, transparent 1px), linear-gradient(90deg, #F2F0EB 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative container-px max-w-content mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="animate-fadeUp" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <p className="section-eyebrow mb-6">{siteConfig.name.toUpperCase()}</p>

          <h1 className="font-display font-bold leading-[1.03] text-[2.75rem] sm:text-6xl lg:text-[4.5rem] tracking-tight">
            Seu negócio.
            <br />
            Na próxima versão.
          </h1>

          <p className="mt-7 text-lg text-silver max-w-md leading-relaxed">
            Sites modernos, rápidos e funcionais para empresas que querem mais
            do que apenas presença na internet.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Solicitar orçamento
              <ArrowIcon />
            </a>
            <a href="#servicos" className="btn-secondary text-base">
              Conhecer serviços
            </a>
          </div>

          <p className="mt-12 text-xs tracking-[0.2em] uppercase text-steel">
            Sites&nbsp;&nbsp;|&nbsp;&nbsp;Design&nbsp;&nbsp;|&nbsp;&nbsp;Desenvolvimento
          </p>
        </div>

        <div
          className="animate-fadeUp"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <BrowserMockup />
        </div>
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

/** Mockup abstrato de interface — não domina a seção, apenas sustenta a composição. */
function BrowserMockup() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="rounded-2xl border hairline bg-graphite/40 shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b hairline">
          <span className="w-2.5 h-2.5 rounded-full bg-steel/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-steel/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-steel/40" />
          <span className="ml-3 text-[11px] text-steel tracking-wide">nextcode.dev</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="h-3 w-2/3 rounded-full bg-bone/80" />
          <div className="h-2.5 w-full rounded-full bg-steel/25" />
          <div className="h-2.5 w-5/6 rounded-full bg-steel/25" />
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div className="h-20 rounded-lg border hairline" />
            <div className="h-20 rounded-lg border hairline" />
          </div>
          <div className="h-9 w-32 rounded-full bg-bone mt-4" />
        </div>
      </div>

      {/* cartão flutuante */}
      <div className="hidden sm:block absolute -bottom-6 -left-8 w-40 rounded-xl border hairline bg-obsidian/95 backdrop-blur px-4 py-3 shadow-xl">
        <p className="text-[10px] uppercase tracking-widest text-steel mb-1">Performance</p>
        <p className="font-display font-bold text-xl">98/100</p>
      </div>
    </div>
  );
}
