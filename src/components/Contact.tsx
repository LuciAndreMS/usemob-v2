import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { MessageCircle, Building2, Clock, ShieldCheck, Mail } from "lucide-react";

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

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Solicitação de Proposta Corporativa - UseMOB");
    const body = encodeURIComponent(payloadText);
    return `mailto:contato@usemob.com.br?subject=${subject}&body=${body}`;
  }, [payloadText]);

  return (
    <section id="contato" className="section-padding bg-[#0B0D12] relative overflow-hidden">
      {/* brilho premium discreto */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
      <div className="absolute -bottom-40 right-0 w-[560px] h-[560px] bg-accent/[0.05] rounded-full blur-[200px]" />

      <div className="section-container relative z-10">
        {/* Faz as duas colunas ficarem com altura equivalente */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
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

          {/* Right: Card de Proposta (mesma altura do lado esquerdo) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/[0.03] border border-white/[0.10] rounded-2xl p-10 relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-accent/[0.10] rounded-full blur-[160px]" />
            </div>

            <div className="relative">
              <h3 className="font-bold text-xl mb-3 text-strong">
                Solicitar proposta corporativa
              </h3>

              <p className="text-muted2 text-sm mb-8 leading-relaxed">
                Envie sua solicitação para o comercial.{" "}
                <span className="text-subtle">
                  Quanto mais contexto, mais precisa será a proposta.
                </span>
              </p>

              {/* Form (enxuto) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Nome (maior) */}
                <div className="sm:col-span-2">
                  <label className="block text-subtle text-xs mb-2">Nome</label>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3.5 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                  />
                </div>

                {/* Empresa (menor) */}
                <div>
                  <label className="block text-subtle text-xs mb-2">Empresa</label>
                  <input
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Nome da empresa"
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                  />
                </div>

                {/* E-mail (menor) */}
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

                {/* Mensagem (maior) */}
                <div className="sm:col-span-2">
                  <label className="block text-subtle text-xs mb-2">Mensagem</label>
                  <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={6}
                    placeholder="Descreva sua necessidade (trechos, horários, volume, início previsto, etc.)"
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* CTA area “gruda” no fundo para ajudar a igualar altura */}
            <div className="relative mt-auto">
              <div className="space-y-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4.5 rounded-lg font-bold
                           hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/35"
                >
                  <MessageCircle size={22} />
                  Falar com o comercial no WhatsApp
                </a>

                <a
                  href={mailtoHref}
                  className="flex items-center justify-center gap-3 w-full border border-white/15 text-strong px-6 py-4.5 rounded-lg font-semibold
                           hover:border-accent/35 hover:text-gold transition-all"
                >
                  <Mail size={20} />
                  Solicitar cotação por e-mail
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-subtle text-xs">
                <span className="w-4 h-px bg-white/15" />
                Retorno comercial em até <span className="text-strong font-semibold">2 horas úteis</span>
                <span className="w-4 h-px bg-white/15" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
