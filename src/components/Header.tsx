import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-bg-transparent.png";

const WHATSAPP_LINK = "https://wa.me/5547996199995?text=Olá! Gostaria de solicitar um orçamento.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-construction-gray/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Locville" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-construction-green px-5 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-construction-gray/30 py-4">
          <nav className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-secondary-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-construction-green px-5 py-3 rounded-lg text-sm font-semibold text-accent-foreground"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
