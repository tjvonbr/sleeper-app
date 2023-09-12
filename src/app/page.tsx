import Image from "next/image";
import sleeperLogo from "../assets//sleeper_logo.png";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";
import SkillsContinuedSection from "@/components/SkillContinuedSection";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#181c28]">
      <section className="my-56 md:my-80 flex flex-col items-center">
        <Image src={sleeperLogo} alt="Sleeper logo" width={50} height={50} />
        <Hero />
      </section>
      <SkillsSection />
      <SkillsContinuedSection />
      <Interests />
      <ContactSection />
    </main>
  );
}
