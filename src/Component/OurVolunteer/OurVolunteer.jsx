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

const OurVolunteer = ({ headfour }) => {
  return (
    <div className="py-20 bg-white ">
      <Heading
        headerone={headfour}
        classhead={"md:text-[35px] font-bold text-gray-800 mb-6"}
      />

      <div className="max-w-[1200px] ml-10  px-9 relative volunteer-slider  h-[350px] ">
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
              <div className="bg-white w-[50%] h-[185px] md:min-w-[75%]  rounded-lg  flex  mb-[100px] ">
                {/* <img
                  src={vol.image}
                  alt={vol.name}
                  className="w-1/3 object-cover"
                /> */}
                <ImageUi src={vol.image} alt={vol.name} className={""} />
                <div className=" mb-1 rounded-xl shadow-[15px_15px_20px_rgba(0,0,0,0.08)]">
                  <div className="md:pl-9 md:py-5 flex-1 flex flex-col h-20">
                    <h3 className="text-lg font-bold text-gray-800 font-hFont">
                      {vol.name}
                    </h3>
                    <p className="text-base font-light mb-3">{vol.role}</p>
                    <p className="text-balance text-gray-500 mb-4 w-[100%]">
                      {vol.desc}
                    </p>
                    <div className="flex gap-0 text-gray-700">
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
        .volunteer-slider .swiper-button-next,
        .volunteer-slider .swiper-button-prev {
          top: auto;
          bottom: 0;
          width: 45px;
          height: 45px;
          border: 2px solid #55a379;
          border-radius: 4px;
           background-color: white;
          color: #55a379 !important;
          padding: 15px;
        }
        .volunteer-slider .swiper-button-prev {
          left: 61%;
          transform: translateX(-50%);
        }
        .volunteer-slider .swiper-button-next {
          right: 33%;
          transform: translateX(50%);
        }
        .volunteer-slider .swiper-button-next:after,
        .volunteer-slider .swiper-button-prev:after {
          font-size: 16px;
        }
        @media (max-width: 768px) {
            .volunteer-slider .swiper-button-prev {
          left: 40%;
          transform: translateX(-50%);
        }
        .volunteer-slider .swiper-button-next {
          right: 40%;
          transform: translateX(50%);
        }
        }
      `}</style>
    </div>
  );
};

export default OurVolunteer;
