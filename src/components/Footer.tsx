import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navKeys = ["nav.inicio", "nav.beneficios", "nav.sobre", "nav.cursos", "nav.metodologia", "nav.depoimentos", "nav.contato"];
  const navHrefs = ["inicio", "beneficios", "sobre", "cursos", "metodologia", "depoimentos", "contato"];

  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-heading font-extrabold text-background mb-3">Language <span className="text-accent">Now!</span></div>
          <p className="text-sm opacity-70">{t("footer.desc")}</p>
        </div>
        <div>
          <h4 className="font-bold text-background mb-3">{t("footer.nav")}</h4>
          <div className="space-y-2 text-sm">
            {navKeys.map((key, i) => (
              <a key={key} href={`#${navHrefs[i]}`} className="block hover:text-accent transition-colors">{t(key)}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-background mb-3">{t("footer.social")}</h4>
          <div className="space-y-2 text-sm">
            <a href="https://instagram.com/languagenowpa" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Instagram: @languagenowpa</a>
            <a href="https://tiktok.com/@languagenowpa" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">TikTok: @languagenowpa</a>
            <a href="https://facebook.com/languagenowpa" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Facebook: /languagenowpa</a>
            <a href="https://linkedin.com/company/languagenowpa" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">LinkedIn: /languagenowpa</a>
            <a href="https://wa.me/50766778280" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp: +507 6677-8280</a>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-background/10 text-center text-sm opacity-60">
        © {new Date().getFullYear()} LanguageNow! — {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
