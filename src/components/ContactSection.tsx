import { useState } from "react";
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", idioma: "Inglês" });
  const [loading, setLoading] = useState(false);
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("contact.form.success"));
      setForm({ name: "", email: "", whatsapp: "", idioma: "Inglês" });
    }, 1200);
  };

  return (
    <section id="contato" className="py-20" ref={ref}>
      <div className="container grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl">{t("contact.title1")}<span className="text-primary">{t("contact.title2")}</span></h2>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
          <div className="space-y-4">
            {[
              { icon: Phone, text: "+507 6677-8280", href: "tel:+50766778280" },
              { icon: Mail, text: "sales@languagenowpa.com", href: "mailto:sales@languagenowpa.com" },
              { icon: Send, text: "WhatsApp: +507 6677-8280", href: "https://wa.me/50766778280" },
              { icon: Clock, text: "08:00 – 17:00 (Hora do Panamá)", href: "#" },
            ].map((c) => (
              <a key={c.text} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <c.icon size={20} className="text-primary" /> {c.text}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-md border border-border space-y-5">
          <h3 className="text-xl font-bold">{t("contact.form.title")}</h3>
          {[
            { name: "name" as const, label: t("contact.form.name"), type: "text", placeholder: t("contact.form.name.placeholder") },
            { name: "email" as const, label: t("contact.form.email"), type: "email", placeholder: t("contact.form.email.placeholder") },
            { name: "whatsapp" as const, label: t("contact.form.whatsapp"), type: "tel", placeholder: t("contact.form.whatsapp.placeholder") },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-1">{f.label}</label>
              <input required type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none transition" />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1">{t("contact.form.idioma")}</label>
            <select value={form.idioma} onChange={(e) => setForm((p) => ({ ...p, idioma: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
              {["Inglês", "Mandarim"].map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
            {loading ? t("contact.form.sending") : t("contact.form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
