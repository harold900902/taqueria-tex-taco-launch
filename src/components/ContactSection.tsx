import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { BUSINESS_INFO, BUSINESS_HOURS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  message: z.string().trim().min(1, "Message is required").max(500, "Message is too long"),
});

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Build WhatsApp message
    const whatsappMessage = `Hi! My name is ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success toast
    toast({
      title: "Opening WhatsApp...",
      description: "Your message is ready to send!",
    });

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Contact Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-2">
            Visit Us Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80 bg-muted">
              <iframe
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taqueria Tex-Taco Location"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-hover group"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    Address
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-hover group"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    Phone
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_INFO.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-secondary" />
                <h3 className="font-semibold text-foreground">
                  Hours <span className="text-xs text-muted-foreground">(confirm)</span>
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {BUSINESS_HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h3 className="font-display text-2xl text-primary mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form and we'll respond via WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(832) 555-1234"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to place an order..."
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>

              {/* Direct action buttons */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Or reach us directly:
                </p>
                <div className="flex gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
