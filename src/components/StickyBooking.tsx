import { Phone, MessageCircle, Calendar } from "lucide-react";

const StickyBooking = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cream/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-3 px-2">
        <a
          href="tel:+34952341014"
          className="flex flex-col items-center gap-1 text-charcoal hover:text-olive transition-colors"
        >
          <Phone size={20} />
          <span className="text-[10px] font-sans tracking-wider uppercase">Llamar</span>
        </a>
        <a
          href="https://www.fresha.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-olive text-primary-foreground px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase"
        >
          <Calendar size={16} />
          Reservar
        </a>
        <a
          href="https://wa.me/34952341014"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-charcoal hover:text-olive transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-sans tracking-wider uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyBooking;
