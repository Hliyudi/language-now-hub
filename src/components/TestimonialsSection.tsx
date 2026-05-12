import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const TOTAL = 5;
const ROTATE_MS = 5000;

const TestimonialsSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const testimonials = [1, 2, 3, 4, 5].map((i) => ({
    name: t(`testimonial.${i}.name`),
    country: t(`testimonial.${i}.country`),
    text: t(`testimonial.${i}.text`),
  }));

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase();

  const avatarColors = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-violet-500 to-violet-600",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setStartIndex((i) => (i + 1) % TOTAL);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const visibleDesktop = [0, 1, 2].map((o) => (startIndex + o) % TOTAL);
  const visibleMobile = [startIndex];

  const renderCard = (idx: number) => {
    const tm = testimonials[idx];
    return (
      <div
        key={idx}
        className="bg-card rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-md transition-shadow duration-300 flex flex-col animate-fade-in"
      >
        <div className="flex gap-0.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground mb-7 leading-relaxed text-[15px] flex-1">
          "{tm.text}"
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-border/40">
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[idx]} flex items-center justify-center text-white font-semibold text-sm shadow-sm`}
          >
            {getInitials(tm.name)}
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{tm.name}</div>
            <div className="text-xs text-muted-foreground">{tm.country}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="depoimentos" className="py-24 bg-section-alt" ref={ref}>
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center mb-3 font-semibold tracking-tight">
          {t("testimonials.title1")}
          <span className="text-primary">{t("testimonials.highlight")}</span>
          {t("testimonials.title2")}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto text-base">
          {t("testimonials.subtitle")}
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile: 1 at a time */}
          <div key={`m-${startIndex}`} className="grid md:hidden gap-8">
            {visibleMobile.map(renderCard)}
          </div>
          {/* Desktop: 3 at a time */}
          <div key={`d-${startIndex}`} className="hidden md:grid md:grid-cols-3 gap-8">
            {visibleDesktop.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
