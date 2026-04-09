import { Globe, Users, Target, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const ref = useScrollAnimation();
  return (
  <section id="sobre" className="py-20" ref={ref}>
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl mb-6">Sobre o <span className="text-primary">Language Now!</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O Language Now! é um centro de idiomas que nasceu com o objetivo de transformar o aprendizado em uma experiência prática e eficiente. Aqui, você aprende a se comunicar de verdade, com aulas dinâmicas e foco em resultados reais.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Com uma equipe de professores qualificados e uma metodologia inovadora, proporcionamos a melhor experiência para quem deseja conquistar a fluência em um novo idioma.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: Globe, value: "5+", label: "Idiomas" },
          { icon: Users, value: "2.000+", label: "Alunos" },
          { icon: Target, value: "95%", label: "Satisfação" },
          { icon: Award, value: "10+", label: "Anos de experiência" },
        ].map((s) => (
          <div key={s.label} className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10">
            <s.icon className="mx-auto mb-2 text-primary" size={28} />
            <div className="text-2xl font-extrabold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
