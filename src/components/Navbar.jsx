import React from 'react';

import { Github, Linkedin, Mail, Menu } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">KaisarF</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <a href="#projects" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#experience" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Experience</a>
              <a href="#skills" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Skills</a>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
