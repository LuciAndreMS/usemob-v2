HERO

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

      {/* Dark overlay (mais forte e profissional) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradiente para leitura */}
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
          <span className="inline-block text-yellow-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6 border border-yellow-400/30 px-5 py-2 rounded-full bg-yellow-400/10 backdrop-blur-sm">
            Mobilidade Corporativa
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold leading-[1.05] mb-6 text-white">
            Gestão de{" "}
            <span className="text-yellow-400">
              transporte corporativo
            </span>{" "}
            com padrão profissional
          </h1>

          {/* Subheadline (mais direto e forte) */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Muito mais do que transporte: oferecemos soluções estruturadas de
            mobilidade para empresas que precisam de segurança, pontualidade e
            controle operacional.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold text-base hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/40 hover:translate-y-[-1px]"
            >
              Solicitar Cotação Corporativa
              <ArrowRight size={18} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20transporte%20corporativo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white px-10 py-4 rounded-lg font-semibold text-base hover:border-yellow-400 hover:text-yellow-400 transition-all backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              Falar com um Consultor
            </a>
          </div>

          {/* Linha de confiança */}
          <div className="mt-10 flex items-center gap-4 text-white/60 text-sm font-medium">
            <span className="w-10 h-px bg-yellow-400/60" />
            Atendimento corporativo • Profissionais qualificados • Pontualidade garantida
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
