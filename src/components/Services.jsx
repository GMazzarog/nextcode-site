import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

const icons = [InstitutionalIcon, LandingIcon, StoreIcon, CustomIcon];

export default function Services() {
  const reveal = useReveal();

  return (
    <section id="servicos" className="py-24 md:py-32 border-t hairline">
      <div className="container-px max-w-content mx-auto">
        <p className="section-eyebrow mb-6">Serviços</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-xl mb-16">
          O que podemos criar para o seu negócio.
        </h2>

        <div
          ref={reveal.ref}
          className={`reveal ${reveal.className} grid sm:grid-cols-2 gap-px bg-steel/20 border hairline rounded-2xl overflow-hidden`}
        >
          {siteConfig.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.number}
                className="group bg-obsidian p-8 sm:p-10 transition-colors duration-300 hover:bg-graphite/50"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-sm text-steel">{service.number}</span>
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-silver leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const p = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, stroke: "#C7C7C7", strokeWidth: 1.3 };

function InstitutionalIcon() {
  return (
    <svg {...p}>
      <path d="M4 21V9l8-5 8 5v12" strokeLinejoin="round" />
      <path d="M9 21v-7h6v7" strokeLinejoin="round" />
    </svg>
  );
}
function LandingIcon() {
  return (
    <svg {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 13h6" strokeLinecap="round" />
    </svg>
  );
}
function StoreIcon() {
  return (
    <svg {...p}>
      <path d="M3 9l1-5h16l1 5" strokeLinejoin="round" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function CustomIcon() {
  return (
    <svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
