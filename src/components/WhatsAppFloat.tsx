import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547996199995?text=Olá! Gostaria de solicitar um orçamento.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-construction-green rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-pulse-glow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
