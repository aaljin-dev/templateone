import React from "react";
import img from "../../assets/carosal-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TopSlider.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
// import img from "./assets/website.jpg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopSlide() {
  return (
    <>
      <div
        className=" h-[650px] w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <Swiper
          className="topslideswiper h-full "
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="h-full slidearrow">
            <div className="h-full flex justify-center items-center ">
              <div className="h-full flex flex-col w-[70%] gap-[6%] justify-center items-center text-center">
                <h1 className="text-white text-4xl font-bold font-hFont">
                  CHILDREN NEED YOUR HELP
                </h1>
                <p className="text-white text-1xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, beatae aliquid consectetur doloribus alias in. Amet eum
                  et totam deleniti consequatur quaerat ratione, maiores tempore
                  rerum temporibus nobis ipsam ex?
                </p>
                <div className="flex gap-10">
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    DONATE NOW
                  </button>
                  <button className="bg-none border border-white text-white px-7 py-3 rounded-4xl">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="h-full flex justify-center items-center border">
              <div className="h-full flex flex-col w-[70%] gap-[6%] justify-center items-center border text-center">
                <h1 className="text-white text-4xl font-bold">
                  CHILDREN NEED YOUR HELP
                </h1>
                <p className="text-white text-1xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, beatae aliquid consectetur doloribus alias in. Amet eum
                  et totam deleniti consequatur quaerat ratione, maiores tempore
                  rerum temporibus nobis ipsam ex?
                </p>
                <div className="flex gap-10">
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    DONATE NOW
                  </button>
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="h-full flex justify-center items-center border">
              <div className="h-full flex flex-col w-[70%] gap-[6%] justify-center items-center border text-center">
                <h1 className="text-white text-4xl font-bold">
                  CHILDREN NEED YOUR HELP
                </h1>
                <p className="text-white text-1xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, beatae aliquid consectetur doloribus alias in. Amet eum
                  et totam deleniti consequatur quaerat ratione, maiores tempore
                  rerum temporibus nobis ipsam ex?
                </p>
                <div className="flex gap-10">
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    DONATE NOW
                  </button>
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="h-full flex justify-center items-center border">
              <div className="h-full flex flex-col w-[70%] gap-[6%] justify-center items-center border text-center">
                <h1 className="text-white text-4xl font-bold">
                  CHILDREN NEED YOUR HELP
                </h1>
                <p className="text-white text-1xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, beatae aliquid consectetur doloribus alias in. Amet eum
                  et totam deleniti consequatur quaerat ratione, maiores tempore
                  rerum temporibus nobis ipsam ex?
                </p>
                <div className="flex gap-10">
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    DONATE NOW
                  </button>
                  <button className="bg-white text-green-400 px-7 py-3 rounded-4xl">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default TopSlide;
