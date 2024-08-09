export const revalidate = 0;

import { getGalleryPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

const GalleryPage = async () => {
  const data = await getGalleryPage();
  const { Gallery } = data;

  return (
    <section className="pb-24 pt-24 sm:pt-36 overflow-hidden relative w-full justify-center flex items-center bg-mainBcg">
      <div className="container">
        <h1 className="text-white text-6xl font-oswald">Gallery</h1>
        <span className="text-white text-base font-bold italic">
          Our Entire works are showcased here.
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 grid-flow-row-dense">
          {Gallery.imageUrls.map((image: ImageType, index: number) => {
            const colSpan = Math.floor(Math.random() * 2) + 1;
            const rowSpan = Math.floor(Math.random() * 2) + 1;

            return (
              <div
                key={index}
                className={`col-span-${colSpan} row-span-${rowSpan}`}
              >
                <Link href="/">
                  <Image
                    src={image.url}
                    alt="photos"
                    width={2400}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
