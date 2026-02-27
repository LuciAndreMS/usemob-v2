import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck, ArrowRight } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Governança e Conformidade Operacional",
    desc: "Operação estruturada com documentação regular, veículos monitorados e processos organizados — alinhados às exigências de empresas e contratos corporativos.",
  },
  {
    icon: Users,
    title: "Equipe Profissional e Padronizada",
    desc: "Motoristas selecionados, treinados e acompanhados continuamente, com postura compatível ao ambiente corporativo.",
  },
  {
    icon: MapPin,
    title: "Atendimento Regional Estruturado",
    desc: "Base em Três Lagoas com capacidade de atendimento em rotas estratégicas, apoiando operações industriais e empresariais.",
  },
  {
    icon: Headphones,
    title: "Gestão Dedicada por Cliente",
    desc: "Acompanhamento próximo da operação, com suporte ágil e alinhamento constante conforme a necessidade do contrato.",
  },
  {
    icon: CarFront,
    title: "Frota Padronizada e Monitorada",
    desc: "Veículos revisados, higienizados e com controle operacional, garantindo consistência no atendimento corporativo.",
  },
  {
    icon: BadgeCheck,
    title: "Controle e Previsibilidade",
    desc: "Gestão operacional que prioriza organização, cumprimento de horários e confiabilidade no atendimento.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Differentials = () => (
  <section id="diferenciais" className="section-padding bg-[#0B0D12] relative overflow-hidden">
    {/* iluminação premium discreta */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
    <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-accent/[0.05] rounded-full blur-[180px]" />

    <div className="section-container relative z-10">
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
          Diferenciais Corporativos
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-strong leading-tight"
        >
          Estrutura pensada para <span className="text-gold">operações corporativas</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted2 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Atendemos empresas que exigem organização, controle e padrão profissional na gestão de mobilidade.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="flex gap-5 bg-white/[0.03] border border-white/[0.10] rounded-2xl p-7
                       hover:border-accent/30 transition-all duration-300 shadow-lg shadow-black/20
                       hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <item.icon className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-base mb-2.5 text-strong">{item.title}</h3>
              <p className="text-muted2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA (IMPORTANTE PRA CONVERSÃO) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-16"
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
          Atendimento corporativo • Operação organizada • Proposta sob medida
        </p>
      </motion.div>
    </div>
  </section>
);

export default Differentials;
