import { Globe, Users, Target, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const stats = [
    { icon: Globe, value: "3", label: t("about.stat1") },
    { icon: Users, value: "2.000+", label: t("about.stat2") },
    { icon: Target, value: "95%", label: t("about.stat3") },
    { icon: Award, value: "10+", label: t("about.stat4") },
  ];

  return (
    <section id="sobre" className="py-20" ref={ref}>
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6">{t("about.title1")}<span className="text-primary">Language Now!</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t("about.p1")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10">
              <s.icon className="mx-auto mb-2 text-primary" size={28} />
              <div className="text-2xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
