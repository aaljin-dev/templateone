import React from "react";
import { FaHeart, FaGlobe, FaUsers, FaHandsHelping } from "react-icons/fa";
import img from "../../assets/images/count.jpg";

const Stats = () => {
  const statsData = [
    { id: 1, icon: <FaHeart />, number: "3018", label: "CAUSES" },
    { id: 2, icon: <FaGlobe />, number: "4524", label: "PLACES" },
    { id: 3, icon: <FaUsers />, number: "1509", label: "VOLUNTEERS" },
    { id: 4, icon: <FaHandsHelping />, number: "6032", label: "SAVED" },
  ];

  return (
    <div
      className=" md:h-[364px] w-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="max-w-full mx-auto px-4 py-3 flex flex-wrap justify-around items-center h-full text-white">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="w-1/2 md:w-1/4 mb-8 md:mb-0 h-[70%] md:pt-[50px] flex flex-col items-center border-r border-white"
          >
            <div className="text-6xl mb-4 opacity-90 ">{stat.icon}</div>
            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
            <p className="text-[15px] font-semibold tracking-wider opacity-90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
