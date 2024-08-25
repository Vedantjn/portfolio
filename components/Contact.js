'use client';
import React, { useState } from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";

const ContactItem = ({ icon, title, value, link }) => (
  <li className="flex gap-2 items-start">
    {icon}
    <p className="text-white">
      <strong>{title}:</strong>{' '}
      {link ? (
        <LinkPreview 
          url={link} 
          className="font-bold"
          openInNewTab={true}
        >
          {value}
        </LinkPreview>
      ) : (
        value
      )}
    </p>
  </li>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0">
    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,1.56-1.56A1.56,1.56,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0"
  >
    <path d="M18.9 1.5h3.27l-7.14 8.22L24 22.5h-6.58L12.3 15.1 6.3 22.5H.45l7.65-8.76L0 1.5h6.75l4.65 6.15L18.9 1.5Zm-1.8 17.37h2.7L5.76 2.86H3.82z" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mqazwjnl", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <CardSpotlight className="max-w-md mx-auto p-8">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Get in Touch
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Feel free to reach out to me:
              <ul className="list-none mt-4 space-y-4">
                <ContactItem 
                  icon={<EmailIcon />}
                  title="Email"
                  value="vedant.jain.indore@gmail.com"
                  link="mailto:vedant.jain.indore@gmail.com"
                />
                <ContactItem 
                  icon={<LinkedInIcon />}
                  title="LinkedIn"
                  value="https://www.linkedin.com/in/vedant-jain-192915194/"
                  link="https://www.linkedin.com/in/vedant-jain-192915194/"
                />
                <ContactItem 
                  icon={<GitHubIcon />}
                  title="GitHub"
                  value="github.com/Vedantjn"
                  link="https://github.com/Vedantjn"
                />
                <ContactItem 
                  icon={<XIcon />}
                  title="X"
                  value="x.com/vedantjn"
                  link="https://x.com/vedantjn"
                />
              </ul>
            </div>
            <p className="text-neutral-300 mt-6 relative z-20 text-sm">
  I&apos;m always open to new opportunities and collaborations. Don&apos;t hesitate to reach out!
</p>
          </CardSpotlight>

          <CardSpotlight className="max-w-md mx-auto p-8">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Send a Message
            </p>
            <form onSubmit={handleSubmit} className="mt-4 relative z-20">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-200">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-700 focus:ring-0 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-200">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-700 focus:ring-0 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-700 focus:ring-0 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}