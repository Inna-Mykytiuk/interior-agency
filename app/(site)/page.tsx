export const revalidate = 0;

import { getHomepage } from "@/sanity/queries/page";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ImageOverlaySection from "@/components/sections/ImageOverlaySection";
import ComfortSection from "../../components/sections/ComfortSection";
import ExpertiseSection from "../../components/sections/ExpertiseSection";

export default async function Home() {
  const data = await getHomepage();

  const { Hero, Content, Expertises, Gallery, SectionImageOverlay } = data;

  return (
    <main className="no-scrollbar">
      <HeroSection hero={Hero} />
      <AboutSection content={Content} />
      <ImageOverlaySection sectionImageOverlay={SectionImageOverlay} />
      <ComfortSection gallery={Gallery} />
      <ExpertiseSection expertises={Expertises} />
    </main>
  );
}
