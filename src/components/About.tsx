import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutPlan from "@/assets/about-plan.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const pillars = [
  {
    icon: Shield,
    title: "Nossa Missão",
    text: "Entregar soluções de mobilidade corporativa que garantam eficiência operacional, redução de custos logísticos e conformidade — construindo parcerias de longo prazo com empresas que exigem governança em cada deslocamento.",
    image: aboutMission,
  },
  {
    icon: Clock,
    title: "Nossa Visão",
    text: "Ser referência em gestão de mobilidade corporativa, reconhecida por processos estruturados, controle operacional e capacidade de atender operações de diferentes escalas com consistência e segurança.",
    image: aboutVision,
  },
  {
    icon: Award,
    title: "Nossos Valores",
    text: "Integridade, confiabilidade, pontualidade, transparência, foco em resultado e respeito a clientes, parceiros e colaboradores em cada etapa da operação.",
    image: aboutPlan,
  },
];

const About = () => (
  <section id="quem-somos" className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Sobre a UseMOB
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-6 text-foreground leading-tight"
        >
          Parceira estratégica em{" "}
          <span className="text-accent">mobilidade corporativa</span>{" "}
          desde 2017
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          A UseMOB é especializada em gestão completa de mobilidade corporativa com motoristas profissionais.
          Nossa operação garante governança, previsibilidade e eficiência — atendendo empresas que demandam
          confiabilidade e padrão executivo em cada deslocamento em Três Lagoas e região.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} - mobilidade corporativa em Três Lagoas`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                <p.icon className="text-accent" size={22} />
              </div>

              <h3 className="font-bold text-xl mb-3 text-foreground">
                {p.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {p.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
