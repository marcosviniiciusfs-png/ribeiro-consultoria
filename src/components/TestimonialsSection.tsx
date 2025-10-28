import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Família Oliveira",
      type: "Van Comercial Entregue",
      text: "Realizei meu sonho com a ajuda da CréditoFácil. O processo foi rápido, transparente e sem burocracias. Recomendo para todos que querem conquistar seus objetivos!",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
    },
    {
      name: "Carlos Mendes",
      type: "Casa Própria",
      text: "Depois de anos economizando, consegui financiar minha casa própria. A equipe da CréditoFácil me ajudou a encontrar as melhores condições. Muito obrigado!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Marina Santos",
      type: "Carro Novo",
      text: "Simulei online e recebi todas as informações no WhatsApp. Em poucos dias estava com meu carro zero! Processo muito fácil e confiável.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simule agora gratuitamente e descubra o melhor plano para conquistar o seu sonho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            As condições podem mudar a qualquer momento
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById("simulador");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg"
          >
            Quero meu plano ideal →
          </Button>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
