import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const courseKeys = [
  { key: "ingles", flag: "🇺🇸", color: "from-blue-500 to-blue-700" },
  { key: "espanhol", flag: "🇪🇸", color: "from-red-500 to-orange-500" },
  { key: "frances", flag: "🇫🇷", color: "from-blue-600 to-indigo-600" },
  { key: "alemao", flag: "🇩🇪", color: "from-gray-700 to-gray-900" },
  { key: "italiano", flag: "🇮🇹", color: "from-green-500 to-green-700" },
];

const CoursesSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="cursos" className="py-20 bg-section-alt" ref={ref}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-4">{t("courses.title1")}<span className="text-primary">{t("courses.title2")}</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("courses.subtitle")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseKeys.map((c) => (
            <div key={c.key} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group">
              <div className={`bg-gradient-to-br ${c.color} p-6 text-center`}>
                <span className="text-5xl">{c.flag}</span>
                <h3 className="text-2xl font-bold mt-3 text-primary-foreground">{t(`course.${c.key}`)}</h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-sm text-muted-foreground">{t(`course.${c.key}.desc`)}</p>
                <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{t(`course.${c.key}.benefit`)}</span>
                <div>
                  <a href="#contato" className="inline-block mt-2 text-primary font-semibold text-sm hover:underline">{t("courses.cta")}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
