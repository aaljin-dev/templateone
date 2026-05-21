import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
import img2 from "../../assets/imagetwo.jpg";
import Heading from "../Heading/Heading";
import { volunteers } from "../mockData";
import ImageUi from "../Shared/Imageui";
import "./OurVolunteer.css";

const OurVolunteer = ({ headfour }) => {
  return (
    <div className="md:py-20 pb-5 bg-white ">
      <Heading
        headerone={headfour}
        classhead={"md:text-3xl text-2xl font-bold text-gray-800 mb-6"}
        className={
          "  md:mt-[43px] flex mt-5 flex-col justify-center items-center w-full px-3 sm:w-[50%] mx-auto font-hFont mb-6"
        }
      />

      <div className=" md:ml-10 px-2 sm:px-9 relative volunteer-slider md:w-[80%]  md:h-[350px]  ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {volunteers.map((vol) => (
            <SwiperSlide key={vol.id}>
              <div className=" bg-white   sm:h-[110px] md:h-[165px]  md:w-[65%]   rounded-lg  flex  mb-[100px] ">
                {/* <img
                  src={vol.image}
                  alt={vol.name}
                  className="w-1/3 object-cover"
                /> */}
                <ImageUi
                  src={vol.image}
                  alt={vol.name}
                  className={"w-full h-36 sm:h-full "}
                />
                <div className=" mb-1 pl-2 sm-ml-0 rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,0.08)]  sm:w-250px">
                  <div className=" md:pl-4  flex-1 flex flex-col gap-0.1 sm:gap-0.1 border-green-500">
                    <h3 className="md:text-lg text-base font-bold text-gray-800 font-hFont">
                      {vol.name}
                    </h3>
                    <p className="text-sm font-light ">{vol.role}</p>
                    <p className="text-balance  text-gray-500 sm:mb-2 w-[90%] md:w-[100%]">
                      {vol.desc}
                    </p>
                    <div className="flex  text-gray-700">
                      <FaFacebookF className="cursor-pointer hover:text-[#4cdf68] mr-4 " />
                      <FaTwitter className="cursor-pointer hover:text-[#4cdf68] mr-4" />
                      <FaBehance className="cursor-pointer hover:text-[#4cdf68] mr-4 text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        
      `}</style>
    </div>
  );
};

export default OurVolunteer;
