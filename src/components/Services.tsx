import { motion } from "framer-motion";
import { Car, Plane, Heart, Package, Bus, Bike } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const services = [
  {
    icon: Car,
    title: "Transporte Executivo Corporativo",
    desc: "Atendimento exclusivo, pontualidade e discrição para empresas e executivos que demandam alto padrão.",
  },
  {
    icon: Plane,
    title: "Traslados de Aeroporto",
    desc: "Recepção e transporte para aeroportos com conforto, flexibilidade de destino e veículos sedan ou van.",
  },
  {
    icon: Heart,
    title: "Transporte para Noivas e Debutantes",
    desc: "Elegância, pontualidade e atenção aos detalhes para ocasiões inesquecíveis e celebrações especiais.",
  },
  {
    icon: Package,
    title: "Transporte Rápido de Encomendas",
    desc: "Agilidade e eficiência em coletas e entregas através de veículos utilitários dedicados.",
  },
  {
    icon: Bus,
    title: "Locação de Van para Viagens e Eventos",
    desc: "Ideal para grupos em congressos, feiras e viagens corporativas com total conforto.",
  },
  {
    icon: Bike,
    title: "Transporte de Documentos (Motoboy)",
    desc: "Solução rápida e confiável para entregas expressas de documentos empresariais.",
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-muted">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-accent font-heading text-sm font-semibold tracking-widest uppercase"
        >
          Serviços
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl font-heading font-bold mt-4 text-foreground"
        >
          Soluções completas em transporte
        </motion.h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-card border border-border rounded-xl p-8 group hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <s.icon className="text-accent" size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
