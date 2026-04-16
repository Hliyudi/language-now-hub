import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";
import { GraduationCap, Star, ArrowRight, Baby, Footprints, PersonStanding, Clock, CheckCircle2, BookOpen, Target, TrendingUp } from "lucide-react";

type Tab = "english" | "mandarin" | "portuguese";
type SubTab = "adults" | "kids";

const CoursesSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("english");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("adults");

  const kidPrograms = [
    { key: "crawls", icon: Baby, age: "5–7", color: "from-sky-400 to-sky-600" },
    { key: "steps", icon: Footprints, age: "8–10", color: "from-emerald-400 to-emerald-600" },
    { key: "walks", icon: PersonStanding, age: "11–13", color: "from-amber-400 to-amber-600" },
    { key: "runs", icon: GraduationCap, age: "14–16", color: "from-rose-400 to-rose-600" },
  ];

  const tabs: { key: Tab; emoji: string; labelKey: string; comingSoon?: boolean }[] = [
    { key: "english", emoji: "🇺🇸", labelKey: "courses.tab.english" },
    { key: "mandarin", emoji: "🇨🇳", labelKey: "courses.tab.mandarin" },
    { key: "portuguese", emoji: "🇧🇷", labelKey: "courses.tab.portuguese", comingSoon: true },
  ];

  const handleTabClick = (tab: Tab) => {
    if (tab === "portuguese") return;
    setActiveTab(tab);
  };

  const whatsappPortuguese = `https://wa.me/50766778280?text=${encodeURIComponent(t("courses.pt.wa.message"))}`;

  return (
    <section id="cursos" className="py-20 bg-section-alt" ref={ref}>
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center mb-3">
          {t("courses.title1")}
          <span className="text-primary">{t("courses.title2")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("courses.subtitle")}
        </p>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <div key={tab.key} className="relative">
              {tab.comingSoon ? (
                <div
                  className="relative px-11 py-6 rounded-xl font-bold text-lg bg-card text-muted-foreground/40 border-2 border-dashed border-border cursor-not-allowed opacity-70 select-none"
                >
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                    <Clock size={10} />
                    {t("courses.tab.comingSoon")}
                  </span>
                  {tab.emoji} {t(tab.labelKey)}
                </div>
              ) : (
                <button
                  onClick={() => handleTabClick(tab.key)}
                  className={`px-11 py-6 rounded-xl font-bold text-lg transition-all ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]"
                      : "bg-card text-muted-foreground border-2 border-border hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  {tab.emoji} {t(tab.labelKey)}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* English Content */}
        {activeTab === "english" && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center gap-2">
              {(["adults", "kids"] as SubTab[]).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubTab(sub)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSubTab === sub
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {sub === "adults" ? t("courses.sub.adults") : t("courses.sub.kids")}
                </button>
              ))}
            </div>

            {activeSubTab === "adults" && (
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-center">
                  <span className="text-5xl">🇺🇸</span>
                  <h3 className="text-2xl font-bold mt-3 text-white">{t("eng.adults.title")}</h3>
                  <p className="text-blue-100 mt-2 text-sm max-w-lg mx-auto">{t("eng.adults.tagline")}</p>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{t("eng.adults.desc")}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <Star size={18} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-sm">{t(`eng.adults.feat${i}.title`)}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{t(`eng.adults.feat${i}.desc`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/30 rounded-xl p-5 border border-border">
                    <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                      <GraduationCap size={16} className="text-primary" />
                      {t("eng.adults.results.title")}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                          <span>{t(`eng.adults.result${i}`)}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                      {t("courses.cta.start")} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === "kids" && (
              <div className="space-y-6">
                <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto">{t("eng.kids.intro")}</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {kidPrograms.map((prog) => (
                    <div key={prog.key} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className={`bg-gradient-to-br ${prog.color} p-5 flex items-center gap-4`}>
                        <prog.icon size={28} className="text-white" />
                        <div>
                          <h4 className="font-bold text-white">{t(`eng.kids.${prog.key}.title`)}</h4>
                          <span className="text-white/80 text-xs">{prog.age} {t("eng.kids.years")}</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-3">
                        <p className="text-sm text-muted-foreground">{t(`eng.kids.${prog.key}.desc`)}</p>
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground flex items-start gap-2">
                            <BookOpen size={14} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                            <span>{t(`eng.kids.${prog.key}.detail1`)}</span>
                          </p>
                          <p className="text-xs text-muted-foreground flex items-start gap-2">
                            <Target size={14} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                            <span>{t(`eng.kids.${prog.key}.detail2`)}</span>
                          </p>
                          <p className="text-xs text-muted-foreground flex items-start gap-2">
                            <TrendingUp size={14} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                            <span>{t(`eng.kids.${prog.key}.detail3`)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center pt-2">
                  <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                    {t("courses.cta.info")} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mandarin Content */}
        {activeTab === "mandarin" && (
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 text-center">
                <span className="text-5xl">🇨🇳</span>
                <h3 className="text-2xl font-bold mt-3 text-white">{t("mand.adults.title")}</h3>
                <p className="text-red-100 mt-2 text-sm max-w-lg mx-auto">{t("mand.adults.tagline")}</p>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{t("mand.adults.desc")}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <Star size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">{t(`mand.adults.feat${i}.title`)}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{t(`mand.adults.feat${i}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-muted/30 rounded-xl p-5 border border-border">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <GraduationCap size={16} className="text-primary" />
                    {t("mand.adults.results.title")}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                        <span>{t(`mand.adults.result${i}`)}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                    {t("courses.cta.start")} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
