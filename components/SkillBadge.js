// components/SkillBadge.js

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

const SkillCard = ({ skill, image }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col items-center justify-center h-full">
    <Image
      src={image}
      alt={skill}
      width={40}
      height={40}
      className="mb-1"
    />
    <span className="text-xs md:text-sm font-semibold text-white text-center">{skill}</span>
  </div>
);

export function Skills() {
  const skills = [
    { name: "Solidity", image: "/images/skills/solidity.png" },
    { name: "Ethereum", image: "/images/skills/ethereum.png" },
    { name: "C++", image: "/images/skills/cpp.png" },
    { name: "HTML", image: "/images/skills/html.png" },
    { name: "CSS", image: "/images/skills/css.png" },
    { name: "JavaScript", image: "/images/skills/javascript.png" },
    { name: "SQL", image: "/images/skills/sql.png" },
    { name: "ReactJS", image: "/images/skills/react.png" },
    { name: "ExpressJS", image: "/images/skills/express.png" },
    { name: "NodeJS", image: "/images/skills/nodejs.png" },
    { name: "MongoDB", image: "/images/skills/mongodb.png" },
    { name: "PostgreSQL", image: "/images/skills/postgresql.png" },
  ];

  return (
    <div className="bg-gray-900 ">
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            My Skills & Tech Stack
          </h2>
        }
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 p-2 md:p-4 overflow-y-auto h-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill.name} image={skill.image} />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}