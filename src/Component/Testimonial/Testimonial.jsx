import React from "react";
import img2 from "../../assets/images/volanteer_3.jpg";
import ImageUi from "../Shared/Imageui";
import img from "../../assets/images/carosal_bottom_bg.jpg";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div
      className=" md:py-18 py-5 px-4 text-center text-white relative "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          {/* <img
            src={img2}
            alt="Florence M. Cofer"
            className="w-24 h-24 rounded-full border-4 border-white/20 object-cover mb-8"
          /> */}
          <ImageUi
            src={img2}
            alt="Florence M. Cofer"
            className={
              "md:w-35 md:h-35 w-30 h-30 rounded-full border-4 border-white/20 object-cover mb-4 md:mb-8"
            }
          />
          <p className="text-sm md:text-lg font-base mb-8 max-w-3xl leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit."
          </p>
          <div className=" w-[45px] h-[50px] text-center">
            <span className="text-4xl font-serif text-center  text-[#1fbb6a] font-bold leading-none">
              <FaQuoteRight />
            </span>
          </div>
          <h3 className="font-bold tracking-widest text-base mb-1">
            FLORENCE M. COFER
          </h3>
          <p className="text-sm text-white/80 tracking-widest">Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
