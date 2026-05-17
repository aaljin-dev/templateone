import React from 'react';

const UrgentCause = () => {
  return (
    <div className="bg-[#4cdf68] py-20 px-4 text-center text-white w-full mx-auto">
      <p className="text-sm tracking-widest font-semibold mb-2">URGENT CAUSE</p>
      <h2 className="text-3xl font-bold mb-6">Recent Environmental Disasters</h2>
      <p className="max-w-4xl mx-auto mb-10 text-sm md:text-base opacity-90 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative pt-1 mt-6">
          <span className="absolute left-[50%] -top-6 -translate-x-1/2 text-xs font-bold">50%</span>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/30">
            <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"></div>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold">
            <span>Raised: $1200</span>
            <span>Goal: $2400</span>
          </div>
        </div>
      </div>

      <button className="bg-white text-[#4cdf68] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
        DONATE NOW
      </button>
    </div>
  );
};

export default UrgentCause;
