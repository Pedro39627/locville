const Footer = () => {
  return (
    <footer className="bg-construction-darker py-10 border-t border-construction-gray/20">
      <div className="container text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="text-2xl font-black text-primary tracking-wide">LOCVILLE</span>
        </div>
        <p className="text-secondary-foreground/50 text-sm mb-2">
          Locação Simples, Obra Completa
        </p>
        <p className="text-secondary-foreground/30 text-xs">
          © {new Date().getFullYear()} Locville. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
