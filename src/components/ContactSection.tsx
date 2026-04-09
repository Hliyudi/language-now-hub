import { useState } from "react";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", idioma: "Inglês" });
  const [loading, setLoading] = useState(false);
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Inscrição enviada com sucesso! Entraremos em contato em breve.");
      setForm({ name: "", email: "", whatsapp: "", idioma: "Inglês" });
    }, 1200);
  };

  return (
    <section id="contato" className="py-20" ref={ref}>
      <div className="container grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl">Entre em <span className="text-primary">contato</span></h2>
          <p className="text-muted-foreground">Fale conosco e agende sua aula experimental gratuita.</p>
          <div className="space-y-4">
            {[
              { icon: Phone, text: "(11) 98765-4321", href: "tel:+5511987654321" },
              { icon: Mail, text: "contato@languagenow.com", href: "mailto:contato@languagenow.com" },
              { icon: Send, text: "WhatsApp: (11) 98765-4321", href: "https://wa.me/5511987654321" },
              { icon: MapPin, text: "@languagenow (Instagram & TikTok)", href: "https://instagram.com/languagenow" },
            ].map((c) => (
              <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <c.icon size={20} className="text-primary" /> {c.text}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-md border border-border space-y-5">
          <h3 className="text-xl font-bold">Quero minha aula gratuita</h3>
          {[
            { name: "name" as const, label: "Nome", type: "text", placeholder: "Seu nome completo" },
            { name: "email" as const, label: "Email", type: "email", placeholder: "seu@email.com" },
            { name: "whatsapp" as const, label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-1">{f.label}</label>
              <input
                required
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none transition"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1">Idioma de interesse</label>
            <select
              value={form.idioma}
              onChange={(e) => setForm((p) => ({ ...p, idioma: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition"
            >
              {["Inglês", "Espanhol", "Francês", "Alemão", "Italiano"].map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Quero minha aula gratuita"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
