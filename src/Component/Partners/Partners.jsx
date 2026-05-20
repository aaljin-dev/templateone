import React from "react";
import { DataImage } from "../mockData";
import ImageUi from "../Shared/Imageui";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[92%] mx-auto px-4">
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
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          speed={4000} // continuous speed
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {DataImage.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="h-[60px] w-[50%] rounded-md overflow-hidden">
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
