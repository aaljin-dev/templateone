import React from "react";
import Top from "./Component/Top";
import Nav from "./Component/Nav";
import TopSlide from "./Component/TopSlider/TopSlide";
import Activity from "./Component/Activity/Activity";
import UrgentCause from "./Component/UrgentCause/UrgentCause";
import UpcomingEvents from "./Component/UpcomingEvents/UpcomingEvents";
import Stats from "./Component/Stats/Stats";
import OurCauses from "./Component/OurCauses/OurCauses";
import DonationAndDonors from "./Component/DonationAndDonors/DonationAndDonors";
import OurVolunteer from "./Component/OurVolunteer/OurVolunteer";
import Testimonial from "./Component/Testimonial/Testimonial";
import LatestNews from "./Component/LatestNews/LatestNews";
import Partners from "./Component/Partners/Partners";
import Footer from "./Component/Footer/Footer";
import "./App.css";

const App = () => {
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const headone = [{ head: "OUR ACTIVITY", para: paragraph }];
  const headtwo = [{ head: "UPCOMING EVENTS", para: paragraph }];
  const headthree = [{ head: "OUR CAUSES", para: paragraph }];
  const headfour = [{ head: "OUR VOLUNTEER", para: paragraph }];
  const headfive = [{ head: "LATEST NEWS", para: paragraph }];

  return (
    <div className="overflow-x-hidden font-sans">
      <Top />
      <Nav />
      <TopSlide />
      <Activity headerone={headone} />
      <UrgentCause />
      <UpcomingEvents headtwo={headtwo} />
      <Stats />
      <OurCauses headthree={headthree} />
      <DonationAndDonors />
      <OurVolunteer headfour={headfour} />
      <Testimonial />
      <LatestNews headfive={headfive} />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
