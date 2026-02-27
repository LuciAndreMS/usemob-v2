import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/seo/Seo";

const WHATSAPP =
  "https://wa.me/5567999636464?text=Ol%C3%A1%21%20Quero%20solicitar%20uma%20proposta%20corporativa%20para%20log%C3%ADstica%20empresarial%20no%20MS.";

export default function LogisticaEmpresarialMS() {
  return (
    <>
      <Seo
        title="Logística Empresarial em MS | UseMOB Transportes e Locações"
        description="Logística empresarial no MS com padrão corporativo: planejamento, execução e suporte operacional com governança e confiabilidade. Atendimento para empresas e indústrias. Solicite proposta corporativa."
        canonicalPath="/logistica-empresarial-ms"
        jsonLd={{
          "@type": "Service",
          name: "Logística Empresarial no MS",
          provider: { "@type": "Organization", name: "UseMOB Transportes e Locações", url: "https://usemob.com.br/" },
          areaServed: { "@type": "State", name: "Mato Grosso do Sul" },
          serviceType: "Logística Empresarial"
        }}
      />

      <Navbar />

      <main className="pt-20 md:pt-24 bg-[#0B0D12]">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Logística empresarial com foco em previsibilidade</h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300">
            Para operações que exigem organização e execução consistente, a UseMOB entrega uma estrutura de mobilidade e logística
            com padrão corporativo — reduzindo ruídos e aumentando previsibilidade e segurança.
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
