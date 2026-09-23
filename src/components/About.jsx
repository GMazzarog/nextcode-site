import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

const icons = [DesignIcon, ResponsiveIcon, CodeIcon, ChatIcon];

export default function About() {
  const reveal = useReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 border-t hairline">
      <div
        ref={reveal.ref}
        className={`reveal ${reveal.className} container-px max-w-content mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-start`}
      >
        <div>
          <p className="section-eyebrow mb-6">Sobre nós</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-md">
            Seu negócio merece mais do que apenas presença.
          </h2>
        </div>

        <div>
          <p className="text-silver text-lg leading-relaxed max-w-lg">
            A {siteConfig.name} cria experiências digitais pensadas para
            empresas que querem se apresentar melhor na internet.
          </p>
          <p className="mt-5 text-silver text-lg leading-relaxed max-w-lg">
            Unimos design, estratégia e tecnologia para transformar ideias em
            sites modernos, funcionais e alinhados aos objetivos de cada
            negócio.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8">
            {siteConfig.aboutHighlights.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item} className="border-t hairline pt-4">
                  <Icon />
                  <p className="mt-3 text-sm font-display font-semibold">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  fill: "none",
  "aria-hidden": true,
};

function DesignIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="2" width="18" height="18" rx="3" stroke="#C7C7C7" strokeWidth="1.3" />
      <path d="M2 8h18" stroke="#C7C7C7" strokeWidth="1.3" />
    </svg>
  );
}
function ResponsiveIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="13" height="16" rx="2" stroke="#C7C7C7" strokeWidth="1.3" />
      <rect x="16" y="7" width="5" height="10" rx="1.5" stroke="#C7C7C7" strokeWidth="1.3" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M7 4L2 11l5 7M15 4l5 7-5 7" stroke="#C7C7C7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 4h16v11H8l-5 4V4z" stroke="#C7C7C7" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
