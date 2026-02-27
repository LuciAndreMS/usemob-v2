import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/seo/Seo";

const WHATSAPP =
  "https://wa.me/5567999636464?text=Ol%C3%A1%21%20Quero%20solicitar%20uma%20proposta%20corporativa%20de%20transporte%20em%20Tr%C3%AAs%20Lagoas%20%28MS%29.";

export default function TransporteCorporativoTresLagoas() {
  return (
    <>
      <Seo
        title="Transporte Corporativo em Três Lagoas MS | UseMOB"
        description="Transporte corporativo em Três Lagoas-MS com padrão executivo: frota premium, motoristas treinados, SLA, governança e compliance. Atendimento para empresas e indústrias. Solicite proposta corporativa."
        canonicalPath="/transporte-corporativo-tres-lagoas"
        jsonLd={{
          "@type": "Service",
          name: "Transporte Corporativo em Três Lagoas (MS)",
          provider: {
            "@type": "Organization",
            name: "UseMOB Transportes e Locações",
            url: "https://usemob.com.br/"
          },
          areaServed: { "@type": "City", name: "Três Lagoas" },
          serviceType: "Transporte Corporativo"
        }}
      />

      <Navbar />

      <main className="pt-20 md:pt-24 bg-[#0B0D12]">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Transporte corporativo em Três Lagoas (MS) com padrão executivo
          </h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300">
            A UseMOB atende empresas e indústrias com foco em previsibilidade operacional: pontualidade, segurança,
            motoristas treinados, frota premium e controle de qualidade. Mobilidade corporativa com governança e compliance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]"
            >
              Solicitar proposta corporativa
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Voltar ao site
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Operação previsível</h2>
              <p className="mt-2 text-sm text-gray-300">SLA, padrão de atendimento e rotina de acompanhamento.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Governança e compliance</h2>
              <p className="mt-2 text-sm text-gray-300">Documentação, conduta e controle adequados ao B2B.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Frota e motoristas</h2>
              <p className="mt-2 text-sm text-gray-300">Veículos executivos e profissionais treinados para o corporativo.</p>
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
