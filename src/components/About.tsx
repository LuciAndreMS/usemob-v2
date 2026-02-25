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
    text: "Oferecer soluções de mobilidade corporativa com excelência operacional, conquistando a confiança de nossos clientes por meio de governança, pontualidade e comprometimento institucional.",
    image: aboutMission,
  },
  {
    icon: Clock,
    title: "Nossa Visão",
    text: "Ser a referência nacional em mobilidade corporativa, superando expectativas através de processos estruturados, segurança e atendimento estratégico.",
    image: aboutVision,
  },
  {
    icon: Award,
    title: "Nossos Valores",
    text: "Integridade, credibilidade, pontualidade, comprometimento, responsabilidade, transparência e respeito a clientes, parceiros e colaboradores.",
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
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent font-heading text-sm font-semibold tracking-widest uppercase"
        >
          Sobre a UseMOB
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6 text-foreground"
        >
          Mais de uma década de <span className="text-accent">confiança</span> no mercado corporativo
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          A UseMOB é especializada em gestão de mobilidade corporativa com
          motoristas profissionais. Nossa operação garante governança, controle
          de custos e eficiência logística — atendendo grandes empresas que
          demandam excelência em cada deslocamento.
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
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} - mobilidade corporativa em Três Lagoas`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center mb-5">
                <p.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{p.title}</h3>
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
