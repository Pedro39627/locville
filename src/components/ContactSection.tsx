import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-foreground mb-1">Endereço</h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  R. Pref. Helmuth Fallgatter, 2260 - Boa Vista,<br />
                  Joinville - SC, 89206-101
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-foreground mb-1">Telefone / WhatsApp</h3>
                <a href="tel:+5547996199995" className="text-primary font-semibold hover:underline">
                  (47) 99619-9995
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-foreground mb-1">Horário de Funcionamento</h3>
                <div className="text-secondary-foreground/60 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-secondary-foreground">Segunda a sexta:</span> 07:00–12:00 | 13:00–17:30
                  </p>
                  <p>
                    <span className="font-semibold text-secondary-foreground">Sábado:</span> 07:00–11:00
                  </p>
                  <p>
                    <span className="font-semibold text-secondary-foreground">Domingo:</span> Fechado
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-foreground mb-1">Instagram</h3>
                <a
                  href="https://www.instagram.com/locvillesc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  @locvillesc
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-construction-gray/20 bg-construction-dark/30 min-h-[320px] flex items-center justify-center">
              <iframe
                title="Localização Locville"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.9561851465864!2d-48.82064652294827!3d-26.295520367702554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb100cb666cb5%3A0x151957c671113f10!2sLocville%20-%20Aluguel%20de%20M%C3%A1quinas%20e%20Equipamentos!5e0!3m2!1spt-BR!2sbr!4v1775566245341!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-construction-gray/20 bg-construction-dark/30 h-56 md:h-72 flex items-center justify-center relative group">
              <img 
                src="/images/fachada.png" 
                alt="Fachada da Locville" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
