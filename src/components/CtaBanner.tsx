import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CtaBanner = () => (
  <section className="py-24 md:py-28 bg-[#0B0D12] relative overflow-hidden">
    {/* brilho premium discreto */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-transparent" />
    <div className="absolute -top-24 left-0 w-[520px] h-[520px] bg-accent/[0.05] rounded-full blur-[180px]" />

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-strong mb-5 leading-tight">
          Leve a{" "}
          <span className="text-gold">gestão de mobilidade corporativa</span>{" "}
          da sua operação para outro nível
        </h2>

        {/* Texto */}
        <p className="text-muted2 text-lg mb-10 leading-relaxed">
          Solicite uma proposta sob medida e veja como ganhar previsibilidade, reduzir riscos operacionais
          e manter padrão profissional no atendimento à sua empresa.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold
                       hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/35"
          >
            Solicitar proposta corporativa
            <ArrowRight size={18} />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20mobilidade%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/15 text-strong px-10 py-4 rounded-lg font-semibold
                       hover:border-accent/40 hover:text-gold transition-all"
          >
            <MessageCircle size={18} />
            Falar com especialista
          </a>
        </div>

        {/* micro reforço (premium) */}
        <p className="mt-6 text-subtle text-sm">
          Atendimento corporativo • Retorno rápido • Proposta alinhada à sua operação
        </p>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
