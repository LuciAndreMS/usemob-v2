import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Transporte executivo corporativo em Três Lagoas - frota premium UseMOB"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
    </div>

    <div className="w-full">
      <div className="section-container relative z-10 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-heading text-xs font-semibold tracking-[0.2em] uppercase mb-8 border border-accent/20 px-4 py-1.5 rounded-full bg-accent/5">
            Mobilidade Corporativa Estratégica
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-heading font-bold leading-[1.06] mb-8 text-white">
            Transporte corporativo com{" "}
            <span className="text-accent">padrão executivo</span> para empresas
            que exigem excelência
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
            Governança, eficiência operacional e confiabilidade. Gestão completa
            de frotas com motoristas profissionais para empresas que exigem
            excelência em cada deslocamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-10 py-4.5 rounded-lg font-heading font-bold text-base hover:bg-accent-hover transition-all shadow-xl shadow-accent/25 hover:shadow-accent/40"
            >
              Solicitar Cotação Corporativa
              <ArrowRight size={18} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20transporte%20corporativo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/15 text-white/80 px-10 py-4.5 rounded-lg font-heading font-semibold text-base hover:border-accent hover:text-accent transition-all backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-white/35 text-sm font-medium tracking-wide">
            <span className="w-8 h-px bg-accent/40" />
            Atendimento corporativo • Segurança • Pontualidade
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
