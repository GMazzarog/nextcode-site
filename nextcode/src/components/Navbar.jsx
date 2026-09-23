import { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig";
import { getWhatsAppLink } from "../config/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-obsidian/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav className="container-px max-w-content mx-auto flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <LogoMark />
          {siteConfig.name}
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm text-silver font-body">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-bone transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-bone text-obsidian font-display font-semibold text-sm px-5 py-3 rounded-full hover:-translate-y-0.5 transition-transform"
        >
          Solicitar orçamento
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border hairline"
        >
          <BurgerIcon open={open} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-obsidian transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 container-px pt-8">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-display text-2xl font-semibold py-4 border-b hairline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-px mt-8">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary w-full text-base"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#F2F0EB" />
      <path d="M20 46V18h6l14 20V18h4v28h-6L24 26v20h-4z" fill="#0B0B0C" />
    </svg>
  );
}

function BurgerIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path d="M4 4l12 12M16 4L4 16" stroke="#F2F0EB" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <>
          <path d="M2 6h16" stroke="#F2F0EB" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M2 14h16" stroke="#F2F0EB" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
