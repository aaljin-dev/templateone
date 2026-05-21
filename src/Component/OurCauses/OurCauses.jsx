import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgone from "../../assets/images/our_cuauses_three.jpg";
import imgtwo from "../../assets/images/our_cuauses_one.jpg";
import imgthree from "../../assets/images/our_cuauses_two.jpg";
import Heading from "../Heading/Heading";
import ImageUi from "../Shared/Imageui";

import "./OurCauses";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OurCauses.css";

const OurCauses = ({ headthree }) => {
  const causes = [
    {
      id: 1,
      image: imgone,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 2,
      image: imgtwo,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 3,
      image: imgthree,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 4,
      image: imgthree,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
  ];

  return (
    <div className="sm:py-20 pt-10 bg-white">
      <Heading
        headerone={headthree}
        className={
          "  md:mt-[43px] flex flex-col justify-center items-center w-full px-3 sm:w-[50%] mx-auto font-hFont mb-6"
        }
        classhead={"md:text-3xl text-2xl font-bold text-gray-800 mb-6"}
      />

      <div className="max-w-[90%] mx-auto h-[709px] sm:h-[800px]  causes-slider-container ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="md:pb-20 h-full "
        >
          {causes.map((cause) => (
            <SwiperSlide key={cause.id}>
              <div
                className=" rounded-lg shadow-lg
                text-center   "
              >
                {/* <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-56 object-cover"
                /> */}
                <ImageUi
                  src={cause.image}
                  alt={cause.title}
                  className={"w-full h-full object-contain"}
                />
                <div className="pt-15 px-3">
                  <h3 className="text-xl font-bold  text-gray-800 pb-10 font-hFont">
                    {cause.title}
                  </h3>
                  <p className="text-base text-gray-500 mb-6 font-[30px]">
                    {cause.desc}
                  </p>

                  <div className=" pt-1 mt-6 sm:mb-6">
                    <p className="  sm:mb-5">{cause.progress}%</p>
                    <div className="">
                      <div className="w-[90%] mx-5 h-3 rounded-md bg-[linear-gradient(to_right,#02ce67_50%,#e5e5e5_50%)]"></div>
                    </div>
                    <div className="flex justify-between sm:pt-4 mx-5">
                      <span>
                        Raised :
                        <span className="text-[#41bc7d]">{cause.raised}</span>
                      </span>
                      <span>
                        Goal :
                        <span className="text-[#41bc7d]">{cause.goal}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mb-8 mt-10">
                    <button className="border-2 border-[#54a079] text-[#3abd77] font-bold py-2 px-6 rounded-full bg-white ">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurCauses;
