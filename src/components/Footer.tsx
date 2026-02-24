const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg font-bold">
        Use<span className="text-primary">MOB</span>
      </p>
      <p className="text-muted-foreground text-sm text-center">
        © {new Date().getFullYear()} UseMOB Transportes. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <a href="mailto:contato@usemob.com.br" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
          Email
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5567999636464"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm hover:text-foreground transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
