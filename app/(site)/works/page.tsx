import React from "react";
export const revalidate = 0;

import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const WorksPage = () => {
  return (
    <section
      id="section"
      className="py-24  relative w-full justify-center flex items-center bg-black"
    >
      <div className="container"></div>
    </section>
  );
};

export default WorksPage;
