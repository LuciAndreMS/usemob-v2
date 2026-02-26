import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ClipboardList, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico da operação",
    desc: "Mapeamos trechos, horários, volumes, padrão de atendimento e necessidades de compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Modelo operacional + SLA",
    desc: "Definimos padrão executivo, governança, canais de suporte, contingência e nível de serviço.",
  },
  {
    icon: BarChart3,
    title: "Gestão e indicadores",
    desc: "Relatórios e controle por operação para reduzir riscos, custos e improdutividade logística.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.10 },
  }),
};

const CtaBanner = () => (
  <section className="py-24 md:py-28 bg-navy relative overflow-hidden">
    {/* subtle glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent" />
    <div className="absolute -top-24 left-0 w-[520px] h-[520px] bg-accent/[0.10] rounded-full blur-[170px]" />

    <div className="section-container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6 border border-accent/30 px-5 py-2 rounded-full bg-accent/10 backdrop-blur-sm"
        >
          Contrato Corporativo • Operação Estruturada
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-5 leading-tight"
        >
          Como funciona uma{" "}
          <span className="text-accent">operação corporativa</span> com a UseMOB
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/70 text-lg mb-12 leading-relaxed"
        >
          Não é apenas “transporte”. É gestão: padrão executivo, previsibilidade, governança e controle
          para empresas que precisam de operação estável — todos os dias.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-left mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i + 3}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.10] p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <s.icon className="text-accent" size={22} />
              </div>
              <p className="text-white font-semibold">{s.title}</p>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div variants={fadeUp} custom={6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa.%20Minha%20demanda%3A%20(empresa%2Ftrechos%2Fhor%C3%A1rios%2Fvolume%2Fin%C3%ADcio)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-bold hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/40"
          >
            Solicitar Proposta Corporativa
            <ArrowRight size={18} />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20comercial%20sobre%20um%20contrato%20corporativo%20de%20mobilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/20 text-white px-10 py-4 rounded-lg font-semibold hover:border-accent hover:text-accent transition-all"
          >
            <MessageCircle size={18} />
            Falar com o Comercial
          </a>
        </motion.div>

        <motion.p variants={fadeUp} custom={7} className="text-white/35 text-xs mt-8">
          Retorno comercial em até <span className="text-white/70 font-semibold">2 horas úteis</span>. Operação 24/7 sob contrato.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
