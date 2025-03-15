import React from 'react';


const Experience = () => {
  const experience = [
    {
      id: 1,
      role: "Front-end, Back-end Intern",
      company: "Ordo Apps",
      duration: "Nov 2024 - Apr 2025",
      descr1: "Slicing Web using Laravel and SCSS",
      descr2: "Create a web responsive",
      descr3: "Create reusable component using blade component template",
      skill: "Laravel, SCSS",
    },
    {
      id: 2,
      role: "Co-Founder, Web Developer",
      company: "Green Innovation Indonesia",
      duration: "Aug 2023 - now",
      descr1: "Devising ideas for long-term app development and innovation",
      descr2: "Build the back-end side of the eco-route application",
      descr3: "Create eco route web company profile using React framework",
      skill: "React, Typescript",
    },
    {
      id: 3,
      role: "Mentor Front-end Back-end",
      company: "Dicoding Indonesia",
      duration: "Feb 2024 - June 2024",
      descr1: "Guiding mentees in learning the material",
      descr2: "Conduct weekly consultations with mentees",
      descr3:
        "Serve as Moderator or time keeper in several ILT-SS, ILT-TECH, and Dicoding Expert Session sessions",
      skill: "Mentoring, Public Speaking",
    },
    {
      id: 4,
      role: "Web Developer Intern",
      company: "Telkomsel",
      duration: "Feb 2023 - Apr 2023",
      descr1: "Create an initial web design using Figma",
      descr2: "Designing front-end web using Vue.js framework and Tailwind",
      descr3: "Implement CRUD on the website",
      skill: "Vue.js, Tailwind",
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
          <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl mb-2">{exp.role}</h3>
                <p className="text-gray-600 mb-2">{exp.company} • {exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>{exp.descr1}</li>
                  <li>{exp.descr2}</li>
                  <li>{exp.descr3}</li>
                </ul>
                <br></br>
                <p className="text-gray-600 mb-2">Skill: {exp.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experience;
