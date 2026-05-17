import React from 'react';
import { FaHeart, FaGlobe, FaUsers, FaHandsHelping } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    { id: 1, icon: <FaHeart />, number: "3018", label: "CAUSES" },
    { id: 2, icon: <FaGlobe />, number: "4524", label: "PLACES" },
    { id: 3, icon: <FaUsers />, number: "1509", label: "VOLUNTEERS" },
    { id: 4, icon: <FaHandsHelping />, number: "6032", label: "SAVED" },
  ];

  return (
    <div className="bg-[#4cdf68] py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center text-center text-white">
        {statsData.map((stat) => (
          <div key={stat.id} className="w-1/2 md:w-1/4 mb-8 md:mb-0 flex flex-col items-center">
            <div className="text-4xl mb-4 opacity-90">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
            <p className="text-sm font-semibold tracking-wider opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
