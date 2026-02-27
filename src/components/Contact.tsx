import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { MessageCircle, Building2, Clock, ShieldCheck, Mail } from "lucide-react";

const WHATSAPP_PHONE = "5567999636464";

const Contact = () => {
  const [empresa, setEmpresa] = useState("");
  const [cidade, setCidade] = useState("Três Lagoas/MS");
  const [trechos, setTrechos] = useState("");
  const [horarios, setHorarios] = useState("");
  const [pessoasDia, setPessoasDia] = useState("");
  const [inicio, setInicio] = useState("");
  const [obs, setObs] = useState("");

  const payloadText = useMemo(() => {
    const lines: string[] = [
      "Olá, gostaria de solicitar uma proposta corporativa.",
      "",
      `Empresa: ${empresa || "—"}`,
      `Cidade/Operação: ${cidade || "—"}`,
      `Trechos: ${trechos || "—"}`,
      `Horários/Escala: ${horarios || "—"}`,
      `Pessoas/dia: ${pessoasDia || "—"}`,
      `Início previsto: ${inicio || "—"}`,
    ];

    if (obs.trim()) {
      lines.push("", `Observações: ${obs.trim()}`);
    }

    return lines.join("\n");
  }, [empresa, cidade, trechos, horarios, pessoasDia, inicio, obs]);

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

            <p className="text-subtle text-xs leading-relaxed mt-8">
              Para reduzir ruídos e acelerar a cotação, envie os dados essenciais da operação no formulário ao lado.
              O texto será montado automaticamente para WhatsApp ou e-mail.
            </p>
          </motion.div>

          {/* Right: Card de Proposta (com formulário) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/[0.03] border border-white/[0.10] rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-accent/[0.10] rounded-full blur-[160px]" />
            </div>

            <h3 className="font-bold text-xl mb-3 text-strong">
              Solicitar proposta corporativa
            </h3>

            <p className="text-muted2 text-sm mb-8 leading-relaxed">
              Preencha os dados essenciais e envie para o comercial.{" "}
              <span className="text-subtle">
                Quanto mais detalhes, mais rápida e precisa será a proposta.
              </span>
            </p>

            {/* Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="sm:col-span-2">
                <label className="block text-subtle text-xs mb-2">Empresa</label>
                <input
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Ex: Indústria X / Unidade Três Lagoas"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div>
                <label className="block text-subtle text-xs mb-2">Cidade / Operação</label>
                <input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Ex: Três Lagoas/MS"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div>
                <label className="block text-subtle text-xs mb-2">Pessoas por dia</label>
                <input
                  value={pessoasDia}
                  onChange={(e) => setPessoasDia(e.target.value)}
                  placeholder="Ex: 20"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-subtle text-xs mb-2">Trechos (origem → destino)</label>
                <input
                  value={trechos}
                  onChange={(e) => setTrechos(e.target.value)}
                  placeholder="Ex: Centro → Planta Industrial / Hotel → Unidade"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-subtle text-xs mb-2">Horários / Escala</label>
                <input
                  value={horarios}
                  onChange={(e) => setHorarios(e.target.value)}
                  placeholder="Ex: seg–sex 07:00 / 17:00 • Turnos 6x1"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-subtle text-xs mb-2">Início previsto</label>
                <input
                  value={inicio}
                  onChange={(e) => setInicio(e.target.value)}
                  placeholder="Ex: imediato / 15 dias / 01/04"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-subtle text-xs mb-2">Observações (opcional)</label>
                <textarea
                  value={obs}
                  onChange={(e) => setObs(e.target.value)}
                  rows={3}
                  placeholder="Ex: necessidade de veículo executivo / regras de acesso / EPIs / pontos de embarque"
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm text-strong placeholder:text-white/30 focus:outline-none focus:border-accent/35 resize-none"
                />
              </div>
            </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
