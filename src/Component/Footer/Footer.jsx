import React from 'react';
import { FaFacebookF, FaTwitter, FaBehance, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Help Charity */}
        <div>
          <h3 className="text-xl font-bold mb-6 tracking-wide">HELP CHARITY</h3>
          <p className="text-sm text-gray-400 mb-6 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex gap-4 text-gray-400">
            <FaFacebookF className="cursor-pointer hover:text-[#4cdf68]" />
            <FaTwitter className="cursor-pointer hover:text-[#4cdf68]" />
            <FaBehance className="cursor-pointer hover:text-[#4cdf68]" />
          </div>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-xl font-bold mb-6 tracking-wide">RECENT POST</h3>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-center gap-2 hover:text-[#4cdf68] cursor-pointer">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
            <li className="flex items-center gap-2 hover:text-[#4cdf68] cursor-pointer">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing
            </li>
            <li className="flex items-center gap-2 hover:text-[#4cdf68] cursor-pointer">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
            <li className="flex items-center gap-2 hover:text-[#4cdf68] cursor-pointer">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing
            </li>
            <li className="flex items-center gap-2 hover:text-[#4cdf68] cursor-pointer">
              <span className="text-xs">&gt;</span> Consectetur Adipisicing Elit
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 tracking-wide">USEFUL LINKS</h3>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="hover:text-[#4cdf68] cursor-pointer">Home</li>
            <li className="hover:text-[#4cdf68] cursor-pointer">Causes</li>
            <li className="hover:text-[#4cdf68] cursor-pointer">Event</li>
            <li className="hover:text-[#4cdf68] cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-6 tracking-wide">CONTACT US</h3>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1" />
              <span>1 Street, derby, FL 2147, USA</span>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope />
              <span>dartthemes@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt />
              <span>+123456789</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        Copyright © 2017 <span className="text-[#4cdf68]">DartThemes</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
