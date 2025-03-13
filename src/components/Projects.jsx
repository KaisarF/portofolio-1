import React,{useEffect} from 'react';

import luxury from '../img/luxury-app.png'
import hausjo from '../img/hausjo.png'
import gii from '../img/gii-web.png'
import ecoRoute from '../img/eco-route-web.png'
import kopiKaisar from '../img/kopiKaisar.png'
import warunkPadank from '../img/warunkPadank.png'
import catalogue from '../img/catalogueRestaurant.png'
import weatherApp from '../img/weatherApp.png'
import accounting from '../img/accounting.png'

import 'aos/dist/aos.css';
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      offset: 50, // Jarak pemicu animasi
      once: true, // Animasi hanya diputar sekali
    });
  }, []);
  const projects = [
    {
      id: 1,
      name: "Accounting web",
      description: "Create backoffice for accounting web",
      image: accounting,
      tools:"laravel, git",
      link: "https://github.com/KaisarF/accounting.git",
      web:"https://github.com/KaisarF/accounting.git"
    },
    {
      id: 2,
      name: "luxury checker web profile",
      description: "web profile luxury checker",
      image: luxury,
      tools:"laravel, SCSS",
      link: "https://luxury-checker.co.id/",
      web:"https://luxury-checker.co.id/"
    },
    {
      id: 3,
      name: "hausjo web profile",
      description: "Hausjo web profile",
      image: hausjo,
      tools:"laravel, SCSS",
      link: "https://www.hausjo.com/",
      web:"https://www.hausjo.com/"
    },
    {
      id: 4,
      name: "weather app",
      description: "simple weather app for check weather in certain area",
      image: weatherApp,
      tools:"React, Express, PostgreSQL, Nodejs",
      link: "https://github.com/KaisarF/app-weather.git",
      web:"https://github.com/KaisarF/app-weather.git"
    },
  
    {
      id: 5,
      name: "GII web profile",
      description: "Green Innovation Indonesia web profile",
      image: gii,
      tools:"React",
      link: "https://github.com/KaisarF/new-eco-route-web.git",
      web:"https://gi2-eco-route.netlify.app/"
    },
    {
      id: 6,
      name: "Eco Route web profile",
      description: "Eco Route web profile",
      image: ecoRoute,
      tools:"React",
      link: "https://github.com/KaisarF/eco-route-web.git",
      web:"https://eco-route.netlify.app"
    },
    {
      id:7,
      name: "restaurant catalogue",
      description: "web for dicoding submission",
      image: catalogue,
      tools:"HTML, CSS, Javascript",
      link: "https://github.com/KaisarF/Restaurant-catalogue.git",
      web:"https://kaisar-restaurant-catalogue.netlify.app/"
    },
    {
      id: 8,
      name: "warunk padank",
      description: "web for dicoding submission",
      image: warunkPadank,
      tools:"HTML, CSS, Javascript",
      link: "https://github.com/KaisarF/warunk-padank.git",
      web:"https://warunk-padank.netlify.app"
    },
    {
      id: 9,
      name: "kopi kaisar",
      description: "web about local coffee store",
      image: kopiKaisar,
      tools:"HTML, CSS, Javascript",
      link: "https://github.com/KaisarF/web-kopi",
      web:"https://kedai-kaisar.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <h2 className="text-3xl font-bold text-center mb-8 ">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div data-aos="fade-up" key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
              <a href={project.link}>
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
              </a>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className='text-gray-800 mb-3' >Tools: <span className='text-black font-bold' >{project.tools}</span></p>
                <a href={project.web} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script>
  AOS.init();
</script>
    </section>
  );
};

export default Projects;
