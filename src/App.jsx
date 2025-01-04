import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faProjectDiagram, faFileAlt, faBlog,
  faUser, faBars, faTimes, faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import myPic2 from './assets/myPic2.jpeg';
import Home from './Components/Home';
import About from './Components/About';
import ProjectsSeper from './Components/ProjectsSeper';
import Blogs from './Components/Blogs';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { path: '/', icon: faHouse, label: 'Home', section: 'home' },
    { path: '/about', icon: faUser, label: 'About', section: 'about' },
    { path: '/ProjectsSeper', icon: faProjectDiagram, label: 'ProjectsSeper', section: 'ProjectsSeper' },
    { path: '/resume', icon: faFileAlt, label: 'Resume', section: 'resume' },
    { path: '/blogs', icon: faBlog, label: 'Blogs', section: 'blogs' },
    { path: '/contacts', icon: faUser, label: 'Contact', section: 'contacts' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / height) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-gray-100">
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 z-50" 
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-40 px-4 py-3">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
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
          </div>
        </nav>

        {/* Main Content */}
        <main className="w-full pt-16">
          <div className="container mx-auto">
            <section id="home" className="min-h-screen w-full">
              <Home />
            </section>
            <section id="about" className="min-h-screen w-full">
              <About />
            </section>
            <section id="ProjectsSeper" className="min-h-screen w-full">
              <ProjectsSeper />
            </section>
            <section id="resume" className="min-h-screen w-full">
              <Resume />
            </section>
            <section id="blogs" className="min-h-screen w-full">
              <Blogs />
            </section>
            <section id="contacts" className="min-h-screen w-full">
              <Contact />
            </section>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;