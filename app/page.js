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
        github: "https://github.com/Vedantjn/hospital-management-system",
        live: "https://hospital-management-system-vedantjn.netlify.app/"
      }
    },
    {
      title: "Address NFT",
      description: "Generate NFTs for home addresses using React and Solidity.",
      technologies: ["React", "Solidity", "Ethereum"],
      image: "/images/address-nft.png",
      links: {
        github: "https://github.com/Vedantjn/digitaldomi-assignment",
        live: "https://digitaldomi-assignment.vercel.app/"
      }
    },
    {
      title: "Dice Game",
      description: "Web-based dice game where users can earn points by guessing the roll.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/dice-game.png",
      links: {
        github: "https://github.com/Vedantjn/dice-game",
        live: "https://cute-sunflower-d33fbf.netlify.app/"
      }
    },
    {
      title: "Google Keep Clone",
      description: "A Google Keep clone created using ReactJS.",
      technologies: ["ReactJS"],
      image: "/images/google-keep-clone.png",
      links: {
        github: "https://github.com/Vedantjn/google-keep-clone",
        live: "https://google-keep-clone-wine-eight.vercel.app/"
      }
    },
    {
      title: "News Nexus",
      description: "A News app to get updates on the go.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/news-app.png",
      links: {
        github: "https://vedantjn.github.io/News-App/",
        live: "https://vedantjn.github.io/News-App/"
      }
    },
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
          I&apos;m a passionate MERN and Blockchain developer. 
          I love working on cutting-edge technologies and solving complex problems. I also like solving data structures and algorithms related problems using C++.
        </p>
      </div>
    </section>
  )
}


