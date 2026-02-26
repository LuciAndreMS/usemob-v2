import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "João Paulo",
    role: "Coordenador de Logística",
    text: "A UseMOB é a empresa escolhida para atender os executivos da nossa empresa no MS pela qualidade, confiabilidade e eficiência nos serviços prestados. Profissionais capacitados, veículos confortáveis, segurança e pontualidade.",
  },
  {
    name: "Priscila Martins",
    role: "Analista de RH",
    text: "Excelente atendimento e pontualidade! Carro confortável, limpo e espaçoso! Preço justo! Nota 1000 para a empresa, destaque para a qualidade impecável dos veículos e pontualidade nos horários!",
  },
  {
    name: "Marcelo Pimentel",
    role: "Gerente de Projetos",
    text: "A UseMOB sempre se mostra mais do que uma prestadora de serviços, uma grande parceira preocupada em oferecer o melhor, qualidade e pronta disposição em nos atender. Profissionalismo e respeito aos clientes.",
  },
  {
    name: "Fernando Augusto",
    role: "Diretor Executivo",
    text: "Atendimento nota mil, carro excelente, limpo, pontualidade no horário combinado, motorista cuidadoso e atencioso. Registro meu agradecimento pelo profissionalismo e excelência, super recomendo!",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const Testimonials = () => (
  <section id="depoimentos" className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-xs font-semibold tracking-[0.2em] uppercase">
          Depoimentos
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold mt-4 mb-4 text-foreground leading-tight">
          A <span className="text-accent">confiança</span> de quem já opera conosco
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Gestores e empresas que comprovaram a excelência operacional da UseMOB em mobilidade corporativa.
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
            className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative"
          >
            <Quote className="text-accent/15 mb-5" size={36} />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="text-accent fill-accent" size={14} />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 border-t border-border pt-5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
