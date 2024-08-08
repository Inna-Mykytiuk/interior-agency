import Image from "next/image";
import { Hero } from "@/types/pageTypes";
import Link from "next/link";

interface HeroSectionProps {
  hero: Hero;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  return (
    <section className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center sm:items-end bg-hero bg-no-repeat bg-cover bg-center">
      <div className="container">
        {/* <Image
          src={hero.heroImage}
          alt="Hero Background cover"
          fill
          className="w-full h-full object-cover absolute aspect-video"
        /> */}
        <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
          <Link
            href="/gallery"
            className="border-2 font-bebas pt-1 pb-[6px] text-white hover:bg-white hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] text-lg  border-white rounded-full px-9 transition-all duration-300 ease-in-out"
          >
            Explore
          </Link>
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
