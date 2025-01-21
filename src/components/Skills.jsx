import React from 'react';

const Skills = () => {
  

  return (
    <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Node.js', 'laravel', 'Git', 'CSS', 'SCSS' , 'Tailwind'].map((skill) => (
              <div key={skill} className="bg-white rounded-lg shadow-md p-4 text-center">
                <span className="font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Skills;
