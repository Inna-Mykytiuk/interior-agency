import Image from "next/image";
import { ImageOverlay } from "@/types/pageTypes";

interface ImageOverlaySectionProps {
  sectionImageOverlay: ImageOverlay;
}

const ImageOverlaySection: React.FC<ImageOverlaySectionProps> = ({
  sectionImageOverlay,
}) => {
  return (
    <section
      id="section"
      className="flex py-8 h-fit w-full justify-center items-center "
    >
      <div className="relative overflow-hidden py-6 sm:py-24 ">
        <h2
          className="uppercase text-[100vh] -mt-[100px] leading-none font-oswald tracking-tighter

            after:block after:absolute after:bg-sample after:top-0 after:right-[100px] md:after:right-[300px] md:after:top-0
            after:w-[450px] after:h-[650px] xl:after:h-[750px] xl:after:w-[450px] after:bg-cover after:z-[1]
          "
        >
          {sectionImageOverlay.heading}
        </h2>
      </div>
    </section>
  );
};

export default ImageOverlaySection;
