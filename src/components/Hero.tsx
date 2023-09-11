"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-5 flex flex-col items-center">
      <h1 className="text-center text-5xl text-white font-bold">
        Sleeper 🤝 Trevor
      </h1>
      <p className="text-center text-lg text-gray-300">
        An overengineered application for a developer role at Sleeper!
      </p>
      <Link
        className="group mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-color text-sm text-white font-medium hover:cursor-pointer"
        href="#skills"
      >
        <p>Let&apos;s start</p>
        <ArrowRight
          className="group-hover:translate-x-1 duration-200"
          color="white"
          size={15}
        />
      </Link>
    </div>
  );
}
