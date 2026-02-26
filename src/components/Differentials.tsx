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
  <section id="diferenciais" className="section-padding bg-navy-secondary relative overflow-hidden">
    {/* Subtle depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-transparent" />

    <div className="section-container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-xs font-semibold tracking-[0.2em] uppercase">
          Diferenciais
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold mt-4 mb-4 text-white leading-tight">
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
            className="flex gap-5 bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-accent/20 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl"
          >
            <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center">
              <item.icon className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base mb-2.5 text-white">{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
