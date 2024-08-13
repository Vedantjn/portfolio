"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, technologies, image, links }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative bg-gray-900 rounded-lg p-6 h-full flex flex-col">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-900 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-auto">
          {links.github && (
            <Link href={links.github} className="text-blue-400 hover:text-blue-300 transition" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          )}
          {links.live && (
            <Link href={links.live} className="text-green-400 hover:text-green-300 transition" target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;