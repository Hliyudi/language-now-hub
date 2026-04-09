import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  { name: "Mariana Costa", role: "Aluna de Inglês", text: "Em poucos meses já conseguia manter conversas em inglês com confiança. A metodologia do Language Now! realmente funciona!" },
  { name: "Rafael Oliveira", role: "Aluno de Espanhol", text: "Os professores são incríveis e as aulas são muito dinâmicas. Me sinto motivado a cada nova aula." },
  { name: "Juliana Santos", role: "Aluna de Francês", text: "O Language Now! transformou meu aprendizado. Hoje leio e me comunico em francês com naturalidade!" },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();
  return (
  <section id="depoimentos" className="py-20 bg-section-alt" ref={ref}>
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center mb-4">O que nossos <span className="text-primary">alunos</span> dizem</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Histórias reais de quem já transformou sua vida com um novo idioma.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TestimonialsSection;
