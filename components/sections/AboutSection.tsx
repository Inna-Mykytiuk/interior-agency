import Link from "next/link";
import { Content } from "@/types/pageTypes";

interface AboutSectionProps {
  content: Content;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center">
      <div className="px-6 sm:px-24 w-full h-full">
        <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
          <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
            <p className="uppercase text-xl">{content.heading}</p>
            <p>{content.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
            <p className="text-base">{content.excerpt}</p>
            <Link href="/works">
              <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
