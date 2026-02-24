import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Headphones, CarFront, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Segurança Total", desc: "Veículos rastreados, segurados e regularmente revisados." },
  { icon: Users, title: "Motoristas Selecionados", desc: "Profissionais criteriosamente escolhidos e treinados." },
  { icon: MapPin, title: "Cobertura Regional", desc: "Atuação em Três Lagoas e toda a região do MS." },
  { icon: Headphones, title: "Atendimento Personalizado", desc: "Suporte dedicado para cada necessidade corporativa." },
  { icon: CarFront, title: "Frota Moderna", desc: "Veículos novos, higienizados e com manutenção em dia." },
  { icon: BadgeCheck, title: "Confiança Comprovada", desc: "Mais de 10 anos atendendo grandes empresas com excelência." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Differentials = () => (
  <section id="diferenciais" className="section-padding bg-navy">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-sm font-semibold tracking-widest uppercase">
          Diferenciais
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-white">
          Por que grandes empresas escolhem a <span className="text-accent">UseMOB</span>?
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-white/60 text-lg max-w-2xl mx-auto">
          Confiança construída com mais de uma década de serviço dedicado ao mercado corporativo.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="flex gap-5 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <item.icon className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base mb-1 text-white">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
