import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const navKeys = ["nav.inicio", "nav.beneficios", "nav.sobre", "nav.cursos", "nav.metodologia", "nav.depoimentos", "nav.contato"];
  const navHrefs = ["inicio", "beneficios", "sobre", "cursos", "metodologia", "depoimentos", "contato"];

  return (
    <>
      <footer className="bg-foreground text-background/80 py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="LanguageNow!" className="h-10 md:h-12 w-auto mb-3" />
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
              <a href="https://www.facebook.com/profile.php?id=61560973617683" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Facebook: @languagenowpa</a>
              <a href="https://tiktok.com/@languagenowpa" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">TikTok: @languagenowpa</a>
              
              <a href="https://www.linkedin.com/company/languagenow-pa/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">LinkedIn: languagenow-pa</a>
              <a href="https://wa.me/50766778280" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp: +507 6677-8280</a>
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-6 border-t border-background/10 text-center text-sm opacity-60 space-y-2">
          <div>© {new Date().getFullYear()} LanguageNow! — {t("footer.rights")}</div>
          <div className="flex justify-center gap-4">
            <button onClick={() => setPrivacyOpen(true)} className="hover:text-accent transition-colors underline underline-offset-2">
              {t("footer.privacy")}
            </button>
            <span>·</span>
            <button onClick={() => setTermsOpen(true)} className="hover:text-accent transition-colors underline underline-offset-2">
              {t("footer.terms")}
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl">{t("footer.privacy")}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p><strong>{t("privacy.intro.title")}</strong></p>
              <p>{t("privacy.intro.text")}</p>

              <p><strong>{t("privacy.collect.title")}</strong></p>
              <p>{t("privacy.collect.text")}</p>

              <p><strong>{t("privacy.use.title")}</strong></p>
              <p>{t("privacy.use.text")}</p>

              <p><strong>{t("privacy.share.title")}</strong></p>
              <p>{t("privacy.share.text")}</p>

              <p><strong>{t("privacy.cookies.title")}</strong></p>
              <p>{t("privacy.cookies.text")}</p>

              <p><strong>{t("privacy.rights.title")}</strong></p>
              <p>{t("privacy.rights.text")}</p>

              <p><strong>{t("privacy.contact.title")}</strong></p>
              <p>{t("privacy.contact.text")}</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Terms of Use Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl">{t("footer.terms")}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p><strong>{t("terms.intro.title")}</strong></p>
              <p>{t("terms.intro.text")}</p>

              <p><strong>{t("terms.services.title")}</strong></p>
              <p>{t("terms.services.text")}</p>

              <p><strong>{t("terms.obligations.title")}</strong></p>
              <p>{t("terms.obligations.text")}</p>

              <p><strong>{t("terms.ip.title")}</strong></p>
              <p>{t("terms.ip.text")}</p>

              <p><strong>{t("terms.liability.title")}</strong></p>
              <p>{t("terms.liability.text")}</p>

              <p><strong>{t("terms.changes.title")}</strong></p>
              <p>{t("terms.changes.text")}</p>

              <p><strong>{t("terms.contact.title")}</strong></p>
              <p>{t("terms.contact.text")}</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
