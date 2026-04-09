import { MessageSquare, Lightbulb, GraduationCap, Zap } from "lucide-react";

const benefits = [
  { icon: MessageSquare, title: "Fale desde as primeiras aulas", desc: "Prática de conversação real desde o primeiro dia de curso." },
  { icon: Lightbulb, title: "Metodologia prática e moderna", desc: "Abordagem inovadora focada na comunicação do dia a dia." },
  { icon: GraduationCap, title: "Professores qualificados", desc: "Equipe experiente com vivência internacional." },
  { icon: Zap, title: "Aprendizado rápido e eficiente", desc: "Resultados visíveis em menos tempo." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20 bg-section-alt">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center mb-4">Por que escolher o <span className="text-primary">Language Now!</span>?</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Descubra as vantagens que fazem do Language Now! a escolha certa para o seu aprendizado.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <b.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
