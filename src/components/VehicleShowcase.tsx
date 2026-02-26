import { motion } from "framer-motion";
import { ShieldCheck, Timer, Sparkles, Navigation2 } from "lucide-react";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";

const vehicles = [
  {
    image: carousel2,
    alt: "Sedan executivo para transporte corporativo em Três Lagoas",
    label: "Sedan Executivo",
    desc: "Conforto e discrição para deslocamentos de diretoria e executivos.",
  },
  {
    image: carousel3,
    alt: "Van corporativa para transporte de equipes em Mato Grosso do Sul",
    label: "Van Corporativa",
    desc: "Capacidade para equipes, grupos empresariais e operações de campo.",
  },
  {
    image: carousel4,
    alt: "Frota de veículos executivos UseMOB para mobilidade empresarial",
    label: "Frota Padronizada",
    desc: "Veículos revisados e padronizados para consistência em contratos corporativos.",
  },
  {
    image: carousel5,
    alt: "Veículo utilitário para logística corporativa em Três Lagoas",
    label: "Utilitário Dedicado",
    desc: "Apoio logístico com agilidade, rastreio e controle operacional.",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "Seguro e conformidade", desc: "Documentação e padrões operacionais para empresas." },
  { icon: Navigation2, title: "Rastreio e controle", desc: "Monitoramento em tempo real e gestão por operação." },
  { icon: Timer, title: "Manutenção preventiva", desc: "Rotinas de revisão e inspeções periódicas." },
  { icon: Sparkles, title: "Padrão executivo", desc: "Higienização e apresentação compatíveis com B2B." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.10 },
  }),
};

const VehicleShowcase = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Frota e Padrão Operacional
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-foreground leading-tight"
        >
          Veículos <span className="text-accent">padronizados</span> para contratos corporativos
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Frota higienizada, revisada e dimensionada para operações corporativas — com consistência,
          segurança e controle em cada deslocamento.
        </motion.p>
      </motion.div>

      {/* Highlights (empresa grande) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="rounded-2xl bg-card border border-border/70 p-5 flex gap-4 items-start"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <h.icon className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">{h.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1">{h.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="group rounded-2xl overflow-hidden border border-border/70 bg-card shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={v.image}
                alt={v.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-foreground mb-1.5">{v.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VehicleShowcase;
