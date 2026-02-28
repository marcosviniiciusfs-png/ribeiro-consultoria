import locationParauapebas from "@/assets/location-parauapebas.jpeg";
import locationCanaa from "@/assets/location-canaa.jpeg";

const locations = [
  {
    name: "Parauapebas",
    address: "Av dos Ipês, QD 02, L06, Segundo Piso",
    image: locationParauapebas,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.!2d-49.!3d-6.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92e4a1b0a1b0a1b0%3A0x0!2sAv.%20dos%20Ip%C3%AAs%2C%20Parauapebas%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    mapsLink: "https://maps.app.goo.gl/PJkjRU6wQpaxyAxf8",
  },
  {
    name: "Canaã dos Carajás",
    address: "Av. Rio Branco, QD 011, L17, Ponto B, Novo Horizonte",
    image: locationCanaa,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.!2d-49.!3d-6.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92e4a1b0a1b0a1b0%3A0x0!2sAv.%20Rio%20Branco%2C%20Cana%C3%A3%20dos%20Caraj%C3%A1s%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    mapsLink: "https://maps.app.goo.gl/H5iqDZpDBG2QhX8E9",
  },
];

const BenefitsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            ONDE ESTAMOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossas Localizações
          </h2>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 items-stretch animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={loc.image}
                  alt={`Escritório ${loc.name}`}
                  className="w-full h-full object-cover min-h-[240px]"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                  <iframe
                    src={loc.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 240 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${loc.name}`}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">{loc.name}</h3>
                  <p className="text-muted-foreground text-sm">{loc.address}</p>
                  <a
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
