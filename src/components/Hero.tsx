import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Transporte executivo corporativo com conforto e segurança"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
    </div>

    <div className="container relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-block text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-6">
          Mobilidade Corporativa
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6">
          Transporte Executivo com{" "}
          <span className="text-gradient">excelência</span> e{" "}
          <span className="text-gradient">segurança</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
          Soluções em transporte corporativo com foco em praticidade, economia e
          agilidade. Reduza custos operacionais com um serviço sob medida para
          sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Solicitar Cotação
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:bg-secondary transition-colors"
          >
            Nossos Serviços
          </a>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-10"
      >
        {[
          { value: "10+", label: "Anos de Experiência" },
          { value: "500+", label: "Clientes Corporativos" },
          { value: "100%", label: "Frota Rastreada" },
          { value: "24/7", label: "Atendimento" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
