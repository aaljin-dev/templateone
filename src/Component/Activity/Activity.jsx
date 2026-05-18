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
      <Heading headerone={headerone} />

      <div className="flex flex-col md:flex-row gap-8 px-4 max-w-6xl min-h-[350px] mx-auto borderr">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-10 rounded-lg shadow-lg flex-1 relative mt-10"
          >
            <div className="w-20 h-20 bg-white shadow-md rounded-full flex justify-center items-center absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="text-gray-800 text-2xl">{card.icon}</div>
            </div>

            <h3 className="text-2xl font-bold mt-5  ">{card.title}</h3>
            <span className="border  flex ml-22 w-30 "></span>

            <p className="text-gray-500 text-center text-sm leading-relaxed mt-4  pt-4 borderr flex h-10/12 justify-center items-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
