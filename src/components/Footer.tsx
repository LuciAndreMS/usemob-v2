import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/5 bg-navy text-white">
    <div className="section-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="UseMOB - Mobilidade Corporativa" className="h-10 w-auto mb-5" />
          <p className="text-white/35 text-sm leading-relaxed mb-6">
            Soluções integradas em mobilidade corporativa para grandes operações em Mato Grosso do Sul. Mais de 10 anos de confiança no transporte executivo empresarial.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:underline"
          >
            Solicitar Cotação
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">Navegação</h4>
          <ul className="space-y-3">
            {["Início", "Quem Somos", "Serviços", "Diferenciais", "Depoimentos", "Contato"].map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white/35 text-sm hover:text-accent transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">Serviços</h4>
          <ul className="space-y-3">
            <li className="text-white/35 text-sm">Transporte Executivo</li>
            <li className="text-white/35 text-sm">Traslados Aeroportuários</li>
            <li className="text-white/35 text-sm">Locação de Frotas</li>
            <li className="text-white/35 text-sm">Logística de Encomendas</li>
            <li className="text-white/35 text-sm">Transporte de Documentos</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-accent flex-shrink-0 mt-0.5" size={15} />
              <span className="text-white/35 text-sm leading-relaxed">Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent flex-shrink-0" size={15} />
              <a href="https://api.whatsapp.com/send?phone=5567999636464" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-accent transition-colors">
                (67) 99963-6464
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent flex-shrink-0" size={15} />
              <a href="mailto:contato@usemob.com.br" className="text-white/35 text-sm hover:text-accent transition-colors">
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
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} UseMOB Transportes. Todos os direitos reservados.
        </p>
        <p className="text-white/25 text-xs">
          CNPJ: 00.000.000/0001-00 • Três Lagoas, MS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
