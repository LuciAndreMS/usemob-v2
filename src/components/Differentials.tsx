import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Governança e Compliance", desc: "Gestão profissional de mobilidade corporativa com frota rastreada, segurada e em total conformidade documental e regulatória." },
  { icon: Users, title: "Motoristas Treinados e Uniformizados", desc: "Equipe de condutores criteriosamente selecionados, com treinamento contínuo, postura profissional e avaliação permanente de desempenho." },
  { icon: MapPin, title: "Cobertura Estratégica Regional", desc: "Operação estruturada em Três Lagoas-MS com cobertura em todo o estado de Mato Grosso do Sul, atendendo grandes operações industriais e corporativas." },
  { icon: Headphones, title: "Atendimento Dedicado para Empresas", desc: "Gestão de conta exclusiva para cada contrato corporativo, com suporte ágil, relatórios operacionais e comunicação direta com a equipe comercial." },
  { icon: CarFront, title: "Frota Executiva com Padrão Elevado", desc: "Veículos de última geração, padronizados, higienizados e com programa rigoroso de manutenção preventiva e corretiva." },
  { icon: BadgeCheck, title: "Pontualidade e Controle Operacional", desc: "Mais de 10 anos de operação ininterrupta com indicadores de pontualidade acima de 99% e controle total de cada deslocamento." },
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
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-sm font-semibold tracking-widest uppercase">
          Diferenciais
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-white">
          Por que grandes empresas <span className="text-accent">confiam</span> na UseMOB
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Estrutura operacional sólida construída ao longo de mais de uma década de serviço dedicado ao transporte corporativo em Três Lagoas e região.
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
            className="flex gap-5 bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center">
              <item.icon className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base mb-2 text-white">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
