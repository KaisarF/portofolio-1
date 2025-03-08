import React from 'react';
import Sparkle  from '../img/sparkle.png';
import Kai from '../img/kaisar.png'
import BlurText from "../react-bits-comp/BlurText"
import StarBorder from '../react-bits-comp/StarBorder';
import ShinyText from '../react-bits-comp/ShinyText';

const handleAnimationComplete = () => {
console.log('Animation completed!');
};
const Hero = () => {
  return (
    <section className="bg-primary2 text-white">
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className="mx-auto py-12 px-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative flex-grow w-5/12" data-aos="fade-left">
          <h1 className="bg-primary2 pl-4 pb-4 top-0 translate-y-12 translate-x-24 text-4xl absolute font-normal flex items-center justify-center z-20 rounded-bl-xl">
            Kaisar <br /> fauzan
          </h1>
          <div className="flex flex- items-center justify-center h-96 w-80 relative ">
            <div className='absolute w-8/12 h-full bg-gradient-to-t from-gray-700 to-gray-950 bottom-0 right-7 z-0 rounded-tl-xl rounded-br-xl flex flex-col justify-center items-center ' >
            {/* <h1>upn</h1>
            <img src={Sparkle} alt="" />
            <h1>upn</h1> */}
            </div>
              <img
              src={Kai}
              alt="Hero img"
          
              className="z-10 w-auto h-full"
              />
            </div>
            <h1 className=" p-4 bottom-0 bg-primary2 -translate-y-9 -translate-x-24 text-xl absolute font-normal flex items-center justify-center z-20 rounded-tr-xl">
              junior Full-stack <br/> Developer
            </h1>
        </div>
        <div className='mx-auto py-4 lg:py-12 lg:px-20 flex-grow w-7/12 'data-aos="fade-right">
          <h1 className='text-3xl font-bold text-center lg:text-justify my-8 '>
          Web Developer, Bringing Your Ideas to Life with Stunning Websites
          </h1>
          {/* <BlurText
            text="Web Developer, Bringing Your Ideas to Life with Stunning Websites"
            delay={150}
            animateBy="words"
            direction='top'
            className="text-3xl font-bold text-justify my-8"
          /> */}
          <p className='text-gray-400 text-justify text-l '>Hello, It's me Kaisar Fauzan, I am an Informatics graduate from Universitas Pembangunan Nasional “Veteran” East Java,focusing on front-end web development. I am passionate about creating easy-to-use and efficient web solutions. I am constantly exploring new and unique ideas, always looking for ways to challenge myself and expand my skill set.
          </p>
          <div className='mt-5 flex flex-col lg:flex-row items-center justify-center '>
            <StarBorder
            as='button'
            className="custom-class lg:mr-2 mb-2 lg:mb-0"
            color='silver'
            speed='2s'>
              <a href="#projects" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-100">
                <ShinyText text="Projects" disabled={false} speed={3} className='custom-class' />
              </a>
            </StarBorder>
            <StarBorder
            as='button'
            className="custom-class lg:mr-2 mb-2 lg:mb-0"
            color='silver'
            speed='2s'>
              <a href="#experience" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-100">
                <ShinyText text="My Experience" disabled={false} speed={3} className='custom-class' />
              </a>
            </StarBorder>
            <StarBorder
            as='button'
            className="custom-class lg:mr-2 mb-2 lg:mb-0"
            color='silver'
            speed='2s'>
              <a href="#training" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-100">
                <ShinyText text="My Training" disabled={false} speed={3} className='custom-class' />
              </a>
            </StarBorder>
            
              
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
