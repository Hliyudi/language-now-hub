import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const CtaSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-hero-gradient text-primary-foreground" ref={ref}>
      <div className="container text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">{t("cta.title1")}<span className="text-accent">{t("cta.highlight")}</span>{t("cta.title2")}</h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto">{t("cta.subtitle")}</p>
        <a href="#contato" className="inline-block bg-cta-gradient text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg">
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
