import { motion } from "framer-motion";
import { ShieldCheck, ClipboardCheck, Navigation2, Clock } from "lucide-react";

const partners = [
  "Celulose & Papel",
  "Energia",
  "Mineração & Infraestrutura",
  "Agroindústria",
  "Logística & Supply Chain",
  "Engenharia",
  "Serviços Corporativos",
  "Setor Público (B2G)",
];

const proofs = [
  { icon: ShieldCheck, title: "Governança", desc: "Padrões operacionais e conformidade documental." },
  { icon: Navigation2, title: "Controle", desc: "Rastreio e gestão por operação." },
  { icon: ClipboardCheck, title: "Relatórios", desc: "Indicadores e prestação de contas para contratos." },
  { icon: Clock, title: "Disponibilidade", desc: "Operação contínua sob demanda e por escala." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

const PartnerLogos = () => (
  <section className="py-18 md:py-20 bg-navy-secondary border-y border-white/10 relative overflow-hidden">
    {/* subtle glow */}
    <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-accent/[0.10] rounded-full blur-[170px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

    <div className="section-container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-10"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-white/55 text-xs font-semibold tracking-[0.25em] uppercase"
        >
          Experiência em ambientes corporativos e industriais
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-2xl md:text-3xl font-bold text-white mt-4"
        >
          Estrutura pensada para{" "}
          <span className="text-accent">operações exigentes</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/60 text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
        >
          Atuamos com padrão executivo e processos de controle compatíveis com operações
          de médio e grande porte — com foco em previsibilidade, segurança e eficiência.
        </motion.p>
      </motion.div>

      {/* Proof cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {proofs.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-6 flex gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <p.icon className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{p.title}</p>
              <p className="text-white/55 text-sm mt-1 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* “Logos” safe: sectors */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5"
      >
        {partners.map((name) => (
          <span
            key={name}
            className="text-white/55 font-semibold text-sm tracking-wide select-none hover:text-accent transition-colors"
          >
            {name}
          </span>
        ))}
      </motion.div>

      <p className="text-center text-white/35 text-xs mt-10">
        *Se você desejar, podemos substituir “setores” por logos de empresas (com autorização/uso permitido).
      </p>
    </div>
  </section>
);

export default PartnerLogos;
