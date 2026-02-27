import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/seo/Seo";

const WHATSAPP =
  "https://wa.me/5567999636464?text=Ol%C3%A1%21%20Quero%20solicitar%20uma%20proposta%20corporativa%20de%20mobilidade%20no%20Mato%20Grosso%20do%20Sul%20%28MS%29.";

export default function MobilidadeCorporativaMS() {
  return (
    <>
      <Seo
        title="Mobilidade Corporativa em MS | UseMOB Transportes e Locações"
        description="Mobilidade corporativa no Mato Grosso do Sul: transporte executivo, logística empresarial e locação de veículos com motorista. Operação com governança, compliance e alta confiabilidade. Solicite proposta."
        canonicalPath="/mobilidade-corporativa-ms"
        jsonLd={{
          "@type": "Service",
          name: "Mobilidade Corporativa no Mato Grosso do Sul (MS)",
          provider: { "@type": "Organization", name: "UseMOB Transportes e Locações", url: "https://usemob.com.br/" },
          areaServed: { "@type": "State", name: "Mato Grosso do Sul" },
          serviceType: "Mobilidade Corporativa"
        }}
      />

      <Navbar />

      <main className="pt-20 md:pt-24 bg-[#0B0D12]">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Mobilidade corporativa em todo MS</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300">
            Base em Três Lagoas, atendimento estadual. A UseMOB estrutura mobilidade corporativa com processos,
            rastreabilidade operacional e padrão executivo — ideal para empresas, multinacionais e grandes operações.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} className="inline-flex items-center justify-center rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]">
              Solicitar proposta corporativa
            </a>
            <a href="/" className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5">
              Voltar ao site
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Atendimento B2B/B2G</h2>
              <p className="mt-2 text-sm text-gray-300">Modelos de contrato, rotinas e padrões adequados ao corporativo.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Operação multi-cidade</h2>
              <p className="mt-2 text-sm text-gray-300">Planejamento e execução para demandas recorrentes e eventos.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-14">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
