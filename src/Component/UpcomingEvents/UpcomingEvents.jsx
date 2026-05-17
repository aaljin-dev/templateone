import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import img2 from '../../assets/imagetwo.jpg'; // Just using existing image for now
import Heading from '../Heading/Heading';

const UpcomingEvents = ({ headtwo }) => {

  const events = [
    {
      id: 1,
      image: img2,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
      id: 2,
      image: img2,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
      id: 3,
      image: img2,
      time: "1:00 pm - 3:00 pm",
      location: "California Street",
      title: "Education For Children",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <Heading headerone={headtwo} />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <FaClock /> <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt /> <span>{event.location}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-500 text-center">
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
