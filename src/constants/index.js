import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import mav from '../assets/mav.svg';
import artisan from '../assets/artisan.svg';
import coverx from '../assets/coverx.svg';
import fairtex from '../assets/fairtex.svg';
import next from '../assets/collaboration/next.png';
import node from '../assets/collaboration/node.png';
import react from '../assets/collaboration/react.png';
import python from '../assets/collaboration/python.png';
import mongodb from '../assets/collaboration/mongodb.png';
import flutter from '../assets/collaboration/flutter.png';
import swift from '../assets/collaboration/swift.png';
import lawin from '../assets/lawin.jpg';
import axlefleets from '../assets/axlefleets.png';
import maverick from '../assets/maverick.png';
import eduease from '../assets/eduease.png'

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Product",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Offerings",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, fairtex, mav,artisan, coverx];
console.log(companyLogos);

export const brainwaveServices = [
  "Data Insights and Recommendations",
  "ChatBots and virtual assistants",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "LawIn",
    text: "A freelance platform for layers with an AI Law assitant chatbot",
    date: "Dec 2024",
    status: "In Progress",
    imageUrl: lawin,
    colorful: true,
  },
  {
    id: "1",
    title: "Axle Fleets",
    text: "A logistics and Dispatching web App where all the bookings and scheduled seamlessly",
    date: "June 2024",
    status: "Completed",
    imageUrl: axlefleets ,
  },
  {
    id: "2",
    title: "Maverick Real Estate",
    text: "Allow customers to browser over a bunch of properties and find best fit for themselves",
    date: "March 2024",
    status: "Completed",
    imageUrl: maverick,
  },
  {
    id: "3",
    title: "Edu Ease",
    text: "Fully Automated and AI powered Education System",
    date: "Nov 2024",
    status: "In Progress",
    imageUrl: eduease,
    colorful:true,
  },
];

export const collabText =
  "We utilize cutting-edge AI advancements to provide top-quality technology solutions, delivered promptly and within budget.";

export const collabContent = [
  {
    id: "0",
    title: "Software Outsourcing",
    text: "Rely on us to manage your entire software development lifecycle, delivering end-to-end solutions efficiently and effectively.",
  },
  {
    id: "1",
    title: "Modern Technologies",
  },
  {
    id: "2",
    title: "Top-notch Services",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "python",
    icon: python,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "next",
    icon: next,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "node",
    icon: node,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "flutter",
    icon: flutter,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "swift",
    icon: swift,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "react",
    icon: react,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "1",
    title: "Build your Idea from scratch",
    description: "Quality and high end software solutions tailored to your requirements",
    price: null,
    features: [
      "Budget Friendly and Quick",
      "Complementry Add on Features",
      "Standing out in competition product",
    ],
  },
  {
    id: "2",
    title: "Work on existing product",
    description: "Seamlessly improving already made solutions",
    price: null,
    features: [
      "Priority support to solve issues quickly",
      "Maintainence and improvement",
      "Ability to explore the product and retune its features",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Application Development",
    text: "Expert development of web applications tailored to your specific business needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "UI/UX Design",
    text: "Crafting Intuitive Experiences our UI/UX Services Redefine User Interaction",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI Integration",
    text: "Unleash the power of new Technologies to innovate and stay ahead of the competition",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Mobile Application Development",
    text: "Design and development of high-quality mobile applications for iOS and Android platforms",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Data Analytics and Insights",
    text: "Stand out by harnessing the Data analytics to get valuable insights",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Shopify and Wordpress Development",
    text: "Deliver high quality automated E-commerce solutions tailored with you business nature",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
