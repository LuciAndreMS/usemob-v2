import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/seo/Seo";

const WHATSAPP =
  "https://wa.me/5567999636464?text=Ol%C3%A1%21%20Quero%20uma%20proposta%20corporativa%20para%20transporte%20de%20opera%C3%A7%C3%A3o%20industrial%20no%20MS.";

export default function TransporteParaIndustriaMS() {
  return (
    <>
      <Seo
        title="Transporte para Indústria no MS | Operação Corporativa UseMOB"
        description="Transporte para indústrias no Mato Grosso do Sul com padrão corporativo: rotinas, SLA, pontualidade, segurança, governança e compliance. Ideal para grandes operações e turnos. Solicite proposta."
        canonicalPath="/transporte-para-industria-ms"
        jsonLd={{
          "@type": "Service",
          name: "Transporte para Indústrias no MS",
          provider: { "@type": "Organization", name: "UseMOB Transportes e Locações", url: "https://usemob.com.br/" },
          areaServed: { "@type": "State", name: "Mato Grosso do Sul" },
          serviceType: "Transporte para Indústrias"
        }}
      />

      <Navbar />

      <main className="pt-20 md:pt-24 bg-[#0B0D12]">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Transporte para indústria no MS</h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300">
            Operações industriais exigem previsibilidade. A UseMOB atua com padrão executivo e disciplina operacional:
            planejamento de rotas, atendimento profissional, gestão de ocorrências e foco total em segurança e pontualidade.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} className="inline-flex items-center justify-center rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]">
              Solicitar proposta corporativa
            </a>
            <a href="/" className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5">
              Voltar ao site
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Turnos e rotina</h2>
              <p className="mt-2 text-sm text-gray-300">Apoio a operações com entrada/saída, janela e padrões definidos.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Controle e rastreabilidade</h2>
              <p className="mt-2 text-sm text-gray-300">Gestão de qualidade e acompanhamento operacional.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Compliance</h2>
              <p className="mt-2 text-sm text-gray-300">Postura e documentação compatíveis com grandes contratos.</p>
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
