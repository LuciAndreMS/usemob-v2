import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Transporte executivo corporativo em Três Lagoas - frota premium UseMOB"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40" />
    </div>

    <div className="w-full">
      <div className="section-container relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-heading text-sm font-semibold tracking-widest uppercase mb-6">
            Mobilidade Corporativa Estratégica
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold leading-[1.08] mb-6 text-white">
            Soluções integradas em{" "}
            <span className="text-accent">mobilidade corporativa</span> para grandes operações
          </h1>

          <p className="text-lg md:text-xl text-white/65 mb-10 max-w-xl leading-relaxed">
            Governança, eficiência operacional e confiabilidade. Gestão completa
            de frotas com motoristas profissionais para empresas que exigem
            excelência em cada deslocamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
            >
              Solicitar Proposta Corporativa
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/80 px-8 py-4 rounded-md font-heading font-semibold text-base hover:border-accent hover:text-accent transition-colors"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
