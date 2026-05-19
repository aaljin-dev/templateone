import React from "react";
import img from "../../assets/images/donate-bg.jpg";

const UrgentCause = () => {
  return (
    <div
      className="bg-[#4cdf68] py-20 px-4 text-center text-white w-full h-[620px] mx-auto borderr"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="border">
        <div className="borderr font-hFont">
          <p className="text-xl font-medium  mb-2 md:mb-6">URGENT CAUSE</p>
          <h2 className="text-3xl font-bold mb-6 md:mb-8">
            Recent Environmental Disasters
          </h2>
          <p className="max-w-4xl mx-auto  md:text-[16px] leading-[40px] opacity-90  md:w-3xl borderr ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative pt-1 mt-6">
              <span className="absolute left-[50%] -top-6 -translate-x-1/2 text-base font-medium">
                50%
              </span>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/30">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                ></div>
              </div>
              <div className="flex justify-between items-center text-base font-medium">
                <span>Raised: $1200</span>
                <span>Goal: $2400</span>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-white text-[#4cdf68] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 md:mt-5">
          DONATE NOW
        </button>
      </div>
    </div>
  );
};

export default UrgentCause;
