import React from "react";
import img2 from "../../assets/imagetwo.jpg";
import { news } from "../mockData";
import Heading from "../Heading/Heading";

const LatestNews = ({ headfive }) => {
  return (
    <div className="pt-25 w-full pb-30 bg-white">
      <Heading
        headerone={headfive}
        classhead={"text-4xl font-bold text-gray-800 mb-6"}
      />

      <div className="max-w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-[4%] ">
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
            <div className="p-6  ">
              <p className="text-base text-black mb-3">{item.date}</p>
              <h3 className=" font-medium pr-20 leading-loose text-gray-800  ">
                {item.title}
              </h3>
              <p className="text-sm  mb-4 leading-relaxed text-gray-400">
                {item.desc}
              </p>
              <a href="#" className="text-[16px] font-medium">
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
