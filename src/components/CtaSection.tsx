import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CtaSection = () => {
  const ref = useScrollAnimation();
  return (
  <section className="py-20 bg-hero-gradient text-primary-foreground" ref={ref}>
    <div className="container text-center space-y-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl">Pronto para aprender um <span className="text-accent">novo idioma</span>?</h2>
      <p className="text-lg opacity-90 max-w-xl mx-auto">Dê o primeiro passo rumo à fluência. Agende sua aula gratuita e descubra como o Language Now! pode transformar seu aprendizado.</p>
      <a href="#contato" className="inline-block bg-cta-gradient text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg">
        Agendar aula gratuita
      </a>
    </div>
  </section>
  );
};

export default CtaSection;
