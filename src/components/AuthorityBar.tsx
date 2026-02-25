import { motion } from "framer-motion";
import { Building2, Clock, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10+", label: "Anos de Operação" },
  { icon: Building2, value: "500+", label: "Empresas Atendidas" },
  { icon: Users, value: "50+", label: "Motoristas Profissionais" },
  { icon: Clock, value: "24/7", label: "Operação Ininterrupta" },
];

const AuthorityBar = () => (
  <section className="py-16 bg-navy-secondary border-y border-white/5">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <stat.icon className="text-accent" size={22} />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 mt-0.5">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AuthorityBar;
