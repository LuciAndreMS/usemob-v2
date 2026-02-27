import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Building2, Clock, ShieldCheck } from "lucide-react";

const Contact = () => (
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
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
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

          {/* Blocos de contato */}
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gold" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-strong">Base Operacional</p>
                <p className="text-subtle text-sm leading-relaxed">
                  Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="text-gold" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-strong">WhatsApp Corporativo</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm hover:underline"
                >
                  +55 (67) 99963-6464
                </a>
                <p className="text-subtle text-xs mt-1">
                  Comercial: seg–sex • 08:00–18:00 • Operações contínuas conforme contrato
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Mail className="text-gold" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-strong">E-mail Corporativo</p>
                <a
                  href="mailto:contato@usemob.com.br"
                  className="text-gold text-sm hover:underline"
                >
                  contato@usemob.com.br
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Card de CTA (foco WhatsApp) */}
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
            Envie sua demanda e receba uma proposta com escopo, padrão de atendimento e modelo operacional.
            <span className="text-subtle"> Quanto mais detalhes, mais rápida e precisa será a proposta.</span>
          </p>

          {/* “modelo” de mensagem (ajuda o lead a enviar certo) */}
          <div className="rounded-xl bg-black/20 border border-white/10 p-4 mb-6">
            <p className="text-subtle text-xs mb-2">Sugestão de mensagem:</p>
            <p className="text-strong text-sm leading-relaxed">
              Empresa: ___ • Trechos: ___ • Horários/escala: ___ • Pessoas/dia: ___ • Início: ___
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa.%0AEmpresa%3A%20___%0ATrechos%3A%20___%0AHor%C3%A1rios%2Fescala%3A%20___%0APessoas%2Fdia%3A%20___%0AIn%C3%ADcio%20previsto%3A%20___"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4.5 rounded-lg font-bold
                         hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/35"
            >
              <MessageCircle size={22} />
              Falar com o comercial no WhatsApp
            </a>

            <a
              href="mailto:contato@usemob.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Proposta%20Corporativa%20-%20UseMOB&body=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa.%0A%0AEmpresa%3A%0ACidade%2Fopera%C3%A7%C3%A3o%3A%0ATrechos%3A%0AHor%C3%A1rios%2Fescala%3A%0APessoas%2Fdia%3A%0ATipo%20de%20ve%C3%ADculo%3A%0AIn%C3%ADcio%20previsto%3A%0A%0AObrigado!"
              className="flex items-center justify-center gap-3 w-full border border-white/15 text-strong px-6 py-4.5 rounded-lg font-semibold
                         hover:border-accent/35 hover:text-gold transition-all"
            >
              <Mail size={20} />
              Solicitar por e-mail
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

export default Contact;
