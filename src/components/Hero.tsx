import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Transporte corporativo em Três Lagoas - frota executiva UseMOB"
        className="w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay profissional */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
    </div>

    <div className="w-full">
      <div className="section-container relative z-10 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6 border border-accent/30 px-5 py-2 rounded-full bg-accent/10 backdrop-blur-sm">
            Mobilidade Corporativa
          </span>

          {/* Headline (nível B2B forte) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold leading-[1.05] mb-6 text-white">
            Gestão de{" "}
            <span className="text-accent">
              mobilidade corporativa
            </span>{" "}
            com padrão executivo
          </h1>

          {/* Subheadline (mais estratégica) */}
          <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl leading-relaxed">
            Estruturamos e operamos o transporte da sua empresa com controle,
            previsibilidade e segurança — reduzindo riscos operacionais e
            garantindo pontualidade em cada deslocamento.
          </p>

          {/* Prova (IMPORTANTE PRA CONVERSÃO) */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-white/60">
            <span>+8 anos de operação</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>Atendimento corporativo contínuo</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>Frota monitorada e padronizada</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa%20de%20mobilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/40 hover:translate-y-[-1px]"
            >
              Solicitar Proposta Corporativa
              <ArrowRight size={18} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20mobilidade%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white px-10 py-4 rounded-lg font-semibold text-base hover:border-accent hover:text-accent transition-all backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              Falar com um Consultor
            </a>
          </div>

          {/* Linha de confiança */}
          <div className="mt-10 flex items-center gap-4 text-white/50 text-sm font-medium">
            <span className="w-10 h-px bg-accent/60" />
            Operação estruturada • Contratos corporativos • Atendimento sob demanda e contínuo
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
