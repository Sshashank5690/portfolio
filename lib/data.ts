import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BiCool } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import similarity from "@/public/similarity.png";
import krypt from "@/public/Krypt.png";
import supermario from "@/public/super mario.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Of Technology",
    location: "Kiet group of Instituitons, GZB",
    description:
      "Currently persuing the bachelors in Information technology and Right i'm in my Final Year.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024(May Expected)",
  },
  {
    title: "Front-End Developer (Y Combinator)",
    location: "Virtual Internship",
    description:
      "Worked with startup called Shiptivitas that helps to manage the Daily task log by connecting  API's of freight Shipping Data Providers. Created the Shipping productivity tool like kanban board for marking status. Increased the overall Productivity by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Worked with Sparks as full stack Developer. Developed and integrated payment functionality into a website using Razorpay API, resulting in seamless payment processing for users, through HTML, CSS, GSAP and Javascript for user-friendly Interface.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Working as Freelancer Developer and Designer",
    location: "Remote",
    description:
      "Over the Past few Month I have been Working developer with Goal to Make Saas Provider.",
    icon: React.createElement(BiCool),
    date: "2023",
  },
  {
    title: "erevald @_buildspace",
    location: "myspace",
    description:
      "Started the lifelong Saas Product that i wanted to build and deploy.",
    icon: React.createElement(BiCool),
    date: "2023",
  },
] as const;

export const projectsData = [
  { 
    title: "Similarity API",
    description:
      "Developed a similarity API website that generates an API key and retrieves the similarity between two text bodies.",
    tags: ["React", "Next.js", "Typescript", "TailwindCSS", "NextAuth.js"],
    imageUrl: similarity,
    link:"https://github.com/Sshashank5690/similarityAPI",
  },
  {
    title: "Krypt",
    description:
      "Developed a website utilizing Blockchain to seamlessly transfer Ethereum from one address to another via Metamask and validate Smart contracts.",
    tags: ["React", "Solidity", "Metamask", "TailwindCSS", "Ether.js"],
    imageUrl: krypt,
    link:"https://github.com/Sshashank5690/Krypt",
  },
  {
    title: "Super Mario Maps",
    description:
      "A public web app which shows the custom themed Google Maps for the required Area over the Google maps.",
    tags: ["Javascript", "GoogleMapsAPI", "CSS", "HTML"],
    imageUrl: supermario,
    link:"https://github.com/Sshashank5690/Mappy",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "C++",
  "Next.js",
  "Node.js",
  "Git",
  "PHP",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MYSQL",
  "Redux",
  "Ether.js",
  "Framer Motion",
  "Hardhat",
  "Figma",
  "Framer",
] as const;