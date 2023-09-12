export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface Interest extends Skill {}

export const skills: Skill[] = [
  {
    title: "4+ years of experience",
    description:
      "Wealth of engineering experience in fast-paced startup environments",
    icon: "timer",
  },
  {
    title: "Expert craftsman",
    description:
      "Wealth of engineering experience in fast-paced startup environments",
    icon: "hammer",
  },
  {
    title: "Wearer of many hats",
    description:
      "Eager to work on whatever task is mission-critical and pick up new skills",
    icon: "chefHat",
  },
  {
    title: "Fantasy football guru",
    description:
      "Passionate about fantasy sports and excited about the market's growth",
    icon: "trophy",
  },
];

export const interests: Interest[] = [
  {
    title: "Trade Analyzer",
    description:
      "Many websites and third-party apps in the marketplace analyze your draft, evaluate trades, and provide sit 'em/start 'em advice. Build these in-house!",
    icon: "scale",
  },
  {
    title: "Historical League Data",
    description:
      "In-season metrics are already great, but it'd be awesome to keep track of all-time records, awards, and rankings over the course of a league's history throughout the years",
    icon: "medal",
  },
  {
    title: "Start 'em/Sit 'em Assistant",
    description:
      "A tool I'd like to work on is a bot that alerts managers if they have a player on their bench projected to score more points than one of their starters, perhaps even making the substitution",
    icon: "bot",
  },
];
