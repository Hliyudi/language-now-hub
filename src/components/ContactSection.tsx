import { MessageCircle, Clock, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const whatsappUrl =
    "https://wa.me/50766778280?text=" +
    encodeURIComponent(t("contact.wa.message"));

  const trustBadges = [
    { icon: Zap, label: t("contact.badge.fast") },
    { icon: MessageCircle, label: t("contact.badge.personal") },
    { icon: Shield, label: t("contact.badge.nocommit") },
  ];

  return (
    <section id="contato" className="py-20" ref={ref}>
      <div className="container max-w-4xl">
        <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-10 md:p-16 text-center shadow-xl overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t("contact.headline1")}
                <span className="text-primary">{t("contact.headline2")}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {t("contact.subheadline")}
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-success text-success-foreground px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
                {t("contact.cta")}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon size={16} className="text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-8 pt-4 text-sm text-muted-foreground border-t border-border mt-8">
              <a
                href="mailto:sales@languagenowpa.com"
                className="flex items-center gap-2 pt-6 hover:text-primary transition-colors"
              >
                sales@languagenowpa.com
              </a>
              <span className="flex items-center gap-2 pt-6">
                <Clock size={14} className="text-primary" />
                {t("contact.hours")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
