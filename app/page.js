import React from 'react'
import Header from '../components/Header'
import { Skills } from '../components/SkillBadge'
import ProjectCard from '../components/ProjectCard'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}


function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      description: "MERN stack application for booking appointments and managing schedules.",
      technologies: ["React", "Express", "Node.js", "MongoDB"],
      image: "/images/hospital-management.png",
      links: {
        github: "https://github.com/yourgithub/hospital-management",
        live: "https://hospital-management-demo.com"
      }
    },
    {
      title: "Address NFT",
      description: "Generate NFTs for home addresses using React and Solidity.",
      technologies: ["React", "Solidity", "Ethereum"],
      image: "/images/address-nft.png",
      links: {
        github: "https://github.com/yourgithub/address-nft",
        live: "https://address-nft-demo.com"
      }
    },
    {
      title: "Dice Game",
      description: "Web-based dice game where users can earn points by guessing the roll.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/dice-game.png",
      links: {
        github: "https://github.com/yourgithub/dice-game",
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          I&apos;m a passionate Blockchain Developer and Computer Engineering student. 
          I love working on cutting-edge technologies and solving complex problems.
        </p>
      </div>
    </section>
  )
}


