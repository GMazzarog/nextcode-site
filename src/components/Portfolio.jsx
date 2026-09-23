import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

export default function Portfolio() {
  const reveal = useReveal();

  return (
    <section id="projetos" className="py-24 md:py-32 border-t hairline">
      <div className="container-px max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="section-eyebrow mb-6">Projetos</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-lg">
              Projetos que falam por si.
            </h2>
          </div>
          <p className="text-steel text-sm max-w-xs">
            Confira alguns exemplos demonstrativos — em breve, projetos reais
            substituirão estes cards.
          </p>
        </div>

        <div
          ref={reveal.ref}
          className={`reveal ${reveal.className} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const initials = project.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const CardInner = (
    <>
      <div className="relative aspect-[4/5] rounded-2xl border hairline bg-graphite/40 overflow-hidden flex items-center justify-center">
        <span className="font-display font-bold text-5xl text-steel/30 select-none">
          {initials}
        </span>
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-steel border hairline rounded-full px-3 py-1">
          Demonstrativo
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-semibold text-lg">{project.name}</h3>
          <p className="text-steel text-sm mt-0.5">{project.category}</p>
        </div>
        {project.link && (
          <span className="text-bone text-sm shrink-0 mt-1">→</span>
        )}
      </div>
      <p className="text-silver text-sm mt-2 leading-relaxed">
        {project.description}
      </p>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-2"
      >
        {CardInner}
      </a>
    );
  }

  return <div>{CardInner}</div>;
}
