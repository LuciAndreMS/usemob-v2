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
    desc: "Gestão dedicada com motoristas profissionais, pontualidade e discrição para executivos e deslocamentos corporativos estratégicos.",
    image: serv01,
  },
  {
    icon: Plane,
    title: "Traslados Aeroportuários",
    desc: "Transfer corporativo com monitoramento de voo, recepção personalizada e frota sedan ou van para equipes e diretoria.",
    image: serv02,
  },
  {
    icon: Heart,
    title: "Transporte para Eventos Especiais",
    desc: "Elegância, pontualidade e atenção aos detalhes para ocasiões especiais e celebrações corporativas ou particulares.",
    image: serv03,
  },
  {
    icon: Package,
    title: "Logística de Encomendas",
    desc: "Operação ágil de coletas e entregas com veículos utilitários dedicados e rastreamento em tempo real.",
    image: serv04,
  },
  {
    icon: Bus,
    title: "Locação de Frotas com Motorista",
    desc: "Frotas sob medida para congressos, feiras, eventos corporativos e operações empresariais de grande porte.",
    image: serv05,
  },
  {
    icon: Bike,
    title: "Transporte de Documentos",
    desc: "Solução expressa e confiável para entregas corporativas de documentos sensíveis e correspondências urgentes.",
    image: serv06,
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-navy">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
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
          className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-white"
        >
          Soluções <span className="text-accent">integradas</span> de mobilidade corporativa
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/50 text-lg max-w-2xl mx-auto"
        >
          Do transporte executivo diário à gestão de frotas para operações de grande porte — estrutura completa para sua empresa.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden group hover:border-accent/30 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} - transporte corporativo em Três Lagoas MS`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-base mb-2 text-white">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
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
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold hover:bg-accent-hover transition-colors"
        >
          Solicitar Proposta Corporativa
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
