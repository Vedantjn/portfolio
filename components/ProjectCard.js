"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const ProjectCard = ({ title, description, technologies, image, links }) => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        {links.github && (
          <Link href={links.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        )}
        {links.live && (
          <Link href={links.live} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
        )}
      </div>
    </BackgroundGradient>
  );
};

export default ProjectCard;