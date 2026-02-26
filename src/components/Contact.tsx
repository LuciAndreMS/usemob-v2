import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contato" className="section-padding bg-navy">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-heading text-xs font-semibold tracking-[0.2em] uppercase">
            Contato Corporativo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold mt-4 mb-6 text-white leading-tight">
            Fale com nosso <span className="text-accent">time de consultores</span>
          </h2>
          <p className="text-white/45 text-lg mb-10 leading-relaxed">
            Desenvolvemos soluções de mobilidade corporativa sob medida para a operação da sua empresa. Entre em contato com nossa equipe comercial e receba uma proposta corporativa personalizada para transporte executivo em Três Lagoas e Mato Grosso do Sul.
          </p>

          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1 text-white">Sede Operacional</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1 text-white">Central de Atendimento</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5567999636464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline"
                >
                  +55 (67) 99963-6464
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1 text-white">Email Corporativo</p>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 shadow-2xl shadow-black/25"
        >
          <h3 className="font-heading font-bold text-xl mb-3 text-white">
            Solicite sua proposta corporativa
          </h3>
          <p className="text-white/40 text-sm mb-8 leading-relaxed">
            Fale diretamente com nosso time de consultores pelo WhatsApp e receba uma proposta personalizada de mobilidade corporativa para a operação da sua empresa.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa%20de%20mobilidade%20executiva."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4.5 rounded-lg font-heading font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
          >
            <MessageCircle size={22} />
            Solicitar Cotação Corporativa
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/20 text-xs">
            <span className="w-4 h-px bg-white/15" />
            Resposta em até 2 horas úteis
            <span className="w-4 h-px bg-white/15" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
