"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently Pursuing Bachelor's in {" "}
        <span className="font-medium">Information Technology</span>, Along with that learning and Exploring the Software developement.
         I have great Interest in Design and Developement and doing{" "}
        <span className="font-medium">Frontend development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Cloud Technology. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-semibold">full-time engineering roles,</span> which involves user interface and experience design, 
        frontend engineering as the core.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and read articles. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how one can create a personal brand over socials.</span>. I'm also
        learning how to Design using NO CODE.
      </p>
    </motion.section>
  );
}