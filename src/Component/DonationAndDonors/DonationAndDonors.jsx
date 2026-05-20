import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img2 from "../../assets/imagetwo.jpg";
import ImageUi from "../Shared/Imageui";
import { featuredDonors } from "../mockData";

import "./Doner.css";

const DonationAndDonors = () => {
  const [amount, setAmount] = useState("50USD");
  const [type, setType] = useState("ONE TIME");

  const amounts = ["20USD", "50USD", "100USD"];
  const types = ["ONE TIME", "MONTHLY", "YEARLY"];

  const data = [{}];

  return (
    <div className="flex flex-col lg:flex-row w-full mt-4 px-[5%] h-[600px]">
      {/* Donation Now Section */}
      <div className="lg:w-1/2 bg-[#02d262] p-12 lg:px-15 text-white flex flex-col justify-around items-center">
        <h2 className="text-2xl font-base mb-4  lg:text-left">DONATION NOW</h2>

        <div className="mb-6">
          <div className="flex items-center gap-4 mb-12 text-sm font-bold tracking-wide">
            <span>AMOUNT :</span>
            <div className="flex gap-6">
              {amounts.map((amt) => (
                <label
                  key={amt}
                  className="flex items-center gap-2 cursor-pointer"
                >
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

          <div className="flex items-center gap-4  text-sm font-bold tracking-wide">
            <span>TYPE :</span>
            <div className="flex gap-4">
              {types.map((t) => (
                <label
                  key={t}
                  className="flex items-center gap-2 cursor-pointer"
                >
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
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-white/50 p-3 rounded text-white placeholder-white/70 w-1/2 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white/50 p-3 rounded text-white placeholder-white/70 w-1/2 focus:outline-none focus:border-white"
            />
          </div>
          <select className="bg-transparent border border-white/50 p-3 rounded text-white focus:outline-none focus:border-white ">
            <option className="text-black" value="1">
              I Want To Donate For 1
            </option>
            <option className="text-black" value="2">
              I Want To Donate For 2
            </option>
          </select>
          <div className="mt-6 text-center">
            <button
              type="button"
              className="bg-white text-[#1fbd83] font-base py-3 px-10 rounded-md hover:bg-gray-100 transition duration-300"
            >
              DONATION NOW
            </button>
          </div>
        </form>
      </div>

      {/* Featured Donors Section */}
      <div className="lg:w-9/12 h-full bg-gray-100  lg:p-20 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium mb-5 mt-3 text-center text-gray-800">
          FEATURED DONORS
        </h2>

        <div className="max-w-md mx-auto h-full w-full text-center donors-slider donationAndDonor ">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className=" relative"
          >
            {featuredDonors.map((item) => (
              <SwiperSlide key={item.id} className="pb-10">
                <div className="bg-white rounded-lg shadow-sm">
                  {/* <img
                    src={img2}
                    alt="Kenneth J. Garnica"
                    className="w-full h-48 object-cover rounded mb-6"
                  /> */}
                  <ImageUi
                    src={item.image}
                    alt="Kenneth J. Garnica"
                    className={"w-[100%] h-[300px] object-cover rounded"}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mt-6">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Donated Amount :
                    <span className="text-[#4cdf68]">
                      `${item.amount} ${item.currency}`
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DonationAndDonors;
