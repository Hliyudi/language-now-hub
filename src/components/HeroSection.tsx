import heroImage from "@/assets/hero-mascot.png";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div
        className="bg-hero-gradient relative"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(217 91% 35%) 0%, hsl(217 91% 50%) 100%)",
          boxShadow: "inset 0 0 120px rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="container flex flex-col md:flex-row items-center py-16 md:py-24"
          style={{ gap: "60px" }}
        >
          {/* Text block — ~52% */}
          <div
            className="text-primary-foreground animate-fade-in-up flex flex-col gap-5 md:gap-6 order-2 md:order-1"
            style={{ flex: "1 1 52%", maxWidth: "560px" }}
          >
            <h1 className="text-4xl md:text-[52px] font-extrabold tracking-tight" style={{ lineHeight: 1.15 }}>
              {t("hero.title1")}
              <span className="text-accent">{t("hero.highlight")}</span>
              {t("hero.title2")}
            </h1>
            <p className="text-lg opacity-90 leading-relaxed" style={{ maxWidth: "480px", fontSize: "18px" }}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/50766778280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta-gradient text-accent-foreground rounded-xl font-bold shadow-lg hover:scale-[1.03] hover:shadow-xl"
                style={{
                  height: "56px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                }}
              >
                <MessageCircle size={20} /> {t("hero.cta2")}
              </a>
            </div>
          </div>

          {/* Mascot — ~48%, right-aligned with margin */}
          <div
            className="relative flex justify-center md:justify-end items-center order-1 md:order-2"
            style={{ flex: "1 1 48%", paddingRight: "clamp(0px, 5%, 40px)" }}
          >
            <img
              src={heroImage}
              alt="Mascote LanguageNow - Escola internacional de idiomas no Panamá"
              className="object-contain w-[60%] md:w-full"
              style={{
                maxHeight: "min(85vh, 520px)",
                background: "transparent",
                imageRendering: "auto",
                filter: "drop-shadow(0 0 60px rgba(59,130,246,0.3)) drop-shadow(0 0 30px rgba(250,204,21,0.2))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
