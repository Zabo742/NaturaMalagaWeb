import { useState } from "react";
import { X } from "lucide-react";
import FadeInSection from "./FadeInSection";

import galleryReception from "@/assets/gallery-reception.png";
import galleryDecor from "@/assets/gallery-decor.png";
import galleryStation from "@/assets/gallery-station.png";
import galleryTreatment from "@/assets/gallery-treatment.png";
import galleryHeadspa from "@/assets/gallery-headspa.png";
import galleryResult1 from "@/assets/gallery-result1.png";
import galleryResult2 from "@/assets/gallery-result2.png";
import galleryDetail from "@/assets/gallery-detail.jpg";
import spaInterior from "@/assets/spa-interior.jpg";

const images = [
  { src: galleryReception, alt: "Recepción Natura" },
  { src: galleryDecor, alt: "Decoración zen" },
  { src: galleryStation, alt: "Estación de peluquería" },
  { src: galleryTreatment, alt: "Sala de tratamientos" },
  { src: galleryHeadspa, alt: "Equipo Head Spa" },
  { src: spaInterior, alt: "Interior spa" },
  { src: galleryResult1, alt: "Resultado mechas rubias" },
  { src: galleryResult2, alt: "Resultado color cobrizo" },
  { src: galleryDetail, alt: "Detalle zen" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding bg-cream">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-olive text-center mb-4">
            Galería
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-16 leading-tight">
            Un espacio pensado para <span className="italic">ti</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <button
                onClick={() => setLightbox(i)}
                className="block w-full overflow-hidden rounded-xl group cursor-pointer aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </button>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white/70 hover:text-warm-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
