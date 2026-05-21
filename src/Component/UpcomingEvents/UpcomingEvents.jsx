import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import img2 from "../../assets/imagetwo.jpg"; // Just using existing image for now
import imgone from "../../assets/images/events_single_one.jpg";
import imgtwo from "../../assets/images/events_single_two.jpg";
import imgthree from "../../assets/images/events_single_three.jpg";
import Heading from "../Heading/Heading";
import ImageUi from "../Shared/Imageui";

const UpcomingEvents = ({ headtwo }) => {
  const events = [
    {
      id: 1,
      image: imgone,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      image: imgtwo,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      image: imgthree,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];

  return (
    <div className="py-10 bg-white">
      <Heading
        headerone={headtwo}
        className={
          "  md:mt-[95px] flex flex-col justify-center items-center w-full px-3 sm:w-[50%] mx-auto  font-hFont "
        }
        classhead={
          "md:text-3xl text-2xl font-bold text-gray-800 mb-6 md-mb-[62px]"
        }
      />

      <div className="md:max-w-[90%] md:mb-30  mx-auto grid grid-cols-1 md:grid-cols-3 gap-18 px-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg  overflow-hidden ">
            {/* <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            /> */}
            <ImageUi
              src={event.image}
              alt={event.title}
              className={"w-full h-58 object-cover"}
            />
            <div className="pt-4">
              <div className="flex justify-between items-center text-base text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <FaClock /> <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt /> <span>{event.location}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mt-9 text-center font-hFont text-gray-800">
                {event.title}
              </h3>
              <p className="text-lg leading-loose font-hFont text-gray-500 text-center">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
