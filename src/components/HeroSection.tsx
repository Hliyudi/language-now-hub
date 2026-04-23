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
        <div className="container grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
          <div
            className="text-primary-foreground animate-fade-in-up flex flex-col gap-5 md:gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-extrabold tracking-tight">
              {t("hero.title1")}
              <span className="text-accent">{t("hero.highlight")}</span>
              {t("hero.title2")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/50766778280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta-gradient text-accent-foreground px-8 rounded-xl font-bold text-base md:text-lg shadow-lg hover:scale-[1.03] hover:shadow-xl"
                style={{
                  height: "56px",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                }}
              >
                <MessageCircle size={20} /> {t("hero.cta2")}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={heroImage}
              alt="Alunos aprendendo idiomas online na escola internacional LanguageNow"
              width={1280}
              height={720}
              className="rounded-2xl shadow-2xl object-cover max-h-[420px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
