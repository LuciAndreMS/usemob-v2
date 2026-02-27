import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string; // ex: "/" ou "/mobilidade-corporativa-ms"
  ogImage?: string; // default: /og-image.jpeg
  robots?: string; // default: index,follow...
  jsonLd?: Record<string, any> | Record<string, any>[];
};

const SITE_URL = "https://usemob.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpeg`;

function upsertMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: any) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  jsonLd
}: SeoProps) {
  useEffect(() => {
    const canonical = `${SITE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

    // Title + Description
    document.title = title;
    upsertMeta("description", description);

    // Robots
    upsertMeta("robots", robots);
    upsertMeta("googlebot", robots);

    // Canonical
    upsertCanonical(canonical);

    // Open Graph (Google/LinkedIn/WhatsApp base)
    upsertProperty("og:locale", "pt_BR");
    upsertProperty("og:site_name", "UseMOB Transportes e Locações");
    upsertProperty("og:type", "website");
    upsertProperty("og:url", canonical);
    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:image", ogImage);
    upsertProperty("og:image:secure_url", ogImage);
    upsertProperty("og:image:alt", "UseMOB — Mobilidade corporativa e transporte executivo em Três Lagoas e MS");

    // Twitter
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", ogImage);

    // JSON-LD por rota (opcional)
    if (jsonLd) {
      const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      upsertJsonLd("usemob-jsonld", payload.length === 1 ? payload[0] : { "@context": "https://schema.org", "@graph": payload });
    } else {
      const existing = document.getElementById("usemob-jsonld");
      if (existing) existing.remove();
    }
  }, [title, description, canonicalPath, ogImage, robots, jsonLd]);

  return null;
