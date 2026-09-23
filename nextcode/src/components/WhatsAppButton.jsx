import { getWhatsAppLink } from "../config/whatsapp";

/**
 * Botão flutuante de WhatsApp, visível apenas no mobile, fixo na
 * parte inferior sem bloquear conteúdo (respeita safe-area).
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NextCode no WhatsApp"
      className="md:hidden fixed z-40 right-5 w-14 h-14 rounded-full bg-bone text-obsidian flex items-center justify-center shadow-2xl shadow-black/50 active:scale-95 transition-transform"
      style={{ bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }}
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#0B0B0C" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2.003c-5.514 0-9.984 4.47-9.984 9.984 0 1.762.463 3.483 1.342 5.001l-1.428 5.212 5.336-1.4a9.955 9.955 0 004.734 1.206h.004c5.514 0 9.984-4.47 9.984-9.984 0-2.667-1.038-5.174-2.924-7.06a9.919 9.919 0 00-7.064-2.96zm5.845 15.83a8.269 8.269 0 01-4.31 1.191 8.32 8.32 0 01-4.238-1.16l-.303-.18-3.166.83.845-3.086-.198-.317a8.282 8.282 0 01-1.27-4.417c0-4.593 3.737-8.33 8.33-8.33 2.226 0 4.318.867 5.893 2.443a8.276 8.276 0 012.436 5.893c0 4.593-3.652 8.33-8.019 8.133z" />
    </svg>
  );
}
