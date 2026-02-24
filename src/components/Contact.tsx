import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contato" className="section-padding bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Ficou com dúvidas ou deseja mais informações sobre qual é a melhor
            alternativa para sua empresa? Entre em contato conosco. Teremos
            prazer em atendê-lo.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1">Endereço</p>
                <p className="text-muted-foreground text-sm">
                  Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1">Telefone / WhatsApp</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5567999636464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  +55 (67) 99963-6464
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm mb-1">Email</p>
                <a
                  href="mailto:contato@usemob.com.br"
                  className="text-primary text-sm hover:underline"
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
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="font-heading font-bold text-xl mb-6">
            Solicite uma cotação rápida
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            Clique no botão abaixo para falar diretamente conosco pelo WhatsApp e receba uma proposta personalizada.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transporte%20executivo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[hsl(142,70%,40%)] text-foreground px-6 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={22} />
            Conversar no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
