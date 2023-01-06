import React from "react";
import { FaChartBar, FaHubspot, FaCalendarCheck, FaGoogle } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/gallery",
    text: "gallery",
  },
  {
    id: 3,
    url: "/events",
    text: "events",
  },
  {
    id: 4,
    url: "/reservations",
    text: "reservations",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];
const team = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
];
export const services = [
  {
    id: 1,
    title: "Training",
    icon: <FaChartBar />,
    text: "ICTC conducts both long term and short-term training courses related with current ICT trends",
  },
  {
    id: 2,
    title: "Laboratories",
    icon: <FaHubspot />,
    text: "laborICTC has 9 Laboratories, with 30 computers in each lab for exam conduction, trainings and ICT-related lab purposes.atories",
  },
  {
    id: 3,
    title: "Reservations",
    icon: <FaCalendarCheck />,
    text: "Give us a call, or make reservations for any ICT related examinations, workshops or seminars. ",
  },
];
export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.google.com",
    icon: <FaGoogle />,
  },
];

export default team;
