import donors_featured_one from "../assets/images/donors_featured_one.jpg";

import OurVolunteer from "../assets/images/volanteer_2.jpg";
import OurVolunteertwo from "../assets/images/volanteer_3.jpg";
import newimge from "../assets/images/news_images_1.jpg";
import newtwo from "../assets/images/news_images_2.jpg";
import newthre from "../assets/images/news_images_3.jpg";
import amazon from "../assets/images/amazon.png";
import microsoft from "../assets/images/microsoft.png";
import envato from "../assets/images/envato.png";
import yahoo from "../assets/images/yahoo.png";

export const featuredDonors = [
  {
    id: 1,
    name: "Kenneth J. Garnica",
    amount: 220,
    currency: "USD",
    image: donors_featured_one,
  },
  {
    id: 2,
    name: "Sophia Williams",
    amount: 350,
    currency: "USD",
    image: donors_featured_one,
  },
  {
    id: 3,
    name: "Michael Brown",
    amount: 180,
    currency: "USD",
    image: donors_featured_one,
  },
  {
    id: 4,
    name: "Emma Johnson",
    amount: 500,
    currency: "USD",
    image: donors_featured_one,
  },
];

export const volunteers = [
  {
    id: 1,
    image: OurVolunteer,
    name: "Albert R. Ardoin",
    role: "Actor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisici",
  },
  {
    id: 2,
    image: OurVolunteertwo,
    name: "Cynthia Anni",
    role: "Singer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisici",
  },
  {
    id: 3,
    image: OurVolunteer,
    name: "John Doe",
    role: "Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisici",
  },
];

export const news = [
  {
    id: 1,
    image: newimge,
    date: "30 May, 2017",
    title: "Wood Work Adds Value To Your Property Five",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: newtwo,
    date: "30 May, 2017",
    title: "Wood Work Adds Value To Your Property Five",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: newthre,
    date: "30 May, 2017",
    title: "Wood Work Adds Value To Your Property Five",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const DataImage = [
  { id: 1, image: amazon },
  { id: 2, image: microsoft },
  { id: 3, image: envato },
  { id: 4, image: yahoo },
];
