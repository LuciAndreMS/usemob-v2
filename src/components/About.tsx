import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

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
    text: "Prestar serviços de transporte com excelência e responsabilidade, conquistando a confiança de nossos clientes através da ética, pontualidade e comprometimento.",
  },
  {
    icon: Clock,
    title: "Nossa Visão",
    text: "Ser referência em mobilidade corporativa, superando expectativas ao oferecer segurança, agilidade e atendimento personalizado.",
  },
  {
    icon: Award,
    title: "Nossos Valores",
    text: "Honestidade, credibilidade, pontualidade, comprometimento, responsabilidade, transparência e respeito a clientes, parceiros e colaboradores.",
  },
];

const About = () => (
  <section id="quem-somos" className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent font-heading text-sm font-semibold tracking-widest uppercase"
        >
          Quem Somos
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6 text-foreground"
        >
          Mais de 10 anos de excelência em transporte corporativo
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          A UseMOB é especializada na locação de veículos com motorista para
          empresas. Nosso atendimento personalizado garante pontualidade,
          segurança e motoristas profissionais criteriosamente selecionados —
          tudo para que sua operação logística funcione com máxima eficiência.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-card border border-border rounded-xl p-8 hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <p.icon className="text-accent" size={22} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
