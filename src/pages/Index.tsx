import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    // ===== SEO: Title / Description (home) =====
    document.title = "Mobilidade e Transporte Corporativo em Três Lagoas e MS | UseMOB";

    const upsertMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const upsertProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Description consistente com o posicionamento B2B/indústria
    upsertMeta(
      "description",
      "UseMOB Transportes e Locações: mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Frota premium, motoristas treinados, governança, compliance, pontualidade e segurança. Solicite uma proposta corporativa."
    );

    // Open Graph (reforça WhatsApp/LinkedIn mesmo em SPA)
    upsertProperty("og:title", "Mobilidade e Transporte Corporativo em Três Lagoas e MS | UseMOB");
    upsertProperty(
      "og:description",
      "Mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Frota premium, motoristas treinados, governança, compliance, pontualidade e segurança. Solicite uma proposta corporativa."
    );
    upsertProperty("og:url", "https://usemob.com.br/");
    upsertProperty("og:type", "website");
    upsertProperty("og:site_name", "UseMOB Transportes e Locações");
    upsertProperty("og:locale", "pt_BR");
    upsertProperty("og:image", "https://usemob.com.br/og-image.jpeg");
    upsertProperty("og:image:secure_url", "https://usemob.com.br/og-image.jpeg");
    upsertProperty(
      "og:image:alt",
      "UseMOB Transportes e Locações — Mobilidade corporativa e transporte executivo em Três Lagoas e MS"
    );

    // Twitter Cards
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", "Mobilidade e Transporte Corporativo em Três Lagoas e MS | UseMOB");
    upsertMeta(
      "twitter:description",
      "Mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Solicite uma proposta corporativa."
    );
    upsertMeta("twitter:image", "https://usemob.com.br/og-image.jpeg");

    // ===== Structured Data (único script, evitando duplicidade) =====
    const schemaId = "usemob-home-schema";
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;

    // @graph com Organization + WebSite + LocalBusiness (mais completo e “corporativo”)
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://usemob.com.br/#organization",
          name: "UseMOB Transportes e Locações",
          url: "https://usemob.com.br/",
          logo: "https://usemob.com.br/logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+5567999636464",
              contactType: "sales",
              areaServed: "BR",
              availableLanguage: ["Portuguese"]
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://usemob.com.br/#website",
          url: "https://usemob.com.br/",
          name: "UseMOB Transportes e Locações",
          inLanguage: "pt-BR",
          publisher: { "@id": "https://usemob.com.br/#organization" }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://usemob.com.br/#localbusiness",
          name: "UseMOB Transportes e Locações",
          description:
            "Mobilidade corporativa e transporte executivo para empresas e indústrias em Três Lagoas e em todo MS. Gestão profissional, compliance e alta confiabilidade operacional.",
          url: "https://usemob.com.br/",
          telephone: "+5567999636464",
          email: "contato@usemob.com.br",
          image: "https://usemob.com.br/logo.png",
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
          areaServed: [
            { "@type": "City", name: "Três Lagoas" },
            { "@type": "State", name: "Mato Grosso do Sul" }
          ],
          knowsAbout: [
            "Mobilidade corporativa",
            "Transporte corporativo",
            "Transporte executivo empresarial",
            "Transporte para indústrias",
            "Logística empresarial",
            "Locação de veículos com motorista"
          ],
          sameAs: []
        }
      ]
    });

    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, []);

  return (
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
    </>
  );
};

export default Index;
