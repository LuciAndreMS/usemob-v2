import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Building2, Clock, ShieldCheck } from "lucide-react";

const Contact = () => (
  <section id="contato" className="section-padding bg-navy">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Institutional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Comercial Corporativo
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-6 text-white leading-tight">
            Solicite uma <span className="text-accent">proposta corporativa</span> com padrão executivo
          </h2>

          <p className="text-white/55 text-lg mb-10 leading-relaxed">
            Estruturamos mobilidade corporativa com governança, previsibilidade e controle operacional.
            Atendimento para empresas em Três Lagoas e em todo o Mato Grosso do Sul.
          </p>

          {/* “Empresa grande” bullets */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <Building2 className="text-accent" size={18} />
              </div>
              <p className="text-white font-semibold text-sm">B2B e contratos</p>
              <p className="text-white/50 text-sm mt-1 leading-relaxed">
                Operações contínuas e demandas recorrentes.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <ShieldCheck className="text-accent" size={18} />
              </div>
              <p className="text-white font-semibold text-sm">Governança</p>
              <p className="text-white/50 text-sm mt-1 leading-relaxed">
                Padrões, relatórios e conformidade operacional.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <Clock className="text-accent" size={18} />
              </div>
              <p className="text-white font-semibold text-sm">Agilidade</p>
              <p className="text-white/50 text-sm mt-1 leading-relaxed">
                Retorno rápido para cotações corporativas.
              </p>
            </div>
          </div>

          {/* Contact blocks */}
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-white">Base Operacional</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-white">WhatsApp Corporativo</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5567999636464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline"
                >
                  +55 (67) 99963-6464
                </a>
                <p className="text-white/35 text-xs mt-1">
                  Atendimento comercial: seg–sex • 08:00–18:00 (operações 24/7 conforme contrato)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1 text-white">E-mail Corporativo</p>
                <a
                  href="mailto:contato@usemob.com.br"
                  className="text-accent text-sm hover:underline"
                >
                  contato@usemob.com.br
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white/[0.03] border border-white/[0.10] rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-accent/[0.10] rounded-full blur-[140px]" />
          </div>

          <h3 className="font-bold text-xl mb-3 text-white">
            Solicitar proposta corporativa
          </h3>

          <p className="text-white/55 text-sm mb-8 leading-relaxed">
            Envie a sua demanda e receba uma proposta com escopo, padrão de atendimento e modelo operacional.
            Ideal para: transporte executivo, equipes, eventos e logística dedicada.
          </p>

          <div className="space-y-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa.%20Minha%20demanda%3A%20(empresa%2Frota%2Fhor%C3%A1rios%2Ftrechos)."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4.5 rounded-lg font-bold hover:bg-accent-hover transition-all"
            >
              <MessageCircle size={22} />
              Falar com o Comercial no WhatsApp
            </a>

            <a
              href="mailto:contato@usemob.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Proposta%20Corporativa%20-%20UseMOB&body=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa.%0A%0AEmpresa%3A%0ACidade%2Fopera%C3%A7%C3%A3o%3A%0ATrechos%3A%0AHor%C3%A1rios%2Fescala%3A%0ATipo%20de%20ve%C3%ADculo%3A%0AIn%C3%ADcio%20previsto%3A%0A%0AObrigado!"
              className="flex items-center justify-center gap-3 w-full border border-white/15 text-white/85 px-6 py-4.5 rounded-lg font-semibold hover:border-accent/35 hover:text-white transition-all"
            >
              <Mail size={20} />
              Solicitar por e-mail
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-white/35 text-xs">
            <span className="w-4 h-px bg-white/15" />
            Retorno comercial em até <span className="text-white/70 font-semibold">2 horas úteis</span>
            <span className="w-4 h-px bg-white/15" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
