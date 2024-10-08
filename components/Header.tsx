"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import headerData from "@/data/header.json";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full flex justify-between items-center absolute z-10 bg-mainBcg">
      <div className="container">
        <div className="flex justify-between items-center w-full py-3 ">
          <Link href="/" className="text-white font-oswald text-xl">
            Interior
          </Link>

          <ul
            className={`flex flex-col transition-all duration-300 ease-in-out sm:flex-row absolute right-0 bg-mainBcg w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${showMenu ? "top-0" : "-top-[100vh]"}`}
          >
            {headerData.header.map((item) => (
              <li key={item.href} className="text-base uppercase text-white  ">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="hover-text-shadow transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className="text-white sm:hidden z-20 relative">
              <Hamburger
                hideOutline={false}
                toggled={showMenu}
                toggle={toggleMenu}
              />
            </div>
            <Link
              href="https://t.me/Bilskirnirr"
              className="sm:block font-oswald hidden border-2 border-white rounded-full px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
