import siteConfig from "./siteConfig";

/**
 * Gera o link do WhatsApp usando o número e a mensagem centralizados
 * em siteConfig. Todos os CTAs do site devem usar esta função —
 * assim, ao preencher o número real em siteConfig.js, todos os
 * botões passam a funcionar automaticamente.
 *
 * @param {string} [customMessage] - mensagem opcional, sobrescreve a padrão
 * @returns {string} URL pronta para https://wa.me
 */
export function getWhatsAppLink(customMessage) {
  const { number, defaultMessage } = siteConfig.whatsapp;
  const message = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}

/** Se o número ainda não foi configurado (placeholder). */
export function isWhatsAppConfigured() {
  return /^\d+$/.test(siteConfig.whatsapp.number);
}
