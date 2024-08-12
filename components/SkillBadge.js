import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

const SkillCard = ({ skill, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col items-center">
    <Image
      src={image}
      alt={skill}
      width={64}
      height={64}
      className="mb-4"
    />
    <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill}</span>
  </div>
);

export function Skills() {
  const skills = [
    { name: "MongoDB", image: "/images/skills/mongodb.png" },
    { name: "ExpressJS", image: "/images/skills/express.png" },
    { name: "ReactJS", image: "/images/skills/react.png" },
    { name: "NodeJS", image: "/images/skills/nodejs.png" },
    { name: "C++", image: "/images/skills/cpp.png" },
    { name: "HTML", image: "/images/skills/html.png" },
    { name: "CSS", image: "/images/skills/css.png" },
    { name: "JavaScript", image: "/images/skills/javascript.png" },
    { name: "Solidity", image: "/images/skills/solidity.png" },
    { name: "Ethereum", image: "/images/skills/ethereum.png" },
    { name: "SQL", image: "/images/skills/sql.png" },
    { name: "PostgreSQL", image: "/images/skills/postgresql.png" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-11">
              My Skills & <br />
              <span className="text-4xl md:text-[5rem] font-bold leading-none">
                Tech Stack
              </span>
            </h1>
          </>
        }
      >
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill.name} image={skill.image} />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}