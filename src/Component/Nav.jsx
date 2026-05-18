import React from "react";
import img from "../assets/image.png";

const Nav = () => {
  return (
    <div className=" flex justify-around items-center gap-50 w-full h-30 ">
      <div>
        <img src={img} alt="" className="w-70" />
      </div>
      <div>
        <ul className="flex gap-10">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CAUSES</li>
          <li>EVENT</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
