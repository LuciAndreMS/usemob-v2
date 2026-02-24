import { motion } from "framer-motion";
import { Car, Plane, Heart, Package, Bus, Bike, ArrowRight } from "lucide-react";
import serv01 from "@/assets/serv01.jpg";
import serv02 from "@/assets/serv02.jpg";
import serv03 from "@/assets/serv03.jpg";
import serv04 from "@/assets/serv04.jpg";
import serv05 from "@/assets/serv05.jpg";
import serv06 from "@/assets/serv06.jpg";

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
    desc: "Atendimento exclusivo com motoristas profissionais, pontualidade e discrição para executivos e viagens de negócios.",
    image: serv01,
  },
  {
    icon: Plane,
    title: "Traslados de Aeroporto",
    desc: "Transfer corporativo com monitoramento de voo, recepção personalizada e frota sedan ou van para sua equipe.",
    image: serv02,
  },
  {
    icon: Heart,
    title: "Transporte para Noivas e Debutantes",
    desc: "Elegância, pontualidade e atenção aos detalhes para ocasiões inesquecíveis e celebrações especiais.",
    image: serv03,
  },
  {
    icon: Package,
    title: "Transporte Rápido de Encomendas",
    desc: "Agilidade e eficiência em coletas e entregas através de veículos utilitários dedicados.",
    image: serv04,
  },
  {
    icon: Bus,
    title: "Locação de Van para Viagens e Eventos",
    desc: "Locação de frota com motorista para congressos, feiras, eventos corporativos e viagens empresariais.",
    image: serv05,
  },
  {
    icon: Bike,
    title: "Transporte de Documentos (Motoboy)",
    desc: "Solução rápida e confiável para entregas expressas de documentos empresariais.",
    image: serv06,
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
          className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-foreground"
        >
          Soluções completas em transporte corporativo
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Do transporte executivo diário à locação de frota para eventos — atendemos todas as demandas da sua empresa.
        </motion.p>
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
            className="bg-card border border-border rounded-xl overflow-hidden group hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={26} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-14"
      >
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20UseMOB."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold hover:opacity-90 transition-opacity"
        >
          Solicitar cotação para sua empresa
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
