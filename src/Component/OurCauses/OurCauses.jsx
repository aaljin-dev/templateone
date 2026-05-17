import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img2 from "../../assets/imagetwo.jpg";
import Heading from "../Heading/Heading";

const OurCauses = ({ headthree }) => {
  const causes = [
    {
      id: 1,
      image: img2,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 2,
      image: img2,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 3,
      image: img2,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
    {
      id: 4,
      image: img2,
      title: "FUTURES FOR CHILDREN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima",
      progress: 50,
      raised: "$1200",
      goal: "$2400",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <Heading headerone={headthree} />

      <div className="max-w-6xl mx-auto px-4 relative causes-slider-container border-2 border-[#4cdf68]   
      ">
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
          className="pb-26 border-2 border-red-500 "
        >
          {causes.map((cause) => (
            <SwiperSlide key={cause.id}>
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden text-center hover:shadow-md transition-shadow mb-22">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {cause.desc}
                  </p>

                  <div className="relative pt-1 mt-6 mb-6">
                    <span className="absolute left-[50%] -top-5 -translate-x-1/2 text-xs font-bold text-gray-700">
                      {cause.progress}%
                    </span>
                    <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${cause.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#4cdf68]"
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                      <span>
                        Raised:{" "}
                        <span className="text-[#4cdf68]">{cause.raised}</span>
                      </span>
                      <span>
                        Goal:{" "}
                        <span className="text-[#4cdf68]">{cause.goal}</span>
                      </span>
                    </div>
                  </div>

                  <button className="border-2 border-[#4cdf68] text-[#4cdf68] font-bold py-2 px-6 rounded-full hover:bg-[#4cdf68] hover:text-white transition duration-300">
                    DONATE NOW
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .causes-slider-container .swiper-button-next,
        .causes-slider-container .swiper-button-prev {
          top: auto;
          bottom: 0;
          width: 40px;
          height: 40px;
          border: 1px solid #4cdf68;
          border-radius: 4px;
          color: #4cdf68;
          transition: all 0.3s ease;
        }
        .causes-slider-container .swiper-button-next:hover,
        .causes-slider-container .swiper-button-prev:hover {
          background-color: #4cdf68;
          color: white;
        }
        .causes-slider-container .swiper-button-prev {
          left: calc(50% - 45px);
          transform: none;
        }
        .causes-slider-container .swiper-button-next {
          right: calc(50% - 45px);
          transform: none;
        }
        .causes-slider-container .swiper-button-next:after,
        .causes-slider-container .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default OurCauses;
