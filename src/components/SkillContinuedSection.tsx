"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { ArrowDown, Plus } from "lucide-react";

export default function SkillsContinuedSection() {
  return (
    <Section className="px-5 pt-24 md:pt-48 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h2 className="text-lg text-[#00ceb8] font-semibold">
          Skills continued
        </h2>
        <p className="text-center text-3xl text-white font-bold">
          More reasons why Sleeper should hire me
        </p>
        <p className="w-[90%] md:w-1/2 text-center text-gray-300">
          I built a pretty sweet fantasy football app that integrates with
          Sleeper&apos;s public-facing API. Check it out!
        </p>
      </div>

      <motion.div
        className="mt-4 flex flex-col items-center md:flex-row text-center"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        <div className="w-[90%] flex flex-col gap-4">
          <h2 className="text-2xl text-center text-white font-bold">
            Sleeper Keeper Calculator
          </h2>
        </div>
        <div className="w-[90%] flex flex-col items-center">
          <h2 className="text-2xl text-center text-white font-bold">
            Features
          </h2>
          <ul className="w-3/4 mt-2 flex flex-col items-center space-y-4 text-left">
            <li className="flex items-center space-x-1 text-gray-300">
              <Plus color="#00ceb8" size={25} strokeWidth={5} />
              <p>
                Fetches and evaluates team owners&apos; draft data directly from
                Sleeper API
              </p>
            </li>
            <li className="flex items-center space-x-1 text-gray-300">
              <Plus color="#00ceb8" size={25} strokeWidth={5} />
              <p>
                Scrapes average draft position (ADP) data from FantasyPros and
                stores it as a daily snapshot in a PostgreSQL database
              </p>
            </li>
            <li className="flex items-center space-x-1 text-gray-300">
              <Plus color="#00ceb8" size={25} strokeWidth={5} />
              <p>
                Scores and ranks Sleeper team owners&apos; keeper and draft
                selections based on their draft pick location and ADP day of the
                leaguea&apos;s draft time
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="group mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium">
        <p>Almost there!</p>
        <ArrowDown
          className="group-hover:translate-x-1 duration-200"
          color="white"
          size={15}
        />
      </div>
    </Section>
  );
}
