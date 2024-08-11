import React from 'react';

const EducationItem = ({ degree, institution, year }) => (
  <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2 text-blue-400">{degree}</h3>
    <h4 className="text-xl mb-2 text-gray-300">{institution}</h4>
    <p className="text-gray-400">{year}</p>
  </div>
);

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Institute of Engineering and Technology DAVV, Indore",
      year: "2020 - 2024",
    },
    {
      degree: "High School",
      institution: "Sica Senior Secondary School (CBSE), Indore",
      year: "2005 - 2019",
    },
  ];

  return (
    <section className="bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}