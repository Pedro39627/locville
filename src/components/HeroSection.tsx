import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/locville-bg-clean.png";
import heroBgPort from "@/assets/locville-bg-port.png";
import logo from "@/assets/logo-bg-transparent.png";

const WHATSAPP_LINK = "https://wa.me/5547996199995?text=Olá! Gostaria de solicitar um orçamento.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-16">
      <div className="absolute inset-0">
        <picture className="block w-full h-full">
          <source media="(max-width: 768px)" srcSet={heroBg} />
          <img
            src={heroBg}
            alt="Canteiro de obras"
            className="w-full h-full object-cover object-[60%_center] md:object-center"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-construction-darker/70 md:bg-construction-darker/75" />
      </div>

      <div className="container relative z-10 py-14 md:py-32 flex justify-center items-center">
        <div className="max-w-3xl text-center md:text-left -ml-2 md:-ml-8 lg:-ml-12 flex flex-col items-center md:items-start">
          <span className="inline-block bg-primary px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-primary-foreground uppercase tracking-wider mb-4 md:mb-6 animate-pulse">
            Locação Simples, Obra Completa 
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 md:mb-6 text-secondary-foreground text-shadow-hero">
            Soluções Completas em Equipamentos para a sua{" "}
            <span className="text-primary">Obra.</span>
          </h1>

          <p className="text-base md:text-xl text-secondary-foreground/85 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Atendimento rápido e equipamentos de ponta para obras de pequeno, médio e grande porte em{" "}
            <strong className="text-secondary-foreground">Joinville e região</strong>.
          </p>
          
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 mt-4 md:mt-8 w-full">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-construction-green hover:brightness-110 px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-bold text-accent-foreground transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento Agora
            </a>

            {/* Logo flutuante ao lado do botão, visível de telas grandes (xl) para cima e bem centralizado
            <div className="hidden xl:flex items-center justify-center">
              <img 
                src={logo} 
                alt="Locville Logo" 
                className="w-auto h-20 xl:h-28 object-contain drop-shadow-2xl opacity-95 transition-transform duration-700 hover:scale-105" 
              />
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
