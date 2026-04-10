import headSpaImg from "@/assets/headspa-detail.jpg";
import FadeInSection from "./FadeInSection";

const steps = [
  { num: "01", title: "Diagnóstico capilar", desc: "Análisis personalizado de tu cuero cabelludo" },
  { num: "02", title: "Limpieza profunda", desc: "Exfoliación y purificación con productos naturales" },
  { num: "03", title: "Masaje craneal", desc: "Técnicas japonesas de presión y relajación" },
  { num: "04", title: "Tratamiento nutritivo", desc: "Hidratación profunda con aceites esenciales" },
  { num: "05", title: "Ritual de agua", desc: "Flujo de agua templada para una relajación absoluta" },
];

const HeadSpa = () => {
  return (
    <section id="head-spa" className="section-padding bg-warm-white">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold text-center mb-4">
            ★ Servicio estrella
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-4 leading-tight">
            Head Spa <span className="italic text-olive">Premium</span>
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            70 minutos de pura desconexión. Un ritual japonés que transforma tu cabello mientras
            tu mente encuentra la calma absoluta.
          </p>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={headSpaImg}
                alt="Tratamiento Head Spa Premium"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-8">
                <p className="font-display text-2xl text-warm-white italic">
                  "Siente el agua, libera la mente"
                </p>
              </div>
            </div>
          </FadeInSection>

          <div>
            <FadeInSection>
              <h3 className="font-display text-2xl text-charcoal mb-8">
                El ritual, paso a paso
              </h3>
            </FadeInSection>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="flex items-start gap-5 group">
                    <span className="font-serif text-3xl text-gold/60 group-hover:text-gold transition-colors duration-300 shrink-0 w-10">
                      {step.num}
                    </span>
                    <div className="border-l border-olive/20 pl-5 group-hover:border-olive/40 transition-colors duration-300">
                      <h4 className="font-display text-lg text-charcoal mb-1">{step.title}</h4>
                      <p className="font-sans text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={600}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+34952341014"
                  className="bg-olive hover:bg-olive-dark text-primary-foreground font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 text-center"
                >
                  Quiero vivir esta experiencia
                </a>
              </div>
            </FadeInSection>

            <FadeInSection delay={700}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Relajación profunda",
                  "Cuero cabelludo sano",
                  "Cabello revitalizado",
                  "Estrés reducido",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                    <span className="font-sans text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSpa;
