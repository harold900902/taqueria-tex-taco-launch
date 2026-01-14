import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like to place an order."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden floating-cta">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-4 rounded-xl font-bold text-base shadow-lg"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 rounded-xl font-bold text-base shadow-lg"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
