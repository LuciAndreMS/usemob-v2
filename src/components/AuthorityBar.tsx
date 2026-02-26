const stats = [
  { icon: TrendingUp, value: "Desde 2017", label: "Operação Contínua", sub: "Mais de 8 anos no mercado" },
  { icon: Building2, value: "500+", label: "Clientes Corporativos", sub: "Empresas de médio e grande porte" },
  { icon: Users, value: "50+", label: "Motoristas Dedicados", sub: "Equipe treinada e uniformizada" },
  { icon: Clock, value: "24/7", label: "Disponibilidade Total", sub: "Operação ininterrupta" },
  { icon: MapPin, value: "MS", label: "Cobertura Estadual", sub: "Três Lagoas e todo o estado" },
];

const AuthorityBar = () => (
  <section className="py-20 md:py-24 bg-[#0B0D12] relative overflow-hidden">
    {/* subtle texture */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
    {/* yellow soft glow (premium, not app-ish) */}
    <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-yellow-400/[0.06] rounded-full blur-[160px]" />

    <div className="section-container relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-12"
      >
        Indicadores de Operação Corporativa
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
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.10] hover:border-yellow-400/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shadow-lg shadow-yellow-400/10">
              <stat.icon className="text-yellow-400" size={24} />
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-white/75 mt-1.5 font-semibold">
                {stat.label}
              </p>
              <p className="text-xs text-white/50 mt-1">
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
