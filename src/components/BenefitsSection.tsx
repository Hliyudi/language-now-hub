import { MessageSquare, Lightbulb, GraduationCap, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [MessageSquare, Lightbulb, GraduationCap, Zap];

const BenefitsSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const benefits = [1, 2, 3, 4].map((i) => ({
    icon: icons[i - 1],
    title: t(`benefits.${i}.title`),
    desc: t(`benefits.${i}.desc`),
  }));

  return (
    <section id="beneficios" className="py-20 bg-section-alt" ref={ref}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-4">{t("benefits.title1")}<span className="text-primary">Language Now!</span>{t("benefits.title2")}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("benefits.subtitle")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <b.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
