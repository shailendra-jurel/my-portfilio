import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faProjectDiagram,
  faFileAlt,
  faBlog,
  faUser,
  faBars,
  faTimes,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import myPic2 from './assets/myPic2.jpeg';
import Home from './Components/Home';
import About from './Components/About';
import ProjectsSeper from './Components/ProjectsSeper';
import Blogs from './Components/Blogs';
import Resume from './Components/Resume';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', icon: faHouse, label: 'Home', section: 'home' },
    { path: '/about', icon: faUser, label: 'About', section: 'about' },
    { path: '/ProjectsSeper', icon: faProjectDiagram, label: 'ProjectsSeper', section: 'ProjectsSeper' },
    { path: '/resume', icon: faFileAlt, label: 'Resume', section: 'resume' },
    { path: '/blogs', icon: faBlog, label: 'Blogs', section: 'blogs' },
  ];

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" style={{ width: `${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100, 100)}%` }}></div>

        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img src={myPic2} alt="Logo" className="w-10 h-10 rounded-full ring-2 ring-cyan-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Chaudhary
              </span>
            </ScrollLink>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.section}
                  to={item.section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-sm font-medium text-gray-400 hover:text-cyan-400 cursor-pointer"
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.label}
                </ScrollLink>
              ))}
              <a
                href="https://github.com/shailendra-jurel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-cyan-400"
              >
                <FontAwesomeIcon icon={faCodeBranch} className="mr-2" /> GitHub
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl text-cyan-400" />
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="md:hidden bg-gray-800/90 py-4"
            >
              {navItems.map((item) => (
                <ScrollLink
                  key={item.section}
                  to={item.section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block py-2 px-4 text-sm font-medium text-gray-400 hover:text-cyan-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.label}
                </ScrollLink>
              ))}
            </motion.div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16" >
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="ProjectsSeper" className="min-h-screen">
            <ProjectsSeper />
          </section>
          <section id="resume" className="min-h-screen">
            <Resume />
          </section>
          <section id="blogs" className="min-h-screen">
            <Blogs />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
