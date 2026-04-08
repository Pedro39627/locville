import logo from "@/assets/logo-bg-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-construction-darker py-10 border-t border-construction-gray/20">
      <div className="container text-center">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Locville" className="h-12 md:h-14 w-auto opacity-90" />
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
