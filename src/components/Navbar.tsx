import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_PROPOSTA =
  "https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center" onClick={close}>
          <img
            src={logo}
            alt="UseMOB - Mobilidade Corporativa"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted2 hover:text-gold transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}

          <a
            href={WHATSAPP_PROPOSTA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold
                       hover:bg-accent-hover transition-colors shadow-lg hover:shadow-accent/25"
          >
            Solicitar proposta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-strong"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 border-b border-white/10 overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="text-sm text-muted2 hover:text-gold transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}

              <a
                href={WHATSAPP_PROPOSTA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold text-center
                           hover:bg-accent-hover transition-colors shadow-lg hover:shadow-accent/25"
              >
                Solicitar proposta
              </a>

              <p className="text-subtle text-xs pt-2">
                Resposta rápida para cotações corporativas.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
