import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Governança e Compliance", desc: "Frota rastreada, segurada e com documentação em conformidade. Processos alinhados à governança corporativa." },
  { icon: Users, title: "Capital Humano Qualificado", desc: "Motoristas criteriosamente selecionados, treinados e com avaliação contínua de desempenho." },
  { icon: MapPin, title: "Cobertura Estratégica", desc: "Operação estruturada em Três Lagoas-MS com expansão regional para atender grandes operações." },
  { icon: Headphones, title: "Gestão de Conta Dedicada", desc: "Equipe comercial exclusiva para cada contrato corporativo. Suporte ágil e personalizado." },
  { icon: CarFront, title: "Frota Padronizada", desc: "Veículos de última geração, higienizados e com manutenção preventiva rigorosa." },
  { icon: BadgeCheck, title: "Parceria de Longo Prazo", desc: "Mais de 10 anos atendendo grandes empresas com contratos contínuos e confiança comprovada." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Differentials = () => (
  <section id="diferenciais" className="section-padding bg-navy-secondary">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-sm font-semibold tracking-widest uppercase">
          Diferenciais
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-white">
          Por que grandes empresas <span className="text-accent">confiam</span> na UseMOB
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mx-auto">
          Estrutura operacional sólida construída ao longo de mais de uma década de serviço dedicado ao mercado corporativo.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="flex gap-5 bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center">
              <item.icon className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base mb-1 text-white">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
