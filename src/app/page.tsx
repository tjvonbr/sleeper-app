import Image from "next/image";
import sleeperLogo from "../assets//sleeper_logo.png";
import Hero from "@/components/Hero";
import {
  ArrowDown,
  Bot,
  ChefHat,
  Download,
  Hammer,
  Medal,
  Plus,
  Scale,
  Timer,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#181c28] bg-opacity-">
      <section className="my-80 flex flex-col items-center">
        <Image src={sleeperLogo} alt="Sleeper logo" width={50} height={50} />
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:[rgb(0, 206, 184)] before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#00ceb9] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
        <Hero />
      </section>

      <section className="py-48 flex flex-col items-center" id="skills">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg text-[#00ceb8] font-semibold">Skills</h2>
          <p className="w-full text-center text-3xl text-white font-bold">
            Why should Sleeper hire me?
          </p>
          <p className="w-1/2 text-center text-gray-300">
            Enter your email below and one of our consultants will reach out to
            see you soon to see how we can help scale your business
          </p>
          <Link
            className="mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-teal-400 hover:bg-teal-500 transition-colors text-sm text-[#181c28] font-medium hover:cursor-pointer"
            href="#continued-skills"
          >
            <p>Download resume</p>
            <Download color="#181c28" size={15} />
          </Link>
        </div>

        <div className="mt-4 flex text-center">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group flex flex-col items-center space-y-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Timer size={25} color="#00ceb8" />
            <h2 className={`text-2xl font-semibold`}>4+ years of experience</h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-300`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group flex flex-col items-center space-y-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Hammer size={25} color="#00ceb8" />
            <h2 className={`text-2xl font-semibold`}>Expert craftsman</h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-300`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group flex flex-col items-center space-y-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChefHat size={25} color="#00ceb8" />
            <h2 className={`text-2xl font-semibold`}>Wearer of many hats</h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-300`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group flex flex-col items-center space-y-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trophy size={25} color="#00ceb8" />
            <h2 className={`text-2xl font-semibold`}>Fantasy football guru</h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-300`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
        </div>
        <Link
          className="mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium hover:cursor-pointer"
          href="#continued-skills"
        >
          <p>Next</p>
          <ArrowDown color="white" size={15} />
        </Link>
      </section>

      <section
        className="py-48 flex flex-col items-center"
        id="continued-skills"
      >
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg text-[#00ceb8] font-semibold">
            {"Skills continued"}
          </h2>
          <p className="w-full text-center text-3xl text-white font-bold">
            More reasons why Sleeper should hire me
          </p>
          <p className="w-1/2 text-center text-gray-300">
            I built a pretty sweet fantasy football app that integrates with
            Sleeper&apos;s public-facing API. Check it out!
          </p>
        </div>

        <div className="mt-4 flex justify-between gap-10">
          <div className="w-[600px] flex flex-col gap-4">
            <h2 className="text-2xl text-center text-white font-bold">
              Sleeper Keeper Calculator
            </h2>
          </div>
          <div className="w-[600px] flex flex-col items-center">
            <h2 className="text-2xl text-center text-white font-bold">
              Features
            </h2>
            <ul className="w-3/4 mt-2 flex flex-col items-center space-y-4">
              <li className="flex items-center space-x-1 text-gray-300">
                <Plus color="#00ceb8" size={25} strokeWidth={5} />
                <p>
                  Fetches and evaluates team owners&apos; draft data directly
                  from Sleeper API
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
                  selections based on their draft pick location and ADP day of
                  the leaguea&apos;s draft time
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Link
          className="mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium hover:cursor-pointer"
          href="#interests"
        >
          <p>Next</p>
          <ArrowDown color="white" size={15} />
        </Link>
      </section>

      <section className="py-48 flex flex-col items-center" id="interests">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg text-[#00ceb8] font-semibold">Interests</h2>
          <p className="w-full text-center text-3xl text-white font-bold">
            What I&apos;d love to work on
          </p>
          <p className="w-1/2 text-center text-gray-300">
            Sleeper is the best fantasy sports app on the market, and the one
            I&apos;ve been using to manage all my leagues for several years now
          </p>
        </div>
        <div className="w-full mt-4 gap-8 flex justify-between text-start">
          <div className="h-[200px] w-[375px] flex space-x-4">
            <div className="h-full flex flex-col justify-start">
              <div className="h-[50px] w-[50px] flex justify-center items-center rounded-lg bg-gray-800">
                <Scale size={25} color="#00ceb8" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xl text-gray-300 font-bold">Trade Analyzer</p>
              <p className="text-[#b4bcd0]">
                Many websites and third-party apps in the marketplace analyze
                your draft, evaluate trades, and provide sit &apos;em/start
                &apos;em advice. Build these in-house!
              </p>
            </div>
          </div>
          <div className="h-[200px] w-[375px] flex space-x-4">
            <div className="h-full flex flex-col justify-start">
              <div className="h-[50px] w-[50px] flex justify-center items-center rounded-lg bg-gray-800">
                <Medal size={25} color="#00ceb8" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xl text-gray-300 font-bold">
                Historical League Data
              </p>
              <p className="text-[#b4bcd0]">
                In-season metrics are already great, but it&apos;d be awesome to
                keep track of all-time records, awards, and rankings over the
                course of a league&apos;s history throughout the years
              </p>
            </div>
          </div>
          <div className="h-[200px] w-[375px] flex space-x-4">
            <div className="h-full flex flex-col justify-start">
              <div className="h-[50px] w-[50px] flex justify-center items-center rounded-lg bg-gray-800">
                <Bot size={25} color="#00ceb8" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xl text-gray-300 font-bold">
                Start &apos;em/Sit &apos;em assistant
              </p>
              <p className="text-[#b4bcd0]">
                A tool I&apos;d like to work on is a bot that alerts managers if
                they have a player on their bench projected to score more points
                than one of their starters, perhaps even making the substitution
              </p>
            </div>
          </div>
        </div>
        <Link
          className="mt-5 px-5 py-2 flex items-center space-x-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white font-medium hover:cursor-pointer"
          href="#skills"
        >
          <p>Next</p>
          <ArrowDown color="white" size={15} />
        </Link>
      </section>

      <ContactSection />
    </main>
  );
}
