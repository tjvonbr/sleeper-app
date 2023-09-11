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

  function handleSelectUser() {
    setSelectedUser({
      name: "Trevor Von Bruenchenhein",
      role: "DEV",
      city: "PHX",
      techStack: "Tech stack: TypeScript, Next.js, React, Prisma",
      experience: "4",
    });
  }

  function handleAssignUser() {
    if (selectedUser) {
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
    }
  }

  function handleBench() {
    if (assignedUser && selectedUser) {
      setBench([assignedUser]);
      setAssignedUser(null);
      setSelectedUser(null);
    } else if (assignedUser) {
      return;
    } else if (selectedUser) {
      setSelectedUser(null);
    } else if (!selectedUser) {
      setSelectedUser(bench[0]);
    }
  }

  return (
    <section className="my-80 flex flex-col items-center" id="interests">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-lg text-[#00ceb8] font-semibold">Contact</h2>
        <p className="w-full text-center text-3xl text-white font-bold">
          There&apos;s one thing left to do
        </p>
        <p className="w-1/2 text-center text-gray-300">
          A tool I&apos;d like to work on is a bot that alerts managers if they
          have a player on their bench projected to score more points than one
          of their starters, perhaps even making the substitution
        </p>
      </div>

      <div className="flex flex-col items-start">
        <div className="mt-8">
          <h3 className="text-lg text-white font-bold">Starters</h3>
          <p className="text-sm text-gray-400">
            Click on position buttons to update your lineup
          </p>
          <div className="mt-8 flex items-center space-x-6">
            <button
              className="h-10 w-[60px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors rounded-md text-xs text-[#00ceb8] font-semibold"
              onClick={assignedUser ? handleSelectUser : handleAssignUser}
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
              className="h-10 w-[60px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors rounded-md text-xs text-slate-300 font-semibold"
              onClick={handleBench}
            >
              BN
            </button>
            {bench.length > 0 ? (
              <UserData user={bench[0]} />
            ) : (
              <p className="text-xs text-gray-400">No bench player</p>
            )}
          </div>
        </div>
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
