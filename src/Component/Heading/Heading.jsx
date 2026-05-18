import React from "react";

const Heading = ({ headerone }) => {
  return (
    <div className=" mb-10 mt-10 flex flex-col justify-center items-center  w-[50%] mx-auto">
      {headerone.map((head, index) => {
        return (
          <div key={index} className="text-center mb-16 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {head.head}
            </h2>
            <div className="w-16 h-0.5 bg-[#4cdf68] mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">{head.para}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Heading;
