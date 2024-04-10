import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BiCool, BiCrown, BiLogoGit} from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import similarity from "@/public/similarity.png";
import krypt from "@/public/Krypt.png";
import designalchemy from "@/public/designalchemy.png";
import way from "@/public/way.png";
import supermario from "@/public/super mario.png";
import bestfit from "@/public/bestfit.jpg";
import miranda from "@/public/miranda.png";
import blogit from "@/public/blogit.png";
import chat from "@/public/chat.png";
import newsbuddy from "@/public/newsbuddy.png";
import moji from "@/public/moji.png";

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
    title: "Launched Web Design Agency",
    location: "India",
    description:
      "Launched a Web Design Agency called Design Alchemy that provides services like Web Design, Development and SEO. Worked on more than 10+ Projects across Europe and India.",
    icon: React.createElement(CgWorkAlt),
    date: "January(2024) - Present",
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
      "Over the Past few months I have been working as a developer with Goal to make Products with better design.",
    icon: React.createElement(BiCool),
    date: "2023",
  },
  {
    title: "erevald @_buildspace",
    location: "myspace",
    description:
      "Started the lifelong Saas Product that i wanted to build and deploy. Want to know more head to my Twitter.",
    icon: React.createElement(BiCrown),
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
    title: "Design Alchemy",
    description:
      "Developed Website for Web Design Agency that provides services like Web Design, Development and SEO",
    tags: ["Astro", "TailwindCSS", "Vercel"],
    imageUrl: designalchemy,
    link:"https://designalchemy.live",
  },
  {
    title: "Aceternity UI Mockup",
    description:
      "Developed a website using next.js , shadcn/UI  and Aceternity UI to Create a Exceptional Animation in elementd and Ui components.",
    tags: ["Nextjs", "Shadcn", "AceternityUI",],
    imageUrl: way,
    link:"https://75waydemopage.vercel.app/",
  },
  {
    title: "BestFit",
    description:
      "Developed a customised Health app that provides the best diet and workout plan for the user based on their BMI and other health factors.",
    tags: ["React", "OpenAi", "MaterialUI", "MongoDB"],
    imageUrl: bestfit,
    link:"https://www.bestshape.fit/",
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
    title: "blogit",
    description:
      "The fullstack blog app is a digital platform for users to create, publish, and share their written content and engage with an online community.",
    tags: ["React", "NextJS", "MongoDB", "NextAuth", "Node.js" ,"Prisma"],
    imageUrl: blogit,
    link:"https://github.com/Sshashank5690/blogit",
  },
  {
    title: "Friendzone",
    description:
      "A chat app built with React and Node.js enables real-time messaging and communication between users through a responsive and dynamic interface.",
    tags: ["React", "Node.js", "MaterialUI", "Chatengine"],
    imageUrl: chat,
    link:"https://github.com/Sshashank5690/Friendzone",
  },
  {
    title: "AI Buddy",
    description:
      "An AI-enabled news provider app offers personalized and curated news articles using advanced algorithms and natural language processing.",
    tags: ["React", "MaterialUI", "AlanAI"],
    imageUrl: newsbuddy,
    link:"https://github.com/Sshashank5690/ai_news_reader",
  },
  {
    title: "Text Moji",
    description:
      "A web app that converts text into emojis for encryption and vice versa for decryption.",
    tags: ["React", "Tailwind", "Nodejs" ,"MongoDB"],
    imageUrl: moji,
    link:"https://github.com/Sshashank5690/extMOJI",
  },
  {
    title: "Super Mario Maps",
    description:
      "A public web app which shows the custom themed Google Maps for the required Area over the Google maps.",
    tags: ["Javascript", "GoogleMapsAPI", "CSS", "HTML"],
    imageUrl: supermario,
    link:"https://github.com/Sshashank5690/Mappy",
  },
  {
    title: "Miranda Webpage",
    description:
      "A designer webpage clone with the original animations and elements to replicate the original website.",
    tags: ["Javascript", "GSAP", "CSS", "HTML"],
    imageUrl: miranda,
    link:"https://github.com/Sshashank5690/MirandaHouse",
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
  "Astro",
  "AceternityUI",
  "Shadcn/UI",
  "Node.js",
  "Git",
  "PHP",
  "TailwindCSS",
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