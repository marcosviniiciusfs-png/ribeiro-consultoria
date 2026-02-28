import { Award, Trophy, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "+9 Anos de Experiência",
    description:
      "Consultoria financeira atuando há mais de 9 anos em Parauapebas, com representações em Parauapebas e Canaã dos Carajás",
  },
  {
    icon: Trophy,
    title: "Campeã Estadual em Vendas",
    description: "A campeã em vendas estadual",
  },
  {
    icon: TrendingUp,
    title: "Top 10 Nacional",
    description:
      "Entre as 10 melhores da administradora a nível nacional",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            QUEM SOMOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ribeiro Consultoria
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 animate-futuristic-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
            >
              {/* Glow line */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <item.icon size={32} strokeWidth={1.8} />
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
      </div>
    </section>
  );
};

export default AboutSection;
