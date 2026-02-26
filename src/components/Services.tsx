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
    title: "Gestão de Transporte Executivo",
    desc: "Operação dedicada com motoristas profissionais, gestão de escala e monitoramento em tempo real para deslocamentos estratégicos de diretoria e equipes corporativas.",
    image: serv01,
  },
  {
    icon: Plane,
    title: "Traslados Aeroportuários Corporativos",
    desc: "Transfer empresarial com monitoramento de voo, recepção personalizada e frota sedan ou van — eficiência e pontualidade para equipes e executivos em trânsito.",
    image: serv02,
  },
  {
    icon: Heart,
    title: "Mobilidade para Eventos Corporativos",
    desc: "Logística de transporte completa para congressos, feiras, celebrações institucionais e eventos corporativos com coordenação operacional dedicada.",
    image: serv03,
  },
  {
    icon: Package,
    title: "Logística Expressa de Encomendas",
    desc: "Operação ágil de coletas e entregas com veículos utilitários dedicados, rastreamento em tempo real e controle total da cadeia de distribuição.",
    image: serv04,
  },
  {
    icon: Bus,
    title: "Locação de Frotas com Gestão",
    desc: "Frotas dimensionadas sob medida para operações contínuas, projetos industriais e demandas de grande porte — com gestão operacional inclusa e indicadores de desempenho.",
    image: serv05,
  },
  {
    icon: Bike,
    title: "Transporte Seguro de Documentos",
    desc: "Solução expressa e confiável para entregas corporativas de documentos sensíveis, correspondências urgentes e materiais com protocolo de segurança.",
    image: serv06,
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-[#0B0D12]">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-yellow-400 text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Soluções Corporativas
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 mb-4 text-white leading-tight"
        >
          Gestão <span className="text-yellow-400">integrada</span> de mobilidade para sua empresa
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Da gestão de transporte executivo diário à operação de frotas para grandes projetos industriais — estrutura completa para empresas que exigem controle, eficiência e confiabilidade.
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
            className="bg-white/[0.03] border border-white/[0.10] rounded-2xl overflow-hidden group hover:border-yellow-400/30 transition-all duration-300 flex flex-col shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-yellow-400/10"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} - transporte corporativo em Três Lagoas MS`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-5 group-hover:bg-yellow-400/15 transition-colors">
                <s.icon className="text-yellow-400" size={24} />
              </div>

              <h3 className="font-bold text-base mb-2.5 text-white">
                {s.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16"
      >
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa%20de%20mobilidade."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/40"
        >
          Solicitar Cotação Corporativa
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
