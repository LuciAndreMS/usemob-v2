import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-20 bg-primary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Solicite uma cotação agora!
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          Iremos apresentar uma proposta atrativa de mobilidade, rapidez e segurança para a sua empresa.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-heading font-semibold hover:opacity-90 transition-opacity"
        >
          Falar no WhatsApp
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
