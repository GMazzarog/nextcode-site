import siteConfig from "../config/siteConfig";
import { getWhatsAppLink } from "../config/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t hairline py-14">
      <div className="container-px max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display font-bold text-lg">{siteConfig.name}</p>
          <p className="text-steel text-sm mt-1">{siteConfig.slogan}</p>
          <p className="text-xs tracking-[0.2em] uppercase text-steel mt-4">
            Sites&nbsp;&nbsp;|&nbsp;&nbsp;Design&nbsp;&nbsp;|&nbsp;&nbsp;Desenvolvimento
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-silver">
          <li>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone transition-colors"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-bone transition-colors">
              E-mail
            </a>
          </li>
        </ul>
      </div>

      <div className="container-px max-w-content mx-auto mt-10 pt-6 border-t hairline">
        <p className="text-xs text-steel">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
