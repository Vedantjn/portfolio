// components/Header.js
"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

const SocialLink = ({ href, text }) => (
  <Link href={href} className="text-blue-400 hover:underline mx-2" target="_blank" rel="noopener noreferrer">
    {text}
  </Link>
);

export default function Header() {
  return (
    <header className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-30 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-75 blur-lg"></div>
          <div className="relative rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/vedant.jpeg"
              alt="Vedant Jain"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className={cn("text-5xl font-bold mt-8 mb-4 text-white")}>
          Vedant Jain
        </h1>
        <p className="text-2xl text-gray-300 mb-8">MERN & Blockchain Developer</p>
        <div className="flex justify-center">
          <SocialLink href="https://github.com/Vedantjn" text="GitHub" />
          <SocialLink href="https://leetcode.com/u/nirmohi7/" text="LeetCode" />
          <SocialLink href="https://www.linkedin.com/in/vedant-jain-192915194/" text="LinkedIn" />
          <SocialLink href="https://drive.google.com/drive/folders/1ie4iOSIMgjMqZor9rVxFVLLPOdOXFiNu?usp=sharing" text="Resume" />
        </div>
      </div>
    </header>
  );
}