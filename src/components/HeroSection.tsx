import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.png";

interface HeroSectionProps {
  onSimulateClick: () => void;
}

const HeroSection = ({ onSimulateClick }: HeroSectionProps) => {
  return (
    <section id="inicio" className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in flex flex-col items-center">
            <div className="text-center">
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight whitespace-nowrap"
                style={{ color: "#003399", lineHeight: "1.1" }}
              >
                Faça parte do nosso time
              </h1>
              <p
                className="-mt-2 md:-mt-3 text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Great Vibes', cursive", color: "#000", lineHeight: "1.2" }}
              >
                Ribeiro Consultoria
              </p>
            </div>

            <Button
              onClick={onSimulateClick}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Candidate-se agora →
            </Button>
          </div>

          <div className="relative animate-scale-in">
            <img
              src={teamPhoto}
              alt="Equipe Ribeiro Consultoria"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
