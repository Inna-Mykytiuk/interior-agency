import Image from "next/image";
import { Hero } from "@/types/pageTypes";

interface HeroSectionProps {
  hero: Hero;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  return (
    <section className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center">
      <div className="px-6 sm:px-24 w-full h-full">
        <Image
          src={hero.heroImage}
          alt="Hero Background cover"
          fill
          className="w-full h-full object-cover absolute"
        />
        <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
          <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
            Explore
          </button>
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl leading-none font-bebas text-white">
              {hero.heading}
            </h2>
            <p className="text-white text-lg">{hero.tagline} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
