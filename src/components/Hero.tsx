"use client";

import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const linkedinProfileUrl = "https://linkedin.com/in/tjvonbr";
  const githubProfileUrl = "https://github.com/tjvonbr";

  const blah = "group-hover:text-[#00ceb8]";

  return (
    <div className="px-5 flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl text-white font-bold">
          Sleeper 🤝 Trevor
        </h1>
        <p className="text-center text-lg text-gray-300">
          An overengineered application for a developer role at Sleeper!
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Link
          className="group flex justify-center items-center space-x-2 text-white hover:text-[#00ceb8] transition-colors hover:cursor-pointer"
          href={linkedinProfileUrl}
          target="_blank"
        >
          <Linkedin size={20} />

          <p className="text-sm">LinkedIn</p>
        </Link>
        <Link
          className="group flex justify-center items-center space-x-2 text-white hover:text-[#00ceb8] transition-colors  hover:cursor-pointer"
          href={githubProfileUrl}
          target="_blank"
        >
          <Github size={20} />
          <p className="text-sm">GitHub</p>
        </Link>
      </div>
      <div className="group mt-12 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-color text-sm text-white font-medium">
        <p>Scroll down!</p>
        <ArrowDown
          className="group-hover:translate-x-1 duration-200"
          color="white"
          size={15}
        />
      </div>
    </div>
  );
}
