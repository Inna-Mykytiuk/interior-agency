import React from "react";

const AboutSection = () => {
  return (
    <>
      <section
        id="section"
        className="py-6 xl:py-24 h-fit sm:h-[50hv] sm:max-h-screen flex items-center justify-center"
      >
        <div className="container" id="container">
          <div className="flex gap-6 xl:flex-row xl:gap-64 flex-col ">
            <div className="flex flex-col min-h-full xl:text-center justify-between">
              <h2 className="text-xl uppercase">
                Furniture For Comfortable Living
              </h2>
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae a
                repudiandae perferendis sed, autem ipsam.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-2/4 h-full">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                doloribus eveniet quis, provident recusandae dolor maiores
                delectus soluta.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum voluptate assumenda quod nihil consequuntur quo
                rerum, autem illum minima qui praesentium ab laboriosam tempora
                quidem rem, optio enim?
              </p>
              <button
                type="button"
                className="border-2 hover:bg-black hover:text-white font-oswald pt-1 border-black rounded-full px-6 font-bold py-1 transition-all duration-300 ease-in-out hover:shadow-md"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>
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
            Interior
          </h2>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
