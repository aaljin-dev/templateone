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
    <div className="py-20 bg-white">
      <Heading
        headerone={headthree}
        className={
          "mb-7  md:mt-[43px] flex flex-col justify-center items-center  w-[50%] mx-auto border font-hFont "
        }
        classhead={"text-3xl font-bold text-gray-800 mb-6"}
      />

      <div
        className="max-w-[90%] mx-auto  causes-slider-container border-2 border-[#4cdf68]   
      "
      >
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
          className="pb-26 borderr h-[900px]"
        >
          {causes.map((cause) => (
            <SwiperSlide key={cause.id}>
              <div
                className=" rounded-lg shadow-sm
               overflow-hidden text-center hover:shadow-md transition-shadow border w-[375px]"
              >
                {/* <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-56 object-cover"
                /> */}
                <ImageUi
                  src={cause.image}
                  alt={cause.title}
                  className={"w-full h-56 object-cover"}
                />
                <div className="pt-25 ">
                  <h3 className="text-xl font-bold  text-gray-800 pb-10 font-hFont">
                    {cause.title}
                  </h3>
                  <p className="text-base text-gray-500 mb-6 font-[30px]">
                    {cause.desc}
                  </p>

                  <div className=" pt-1 mt-6 mb-6">
                    <p className=" borderr mb-5">{cause.progress}%</p>
                    <div className="">
                      <div className="w-[90%] mx-5 h-3 rounded-md bg-[linear-gradient(to_right,#02ce67_50%,#e5e5e5_50%)]"></div>
                    </div>
                    <div className="flex justify-between pt-4 mx-5">
                      <span>
                        Raised :
                        <span className="text-green-400">{cause.raised}</span>
                      </span>
                      <span>
                        Goal :
                        <span className="text-green-400">{cause.goal}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mb-11 mt-15">
                    <button
                      className="border-2 border-[#9fe9ad] text-[#4cdf68] font-bold py-2 px-6 rounded-full hover:bg-[#4cdf68]
                     hover:text-white transition duration-300"
                    >
                      DONATE NOW
                    </button>
                  </div>
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
    bottom: 40px;
    width: 50px;
    height: 50px;
    padding: 15px;
    border: 1px solid #4cdf68;
    border-radius: 4px;
    color: black;  
    background-color: white;
    transition: all 0.3s ease;
  }

  .causes-slider-container .swiper-button-next:hover,
  .causes-slider-container .swiper-button-prev:hover {
    background-color: #4cdf68;
    
  }

  .causes-slider-container .swiper-button-prev {
    left: calc(45% - 50px);
  }

  .causes-slider-container .swiper-button-next {
    right: calc(45% - 50px);
  }

  .causes-slider-container .swiper-button-next:after,
  .causes-slider-container .swiper-button-prev:after {
   color: black;
    font-size: 10px;
    font-weight: bold;
  }
`}</style>
    </div>
  );
};

export default OurCauses;
