import React from "react";
import img2 from "../../assets/imagetwo.jpg";
import { news } from "../mockData";
import Heading from "../Heading/Heading";

const LatestNews = ({ headfive }) => {
  return (
    <div className="py-20 bg-white borderr">
      <Heading headerone={headfive} />

      <div className="max-w-7xl mx-auto px-15 grid grid-cols-1 md:grid-cols-3 gap-[4%] borderr">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-55 object-cover"
            />
            <div className="p-6 border-t-2 border-[#4cdf68] relative">
              <p className="text-xs text-gray-400 mb-3">{item.date}</p>
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight hover:text-[#4cdf68] cursor-pointer transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {item.desc}
              </p>
              <a
                href="#"
                className="text-sm font-bold text-gray-800 hover:text-[#4cdf68] transition-colors"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
