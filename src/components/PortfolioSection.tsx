import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageFiles = import.meta.glob('/public/images/*.png');

const equipmentList = Object.keys(imageFiles)
  .filter(path => !path.endsWith('/fachada.png'))
  .map((path, index) => {
    const fileName = path.split('/').pop() || '';
    const name = fileName.replace('.png', '');
    
    return {
      id: index + 1,
      name: name,
      image: path.replace('/public', ''),
    };
  });

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
              <CarouselItem key={item.id} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                <div className="rounded-2xl border border-border bg-muted/50 hover:border-primary/30 transition-colors h-full flex flex-col p-6">
                  <div className="w-full aspect-square mb-6 flex items-center justify-center p-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="mt-auto text-center">
                    <h3 className="font-bold text-lg text-foreground w-full break-words">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex -left-4 md:-left-12" />
          <CarouselNext className="flex -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;