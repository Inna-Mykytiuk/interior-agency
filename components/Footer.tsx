import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className=" overflow-hidden py-14 bg-mainBcg">
      <div id="container" className="container">
        <div className="w-full h-full justify-center items-center flex flex-col mb-6 sm:mb-0">
          <p className="font-oswald leading-none text-white text-[8vw] mb-8">
            Let's talk{" "}
          </p>
          <ul className="flex justify-center sm:flex-row items-center sm:gap-6">
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link
                href="https://www.linkedin.com/in/inna-mykytiuk/"
                target="_blank"
              >
                Linkedin
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link href="https://github.com/Inna-Mykytiuk" target="_blank">
                Github
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link href="https://t.me/Bilskirnirr" target="_blank">
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
