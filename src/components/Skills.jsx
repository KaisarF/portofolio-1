import React from 'react';
import CircularText from '../react-bits-comp/circular-text';

import js_img from '../img/js_img.png'
import react_img from '../img/react_img.png'
import node_img from '../img/node_img.png'
import laravel_img from '../img/laravel_img.png'
import git_img from '../img/git_img.png'
import github_img from '../img/github_img.png'
import sass_img from '../img/sass_img.png'
import tailwind_img from '../img/tailwind_img.png'

const Skills = () => {
  

  const skills=[
    {
      id:1,
      img:js_img
    },
    {
      id:2,
      img:react_img
    },
    {
      id:3,
      img:node_img
    },
    {
      id:4,
      img:laravel_img
    },
    {
      id:5,
      img:git_img
    },
    {
      id:6,
      img:github_img
    },
    {
      id:7,
      img:sass_img
    },
    {
      id:8,
      img:tailwind_img
    },
    
  ]

  return (
    <section id="skills" className="p-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white bg-primary2 py-10">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-center items-center py-10 md:py-0' >
              <CircularText
                text="my skills ~ my skills ~ "
                onHover="slowDown"
                spinDuration={10}
                className="custom-class"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center grayscale hover:filter-none duration-300">
                  <img 
                  src={skill.img} 
                  alt=""
                  className='w-20 h-auto' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
