import React from "react";
import { FaPaperPlane, FaHeart, FaThLarge } from "react-icons/fa";
import Heading from "../Heading/Heading";

const Activity = ({ headerone }) => {
  return (
    <div className="py-20 bg-gray-50 flex flex-col items-center">
      <Heading headerone={headerone} />

      <div className="flex flex-col md:flex-row gap-8 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-10 rounded-lg shadow-lg text-center flex-1 relative mt-8">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2">
            <FaPaperPlane className="text-gray-800 text-xl" />
          </div>
          <h3 className="text-xl font-bold mt-4 mb-4 pb-4 border-b-2 border-gray-200 mx-8">
            Fundraising
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-10 rounded-lg shadow-lg text-center flex-1 relative mt-8">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2">
            <FaHeart className="text-gray-800 text-xl" />
          </div>
          <h3 className="text-xl font-bold mt-4 mb-4 pb-4 border-b-2 border-gray-200 mx-8">
            Volunteering
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-10 rounded-lg shadow-lg text-center flex-1 relative mt-8">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2">
            <FaThLarge className="text-gray-800 text-xl" />
          </div>
          <h3 className="text-xl font-bold mt-4 mb-4 pb-4 border-b-2 border-gray-200 mx-8">
            Our Programs
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
