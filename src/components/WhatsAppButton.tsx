import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ADVISORS = [
  { name: "Michelle", url: "https://wa.me/50766778280" },
  { name: "Singh", url: "https://wa.me/50768786844" },
];

const TITLES: Record<string, string> = {
  en: "Talk to our sales team",
  pt: "Fale com nossa equipe de vendas",
  es: "Habla con nuestro equipo de ventas",
};

const ROLES: Record<string, string> = {
  en: "Sales Advisor",
  pt: "Consultor de Vendas",
  es: "Asesor de Ventas",
};

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const title = TITLES[lang] ?? TITLES.en;
  const role = ROLES[lang] ?? ROLES.en;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
    >
      {open && (
        <div
          role="dialog"
          aria-label={title}
          className="w-[min(20rem,calc(100vw-3rem))] origin-bottom-right rounded-2xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-2xl p-4 animate-fade-in"
          style={{ animation: "fade-in 0.25s ease-out" }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground pr-2">
              {title}
            </h3>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {ADVISORS.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/80 hover:bg-card hover:shadow-md hover:-translate-y-0.5 transition-all p-3"
              >
                <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm shrink-0">
                  <MessageCircle size={18} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    {a.name}
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight">
                    {role}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-float cursor-pointer"
        style={{ touchAction: "manipulation" }}
      >
        <MessageCircle size={28} style={{ pointerEvents: "none" }} />
      </button>
    </div>
  );
};

export default FloatingContactButton;
