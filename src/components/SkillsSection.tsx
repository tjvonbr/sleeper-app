"use client";

import { Icons } from "./Icons";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { ArrowDown, Download } from "lucide-react";
import { Skill, skills } from "@/config/siteConfig";
import { fadeInAnimation } from "@/lib/framer";

export default function SkillsSection() {
  return (
    <Section className="px-5 pt-32 md:pt-48 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h2 className="text-lg text-[#00ceb8] font-semibold">Skills</h2>
        <p className="text-center text-3xl text-white font-bold">
          Why should Sleeper hire me?
        </p>
        <p className="w-[90%] md:w-1/2 text-center text-gray-300">
          Enter your email below and one of our consultants will reach out to
          see you soon to see how we can help scale your business
        </p>
      </div>
      <a
        className="mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-teal-400 hover:bg-teal-500 transition-colors text-sm text-[#181c28] font-medium hover:cursor-pointer"
        href="/vonbruenchenhein.pdf"
        download
      >
        <p>Download resume</p>
        <Download color="#181c28" size={15} />
      </a>

      <div className="mt-4 flex flex-col md:flex-row text-center">
        {skills.map((skill: Skill, idx: number) => {
          const Icon = Icons[skill.icon || "development"];

          return (
            <motion.div
              key={idx}
              className="group flex flex-col items-center space-y-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={idx}
            >
              <Icon size={25} color="#00ceb8" />
              <h2 className="text-2xl text-white font-semibold">
                {skill.title}
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="group mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium">
        <p>Keep going!</p>
        <ArrowDown
          className="group-hover:translate-x-1 duration-200"
          color="white"
          size={15}
        />
      </div>
    </Section>
  );
}
