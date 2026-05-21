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
          "  md:mt-[43px] flex mt-5 flex-col justify-center items-center w-full px-3 sm:w-[50%] mx-auto font-hFont "
        }
      />

      <div className=" md:ml-10  px-9 relative volunteer-slider md:w-[80%]  md:h-[350px] borderr ">
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
              <div className="bg-white md:w-[50%] h-[200px] md:h-[185px] md:min-w-[85%]   rounded-lg  flex  mb-[100px] borderr">
                {/* <img
                  src={vol.image}
                  alt={vol.name}
                  className="w-1/3 object-cover"
                /> */}
                <ImageUi src={vol.image} alt={vol.name} className={""} />
                <div className=" mb-1 not-odd: rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,0.08)] borderr">
                  <div className="md:pl-9 md:py-3 flex-1 flex flex-col h-20">
                    <h3 className="md:text-lg text-base font-bold text-gray-800 font-hFont">
                      {vol.name}
                    </h3>
                    <p className="text-sm font-light md:mb-3">{vol.role}</p>
                    <p className="text-balance  text-gray-500 sm:mb-4 w-[90%] md:w-[100%]">
                      {vol.desc}
                    </p>
                    <div className="flex  md:pt-1 gap-0 text-gray-700">
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
