import React from "react";

const HeroSection = () => {
  return (
    <section
      id="section"
      className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen w-full flex bg-hero2 bg-cover bg-center bg-no-repeat"
    >
      <div className="container" id="container">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full h-full">
          <button
            type="button"
            className="border-2 font-oswald text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out text-lg rounded-full px-9 py-1 pb-2"
          >
            Explore
          </button>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl leading-none text-white font-oswald">
              Furniture For Your Home
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              autem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
