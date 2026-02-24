import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contato" className="section-padding bg-navy">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-heading text-sm font-semibold tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6 text-white">
            Fale com nossa <span className="text-accent">equipe comercial</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Apresentamos soluções sob medida para a operação da sua empresa.
            Entre em contato e receba uma proposta corporativa personalizada.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1 text-white">Sede Operacional</p>
                <p className="text-white/50 text-sm">
                  Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1 text-white">Telefone / WhatsApp</p>
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
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center flex-shrink-0">
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
          className="bg-navy-secondary border border-white/8 rounded-xl p-8"
        >
          <h3 className="font-heading font-bold text-xl mb-2 text-white">
            Solicite sua proposta corporativa
          </h3>
          <p className="text-white/50 text-sm mb-8">
            Fale diretamente com nosso time comercial pelo WhatsApp e receba uma proposta personalizada para a operação da sua empresa.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa%20de%20transporte%20executivo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4 rounded-lg font-heading font-semibold hover:bg-accent-hover transition-colors"
          >
            <MessageCircle size={22} />
            Falar com o Comercial
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
