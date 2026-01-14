import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import tacosGrid2 from "@/assets/tacos-grid-2.jpg";
import tacosGrid3 from "@/assets/tacos-grid-3.jpg";
import tacosGrid1 from "@/assets/tacos-grid-1.jpg";

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gridImages = [tacosGrid1, tacosGrid2, tacosGrid3];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-warm-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-2">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card p-6 rounded-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 star-filled fill-current" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <p className="font-semibold text-muted-foreground text-sm">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View More Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16"
        >
          <a
            href="https://www.google.com/search?q=Taqueria+Tex-Taco+Katy+TX+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
          >
            View more reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl text-primary text-center mb-6">
            Fresh From Our Kitchen
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {gridImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                <img
                  src={img}
                  alt={`Food photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
