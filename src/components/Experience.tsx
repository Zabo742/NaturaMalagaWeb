import { Droplets, Brain, Heart } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  {
    icon: <Droplets className="text-olive" size={28} />,
    title: "Desconexión total",
    desc: "Un paréntesis de calma donde el mundo exterior se desvanece y solo queda tu bienestar.",
  },
  {
    icon: <Brain className="text-olive" size={28} />,
    title: "Paz mental",
    desc: "Rituales diseñados para silenciar el ruido mental y devolverte a tu centro de equilibrio.",
  },
  {
    icon: <Heart className="text-olive" size={28} />,
    title: "Cuidado integral",
    desc: "Cada tratamiento combina belleza exterior con bienestar interior en una sola experiencia.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="section-padding bg-cream">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-olive text-center mb-4">
            La experiencia Natura
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-6 leading-tight">
            Más que un salón,{" "}
            <span className="italic">un refugio</span>
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            En Natura creemos que la belleza nace del bienestar. Cada visita es un ritual sensorial
            donde el tiempo se detiene, tu cuerpo se relaja y tu esencia se renueva.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-olive/10 flex items-center justify-center group-hover:bg-olive/20 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl mb-3 text-charcoal">{f.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
