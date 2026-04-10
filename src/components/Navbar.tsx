import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#head-spa", label: "Head Spa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-5">
        <a href="#" className="font-display text-2xl md:text-3xl tracking-wide text-charcoal">
          <span className="italic">Natura</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-widest uppercase text-charcoal/70 hover:text-olive transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+34952341014"
            className="inline-flex items-center gap-2 bg-olive text-primary-foreground font-sans text-sm tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-olive-dark transition-colors duration-300"
          >
            <Phone size={14} />
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-charcoal p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-border animate-fade-up">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-charcoal/70 hover:text-olive transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+34952341014"
              className="inline-flex items-center gap-2 bg-olive text-primary-foreground font-sans text-sm tracking-wider uppercase px-6 py-3 rounded-full"
            >
              <Phone size={14} />
              Reservar cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
