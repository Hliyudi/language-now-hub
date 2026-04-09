const courses = [
  { lang: "Inglês", flag: "🇺🇸", desc: "O idioma mais falado no mundo dos negócios e da tecnologia.", benefit: "Carreira & Tecnologia", color: "from-blue-500 to-blue-700" },
  { lang: "Espanhol", flag: "🇪🇸", desc: "Conecte-se com mais de 500 milhões de falantes nativos.", benefit: "Cultura & Viagem", color: "from-red-500 to-orange-500" },
  { lang: "Francês", flag: "🇫🇷", desc: "A língua da diplomacia, gastronomia e moda.", benefit: "Diplomacia & Arte", color: "from-blue-600 to-indigo-600" },
  { lang: "Alemão", flag: "🇩🇪", desc: "Abra portas para oportunidades na Europa.", benefit: "Engenharia & Negócios", color: "from-gray-700 to-gray-900" },
  { lang: "Italiano", flag: "🇮🇹", desc: "Descubra a beleza da cultura italiana.", benefit: "Cultura & Gastronomia", color: "from-green-500 to-green-700" },
];

const CoursesSection = () => (
  <section id="cursos" className="py-20 bg-section-alt">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center mb-4">Nossos <span className="text-primary">Cursos</span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Escolha o idioma ideal para os seus objetivos pessoais e profissionais.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c.lang} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group">
            <div className={`bg-gradient-to-br ${c.color} p-6 text-center`}>
              <span className="text-5xl">{c.flag}</span>
              <h3 className="text-2xl font-bold mt-3 text-primary-foreground">{c.lang}</h3>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-sm text-muted-foreground">{c.desc}</p>
              <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{c.benefit}</span>
              <div>
                <a href="#contato" className="inline-block mt-2 text-primary font-semibold text-sm hover:underline">Quero saber mais →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
