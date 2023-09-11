"use client";

import React from "react";

interface User {
  name: string;
  role: string;
  city: string;
  techStack: string;
  experience: string;
}

const users: User[] = [
  {
    name: "Trevor Von Bruenchenhein",
    role: "DEV",
    city: "PHX",
    techStack: "Tech stack: TypeScript, Next.js, React, Prisma",
    experience: "4",
  },
];

export default function ContactSection() {
  const [bench, setBench] = React.useState<User[]>(users);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [assignedUser, setAssignedUser] = React.useState<User | null>(null);

  function handleAssignUser() {
    if (selectedUser && !assignedUser) {
      setAssignedUser({
        name: selectedUser.name,
        role: selectedUser.role,
        city: selectedUser.city,
        techStack: selectedUser.techStack,
        experience: selectedUser.experience,
      });

      setSelectedUser(null);

      const benchCopy = [...bench];
      const newBench = benchCopy.filter(
        (user) => user.name !== selectedUser!.name
      );
      setBench(newBench);
    } else if (!selectedUser && assignedUser) {
      setSelectedUser(assignedUser);
    } else if (selectedUser && assignedUser) {
      setSelectedUser(null);
    } else {
      return;
    }
  }

  function handleBench() {
    // Move player back to bench from roster slot
    if (assignedUser && selectedUser) {
      setBench([assignedUser]);
      setAssignedUser(null);
      setSelectedUser(null);
      // Un-do your selection
    } else if (selectedUser) {
      setSelectedUser(null);
      // Select user if no selection already
    } else if (!selectedUser) {
      setSelectedUser(bench[0]);
    } else {
      return;
    }
  }

  function emailTrevor() {
    window.open(
      "mailto:tjvonbr@gmail.com?subject=Let's schedule an interview!"
    );
  }

  return (
    <section className="my-80 flex flex-col items-center" id="contact">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-lg text-[#00ceb8] font-semibold">Contact</h2>
        <p className="w-full text-center text-3xl text-white font-bold">
          There&apos;s one thing left to do
        </p>
        <p className="w-3/4 md:w-1/2 text-center text-gray-300">
          A tool I&apos;d like to work on is a bot that alerts managers if they
          have a player on their bench projected to score more points than one
          of their starters, perhaps even making the substitution
        </p>
      </div>

      <div className="w-[400px] flex flex-col items-start">
        <div className="mt-8">
          <h3 className="text-lg text-white font-bold">Starters</h3>
          <p className="text-sm text-gray-400">
            Click on bench player to update your lineup
          </p>
          <div className="mt-8 flex items-center space-x-6">
            <button
              className={`h-10 w-[60px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors rounded-md text-xs text-[#00ceb8] font-semibold ${
                selectedUser && !assignedUser ? "animate-shake" : ""
              }`}
              onClick={handleAssignUser}
            >
              DEV
            </button>
            {assignedUser ? (
              <UserData user={assignedUser} />
            ) : (
              <p className="text-xs text-gray-400">
                You still need to select someone to fill out your roster
              </p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg text-white font-bold">Ready to work</h3>
          <p className="text-sm text-gray-400">
            Click on a player to add to your engineering lineup
          </p>
          <div className="mt-4 flex items-center space-x-6">
            <button
              className={`h-10 w-[60px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors rounded-md text-xs text-slate-300 font-semibold ${
                selectedUser && assignedUser ? `animate-shake` : ""
              }`}
              onClick={handleBench}
            >
              BN
            </button>
            {bench.length > 0 ? (
              <UserData user={bench[0]} />
            ) : (
              <p className="text-xs text-gray-400">
                You have no bench players right now
              </p>
            )}
          </div>
        </div>
        {assignedUser && (
          <div className="w-full mt-8 flex flex-col items-center space-y-4 text-white">
            <p className="font-semibold">Smart move! Now... last thing</p>
            <button
              className="h-10 w-full flex justify-center items-center bg-teal-400 hover:bg-teal-500 text-[#181c28] transition-colors rounded-md text-sm font-medium"
              onClick={emailTrevor}
            >
              Email Trevor to setup an interview!
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function UserData({ user }: { user: User }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <p className="text-md text-white font-semibold">{user.name}</p>
        <p className="pl-2 text-xs text-[#00ceb8] font-medium">{user.role}</p>
        <p className="pl-1 text-xs text-gray-300 font-medium">- {user.city}</p>
      </div>
      <div>
        <p className="text-xs text-gray-300">{user.techStack}</p>
        <p className="text-xs text-gray-300">Exp: {user.experience} years</p>
      </div>
    </div>
  );
}
