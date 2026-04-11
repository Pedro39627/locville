import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const equipmentList = [

  {
    id: 1,
    name: "Martelete Perfurador",
    image: "/locville/images/martelete_perfurador.png",
  },

    {
    id: 2,
    name: "Betoneira",
    image: "/locville/images/betoneira.png", // Corrigido para incluir o caminho base local
  },
  {
    id: 3,
    name: "Andaimes",
    image: "/locville/images/andaime.png",
  },
  {
    id: 4,
    name: "Martelete Rompedor",
    image: "/locville/images/martelete_rompedor.png",
  },
  {
    id: 5,
    name: "Compactador de Solo",
    image: "/locville/images/compactador_solo.png",
  },
  {
    id: 6,
    name: "Gerador a Combustão",
    image: "/locville/images/gerador.png",
  },

    {
    id: 7,
    name: "Lixadeira",
    image: "/locville/images/lixadeira.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="portfolio">
      <div className="container px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Confira alguns dos equipamentos que temos à disposição para sua obra.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {equipmentList.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <div className="rounded-2xl border border-border bg-muted/50 hover:border-primary/30 transition-colors h-full flex flex-col p-6">
                  <div className="w-full aspect-square mb-6 flex items-center justify-center p-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="mt-auto text-center">
                    <p className="text-sm text-primary mb-1 font-semibold">{item.category}</p>
                    <h3 className="font-bold text-lg text-foreground w-full break-words">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;