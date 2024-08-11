import React from 'react';

const ExperienceItem = ({ title, company, date, description }) => (
  <div className=" bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2 text-blue-400">{title}</h3>
    <h4 className="text-xl mb-2 text-gray-300">{company}</h4>
    <p className="text-gray-400 mb-4">{date}</p>
    <ul className="list-disc list-inside">
      {description.map((item, idx) => (
        <li key={idx} className="mb-2 text-gray-300">{item}</li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      title: "Blockchain Developer Intern",
      company: "0xytocin Labs",
      date: "Jul 2022 - Aug 2022",
      description: [
        "Developed Solidity smart contracts for Chainscouts, a P2E game.",
        "Collaborated with cross-functional teams on blockchain integration.",
        "Conducted code reviews and implemented unit tests."
      ]
    },
    {
      title: "Fundraiser Volunteer",
      company: "Jankalyan Multipurpose Society",
      date: "Jun 2022 - Jul 2022",
      description: [
        "Organized fundraising campaigns for underprivileged children.",
        "Developed promotional materials for campaign visibility.",
        "Monitored and reported on campaign progress."
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}