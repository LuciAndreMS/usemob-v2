import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-24 bg-accent relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-[0.06]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
          Eleve o padrão de mobilidade da sua empresa
        </h2>
        <p className="text-accent-foreground/70 text-lg mb-8 max-w-lg mx-auto">
          Solicite uma proposta corporativa personalizada e descubra como otimizar custos operacionais com transporte executivo de alto padrão.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-charcoal transition-colors"
        >
          Solicitar Proposta Corporativa
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
