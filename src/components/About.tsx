import teamImg from "@/assets/team.jpg";
import FadeInSection from "./FadeInSection";

const team = [
  { name: "Nata", role: "Directora creativa & Head Spa specialist" },
  { name: "Ely", role: "Estilista senior & colorista" },
  { name: "Patricia", role: "Terapeuta facial & bienestar" },
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-warm-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-olive mb-4">
                Sobre nosotras
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
                Manos que cuidan,{" "}
                <span className="italic">almas que conectan</span>
              </h2>
              <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                En Natura no ofrecemos servicios, creamos experiencias. Cada ritual nace de nuestra
                pasión por el bienestar y nuestra convicción de que la verdadera belleza comienza
                desde el interior.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                Somos un equipo de profesionales que ama lo que hace. Escuchamos, cuidamos y nos
                comprometemos con cada persona que cruza nuestra puerta. Porque tú no eres un
                cliente más — eres alguien que merece un momento de paz.
              </p>

              <div className="space-y-4">
                {team.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <div>
                      <span className="font-display text-lg text-charcoal">{t.name}</span>
                      <span className="font-sans text-sm text-muted-foreground ml-2">
                        — {t.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={teamImg}
                alt="Equipo Natura Málaga"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
