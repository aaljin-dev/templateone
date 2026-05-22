import React from "react";

const Top = () => {
  return (
    <div className="w-full flex justify-between gap-5 px-[3px] items-center bg-green-400 text-white  sm:px-10 ">
      <div className="h-full text-sm flex gap-x-11 items-center flex-col sm:flex-row md:pl-10">
        <a href="tel:+10233456789">Phone:+10233456789</a>
        <a href="mailto:testdomain@gmail.com">Email:testdomain@gmail.com</a>
      </div>
      <div className="h-full pr-8">
        <button className="text-sm font-medium bg-[#089549] md:px-9 md:py-3 p-2 uppercase">
          Join us now
        </button>
      </div>
    </div>
  );
};

export default Top;
