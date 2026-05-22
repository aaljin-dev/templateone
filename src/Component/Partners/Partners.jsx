import React from "react";
import { DataImage } from "../mockData";
import ImageUi from "../Shared/Imageui";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="md:max-w-[92%] max-w-[92%] mx-auto px-2 md:px-4">
        <Swiper
          // modules={[Autoplay]}
          // slidesPerView={4}
          // spaceBetween={20}
          // loop={true}
          // speed={3000}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
          loop={true}
          speed={4000} // continuous speed
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {DataImage.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="md:h-[60px] h-[50px] w-[70%] md:w-[50%] rounded-md overflow-hidden">
                <ImageUi
                  src={item.image}
                  alt="partner-image"
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
