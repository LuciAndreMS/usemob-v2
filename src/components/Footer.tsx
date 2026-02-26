import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#0B0D12] text-white">
    <div className="section-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="UseMOB - Mobilidade Corporativa"
            className="h-10 w-auto mb-5"
          />
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Soluções em mobilidade corporativa para operações empresariais em Mato Grosso do Sul.
            Segurança, pontualidade e gestão profissional para empresas que exigem padrão executivo.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors"
          >
            Solicitar Cotação
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">
            Institucional
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Quem Somos", href: "#quem-somos" },
              { label: "Soluções Corporativas", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white/70 text-sm hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">
            Soluções
          </h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>Gestão de Transporte Executivo</li>
            <li>Traslados Aeroportuários</li>
            <li>Locação de Frotas com Gestão</li>
            <li>Mobilidade para Eventos</li>
            <li>Logística Expressa</li>
            <li>Transporte de Documentos</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/60">
            Contato
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-yellow-400 flex-shrink-0 mt-0.5" size={15} />
              <span className="text-white/70 text-sm leading-relaxed">
                Rua Euridice Chagas Cruz, 1321, Vila Nova, Três Lagoas-MS
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-yellow-400 flex-shrink-0" size={15} />
              <a
                href="https://api.whatsapp.com/send?phone=5567999636464"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-yellow-400 transition-colors"
              >
                (67) 99963-6464
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-yellow-400 flex-shrink-0" size={15} />
              <a
                href="mailto:contato@usemob.com.br"
                className="text-white/70 text-sm hover:text-yellow-400 transition-colors"
              >
                contato@usemob.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/50 text-xs">
          © {new Date().getFullYear()} UseMOB Transportes. Todos os direitos reservados.
        </p>
        <p className="text-white/50 text-xs">
          Três Lagoas, MS
          {/* Se quiser, coloque o CNPJ real aqui depois */}
          {/* • CNPJ: XX.XXX.XXX/0001-XX */}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
