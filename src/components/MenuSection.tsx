import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MENU_ITEMS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

type CategoryKey = keyof typeof MENU_ITEMS;

const categories: { key: CategoryKey; label: string; icon: string }[] = [
  { key: "breakfast", label: "Breakfast", icon: "🍳" },
  { key: "tacos", label: "Tacos", icon: "🌮" },
  { key: "plates", label: "Plates", icon: "🍽️" },
  { key: "drinks", label: "Drinks", icon: "🥤" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("breakfast");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentItems = MENU_ITEMS[activeCategory];

  return (
    <section id="menu" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-2">
            Fresh & Authentic
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From our kitchen to your table. Every dish made with love and the 
            freshest ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`menu-tab flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm md:text-base transition-all ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground active"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-card rounded-xl p-5 border border-border card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-secondary transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <Badge className="badge-popular text-xs">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-display text-2xl text-secondary shrink-0">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prices may vary. Please call or visit for current pricing.
        </p>
      </div>
    </section>
  );
}
