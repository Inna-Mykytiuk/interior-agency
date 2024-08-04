import React from "react";
export const revalidate = 0;

import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const WorksPage = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <>
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
      >
        <div className="container">
          <h1 className="text-white text-6xl font-oswald">{Hero.heading}</h1>
        </div>
      </section>
    </>
  );
};

export default WorksPage;
