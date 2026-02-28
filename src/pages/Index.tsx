import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Simulator from "@/components/Simulator";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const element = document.getElementById("candidatura");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onSimulateClick={scrollToForm} />
        <AboutSection />
        <BenefitsSection />
        <Simulator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
