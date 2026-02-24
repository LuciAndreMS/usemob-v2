import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-28 bg-gradient-to-br from-accent to-[hsl(195,100%,40%)] relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
          Sua empresa merece um transporte à altura
        </h2>
        <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          Solicite agora uma cotação personalizada e descubra como reduzir custos com transporte executivo corporativo de alto padrão.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-charcoal transition-colors shadow-lg"
        >
          Falar no WhatsApp
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
