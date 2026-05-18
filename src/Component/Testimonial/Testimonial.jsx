import React from "react";
import img2 from "../../assets/images/volanteer_3.jpg";
import ImageUi from "../Shared/Imageui";

const Testimonial = () => {
  return (
    <div className="bg-[#4cdf68] py-24 px-4 text-center text-white relative">
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
              "w-35 h-35 rounded-full border-4 border-white/20 object-cover mb-8"
            }
          />
          <p className="text-lg md:text-xl font-light italic mb-8 max-w-3xl leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit."
          </p>
          <div className="mb-2">
            <span className="text-4xl font-serif text-white/50">"</span>
          </div>
          <h3 className="font-bold tracking-widest text-sm mb-1">
            FLORENCE M. COFER
          </h3>
          <p className="text-xs text-white/80 tracking-widest">Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
