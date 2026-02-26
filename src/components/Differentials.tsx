import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Governança e Compliance", desc: "Gestão profissional de mobilidade corporativa com frota rastreada, segurada e em total conformidade documental — processos auditáveis e relatórios operacionais para sua empresa." },
  { icon: Users, title: "Motoristas Treinados e Uniformizados", desc: "Equipe de condutores selecionados com rigor, treinamento contínuo em direção defensiva, postura executiva e avaliação permanente de desempenho e conduta." },
  { icon: MapPin, title: "Cobertura Estratégica Regional", desc: "Base operacional em Três Lagoas-MS com capacidade de atendimento em todo o Mato Grosso do Sul, servindo grandes operações industriais, projetos de infraestrutura e corporações multinacionais." },
  { icon: Headphones, title: "Gestão Dedicada por Contrato", desc: "Cada cliente corporativo conta com um gestor de conta exclusivo, suporte operacional ágil, relatórios de desempenho e canal direto com a equipe comercial e operacional." },
  { icon: CarFront, title: "Frota Executiva de Alto Padrão", desc: "Veículos de última geração, padronizados e higienizados, com programa rigoroso de manutenção preventiva, corretiva e inspeção periódica para máxima segurança e conforto." },
  { icon: BadgeCheck, title: "Pontualidade e Controle Operacional", desc: "Operação contínua desde 2017 com indicadores de pontualidade acima de 99%, monitoramento GPS em tempo real e controle total de cada deslocamento corporativo." },
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
    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[120px]" />

    <div className="section-container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-xs font-semibold tracking-[0.2em] uppercase">
          Diferenciais Corporativos
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold mt-4 mb-4 text-white leading-tight">
          Por que grandes empresas <span className="text-gradient">escolhem</span> a UseMOB
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Infraestrutura operacional construída para atender as exigências de compliance, eficiência e confiabilidade de empresas de médio e grande porte em Três Lagoas e região.
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
            className="flex gap-5 bg-white/[0.03] border border-white/[0.06] rounded-xl p-7 hover:border-accent/25 transition-all duration-300 shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
              <item.icon className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base mb-2.5 text-white">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
