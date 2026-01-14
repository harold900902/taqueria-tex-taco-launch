import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS_INFO } from "@/lib/constants";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt={BUSINESS_INFO.name} className="h-12 w-auto" />
          <span className={`font-display text-xl md:text-2xl tracking-wide transition-colors ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}>
            {BUSINESS_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-semibold cta-glow"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Call Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="block w-full text-center bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold"
                >
                  Call Now: {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
