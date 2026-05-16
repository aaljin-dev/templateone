import React from "react";
import img from "../assets/imagetwo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// import "./Slide.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
// import img from "./assets/website.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopSlide() {
  return (
    <>
      <div
        className="border h-[650px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </>
  );
}

export default TopSlide;
