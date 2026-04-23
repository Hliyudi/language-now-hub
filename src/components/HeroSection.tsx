import heroImage from "@/assets/hero-mascot.png";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div
        className="relative"
        style={{
          background: "linear-gradient(135deg, hsl(217 91% 30%) 0%, hsl(217 91% 45%) 50%, hsl(217 80% 52%) 100%)",
        }}
      >
        <div
          className="container grid grid-cols-1 md:grid-cols-2 items-center py-16 md:py-24 gap-8 md:gap-16"
        >
          {/* Text block */}
          <div
            className="text-primary-foreground animate-fade-in-up flex flex-col gap-6 order-2 md:order-1"
            style={{ maxWidth: "540px" }}
          >
            <h1
              className="text-4xl md:text-[56px] font-extrabold tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              {t("hero.title1")}
              <span className="text-accent">{t("hero.highlight")}</span>
              {t("hero.title2")}
            </h1>
            <p
              className="opacity-80 leading-relaxed"
              style={{ maxWidth: "460px", fontSize: "17px" }}
            >
              {t("hero.subtitle")}
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/50766778280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold shadow-lg hover:scale-[1.03] hover:shadow-xl"
                style={{
                  height: "54px",
                  padding: "0 32px",
                  fontSize: "15px",
                  borderRadius: "14px",
                  transition: "all 0.2s ease",
                  background: "hsl(45 97% 54%)",
                  color: "hsl(217 91% 20%)",
                }}
              >
                <MessageCircle size={18} /> {t("hero.cta2")}
              </a>
            </div>
          </div>

          {/* Mascot with glow + shadow */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <img
              src={heroImage}
              alt="Mascote LanguageNow - Escola internacional de idiomas no Panamá"
              className="object-contain w-[70%] md:w-full"
              style={{
                maxHeight: "520px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
