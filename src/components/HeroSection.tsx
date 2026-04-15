import heroImage from "@/assets/hero-image.jpg";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div className="bg-hero-gradient">
        <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <div className="text-primary-foreground space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t("hero.title1")}<span className="text-accent">{t("hero.highlight")}</span>{t("hero.title2")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/50766778280" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cta-gradient text-accent-foreground px-7 py-3 rounded-lg font-bold text-base hover:scale-105 transition-transform shadow-lg">
                <MessageCircle size={18} /> {t("hero.cta2")}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src={heroImage} alt="Alunos aprendendo idiomas online na escola internacional LanguageNow" width={1280} height={720} className="rounded-2xl shadow-2xl object-cover max-h-[420px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
