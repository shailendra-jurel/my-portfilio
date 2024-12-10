import './App.css';
import React, { useEffect } from 'react';
import ProjectSeper from './Components/ProjectsSeper.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Blogs from './Components/Blogs.jsx';
import Resume from './Components/Resume.jsx';
import Main from './Components/Main.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faProjectDiagram, faFileAlt, faCertificate, faBlog, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Components/Header.css';
import MyPic from './assets/myPic2.jpeg'; // Make sure the path to your image is correct



function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('smooth-scroll');
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        section.classList.remove('smooth-scroll');
      }, 500); // Adjust the timeout to match the transition duration
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <div className='navbar' id='home'>
          <header>
            <nav>
              <div className='navbar-brand'>
                <Link to="/">
                  <img src={MyPic} alt="Logo" />
                  <h1>Chaudhary</h1>
                </Link>
              </div>

              <div className='navbarMain'>
                <div className='nav-item' onClick={() => scrollToSection('home')}>
                  <Link to="/"><FontAwesomeIcon icon={faHouse} /> <span>Home</span></Link>
                </div>
                <div className='nav-item'>
                  <Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> <span>Projects</span></Link>
                </div>
                <div className='nav-item'>
                  <Link to="/resume"><FontAwesomeIcon icon={faFileAlt} /> <span>Resume</span></Link>
                </div>
                <div className='nav-item' onClick={() => scrollToSection('certificates')}>
                  <a href="#"><FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span></a>
                </div>
                <div className='nav-item'>
                  <Link to="/blogs"><FontAwesomeIcon icon={faBlog} /><span>Blogs</span></Link>
                </div>
                <div className='nav-item-box'>
                  <a href="https://github.com/shailendra-jurel">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <FontAwesomeIcon icon={faStar} />
                  </a>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectSeper />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
