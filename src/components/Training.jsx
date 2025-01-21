import React from 'react';

const Training =()=>{
    const training = [
        {
          id: 1,
          program: "Cloud Computing Cohort",
          provider: "Bangkit Academy",
          duration: "Feb 2023 - July 2023",
          descr1: "Learning Cloud Computing using Google Cloud Platform",
          descr2: "Doing Web Deployment using GCP",
          descr3:
            "Created the final project 'Eco-Route' and received IDR 140 million incubation",
          tools: "Google Cloud Platform",
        },
        {
          id: 2,
          program: "Front-end Back-end Developer",
          provider: "Dicoding Indonesia",
          duration: "Aug 2022 - Dec 2022",
          descr1: "Learn Front-end and Back-end from the basics",
          descr2: "Complete the project in each submission",
          descr3:
            "Make the final project 'Teach' and get the best capstone project",
          tools: "HTML, Css, JavaScript, Node.js",
        },
      ];

    return (
        <section id="training" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
          <h2 className="text-3xl font-bold text-center mb-8">My Training</h2>
          <div className="space-y-8">
            {training.map((train) => (
              <div key={train.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl mb-2">{train.program}</h3>
                <p className="text-gray-600 mb-2">{train.provider} • {train.duration}</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>{train.descr1}</li>
                  <li>{train.descr2}</li>
                  <li>{train.descr3}</li>
                </ul>
                <br></br>
                <p className="text-gray-600 mb-2">Skill: {train.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Training;