"use client";

import { ArrowDown } from "lucide-react";
import { Icons } from "./Icons";
import { Interest, interests } from "@/config/siteConfig";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInAnimation } from "@/lib/framer";

export default function Interests() {
  return (
    <Section className="pt-24 md:pt-48 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-lg text-[#00ceb8] font-semibold">Interests</h2>
        <p className="w-full text-center text-3xl text-white font-bold">
          What I&apos;d love to work on
        </p>
        <p className="w-3/4 md:w-1/2 text-center text-gray-300">
          Sleeper is the best fantasy sports app on the market, and the one
          I&apos;ve been using to manage all my leagues for several years now
        </p>
      </div>
      <div className="mt-8 md:mt-4 flex flex-col md:flex-row gap-2 md:gap-8">
        {interests.map((interest: Interest, idx: number) => {
          const Icon = Icons[interest.icon || "development"];

          return (
            <motion.div
              key={idx}
              className="h-[200px] w-[375px] flex space-x-4"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={idx}
            >
              <div className="h-full flex flex-col justify-start">
                <div className="h-[50px] w-[50px] flex justify-center items-center rounded-lg bg-gray-800">
                  <Icon size={25} color="#00ceb8" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xl text-gray-300 font-bold">
                  {interest.title}
                </p>
                <p className="text-[#b4bcd0]">{interest.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="group mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium">
        <p>One more time!</p>
        <ArrowDown
          className="group-hover:translate-x-1 duration-200"
          color="white"
          size={15}
        />
      </div>
    </Section>
  );
}
