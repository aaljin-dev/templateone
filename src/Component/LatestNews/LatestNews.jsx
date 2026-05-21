import React from "react";
import img2 from "../../assets/imagetwo.jpg";
import { news } from "../mockData";
import Heading from "../Heading/Heading";

const LatestNews = ({ headfive }) => {
  return (
    <div className=" pt-5 md:pt-25 h-full w-full md:pb-30 pb-5 bg-white ">
      <Heading
        headerone={headfive}
        classhead={"md:text-4xl text-2xl font-bold text-gray-800 mb-1 md:mb-6"}
        className={
          "mb-7  flex flex-col justify-center items-center w-full px-3  sm:w-[50%] mx-auto font-hFont"
        }
      />

      <div className="max-w-[90%] mx-auto h-fit grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[4%]  ">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-lg shadow-sm   transition-shadow  "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-55 object-cover"
            />
            <div className="py-4 px-1 pl-4">
              <p className="text-base text-black sm:mb-3">{item.date}</p>
              <h3 className=" font-medium  leading-loose text-gray-800">
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
