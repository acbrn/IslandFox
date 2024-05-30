import { eco, stellar, sts } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nodejs,
  react,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Stewarts Tax Services",
    icon: sts,
    iconBg: "#accbe1",
    date: "February 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "EcoStyle Mart",
    icon: eco,
    iconBg: "#b7e4c7",
    date: "April 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "This is a mock e-commerece site I created for a project. I am currently working on this project and adding new features to it.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/acbrn",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/andrew-coburn8",
  },
];

export const projects = [
  {
    iconUrl: stellar,
    theme: "btn-back-black",
    title: "Capstone Project",
    description:
      "A bootcamp project I made using JavaScript, HTML, CSS, the project is a site that allows users to setup mission names to planets, and to track the international space station.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://interstellar-voyages.netlify.app",
  },
  {
    iconUrl: sts,
    theme: "btn-back-blue",
    title: "STS",
    description:
      "A project I worked on for a client. I was responsible for creating the front end of the site using React.js.",
    tags: ["React", "Tailwind CSS", "MongoDB"],
    link: "https://stewartstaxservices.netlify.app",
  },
  {
    iconUrl: eco,
    theme: "btn-back-green",
    title: "EcoStyle Mart",
    description:
      "A mock e-commerce site I created for a project. I am currently working on this project and adding new features to it.",
    tags: ["React", "Tailwind CSS", "MongoDB"],
  },
];
