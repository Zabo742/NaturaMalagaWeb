import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const reviews = [
  {
    text: "Experiencia increíble. Salí en paz total, con el cabello radiante y una sensación de bienestar que duró días. El Head Spa es adictivo.",
    name: "María G.",
    rating: 5,
  },
  {
    text: "El mejor tratamiento capilar que he probado. El equipo es excepcional, el ambiente te transporta a otro mundo. Volveré siempre.",
    name: "Ana R.",
    rating: 5,
  },
  {
    text: "Ambiente espectacular y trato impecable. Nata y su equipo hacen que cada visita sea un regalo para los sentidos. 100% recomendable.",
    name: "Laura M.",
    rating: 5,
  },
  {
    text: "Fui por curiosidad al Head Spa y ahora es mi ritual mensual. La relajación que sientes es única. Un oasis en Málaga.",
    name: "Carmen P.",
    rating: 5,
  },
  {
    text: "El color que me hicieron es perfecto y el trato personal inmejorable. Se nota que aman lo que hacen.",
    name: "Sofía L.",
    rating: 5,
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((p) => (p + 1) % reviews.length);

  return (
    <section className="section-padding bg-olive-dark">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-light text-center mb-4">
            Opiniones
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-warm-white text-center mb-4 leading-tight">
            Lo que dicen <span className="italic">de nosotras</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-gold text-gold" />
            ))}
            <span className="font-sans text-sm text-warm-white/70 ml-2">4.8 / 5</span>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="text-center min-h-[180px] flex flex-col items-center justify-center">
              <p className="font-serif text-xl md:text-2xl text-warm-white/90 leading-relaxed mb-6 italic transition-opacity duration-500">
                "{reviews[current].text}"
              </p>
              <p className="font-sans text-sm tracking-widest uppercase text-gold-light">
                {reviews[current].name}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-warm-white hover:border-warm-white/50 transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-gold w-6" : "bg-warm-white/30"
                    }`}
                    aria-label={`Reseña ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-warm-white hover:border-warm-white/50 transition-all duration-300"
                aria-label="Siguiente"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Reviews;
