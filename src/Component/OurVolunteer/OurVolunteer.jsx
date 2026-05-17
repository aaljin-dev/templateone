import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaFacebookF, FaTwitter, FaBehance } from 'react-icons/fa';
import img2 from '../../assets/imagetwo.jpg';
import Heading from '../Heading/Heading';

const OurVolunteer = ({ headfour }) => {
  const volunteers = [
    {
      id: 1,
      image: img2,
      name: "Albert R. Ardoin",
      role: "Actor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici"
    },
    {
      id: 2,
      image: img2,
      name: "Cynthia Anni",
      role: "Singer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici"
    },
    {
      id: 3,
      image: img2,
      name: "John Doe",
      role: "Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici"
    }
  ];

  return (
    <div className="py-20 bg-white border-2 border-red-500">
      <Heading headerone={headfour} />

      <div className="max-w-5xl mx-auto px-4 relative volunteer-slider border-2 border-green-500 h-[300px] ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {volunteers.map((vol) => (
            <SwiperSlide key={vol.id}>
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm flex overflow-hidden mb-[100px]">
                <img src={vol.image} alt={vol.name} className="w-1/3 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-gray-800">{vol.name}</h3>
                  <p className="text-xs text-[#4cdf68] font-bold mb-3">{vol.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{vol.desc}</p>
                  <div className="flex gap-4 text-gray-400">
                    <FaFacebookF className="cursor-pointer hover:text-[#4cdf68]" />
                    <FaTwitter className="cursor-pointer hover:text-[#4cdf68]" />
                    <FaBehance className="cursor-pointer hover:text-[#4cdf68]" />
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
          width: 40px;
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #888;
        }
        .volunteer-slider .swiper-button-prev {
          left: 45%;
          transform: translateX(-50%);
        }
        .volunteer-slider .swiper-button-next {
          right: 45%;
          transform: translateX(50%);
        }
        .volunteer-slider .swiper-button-next:after,
        .volunteer-slider .swiper-button-prev:after {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default OurVolunteer;
