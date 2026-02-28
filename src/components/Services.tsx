import { motion } from "framer-motion";
import { Car, Plane, Package, Bus, FileText, ArrowRight } from "lucide-react";
import serv01 from "@/assets/serv01.jpg";
import serv02 from "@/assets/serv02.jpg";
import serv03 from "@/assets/serv03.jpg";
import serv04 from "@/assets/serv04.jpg";
import serv05 from "@/assets/serv05.jpg";
import serv06 from "@/assets/serv06.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const services = [
  {
    icon: Car,
    title: "Mobilidade Executiva e Corporativa",
    desc: "Operação dedicada para executivos, equipes técnicas e lideranças, com motoristas profissionais, gestão de escalas e acompanhamento operacional — incluindo atendimento em ambientes industriais e florestais.",
    image: serv01,
  },
  {
    icon: Plane,
    title: "Traslados Corporativos (Aeroporto e Rotas Estratégicas)",
    desc: "Atendimento empresarial com planejamento de horários, acompanhamento de voos quando aplicável e padrão executivo para equipes em deslocamento.",
    image: serv02,
  },
  {
    icon: Package,
    title: "Logística de Peças e Suprimentos",
    desc: "Transporte de peças industriais, insumos e materiais de linha leve e pesada, com controle operacional e cumprimento de prazos críticos.",
    image: serv03,
  },
  {
    icon: FileText,
    title: "Transporte de Documentos e Materiais Sensíveis",
    desc: "Movimentação com protocolo, rastreabilidade e confirmação de entrega para demandas que exigem confidencialidade e responsabilidade.",
    image: serv04,
  },
  {
    icon: Bus,
    title: "Locação de Veículos com Motorista (Operação Assistida)",
    desc: "Soluções sob medida para projetos e operações contínuas, com gestão operacional inclusa e padronização de atendimento.",
    image: serv05,
  },
  {
    icon: Bus,
    title: "Transporte de Refeições Coletivas",
    desc: "Distribuição de refeições para operações industriais e corporativas, com organização logística, pontualidade e controle de entregas.",
    image: serv06,
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-[#0B0D12]">
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
          Soluções Corporativas
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-strong leading-tight"
        >
          Gestão <span className="text-gold">estruturada</span> de mobilidade e logística corporativa
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted2 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Da mobilidade corporativa diária à operação assistida para projetos e demandas industriais — uma estrutura
          focada em previsibilidade, controle e confiabilidade.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-white/[0.03] border border-white/[0.10] rounded-2xl overflow-hidden group
                       hover:border-accent/30 transition-all duration-300 flex flex-col shadow-lg shadow-black/20
                       hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} - mobilidade corporativa em Três Lagoas MS`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div
                className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5
                           group-hover:bg-accent/15 transition-colors"
              >
                <s.icon className="text-gold" size={24} />
              </div>

              <h3 className="font-bold text-base mb-2.5 text-strong">
                {s.title}
              </h3>

              <p className="text-muted2 text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
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
          Retorno rápido • Proposta sob medida • Atendimento corporativo
        </p>
      </motion.div>
    </div>
  </section>
);

export default Services;
