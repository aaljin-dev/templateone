import React, { useState } from "react";
import img from "../assets/image.png";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [Open, setOpen] = useState(false);
  return (
    <nav className="relative">
      <div className=" flex justify-around items-center gap-[5%] w-full md:h-30 borderr md:px-[2%] md:pl-[5%] md:pr-[1px]">
        <div>
          <img
            src={img}
            alt=""
            className="w-50 h-20 object-contain borderr md:w-70 md:h-30 "
          />
        </div>
        <div className="hidden md:block borderr w-full">
          <div className="flex gap-[4%] justify-end">
            <a href="">Home</a>
            <a href="">Aboutus</a>
            <a href="">causes</a>
            <a href="">Event</a>
            <a href="">Portfolio</a>
            <a href="">blog</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div>
          <button
            className="block md:hidden"
            onClick={() => {
              setOpen(!Open);
            }}
          >
            <CiMenuBurger className="text-2xl" />
          </button>
        </div>
      </div>
      {/* mobile */}
      <div
        className={`${Open ? "block" : "hidden"} absolute top-full left-0 w-full bg-green-700 space-y-2 pb-3 z-50`}
      >
        <a href="" className="text-white text-center text-lg px-4 block">
          Home
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          Aboutus
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          causes
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          Event
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          Portfolio
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          blog
        </a>
        <a href="" className="text-white text-center text-lg px-4 block">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
