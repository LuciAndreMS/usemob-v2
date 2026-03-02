import { motion } from "framer-motion";
import { Building2, Clock, Users, BarChart3, MapPin } from "lucide-react";

const stats = [
  { icon: BarChart3, value: "Desde 2017", label: "Operação Contínua", sub: "Histórico consistente na região" },
  { icon: Building2, value: "B2B", label: "Foco Corporativo", sub: "Atendimento para empresas e indústrias" },

  { icon: Users, value: "+50.000", label: "Atendimentos", sub: "Operações realizadas com padrão e pontualidade" },
  { icon: Clock, value: "+10", label: "Empresas atendidas", sub: "Contratos e demandas recorrentes" },

  { icon: MapPin, value: "MS", label: "Cobertura Regional", sub: "Três Lagoas, Inocência, Água Clara e Ribas do Rio Pardo" },
];

const AuthorityBar = () => (
  <section className="py-20 md:py-24 bg-[#0B0D12] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
    <div className="absolute -top-28 right-0 w-[520px] h-[520px] bg-accent/[0.05] rounded-full blur-[180px]" />

    <div className="section-container relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-subtle text-xs font-semibold tracking-[0.25em] uppercase mb-12"
      >
        Indicadores de Estrutura Operacional
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl
                       bg-white/[0.03] border border-white/[0.10]
                       hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/10">
              <stat.icon className="text-gold" size={24} />
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-bold text-strong tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-muted2 mt-1.5 font-semibold">
                {stat.label}
              </p>
              <p className="text-xs text-subtle mt-1">
                {stat.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AuthorityBar;
