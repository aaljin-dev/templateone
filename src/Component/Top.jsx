import React from "react";

const Top = () => {
  return (
    <div className="w-full flex justify-between gap-5 items-center bg-green-400 text-white  sm:px-10 border">
      <div className="h-full flex gap-x-5 items-center flex-col sm:flex-row border md:pl-10">
        <p>Phone:+10233456789</p>
        <p>Email:testdomain@gmail.com</p>
      </div>
      <div className="h-full pr-8">
        <button className="text-xl bg-green-600 md:px-5 md:py-3 p-1">
          Join us now
        </button>
      </div>
    </div>
  );
};

export default Top;
