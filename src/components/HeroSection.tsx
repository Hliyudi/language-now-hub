import heroImage from "@/assets/hero-image.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => (
  <section id="inicio" className="relative pt-16 overflow-hidden">
    <div className="bg-hero-gradient">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        {/* Text */}
        <div className="text-primary-foreground space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Aprenda um novo idioma e <span className="text-accent">conecte-se</span> com o mundo!
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-lg">
            No Language Now!, você aprende de forma prática, dinâmica e eficiente, com foco na comunicação real.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="bg-cta-gradient text-accent-foreground px-7 py-3 rounded-lg font-bold text-base hover:scale-105 transition-transform shadow-lg">
              Agende sua aula gratuita
            </a>
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <MessageCircle size={18} /> Fale com um consultor
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <img
            src={heroImage}
            alt="Estudantes aprendendo idiomas em ambiente multicultural"
            width={1280}
            height={720}
            className="rounded-2xl shadow-2xl object-cover max-h-[420px] w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
