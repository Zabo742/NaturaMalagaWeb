import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding bg-warm-white">
      <div className="container-narrow">
        <FadeInSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-olive text-center mb-4">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-16 leading-tight">
            Reserva tu momento de{" "}
            <span className="italic">bienestar</span>
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-olive" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-1">Dirección</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Av. Nehemias, 3, local 20
                    <br />
                    Cruz de Humilladero, 29006 Málaga
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                  <Phone className="text-olive" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-1">Teléfono</h3>
                  <a
                    href="tel:+34952341014"
                    className="font-sans text-sm text-olive hover:text-olive-dark transition-colors"
                  >
                    952 34 10 14
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                  <Clock className="text-olive" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-1">Horario</h3>
                  <div className="font-sans text-sm text-muted-foreground space-y-1">
                    <p>Lunes a viernes: 9:30 – 20:00</p>
                    <p>Sábados: 9:30 – 14:00</p>
                    <p>Domingos: cerrado</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="tel:+34952341014"
                  className="bg-olive hover:bg-olive-dark text-primary-foreground font-sans text-sm tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Llamar ahora
                </a>
                <a
                  href="https://wa.me/34952341014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,28%)] text-warm-white font-sans text-sm tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5!2d-4.445!3d36.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzM2LjAiTiA0wrAyNic0Mi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Natura Málaga"
                className="rounded-2xl"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
