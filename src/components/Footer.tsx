const Footer = () => (
  <footer className="border-t border-white/5 py-10 bg-navy text-white">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg font-bold">
        Use<span className="text-accent">MOB</span>
      </p>
      <p className="text-white/40 text-sm text-center">
        © {new Date().getFullYear()} UseMOB Transportes. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <a href="mailto:contato@usemob.com.br" className="text-white/40 text-sm hover:text-accent transition-colors">
          Email
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-sm hover:text-accent transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
