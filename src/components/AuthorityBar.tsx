import { motion } from "framer-motion";
import { Building2, Clock, Users, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10+", label: "Anos de Operação" },
  { icon: Building2, value: "500+", label: "Empresas Atendidas" },
  { icon: Users, value: "50+", label: "Motoristas Profissionais" },
  { icon: Clock, value: "24/7", label: "Operação Ininterrupta" },
  { icon: MapPin, value: "MS", label: "Cobertura Estadual" },
];

const AuthorityBar = () => (
  <section className="py-20 bg-navy-secondary relative overflow-hidden">
    {/* Subtle depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

    <div className="section-container relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-white/30 text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-12"
      >
        Indicadores de operação
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center shadow-lg shadow-accent/5">
              <stat.icon className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-white/40 mt-1 font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AuthorityBar;
