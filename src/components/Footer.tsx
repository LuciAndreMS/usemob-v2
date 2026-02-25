import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/5 bg-navy text-white">
    <div className="section-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand */}
        <div>
          <img src={logo} alt="UseMOB - Mobilidade Corporativa" className="h-10 w-auto mb-4" />
          <p className="text-white/40 text-sm leading-relaxed">
            Soluções integradas em mobilidade corporativa para grandes operações em Mato Grosso do Sul.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Navegação</h4>
          <ul className="space-y-2.5">
            {["Início", "Quem Somos", "Serviços", "Diferenciais", "Depoimentos", "Contato"].map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white/40 text-sm hover:text-accent transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Serviços</h4>
          <ul className="space-y-2.5">
            <li className="text-white/40 text-sm">Transporte Executivo</li>
            <li className="text-white/40 text-sm">Traslados Aeroportuários</li>
            <li className="text-white/40 text-sm">Locação de Frotas</li>
            <li className="text-white/40 text-sm">Logística de Encomendas</li>
            <li className="text-white/40 text-sm">Transporte de Documentos</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="text-accent flex-shrink-0 mt-0.5" size={16} />
              <span className="text-white/40 text-sm">Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent flex-shrink-0" size={16} />
              <a href="https://api.whatsapp.com/send?phone=5567999636464" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-accent transition-colors">
                (67) 99963-6464
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent flex-shrink-0" size={16} />
              <a href="mailto:contato@usemob.com.br" className="text-white/40 text-sm hover:text-accent transition-colors">
                contato@usemob.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5">
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} UseMOB Transportes. Todos os direitos reservados.
        </p>
        <p className="text-white/30 text-xs">
          CNPJ: 00.000.000/0001-00 • Três Lagoas, MS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
