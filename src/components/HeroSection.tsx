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
        <div className="container grid md:grid-cols-2 gap-10 items-center py-20 md:py-28" style={{ gridTemplateColumns: undefined }}>
          <div
            className="text-primary-foreground animate-fade-in-up flex flex-col gap-5 md:gap-6"
            style={{ maxWidth: "560px" }}
          >
            <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-extrabold tracking-tight" style={{ lineHeight: 1.15 }}>
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
          <div className="relative flex justify-center items-center">
            <img
              src={heroImage}
              alt="Mascote LanguageNow - Escola internacional de idiomas no Panamá"
              className="object-contain"
              style={{
                maxHeight: "420px",
                width: "auto",
                background: "transparent",
                imageRendering: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
