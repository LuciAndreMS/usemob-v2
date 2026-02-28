import { motion } from "framer-motion";
import { ShieldCheck, Timer, Sparkles, Navigation2, ArrowRight } from "lucide-react";
import carousel2 from "@/assets/showcase-1.jpg";
import carousel3 from "@/assets/showcase-2.jpg";
import carousel4 from "@/assets/showcase-3.jpg";
import carousel5 from "@/assets/showcase-4.jpg";

const vehicles = [
  {
    image: carousel2,
    alt: "Veículo com checklist operacional e padrão corporativo",
    label: "Padrão de Apresentação",
    desc: "Veículos higienizados e preparados para atendimento corporativo com consistência.",
  },
  {
    image: carousel3,
    alt: "Monitoramento de frota com rastreamento em tempo real",
    label: "Rastreio e Controle",
    desc: "Monitoramento em tempo real e gestão operacional com previsibilidade.",
  },
  {
    image: carousel4,
    alt: "Manutenção preventiva de veículos corporativos",
    label: "Manutenção Preventiva",
    desc: "Revisões periódicas para garantir continuidade e segurança da operação.",
  },
  {
    image: carousel5,
    alt: "Veículos segurados e operação conforme normas corporativas",
    label: "Seguro e Conformidade",
    desc: "Operação com documentação regular e alinhada às exigências corporativas.",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "Seguro e conformidade", desc: "Documentação e padrões operacionais para ambiente corporativo." },
  { icon: Navigation2, title: "Rastreio e controle", desc: "Acompanhamento operacional e visibilidade do atendimento." },
  { icon: Timer, title: "Manutenção preventiva", desc: "Rotinas de revisão e inspeções periódicas para reduzir riscos." },
  { icon: Sparkles, title: "Padrão de apresentação", desc: "Higienização e apresentação compatíveis com contratos B2B." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const VehicleShowcase = () => (
  <section className="section-padding bg-[#0B0D12]">
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
          className="text-gold text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Frota e Padrão Operacional
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-strong leading-tight"
        >
          Estrutura <span className="text-gold">padronizada</span> para atendimento corporativo
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted2 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Veículos revisados, higienizados e dimensionados para operações corporativas — com consistência, segurança e
          previsibilidade em cada atendimento.
        </motion.p>
      </motion.div>

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-5 flex gap-4 items-start
                       hover:border-accent/25 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <h.icon className="text-gold" size={20} />
            </div>
            <div>
              <p className="text-strong font-semibold text-sm">{h.title}</p>
              <p className="text-muted2 text-sm leading-relaxed mt-1">{h.desc}</p>
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
            className="group rounded-2xl overflow-hidden border border-white/[0.10] bg-white/[0.03]
                       shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300
                       hover:border-accent/25"
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
              <h3 className="font-bold text-strong mb-1.5">{v.label}</h3>
              <p className="text-muted2 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA (conversão) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-14"
      >
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa%20de%20mobilidade."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold
                     hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/35"
        >
          Solicitar proposta corporativa
          <ArrowRight size={18} />
        </a>

        <p className="mt-4 text-subtle text-sm">
          Atendimento corporativo • Operação padronizada • Proposta sob medida
        </p>
      </motion.div>
    </div>
  </section>
);

export default VehicleShowcase;
