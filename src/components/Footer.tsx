import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/constants/whatsapp";

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
              { label: "Contato", href: "#contato" }
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

          <ul className="space-y-3">
            {[
              { label: "Transporte Corporativo (Três Lagoas)", href: "/transporte-corporativo-tres-lagoas" },
              { label: "Mobilidade Corporativa (MS)", href: "/mobilidade-corporativa-ms" },
              { label: "Transporte para Indústrias (MS)", href: "/transporte-para-industria-ms" },
              { label: "Locação com Motorista", href: "/locacao-veiculos-com-motorista" },
              { label: "Logística Empresarial (MS)", href: "/logistica-empresarial-ms" }
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted2 text-sm hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-subtle text-xs leading-relaxed mt-6">
            Operação sob contrato • SLA • Padrão corporativo
          </p>
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
                href={WHATSAPP_URL}
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
        <p className="text-subtle text-xs">Três Lagoas, MS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
