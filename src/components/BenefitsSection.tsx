import { Award, MapPin, Trophy, Building } from "lucide-react";
import addressPhoto from "@/assets/address-photo.png";

const BenefitsSection = () => {
  const highlights = [
    {
      icon: Building,
      title: "Mais de 9 anos no mercado",
      description: "Empresa de consultoria financeira consolidada em Parauapebas."
    },
    {
      icon: MapPin,
      title: "Duas representações",
      description: "Presente em Parauapebas e Canaã dos Carajás."
    },
    {
      icon: Trophy,
      title: "Campeã em vendas estadual",
      description: "Reconhecida como a líder de vendas no estado."
    },
    {
      icon: Award,
      title: "Top 10 nacional",
      description: "Entre as 10 melhores da administradora a nível nacional."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            SOBRE NÓS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ribeiro Consultoria
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-5 mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <img
            src={addressPhoto}
            alt="Endereço Ribeiro Consultoria"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
