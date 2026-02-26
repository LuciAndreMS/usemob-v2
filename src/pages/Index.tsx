import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import AuthorityBar from "@/components/AuthorityBar";
import About from "@/components/About";
import Services from "@/components/Services";
import VehicleShowcase from "@/components/VehicleShowcase";
import Differentials from "@/components/Differentials";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "UseMOB Transportes",
  description: "Transporte executivo corporativo em Três Lagoas-MS. Frota rastreada, motoristas profissionais, traslados de aeroporto, locação de vans e motoboy.",
  url: "https://usemob.com.br",
  telephone: "+5567999636464",
  email: "contato@usemob.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Euridice Chagas Cruz, 1321, Vila Nova",
    addressLocality: "Três Lagoas",
    addressRegion: "MS",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.7511,
    longitude: -51.6783,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <AuthorityBar />
      <PartnerLogos />
      <About />
      <Services />
      <VehicleShowcase />
      <Differentials />
      <CtaBanner />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  </>
);

export default Index;
