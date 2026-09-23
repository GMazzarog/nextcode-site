import siteConfig from "../config/siteConfig";
import { getWhatsAppLink } from "../config/whatsapp";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const reveal = useReveal();

  return (
    <section id="contato" className="py-24 md:py-32 border-t hairline">
      <div
        ref={reveal.ref}
        className={`reveal ${reveal.className} container-px max-w-content mx-auto grid lg:grid-cols-2 gap-12 items-center`}
      >
        <div>
          <p className="section-eyebrow mb-6">Contato</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-[1.15] tracking-tight mb-5">
            Vamos conversar?
          </h2>
          <p className="text-silver text-lg leading-relaxed max-w-md">
            Tem uma ideia ou precisa de um novo site para sua empresa? Fale
            com a {siteConfig.name}.
          </p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-base mt-8">
            Entrar em contato →
          </a>
        </div>

        <div className="grid gap-px bg-steel/20 border hairline rounded-2xl overflow-hidden">
          <ContactRow label="WhatsApp" value="SEU WHATSAPP" href={getWhatsAppLink()} />
          <ContactRow
            label="Instagram"
            value={siteConfig.instagram.handle || "SEU INSTAGRAM"}
            href={siteConfig.instagram.url}
          />
          <ContactRow label="E-mail" value={siteConfig.email || "SEU E-MAIL"} href={`mailto:${siteConfig.email}`} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-obsidian p-6 flex items-center justify-between group hover:bg-graphite/40 transition-colors"
    >
      <span className="text-xs uppercase tracking-widest text-steel">{label}</span>
      <span className="font-display font-medium group-hover:translate-x-1 transition-transform">
        {value}
      </span>
    </a>
  );
}
