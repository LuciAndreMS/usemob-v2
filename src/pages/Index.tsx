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
  name: "UseMOB Transportes e Locações",
  description:
    "Mobilidade corporativa em Três Lagoas-MS. Gestão de transporte empresarial, locação de veículos com motorista, logística corporativa e operações para indústrias.",
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
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
};

const Index = () => (
  <>
    <Navbar />

    {/* padding-top para compensar navbar fixo */}
    <main className="pt-20 md:pt-24">

      {/* HERO */}
      <Hero />

      {/* PROVA IMEDIATA */}
      <AuthorityBar />

      {/* LOGOS / PROVA SOCIAL */}
      <PartnerLogos />

      {/* SOLUÇÕES */}
      <Services />

      {/* FROTA */}
      <VehicleShowcase />

      {/* DIFERENCIAIS */}
      <Differentials />

      {/* CTA FORTE */}
      <CtaBanner />

      {/* INSTITUCIONAL */}
      <About />

      {/* PROVA SOCIAL */}
      <Testimonials />

      {/* CONTATO */}
      <Contact />

    </main>

    <Footer />
    <WhatsAppFloat />

    {/* SEO STRUCTURED DATA */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  </>
);

export default Index;
