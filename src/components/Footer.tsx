const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 px-5 pb-24 md:pb-12">
      <div className="container-narrow">
        <div className="text-center">
          <p className="font-display text-3xl text-warm-white italic mb-4">Natura</p>
          <p className="font-serif text-lg text-warm-white/60 mb-6">
            Tu refugio de bienestar en Málaga
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="#experiencia" className="font-sans text-xs tracking-widest uppercase text-warm-white/50 hover:text-warm-white/80 transition-colors">
              Experiencia
            </a>
            <a href="#head-spa" className="font-sans text-xs tracking-widest uppercase text-warm-white/50 hover:text-warm-white/80 transition-colors">
              Head Spa
            </a>
            <a href="#servicios" className="font-sans text-xs tracking-widest uppercase text-warm-white/50 hover:text-warm-white/80 transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="font-sans text-xs tracking-widest uppercase text-warm-white/50 hover:text-warm-white/80 transition-colors">
              Contacto
            </a>
          </div>
          <div className="border-t border-warm-white/10 pt-6">
            <p className="font-sans text-xs text-warm-white/30">
              © {new Date().getFullYear()} Salón de Belleza Natura. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
