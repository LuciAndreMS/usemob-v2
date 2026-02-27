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
import Seo from "@/seo/Seo";

const Index = () => (
  <>
    <Seo
      title="Mobilidade e Transporte Corporativo em Três Lagoas e MS | UseMOB"
      description="UseMOB Transportes e Locações: mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Frota premium, motoristas treinados, governança, compliance, pontualidade e segurança. Solicite uma proposta corporativa."
      canonicalPath="/"
      jsonLd={{
        "@type": "LocalBusiness",
        name: "UseMOB Transportes e Locações",
        description:
          "Mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Gestão profissional, compliance e alta confiabilidade operacional.",
        url: "https://usemob.com.br/",
        telephone: "+5567999636464",
        email: "contato@usemob.com.br",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Euridice Chagas Cruz, 1321, Vila Nova",
          addressLocality: "Três Lagoas",
          addressRegion: "MS",
          postalCode: "79601-001",
          addressCountry: "BR"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.7511,
          longitude: -51.6783
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00"
          }
        ],
        sameAs: []
      }}
    />

    <Navbar />

    <main className="pt-20 md:pt-24">
      <Hero />
      <AuthorityBar />
      <PartnerLogos />
      <Services />
      <VehicleShowcase />
      <Differentials />
      <CtaBanner />
      <About />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
