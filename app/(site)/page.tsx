import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ComfortSection from "./sections/ComfortSection";
import ExpertiseSection from "./sections/ExpertiseSection";

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
