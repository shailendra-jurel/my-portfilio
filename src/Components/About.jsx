import React, { useEffect, useState } from 'react';
import { 
  Book, 
  Code, 
  User, 
  Trophy, 
  Share2,
  ChevronRight,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import Lottie from 'lottie-react';
import about_animation from '../assets/about-animation.json';

// Import your existing components
import TechnicalSkillContainer from './aboutComponents/TechnicalSkillContainer';
import PersonalSkills from './aboutComponents/PersonalSkillContainer';
import ToolKit from './aboutComponents/ToolkitContainer';
import RankingComponent from './aboutComponents/RankingComponent';
import SocialMediaContainer from './aboutComponents/SocialMediaContainer';
import EducationalJourney from './aboutComponents/EducationalJourney';
import TechnicalJourney from './aboutComponents/TechnicalJourney';

const About = () => {
  const [activeComponent, setActiveComponent] = useState('about');
  const [activeSkill, setActiveSkill] = useState('technical');
  const [activeJourney, setActiveJourney] = useState('educationalJourney');

  useEffect(() => {
    const elements = document.querySelectorAll('.highlightedText');
    elements.forEach(element => {
      const text = element.innerText;
      element.innerHTML = text
        .split('')
        .map((letter, index) => 
          `<span class="animated-text" style="animation-delay: ${index * 0.05}s">${letter}</span>`
        )
        .join('');
    });
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About Me', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { id: 'journey', label: 'Journey', icon: <Book className="w-5 h-5" /> },
    { id: 'ranking', label: 'Rankings', icon: <Trophy className="w-5 h-5" /> },
    { id: 'socialMedia', label: 'Social', icon: <Share2 className="w-5 h-5" /> }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient-x">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and achievements
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                ${activeComponent === item.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
          {/* About Section */}
          {activeComponent === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animation-container">
                <Lottie animationData={about_animation} />
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-cyan-400">Hello, I'm Shailendra</h3>
                  <p className="leading-relaxed">
                    I'm a <span className="text-cyan-400">Computer Science and Engineering</span> student at 
                    <span className="text-purple-400"> SCALER SCHOOL OF TECHNOLOGY, Bangalore</span>.
                  </p>
                  <p className="leading-relaxed">
                    Proficient in programming languages like <span className="text-cyan-400">C, Java, Python, HTML, CSS, and JavaScript</span>.
                  </p>
                  <p className="leading-relaxed">
                    I work with libraries like <span className="text-purple-400">ReactJS, OpenCV, Pandas, and NumPy</span>.
                  </p>
                  <p className="leading-relaxed">
                    Passionate about learning and building <span className="text-cyan-400">web technologies and products</span>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeComponent === 'skills' && (
            <div className="space-y-8">
              <div className="flex justify-center gap-4 mb-8">
                {['Technical Skills', 'Personal Skills', 'Tool Kit'].map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(skill.toLowerCase())}
                    className={`px-6 py-2 rounded-lg transition-all duration-300
                      ${activeSkill === skill.toLowerCase()
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <div className="transition-all duration-300">
                {activeSkill === 'technical' && <TechnicalSkillContainer />}
                {activeSkill === 'personal' && <PersonalSkills />}
                {activeSkill === 'toolkit' && <ToolKit />}
              </div>
            </div>
          )}

          {/* Journey Section */}
          {activeComponent === 'journey' && (
            <div className="space-y-8">
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveJourney('educationalJourney')}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-300
                    ${activeJourney === 'educationalJourney'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                >
                  <GraduationCap className="w-5 h-5" />
                  Educational Journey
                </button>
                <button
                  onClick={() => setActiveJourney('technicalJourney')}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-300
                    ${activeJourney === 'technicalJourney'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                >
                  <Briefcase className="w-5 h-5" />
                  Technical Journey
                </button>
              </div>
              <div className="transition-all duration-300">
                {activeJourney === 'educationalJourney' && <EducationalJourney />}
                {activeJourney === 'technicalJourney' && <TechnicalJourney />}
              </div>
            </div>
          )}

          {/* Rankings Section */}
          {activeComponent === 'ranking' && (
            <div className="py-4">
              <RankingComponent />
            </div>
          )}

          {/* Social Media Section */}
          {activeComponent === 'socialMedia' && (
            <div className="py-4">
              <SocialMediaContainer />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;