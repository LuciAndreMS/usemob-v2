import { motion } from "framer-motion";

const partners = [
  "Suzano",
  "Eldorado Brasil",
  "Bracell",
  "Energisa",
  "Raízen",
  "BNDES",
  "Votorantim",
  "Cargill",
];

const PartnerLogos = () => (
  <section className="py-16 bg-background border-y border-border/60">
    <div className="section-container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-xs font-semibold tracking-[0.25em] uppercase mb-10"
      >
        Empresas e operações que confiam na UseMOB para mobilidade corporativa
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
      >
        {partners.map((name) => (
          <span
            key={name}
            className="text-foreground/70 font-heading font-bold text-lg md:text-xl tracking-wide select-none hover:text-accent transition-colors duration-300"
          >
            {name}
          </span>
        ))}
      </motion.div>

      <p className="text-center text-muted-foreground text-xs mt-10">
        *Exemplos de segmentos e operações atendidas. Marcas citadas apenas como referência.
      </p>
    </div>
  </section>
);

export default PartnerLogos;
