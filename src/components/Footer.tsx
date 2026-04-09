const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="container grid md:grid-cols-3 gap-8">
      <div>
        <div className="text-xl font-heading font-extrabold text-background mb-3">Language <span className="text-accent">Now!</span></div>
        <p className="text-sm opacity-70">Transformando o aprendizado de idiomas em uma experiência prática e eficiente.</p>
      </div>
      <div>
        <h4 className="font-bold text-background mb-3">Navegação</h4>
        <div className="space-y-2 text-sm">
          {["Início", "Benefícios", "Sobre", "Cursos", "Metodologia", "Depoimentos", "Contato"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="block hover:text-accent transition-colors">{l}</a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-background mb-3">Redes Sociais</h4>
        <div className="space-y-2 text-sm">
          <a href="https://instagram.com/languagenow" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Instagram: @languagenow</a>
          <a href="https://tiktok.com/@languagenow" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">TikTok: @languagenow</a>
          <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp: (11) 98765-4321</a>
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Language Now! — Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
