import { Wrench, Zap, Flame, HardHat } from "lucide-react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547984710900?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.";

const categories = [
  {
    icon: HardHat,
    title: "Andaimes",
    desc: "Andaimes tubulares e fachadeiros para obras seguras em altura.",
  },
  {
    icon: Zap,
    title: "Ferramentas Elétricas",
    desc: "Furadeiras, serras, lixadeiras e muito mais para o dia a dia da obra.",
  },
  {
    icon: Flame,
    title: "Equipamentos a Combustão",
    desc: "Cortadoras, geradores e compressores a gasolina ou diesel.",
  },
  {
    icon: Wrench,
    title: "Maquinário Pesado",
    desc: "Betoneiras, compactadores, vibradores de concreto e rompedores.",
  },
];

const ProductsSection = () => {
  return (
    <section id="equipamentos" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            Nossos <span className="text-primary">Equipamentos</span>
          </h2>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
            Categorias completas para atender qualquer etapa da sua obra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-construction-dark/50 border border-construction-gray/20 rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-foreground">{cat.title}</h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
