import React from "react";

const Top = () => {
  return (
    <div className="w-full flex justify-between gap-5 items-center bg-green-400 text-white px-3 sm:px-10">
      <div className="h-full flex gap-x-5 items-center flex-col sm:flex-row">
        <p>Phone:+10233456789</p>
        <p>Email:testdomain@gmail.com</p>
      </div>
      <div className="h-full ">
        <button className="text-xl bg-green-600 px-5 py-3">Join us now</button>
      </div>
    </div>
  );
};

export default Top;
