import { MessagesSquare, Sparkles, Monitor, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [MessagesSquare, Sparkles, Monitor, UserCheck];

const MethodologySection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const methods = [1, 2, 3, 4].map((i) => ({
    icon: icons[i - 1],
    title: t(`method.${i}.title`),
    desc: t(`method.${i}.desc`),
  }));

  return (
    <section id="metodologia" className="py-20" ref={ref}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-4">{t("method.title1")}<span className="text-primary">{t("method.title2")}</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("method.subtitle")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((m, i) => (
            <div key={m.title} className="text-center space-y-4">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <m.icon className="text-primary" size={36} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
