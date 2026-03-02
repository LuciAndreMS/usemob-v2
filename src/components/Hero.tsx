import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_URL } from "@/constants/whatsapp";

const Hero = () => (
  <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Mobilidade corporativa em Três Lagoas - UseMOB"
        className="w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay corporativo */}
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
          {/* Badge (premium, discreto) */}
          <span className="inline-flex items-center text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6
                           border border-accent/25 px-5 py-2 rounded-full bg-accent/10 backdrop-blur-sm">
            Mobilidade Corporativa
          </span>

          {/* Headline (B2B / indústria) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold leading-[1.05] mb-6 text-strong">
            Gestão de{" "}
            <span className="text-gold">Mobilidade Corporativa</span>{" "}
            com segurança e previsibilidade para a sua operação
          </h1>

          {/* Subheadline (corporativa, sem “marketing exagerado”) */}
          <p className="text-lg md:text-xl text-muted2 mb-8 max-w-2xl leading-relaxed">
            Atendimento estruturado para empresas e indústrias em Três Lagoas e região, com operação organizada,
            padrão profissional e controle operacional.
          </p>

          {/* Prova (curta e forte) */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-subtle">
            <span>Atendimento corporativo</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Operação estruturada</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Padrão e confiabilidade</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-base
                         hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/30 hover:translate-y-[-1px]"
            >
              Solicitar proposta corporativa
              <ArrowRight size={18} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20sobre%20mobilidade%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-strong px-10 py-4 rounded-lg font-semibold text-base
                         hover:border-accent/40 hover:text-gold transition-all backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              Falar com especialista
            </a>
          </div>

          {/* Linha de confiança (clean) */}
          <div className="mt-10 flex items-center gap-4 text-subtle text-sm font-medium">
            <span className="w-10 h-px bg-accent/60" />
            Contratos corporativos • Atendimento contínuo e sob demanda • Operação padronizada
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
