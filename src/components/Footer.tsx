import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#0B0D12]">
    <div className="section-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="UseMOB - Mobilidade Corporativa"
            className="h-10 w-auto mb-5"
          />

          <p className="text-muted2 text-sm leading-relaxed mb-5">
            Mobilidade corporativa para operações empresariais em Mato Grosso do Sul, com padrão profissional,
            previsibilidade e organização operacional.
          </p>

          <p className="text-subtle text-xs mb-6">
            Atendimento corporativo • Contratos recorrentes • Três Lagoas e rotas estratégicas no MS
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-bold
                       hover:bg-accent-hover transition-colors shadow-lg hover:shadow-accent/25"
          >
            Solicitar proposta
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-subtle">
            Institucional
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Quem Somos", href: "#quem-somos" },
              { label: "Soluções", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-muted2 text-sm hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-subtle">
            Soluções
          </h4>
          <ul className="space-y-3 text-muted2 text-sm">
            <li>Mobilidade Executiva e Corporativa</li>
            <li>Transporte de Colaboradores</li>
            <li>Operação Assistida (veículo com motorista)</li>
            <li>Logística Empresarial e demandas operacionais</li>
            <li>Traslados corporativos (rotas estratégicas)</li>
            <li>Transporte seguro de documentos</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-subtle">
            Contato
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold flex-shrink-0 mt-0.5" size={15} />
              <span className="text-muted2 text-sm leading-relaxed">
                Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-gold flex-shrink-0" size={15} />
              <a
                href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted2 text-sm hover:text-gold transition-colors"
              >
                (67) 99963-6464
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-gold flex-shrink-0" size={15} />
              <a
                href="mailto:contato@usemob.com.br?subject=Contato%20Corporativo%20-%20UseMOB"
                className="text-muted2 text-sm hover:text-gold transition-colors"
              >
                contato@usemob.com.br
              </a>
            </li>

            <li className="text-subtle text-xs leading-relaxed">
              Comercial: seg–sex • 08:00–18:00
              <br />
              Operações contínuas sob contrato.
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-subtle text-xs">
          © {new Date().getFullYear()} UseMOB Transportes e Locações. Todos os direitos reservados.
        </p>
        <p className="text-subtle text-xs">
          Três Lagoas, MS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
