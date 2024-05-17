import React from "react";
import {
  FaChartBar,
  FaHubspot,
  FaCalendarCheck,
  FaGoogle,
  FaSignInAlt,
} from "react-icons/fa";
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
    url: "/servicefront",
    text: "Services",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
  {
    id: 6,
    url: "/reservations",
    text: "reservations",
  },

  {
    id: 7,
    url: "/login",
    text: <FaSignInAlt />,
  },
];

const team = [
  {
    id: 1,
    name: "Aman Shakya",
    job: "Assistant Professor",
    image:
      "https://lh6.googleusercontent.com/4m3PiqvbDi_4j6L03Lns9eFfjmiOGXFzarrgsDbC84FRMAEVITA-y4wUYRKHVLeghQidCLDSRggx9jqRxBtMiip2eMfHpZtbXrs6JVrCabFpbvZax-rqI2BYWc5rjN9A2Q=w1280",
  },
  {
    id: 2,
    name: "Sanjeeb Prasad Pandey",
    job: "Assosciate Professor",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Basanta Joshi",
    job: "Assistant Professor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnXTewmj_91XkXMtIwmk8_AkOCMLU0pHJjscuOtU4hw&s",
  },
  {
    id: 4,
    name: "Sharad Kumar Ghimire",
    job: "Assosciate Professor",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=n32raPwAAAAJ&citpid=1",
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
