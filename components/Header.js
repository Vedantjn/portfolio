"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const SocialLink = ({ href, text }) => (
  <Link href={href} className="text-blue-400 hover:underline mx-2" target="_blank" rel="noopener noreferrer">
    {text}
  </Link>
);

export default function Header() {
  return (
    <header className="h-screen flex flex-col items-center justify-center text-center bg-gray-900">
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
      <h1 className="text-5xl font-bold mt-8 mb-4 text-white">Vedant Jain</h1>
      <p className="text-2xl text-gray-300 mb-8">MERN & Blockchain Developer</p>
      <div className="flex justify-center">
        <SocialLink href="https://github.com/yourgithub" text="GitHub" />
        <SocialLink href="https://leetcode.com/yourleetcode" text="LeetCode" />
        <SocialLink href="https://linkedin.com/in/yourlinkedin" text="LinkedIn" />
        <SocialLink href="https://linkedin.com/in/yourlinkedin" text="Resume" />
      </div>
    </header>
  );
}
