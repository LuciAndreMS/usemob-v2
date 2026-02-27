import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { MessageCircle, Building2, Clock, ShieldCheck } from "lucide-react";

const WHATSAPP_PHONE = "5567999636464";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const payloadText = useMemo(() => {
    const lines: string[] = [
      "Olá, gostaria de solicitar uma proposta corporativa.",
      "",
      `Nome: ${nome || "—"}`,
      `Empresa: ${empresa || "—"}`,
      `E-mail: ${email || "—"}`,
      "",
      "Mensagem:",
      `${mensagem?.trim() || "—"}`,
    ];

    return lines.join("\n");
  }, [nome, empresa, email, mensagem]);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(payloadText);
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;
  }, [payloadText]);

  return (
    <section id="contato" className="section-padding bg-[#0B0D12] relative overflow-hidden">
      {/* brilho premium discreto */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
      <div className="absolute -bottom-40 right-0 w-[560px] h-[560px] bg-accent/[0.05] rounded-full blur-[200px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Comercial Corporativo
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-6 text-strong leading-tight">
              Solicite uma <span className="text-gold">proposta corporativa</span> alinhada à sua operação
            </h2>

            <p className="text-muted2 text-lg mb-10 leading-relaxed">
              Estruturamos mobilidade corporativa com padrão profissional, previsibilidade e controle operacional.
              Atendimento para empresas em Três Lagoas e rotas estratégicas no MS.
            </p>

            {/* Bullets (empresa grande) */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-5 hover:border-accent/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <Building2 className="text-gold" size={18} />
                </div>
                <p className="text-strong font-semibold text-sm">B2B e contratos</p>
                <p className="text-subtle text-sm mt-1 leading-relaxed">
                  Operações contínuas e demandas recorrentes.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-5 hover:border-accent/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <ShieldCheck className="text-gold" size={18} />
                </div>
                <p className="text-strong font-semibold text-sm">Governança</p>
                <p className="text-subtle text-sm mt-1 leading-relaxed">
                  Padrões, conformidade e organização operacional.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-5 hover:border-accent/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <Clock className="text-gold" size={18} />
                </div>
                <p className="text-strong font-semibold text-sm">Agilidade</p>
                <p className="text-subtle text-sm mt-1 leading-relaxed">
                  Retorno rápido para propostas corporativas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Card de Proposta (mais curto e alinhado visualmente) */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15 }}
  className="bg-white/[0.03] border border-white/[0.10] rounded-xl p-7 md:p-8 relative overflow-hidden"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-accent/[0.10] rounded-full blur-[160px]" />
  </div>

  <h3 className="relative font-semibold text-lg mb-2 text-strong">
    Solicitar proposta corporativa
  </h3>

  <p className="relative text-muted2 text-sm mb-6 leading-relaxed">
    Envie sua solicitação para o comercial.
  </p>

  {/* Form */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">

    {/* Nome */}
    <div className="sm:col-span-2">
      <label className="block text-subtle text-xs mb-2">Nome</label>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
      />
    </div>

    {/* Empresa */}
    <div>
      <label className="block text-subtle text-xs mb-2">Empresa</label>
      <input
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        placeholder="Nome da empresa"
        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-subtle text-xs mb-2">E-mail</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        type="email"
        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
      />
    </div>

    {/* Mensagem */}
    <div className="sm:col-span-2">
      <label className="block text-subtle text-xs mb-2">Mensagem</label>
      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        rows={4}
        placeholder="Descreva sua necessidade"
        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35 resize-none"
      />
    </div>
  </div>

  {/* CTA (não full width) */}
  <div className="flex justify-center">
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm
                 hover:bg-accent-hover transition-all shadow-md hover:shadow-accent/25"
    >
      <MessageCircle size={18} />
      Falar com o comercial no WhatsApp
    </a>
  </div>

  <div className="relative mt-4 text-center text-xs text-subtle">
    Retorno comercial em até <span className="text-strong font-medium">2 horas úteis</span>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
