import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ComfortSection from "../../components/sections/ComfortSection";
import ExpertiseSection from "../../components/sections/ExpertiseSection";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <HeroSection />
      <AboutSection />
      <ComfortSection />
      <ExpertiseSection />
    </main>
  );
}
