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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-navy/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="UseMOB - Mobilidade Corporativa" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Proposta Corporativa
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
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
            className="md:hidden bg-navy border-b border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/60 hover:text-white transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold text-center"
              >
                Proposta Corporativa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
