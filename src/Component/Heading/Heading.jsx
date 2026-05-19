import React from "react";

const Heading = ({
  headerone,
  className,
  classhead = "text-3xl font-bold text-gray-800 mb-6",
}) => {
  return (
    <div className={className}>
      {headerone.map((head, index) => {
        return (
          <div key={index} className="text-center mb-16 px-4">
            <h2 className={classhead}>
              {head.head}
              <div className="w-16 h-0.5 bg-[#4cdf68] mt-4 mx-auto mb-10"></div>
            </h2>

            <p className="text-gray-700 leading-[35px] max-w-2xl mx-auto">
              {head.para}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Heading;
