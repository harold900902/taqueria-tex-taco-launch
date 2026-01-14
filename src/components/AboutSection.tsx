import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tacosImage from "@/assets/tacos-grid-1.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-warm-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={tacosImage}
                alt="Fresh street tacos"
                className="w-full h-80 md:h-[450px] object-cover"
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-display text-2xl shadow-lg">
                Est. in Katy, TX
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-2 mb-6">
              A Taste of Home,
              <br />
              <span className="text-gradient">Texas Style</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Welcome to <strong className="text-foreground">Taqueria Tex-Taco</strong>—where 
                authentic Mexican recipes meet the bold spirit of Texas. We're 
                your neighborhood spot for handcrafted tacos, made fresh every 
                morning with ingredients you can taste.
              </p>
              <p>
                From our famous breakfast tacos to savory carne asada, 
                every dish is prepared with care and served with a smile. 
                Whether you're grabbing a quick bite or feeding the whole 
                family, we've got you covered.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: "🌮", label: "Fresh Daily" },
                { icon: "⚡", label: "Fast Service" },
                { icon: "❤️", label: "Made with Love" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-background rounded-xl shadow-sm"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-sm font-medium text-foreground mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
