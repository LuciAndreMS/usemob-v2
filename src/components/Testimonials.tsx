import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Paulo",
    role: "Coordenador de Logística",
    company: "Multinacional do Setor de Celulose",
    text: "A UseMOB é a empresa escolhida para atender nossos executivos no MS pela qualidade, confiabilidade e eficiência. Profissionais capacitados, veículos confortáveis e operação extremamente pontual.",
  },
  {
    name: "Priscila Martins",
    role: "Analista de RH",
    company: "Indústria de Grande Porte",
    text: "Excelente atendimento e pontualidade. Veículos limpos, confortáveis e equipe profissional. A UseMOB entrega exatamente o que promete.",
  },
  {
    name: "Marcelo Pimentel",
    role: "Gerente de Projetos",
    company: "Empresa de Engenharia e Infraestrutura",
    text: "Mais do que uma prestadora de serviço, a UseMOB se posiciona como parceira. Sempre disponível, com alto padrão de qualidade e profissionalismo.",
  },
  {
    name: "Fernando Augusto",
    role: "Diretor Executivo",
    company: "Grupo Empresarial Regional",
    text: "Serviço de alto nível. Pontualidade, organização e confiabilidade. Recomendo para empresas que precisam de padrão executivo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const Testimonials = () => (
  <section id="depoimentos" className="section-padding bg-navy text-white">
    <div className="section-container">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Clientes e Parceiros
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4"
        >
          Empresas que confiam na{" "}
          <span className="text-accent">UseMOB</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/50 text-lg max-w-2xl mx-auto"
        >
          Gestores, coordenadores e diretores que utilizam a UseMOB como parceira estratégica
          em mobilidade corporativa.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-navy-secondary border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
          >
            <Quote className="text-accent/30 mb-6" size={32} />

            <p className="text-white/70 leading-relaxed mb-8 text-sm">
              "{t.text}"
            </p>

            <div className="border-t border-white/5 pt-5">
              <p className="font-bold text-white text-sm">{t.name}</p>
              <p className="text-xs text-white/50">{t.role}</p>
              <p className="text-xs text-accent font-medium">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
