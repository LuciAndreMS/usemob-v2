import { motion } from "framer-motion";
import { Car, Plane, Package, Bus, FileText, ArrowRight, Utensils } from "lucide-react";
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
    title: "Mobilidade Executiva e Corporativa",
    desc: "Operação dedicada para executivos, equipes técnicas e lideranças, com motoristas profissionais, gestão de escalas e acompanhamento operacional — incluindo atendimento para ambientes industriais e florestais.",
    image: serv01,
  },
  {
    icon: Plane,
    title: "Traslados Corporativos (Aeroporto e Rotas Estratégicas)",
    desc: "Atendimento empresarial com planejamento de horários, acompanhamento de voo quando aplicável e padrão executivo para equipes em trânsito.",
    image: serv02,
  },
  {
    icon: Package,
    title: "Logística de Peças e Suprimentos (Linha Leve e Pesada)",
    desc: "Transporte de peças industriais, insumos e materiais para operação industrial e florestal, com controle operacional e cumprimento de prazos críticos.",
    image: serv03,
  },
  {
    icon: FileText,
    title: "Transporte Seguro de Documentos e Materiais Sensíveis",
    desc: "Fluxos com protocolo, rastreabilidade e confirmação de entrega para demandas corporativas que exigem cuidado, confidencialidade e responsabilidade.",
    image: serv04,
  },
  {
    icon: Bus,
    title: "Locação de Veículos com Motorista (Operação Assistida)",
    desc: "Atendimento sob medida para projetos e operações contínuas, com gestão operacional inclusa e padronização de serviço.",
    image: serv05,
  },
  {
    icon: Utensils,
    title: "Transporte de Refeições Coletivas",
    desc: "Distribuição de refeições para operações industriais e corporativas, com organização logística, pontualidade e controle de entregas em janelas de horário.",
    image: serv06,
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-[#0B0D12]">
    <div className="section-container">
      {/* ... resto igual */}
    </div>
  </section>
);

export default Services;
