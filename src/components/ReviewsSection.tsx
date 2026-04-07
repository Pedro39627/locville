import { Star } from "lucide-react";

const reviews = [
  {
    text: "Atendimento nota 10 e preço justo. Primeira vez que estive locando equipamentos na LOCVILLE e certamente voltarei a fazer negócios com eles.",
  },
  {
    text: "Atendimento sensacional, equipamentos ótimos!!",
  },
  {
    text: "Excelente atendimento, equipe prestativa e materiais de ótima qualidade. A locadora oferece equipamentos bem conservados e preços justos. Com certeza voltarei a fazer negócio!",
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Stars />
            <span className="text-sm font-bold text-foreground">5.0 no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-muted/50 border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <Stars />
              <p className="mt-5 text-foreground leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
