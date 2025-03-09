import React from 'react';

import { Github, aedin, Mail, Menu } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">Kaisar Fauzan</span>
              <p className="mt-2">Web Developer • Problem Solver</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/KaisarF" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              
              <a href="http://wa.link/22m6gx" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KaisarF. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
