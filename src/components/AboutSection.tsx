import { Shield, Clock, ThumbsUp } from "lucide-react";

const features = [
  { icon: Shield, title: "Alta Performance", desc: "Equipamentos revisados e prontos para uso imediato." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Entrega ágil para não atrasar a sua obra." },
  { icon: ThumbsUp, title: "Preço Justo", desc: "Condições especiais para locações de curta e longa duração." },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sua obra merece o <span className="text-primary">melhor</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos uma locadora especializada em equipamentos e máquinas para construção civil. Nossa missão é entregar ferramentas de alta performance, atendimento nota 10 e preço justo para garantir o sucesso da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-8 rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
