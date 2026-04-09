import { MessagesSquare, Sparkles, Monitor, UserCheck } from "lucide-react";

const methods = [
  { icon: MessagesSquare, title: "Foco em conversação real", desc: "Você pratica diálogos reais desde o primeiro dia." },
  { icon: Sparkles, title: "Aulas interativas", desc: "Dinâmicas, jogos e simulações para aprender com diversão." },
  { icon: Monitor, title: "Uso de tecnologia", desc: "Plataformas digitais e recursos modernos de apoio." },
  { icon: UserCheck, title: "Ensino personalizado", desc: "Ritmo e conteúdo adaptados às suas necessidades." },
];

const MethodologySection = () => (
  <section id="metodologia" className="py-20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center mb-4">Nossa <span className="text-primary">Metodologia</span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Uma abordagem moderna que coloca você no centro do aprendizado.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {methods.map((m, i) => (
          <div key={m.title} className="text-center space-y-4">
            <div className="relative mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <m.icon className="text-primary" size={36} />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
            </div>
            <h3 className="font-bold text-lg">{m.title}</h3>
            <p className="text-sm text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;
