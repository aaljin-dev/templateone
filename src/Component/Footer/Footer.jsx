import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white pt-20">
      <div className="max-w-[92%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Help Charity */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wide">
            HELP CHARITY
          </h3>
          <p className="text-base text-[#4e4e4e] mb-10 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className="w-[300px] h-[1px] md:mb-[45px] bg-[#4e4e4e]"></div>
          <div className="flex gap-4 text-[#4e4e4e]">
            <FaFacebookF className="cursor-pointer " />
            <FaTwitter className="cursor-pointer " />
            <FaBehance className="cursor-pointer" />
          </div>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wide">RECENT POST</h3>
          <ul className=" text-[#4e4e4e] space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wide">
            USEFUL LINKS
          </h3>
          <ul className="text-[#4e4e4e] space-y-2">
            <li className="">Home</li>
            <li className="">Causes</li>
            <li className="">Event</li>
            <li className="">Blog</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wide">CONTACT US</h3>
          <ul className=" text-[#4e4e4e] space-y-2">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1" />
              <span>1 Street, derby, FL 2147, USA</span>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope />
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt />
              <a href="tel:+123456789">+123456789</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-black h-24 flex items-center justify-center text-base text-gray-300">
        Copyright @ 2017 <span className="text-[#4cdf68] pr-1">DartThemes</span>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
