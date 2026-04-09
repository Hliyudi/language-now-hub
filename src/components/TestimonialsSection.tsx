import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const testimonials = [1, 2, 3].map((i) => ({
    name: t(`testimonial.${i}.name`),
    role: t(`testimonial.${i}.role`),
    text: t(`testimonial.${i}.text`),
  }));

  return (
    <section id="depoimentos" className="py-20 bg-section-alt" ref={ref}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-4">{t("testimonials.title1")}<span className="text-primary">{t("testimonials.highlight")}</span>{t("testimonials.title2")}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((tm) => (
            <div key={tm.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{tm.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {tm.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{tm.name}</div>
                  <div className="text-xs text-muted-foreground">{tm.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
