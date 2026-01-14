import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO, BUSINESS_HOURS } from "@/lib/constants";

const Index = () => {
  // JSON-LD Schema for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS_INFO.name,
    image: "/og-image.jpg",
    url: window.location.origin,
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.82,
      longitude: -95.82,
    },
    openingHoursSpecification: BUSINESS_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.hours.split(" - ")[0],
      closes: h.hours.split(" - ")[1],
    })),
    servesCuisine: ["Mexican", "Tex-Mex", "Tacos"],
    priceRange: "$",
    menu: `${window.location.origin}#menu`,
  };

  return (
    <>
      <Helmet>
        <title>Taqueria Tex-Taco | Best Breakfast Tacos in Katy, TX</title>
        <meta
          name="description"
          content="Authentic Tex-Mex tacos in Katy, TX. Fresh breakfast tacos, carne asada, and more. Visit us at 2900 Katy Hockley Cut Off Rd. Call (832) 693-5404!"
        />
        <meta name="keywords" content="tacos, breakfast tacos, Katy TX, Mexican food, Tex-Mex, taqueria, authentic tacos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Taqueria Tex-Taco | Best Breakfast Tacos in Katy, TX" />
        <meta property="og:description" content="Authentic Tex-Mex tacos in Katy. Fresh ingredients, fast service, unbeatable flavor." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taqueria Tex-Taco | Katy, TX" />
        <meta name="twitter:description" content="Best breakfast tacos in Katy. Visit us today!" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
        <FloatingCTA />
        
        {/* Extra padding for floating CTA on mobile */}
        <div className="h-24 md:hidden" />
      </main>
    </>
  );
};

export default Index;
