import { motion } from "framer-motion";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";

const vehicles = [
  { image: carousel2, alt: "Sedan executivo para transporte corporativo em Três Lagoas", label: "Sedan Executivo" },
  { image: carousel3, alt: "Van corporativa para transporte de equipes em Mato Grosso do Sul", label: "Van Corporativa" },
  { image: carousel4, alt: "Frota de veículos executivos UseMOB para mobilidade empresarial", label: "Frota Premium" },
  { image: carousel5, alt: "Veículo utilitário para logística de encomendas corporativas", label: "Utilitário Dedicado" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const VehicleShowcase = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <motion.span variants={fadeUp} custom={0} className="text-accent font-heading text-sm font-semibold tracking-widest uppercase">
          Nossa Frota
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-foreground">
          Veículos <span className="text-accent">padronizados</span> para operações corporativas
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Frota completa, higienizada e com manutenção preventiva rigorosa — pronta para atender operações de qualquer escala.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={v.image}
                alt={v.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-foreground">{v.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VehicleShowcase;
