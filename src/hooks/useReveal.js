import { useEffect, useRef, useState } from "react";

/**
 * Retorna um ref e uma classe CSS que ativa uma animação sutil de
 * fade-up quando o elemento entra na viewport. Respeita
 * prefers-reduced-motion — nesse caso o conteúdo aparece direto,
 * sem animação.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
  };
}
