import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Governança e Compliance",
    desc: "Gestão profissional de mobilidade corporativa com frota rastreada, segurada e em total conformidade documental — processos organizados e indicadores operacionais para sua empresa.",
  },
  {
    icon: Users,
    title: "Motoristas Treinados e Uniformizados",
    desc: "Equipe de condutores selecionados com rigor, treinamento contínuo em direção defensiva, postura executiva e avaliação permanente de desempenho.",
  },
  {
    icon: MapPin,
    title: "Cobertura Estratégica Regional",
    desc: "Base operacional em Três Lagoas-MS com capacidade de atendimento em todo o Mato Grosso do Sul, apoiando operações industriais, projetos e empresas com alto padrão de exigência.",
  },
  {
    icon: Headphones,
    title: "Gestão Dedicada por Contrato",
    desc: "Cada cliente corporativo conta com atendimento dedicado, suporte operacional ágil, relatórios de desempenho e canal direto com a equipe comercial e operacional.",
  },
  {
    icon: CarFront,
    title: "Frota Executiva de Alto Padrão",
    desc: "Veículos padronizados e higienizados, com rotina de manutenção preventiva e inspeções periódicas para máxima segurança e conforto.",
  },
  {
    icon: BadgeCheck,
    title: "Pontualidade e Controle Operacional",
    desc: "Operação contínua desde 2017 com monitoramento em tempo real e controle de cada deslocamento corporativo — previsibilidade e confiança para sua empresa.",
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
    {/* subtle lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
    <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-yellow-400/[0.06] rounded-full blur-[160px]" />

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
          className="text-yellow-400 text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Diferenciais Corporativos
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-white leading-tight"
        >
          Por que grandes empresas <span className="text-yellow-400">escolhem</span> a UseMOB
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Estrutura operacional construída para atender exigências de compliance, eficiência e confiabilidade
          de empresas de médio e grande porte em Três Lagoas e região.
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
            className="flex gap-5 bg-white/[0.03] border border-white/[0.10] rounded-2xl p-7 hover:border-yellow-400/30 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-yellow-400/10"
          >
            <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
              <item.icon className="text-yellow-400" size={24} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {items.map((item, i) => (
    <motion.div ...>
      ...
    </motion.div>
  ))}
</div>

<div className="text-center mt-16">
  <a
    href="https://api.whatsapp.com/send?phone=5567999636464&text=Olá, gostaria de solicitar uma proposta corporativa."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all shadow-lg"
  >
    Solicitar Proposta Corporativa
  </a>
</div>
            <div>
              <h3 className="font-bold text-base mb-2.5 text-white">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
