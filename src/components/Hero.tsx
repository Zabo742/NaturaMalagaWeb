import heroImg from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Experiencia Head Spa en Natura Málaga"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-warm-white/80 mb-6 animate-fade-up">
          Salón de belleza &amp; bienestar premium · Málaga
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight mb-6 animate-fade-up-delay-1">
          Vive una experiencia{" "}
          <span className="italic text-gold-light">sensorial única</span>
        </h1>
        <p className="font-serif text-lg md:text-2xl text-warm-white/85 mb-10 animate-fade-up-delay-2 max-w-2xl mx-auto leading-relaxed">
          Head Spa, belleza y bienestar en un solo ritual
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <a
            href="tel:+34952341014"
            className="bg-olive hover:bg-olive-dark text-primary-foreground font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-olive/30"
          >
            Reservar cita ahora
          </a>
          <a
            href="#experiencia"
            className="border border-warm-white/40 text-warm-white font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-warm-white/10 transition-all duration-300"
          >
            Descubrir experiencia
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-warm-white/50" />
      </div>
    </section>
  );
};

export default Hero;
