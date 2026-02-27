import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/seo/Seo";

const WHATSAPP =
  "https://wa.me/5567999636464?text=Ol%C3%A1%21%20Quero%20solicitar%20uma%20proposta%20corporativa%20de%20loca%C3%A7%C3%A3o%20de%20ve%C3%ADculos%20com%20motorista.";

export default function LocacaoVeiculosComMotorista() {
  return (
    <>
      <Seo
        title="Locação de Veículos com Motorista em MS | UseMOB"
        description="Locação de veículos com motorista para empresas em Três Lagoas e MS: transporte executivo, atendimento profissional, pontualidade e segurança. Ideal para diretoria, visitas técnicas e operações. Solicite proposta."
        canonicalPath="/locacao-veiculos-com-motorista"
        jsonLd={{
          "@type": "Service",
          name: "Locação de Veículos com Motorista",
          provider: { "@type": "Organization", name: "UseMOB Transportes e Locações", url: "https://usemob.com.br/" },
          areaServed: { "@type": "State", name: "Mato Grosso do Sul" },
          serviceType: "Locação de Veículos com Motorista"
        }}
      />

      <Navbar />

      <main className="pt-20 md:pt-24 bg-[#0B0D12]">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Locação de veículos com motorista para empresas</h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300">
            Solução corporativa para diretoria, equipes técnicas, visitas, eventos e demandas recorrentes.
            Veículos executivos, motoristas treinados e padrão de atendimento compatível com multinacionais.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} className="inline-flex items-center justify-center rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]">
              Solicitar proposta corporativa
            </a>
            <a href="/" className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5">
              Voltar ao site
            </a>
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
