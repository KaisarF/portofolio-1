// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Training from './components/Training';
import Skills from './components/Skills';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Experience/>
      <Training/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
