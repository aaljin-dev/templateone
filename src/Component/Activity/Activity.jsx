import React from "react";
import { FaPaperPlane, FaHeart, FaUsers } from "react-icons/fa";

import Heading from "../Heading/Heading";

const Activity = ({ headerone }) => {
  const cardData = [
    {
      id: 1,
      title: "Fundraising",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <FaPaperPlane />,
    },
    {
      id: 2,
      title: "Volunteer",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <FaHeart />,
    },
    {
      id: 3,
      title: "Donation",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="py-20 bg-gray-50 flex flex-col items-center">
      <Heading
        headerone={headerone}
        className={
          "mb-7 sm:mt-10 flex flex-col justify-center items-center w-full px-3  sm:w-[50%] mx-auto font-hFont "
        }
        classhead={"md:text-3xl text-2xl font-bold text-gray-800 mb-6"}
      />

      <div className="flex flex-col md:flex-row gap-[10%] px-4 max-w-8xl min-h-[350px] mx-auto border">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white sm:w-[400px] p-10 rounded-lg shadow-[0_1px_5px_rgba(0,0,0,0.3)]  flex-1 relative mt-10 "
          >
            <div
              className="w-20 h-20 bg-white   shadow-[0_2px_10px_rgba(0,0,0,0.3),0_0px_3px_rgba(0,0,0,0.3)]  rounded-full flex justify-center items-center
             absolute -top-10 left-1/2 -translate-x-1/2"
            >
              <div className="text-gray-800 text-2xl">{card.icon}</div>
            </div>

            <h3 className="text-2xl font-medium mt-5 text-gray-600 ">
              {card.title}
            </h3>
            <span className="border  flex mt-1 ml-14 w-30 "></span>

            <p className="text-gray-600 text-center text-base leading-relaxed  pt-2 flex h-10/12 justify-center items-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
