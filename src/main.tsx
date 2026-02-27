import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Garante que o site fique sempre no tema escuro
document.documentElement.classList.add("dark");

// ===== SEO / STRUCTURED DATA (Organization + Website + Local SEO) =====
const injectStructuredData = () => {
  const existing = document.getElementById("usemob-schema");
  if (existing) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "usemob-schema";

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
        publisher: {
          "@id": "https://usemob.com.br/#organization"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Mobilidade Corporativa",
        "provider": {
          "@id": "https://usemob.com.br/#organization"
        },
        "areaServed": {
          "@type": "State",
          name: "Mato Grosso do Sul"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          name: "Soluções de Mobilidade Corporativa",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transporte Corporativo"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transporte Executivo Empresarial"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transporte para Indústrias"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Logística Empresarial"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Locação de Veículos com Motorista"
              }
            }
          ]
        }
      }
    ]
  });

  document.head.appendChild(script);
};

// ===== CANONICAL (segurança SEO em SPA) =====
const ensureCanonical = () => {
  const href = "https://usemob.com.br/";
  let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

// ===== EXECUÇÃO =====
injectStructuredData();
ensureCanonical();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
