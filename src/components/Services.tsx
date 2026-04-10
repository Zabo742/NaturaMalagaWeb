import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceCapillary from "@/assets/service-capillary.jpg";
import serviceLaser from "@/assets/service-laser.jpg";
import headSpaDetail from "@/assets/headspa-detail.jpg";
import FadeInSection from "./FadeInSection";

const services = [
  {
    img: headSpaDetail,
    title: "Head Spa Premium",
    desc: "Un ritual japonés de 70 minutos que combina masaje craneal, agua templada y aromaterapia para una relajación profunda.",
    cta: "Reservar Head Spa",
  },
  {
    img: serviceCapillary,
    title: "Tratamientos capilares",
    desc: "Nutrición, reparación y brillo. Devuelve la vida a tu cabello con tratamientos personalizados de alta gama.",
    cta: "Descubrir tratamientos",
  },
  {
    img: serviceHair,
    title: "Peluquería",
    desc: "Corte, color y mechas con técnicas que respetan la salud de tu cabello. Belleza natural y sofisticada.",
    cta: "Pedir cita",
  },
  {
    img: serviceFacial,
    title: "Tratamientos faciales",
    desc: "Rituales de limpieza, hidratación y rejuvenecimiento que devuelven la luminosidad a tu rostro.",
    cta: "Ver tratamientos",
  },
  {
    img: serviceLaser,
    title: "Depilación láser",
    desc: "Tecnología de última generación para una piel suave y libre. Resultados duraderos, sesiones cómodas.",
    cta: "Más información",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-cream">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-olive text-center mb-4">
            Nuestros servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-4 leading-tight">
            Rituales de <span className="italic">belleza y bienestar</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16 leading-relaxed">
            Cada servicio es una experiencia diseñada para cuidar, transformar y hacer sentir.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="group bg-warm-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-olive/5 transition-all duration-500">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-charcoal mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <a
                    href="tel:+34952341014"
                    className="font-sans text-sm text-olive tracking-wider uppercase hover:text-olive-dark transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {s.cta}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
