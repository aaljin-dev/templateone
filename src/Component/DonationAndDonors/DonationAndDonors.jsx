import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img2 from '../../assets/imagetwo.jpg';

const DonationAndDonors = () => {
  const [amount, setAmount] = useState('50USD');
  const [type, setType] = useState('ONE TIME');

  const amounts = ['20USD', '50USD', '100USD'];
  const types = ['ONE TIME', 'MONTHLY', 'YEARLY'];

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Donation Now Section */}
      <div className="lg:w-1/2 bg-[#4cdf68] p-12 lg:p-20 text-white flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">DONATION NOW</h2>
        
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm font-bold tracking-wide">
            <span>AMOUNT :</span>
            <div className="flex gap-4">
              {amounts.map((amt) => (
                <label key={amt} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="amount" 
                    value={amt}
                    checked={amount === amt}
                    onChange={(e) => setAmount(e.target.value)}
                    className="accent-white"
                  />
                  <span>{amt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-bold tracking-wide">
            <span>TYPE :</span>
            <div className="flex gap-4">
              {types.map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="type" 
                    value={t}
                    checked={type === t}
                    onChange={(e) => setType(e.target.value)}
                    className="accent-white"
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="bg-transparent border border-white/50 p-3 rounded text-white placeholder-white/70 w-1/2 focus:outline-none focus:border-white" />
            <input type="email" placeholder="Email" className="bg-transparent border border-white/50 p-3 rounded text-white placeholder-white/70 w-1/2 focus:outline-none focus:border-white" />
          </div>
          <select className="bg-transparent border border-white/50 p-3 rounded text-white focus:outline-none focus:border-white appearance-none">
            <option className="text-black" value="1">I Want To Donate For 1</option>
            <option className="text-black" value="2">I Want To Donate For 2</option>
          </select>
          <div className="mt-6">
            <button type="button" className="bg-white text-[#4cdf68] font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition duration-300">
              DONATION NOW
            </button>
          </div>
        </form>
      </div>

      {/* Featured Donors Section */}
      <div className="lg:w-1/2 bg-gray-100 p-12 lg:p-20 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">FEATURED DONORS</h2>
        
        <div className="max-w-md mx-auto w-full text-center donors-slider">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img src={img2} alt="Kenneth J. Garnica" className="w-full h-48 object-cover rounded mb-6" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Kenneth J. Garnica</h3>
                  <p className="text-sm text-gray-500">
                    Donated Amount : <span className="text-[#4cdf68]">220 USD</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
        .donors-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
        }
        .donors-slider .swiper-pagination-bullet-active {
          background: #4cdf68;
        }
      `}</style>
    </div>
  );
};

export default DonationAndDonors;
