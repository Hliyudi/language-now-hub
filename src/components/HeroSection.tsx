import heroImage from "@/assets/mascot-hero.webp";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div
        className="relative"
        style={{
          background: "linear-gradient(135deg, #0F3D91 0%, #1a4fba 30%, #2563EB 55%, #60A5FA 100%)",
        }}
      >
        {/* Noise/grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.03,
            mixBlendMode: "overlay",
          }}
        />

        {/* Top-right directional light */}
        <div
          className="absolute pointer-events-none z-[1]"
          style={{
            width: "70%",
            height: "70%",
            top: "-15%",
            right: "-10%",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Subtle curved lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          style={{ opacity: 0.04 }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
        >
          <path d="M0 400 Q300 350 600 380 T1200 340" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0 450 Q400 400 700 430 T1200 390" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 500 Q350 460 650 480 T1200 450" fill="none" stroke="white" strokeWidth="0.8" />
        </svg>

        <div className="container relative z-[2]">
          <div className="flex flex-col md:flex-row items-center py-12 md:py-20 lg:py-24 gap-8 md:gap-6 lg:gap-10">
            {/* Text block */}
            <div
              className="text-primary-foreground animate-fade-in-up flex flex-col gap-6 md:gap-8 order-2 md:order-1 text-center md:text-left w-full md:w-[50%] lg:w-[45%]"
            >
              <h1
                className="text-4xl sm:text-5xl md:text-[52px] lg:text-[62px] font-extrabold tracking-tight"
                style={{ lineHeight: 1.08 }}
              >
                {t("hero.title1")}
                <span className="text-accent">{t("hero.highlight")}</span>
                {t("hero.title2")}
              </h1>
              <p
                className="opacity-80 leading-relaxed text-base md:text-[17px] lg:text-[18px] max-w-[420px] mx-auto md:mx-0"
              >
                {t("hero.subtitle")}
              </p>
              <div className="pt-2 md:pt-4">
                <a
                  href="https://wa.me/50766778280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-bold shadow-lg hover:scale-[1.03] hover:shadow-2xl w-full sm:w-auto justify-center"
                  style={{
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "16px",
                    borderRadius: "14px",
                    transition: "all 0.2s ease",
                    background: "hsl(45 97% 54%)",
                    color: "#0F3D91",
                    boxShadow: "0 4px 20px rgba(234,179,8,0.35)",
                  }}
                >
                  <MessageCircle size={20} /> {t("hero.cta2")}
                </a>
              </div>
            </div>

            {/* Mascot */}
            <div className="relative flex justify-center items-center order-1 md:order-2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[55%]">
              {/* Primary warm glow */}
              <div
                className="absolute pointer-events-none hidden md:block"
                style={{
                  width: "min(550px, 100%)",
                  height: "min(550px, 100%)",
                  top: "50%",
                  left: "55%",
                  transform: "translate(-50%, -45%)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,210,120,0.18) 0%, rgba(255,210,120,0.08) 35%, rgba(255,210,120,0.02) 60%, transparent 80%)",
                  filter: "blur(100px)",
                }}
              />

              {/* Secondary cool glow */}
              <div
                className="absolute pointer-events-none hidden md:block"
                style={{
                  width: "min(700px, 120%)",
                  height: "min(700px, 120%)",
                  top: "50%",
                  left: "52%",
                  transform: "translate(-50%, -48%)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(180,210,255,0.10) 0%, rgba(96,165,250,0.04) 40%, transparent 75%)",
                  filter: "blur(140px)",
                }}
              />

              {/* Floor reflection */}
              <div
                className="absolute pointer-events-none hidden md:block"
                style={{
                  width: "60%",
                  height: "18%",
                  bottom: "-2%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse, rgba(96,165,250,0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Diffuse shadow */}
              <div
                className="absolute pointer-events-none hidden md:block"
                style={{
                  width: "50%",
                  height: "8%",
                  bottom: "-4%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.18)",
                  filter: "blur(50px)",
                }}
              />

              <img
                fetchPriority="high"
                src={heroImage}
                alt="Mascote LanguageNow - Escola internacional de idiomas no Panamá"
                className="relative z-10 object-contain w-full md:w-[90%] lg:w-full lg:scale-[1.2]"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  filter: "contrast(1.05) drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
                }}
              />

              {/* Subtle highlight glow — no backdrop-filter to keep mascot/balloons sharp */}
              <div
                className="absolute pointer-events-none z-[5] hidden md:block"
                style={{
                  width: "40%",
                  height: "25%",
                  top: "5%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
