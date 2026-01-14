import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-tacos.jpg";
import { BUSINESS_INFO } from "@/lib/constants";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like to place an order at Taqueria Tex-Taco."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious breakfast tacos"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 trust-badge px-4 py-2 rounded-full mb-6"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-badge text-gold-badge" />
              ))}
            </div>
            <span className="text-primary-foreground font-medium text-sm">
              Top-rated • Loved by Katy locals
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-4 leading-tight"
          >
            Best Breakfast Tacos
            <br />
            <span className="text-gold-badge">in Katy</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance"
          >
            Authentic Tex-Mex flavors • Fresh ingredients daily • 
            Fast & friendly service since day one
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg cta-glow animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-primary-foreground/30"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Address */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-primary-foreground/70 text-sm"
          >
            📍 {BUSINESS_INFO.fullAddress}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
