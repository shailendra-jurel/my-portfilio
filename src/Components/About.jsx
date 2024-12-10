import './About.css';
import React, { useEffect, useState } from 'react';
import TechnicalSkillContainer from './aboutComponents/TechnicalSkillContainer';
import PersonalSkills from './aboutComponents/PersonalSkillContainer';
import ToolKit from './aboutComponents/ToolkitContainer';
import RankingComponent from './aboutComponents/RankingComponent';
import SocialMediaContainer from './aboutComponents/SocialMediaContainer';
import EducationalJourney from './aboutComponents/EducationalJourney';
import TechnicalJourney from './aboutComponents/TechnicalJourney';
import Lottie from 'lottie-react';
import about_animation from '../assets/about-animation.json';

function About() {
    const [activeComponent, setActiveComponent] = useState('about');
    const [activeSkill, setActiveSkill] = useState('technical');
    const [activeJourney, setActiveJourney] = useState('educationalJourney');

    useEffect(() => {
        const elements = document.querySelectorAll('.highligtedText');
        elements.forEach(element => {
            const text = element.innerText;
            element.innerHTML = text
                .split('')
                .map((letter, index) => `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`)
                .join('');
        });
    }, []);

    return (
        <div className='about-section'>
            <div className='home-about-desc'>
                <div>
                    <h1>
                        {'About'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                    </h1>
                </div>
            </div>

            <div>
                <div className="about-item-links">
                    <button
                        className={`about-item ${activeComponent === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('about')}
                    >
                        About
                    </button>
                    <button
                        className={`about-item ${activeComponent === 'skills' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`about-item ${activeComponent === 'journey' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('journey')}
                    >
                        Journey
                    </button>
                    <button
                        className={`about-item ${activeComponent === 'ranking' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('ranking')}
                    >
                        Ranking
                    </button>
                    <button
                        className={`about-item ${activeComponent === 'socialMedia' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('socialMedia')}
                    >
                        Social Media
                    </button>
                </div>

                <div className='container'>
                    {activeComponent === 'about' && (
                        <div className='about-container'>
                            <div className='about-animation'>
                                <Lottie animationData={about_animation} height={800} width={800} />
                            </div>
                            <div>
                                <p>
                                    My name is <span className="highligtedText">Shailendra Jurel</span> and I am a <span className="highligtedText">Computer Science and Engineering</span> student at <span className="highligtedText">SCALER SCHOOL OF TECHNOLOGY, Banglore</span>.<br /><br />
                                    I am proficient in various programming languages such as <span className="highligtedText">C, Java, Python, HTML, CSS, and JavaScript.</span><br /><br />
                                    I also have experience working with frameworks and libraries such as <span className="highligtedText">ReactJS, OpenCV, Pandas, and NumPy.</span><br /><br />
                                    Whenever possible, I also apply my passion for developing products with <span className="highligtedText">Modern Javascript Library and Frameworks.</span><br /><br />
                                    In my free time, I enjoy learning new technologies and <span className="highligtedText">building new web technologies and products.</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {activeComponent === 'skills' && (
                        <div className='skill-container'>
                            <div className='skill-set-type'>
                                <button
                                    className={`skill-type ${activeSkill === 'technical' ? 'active' : ''}`}
                                    onClick={() => setActiveSkill('technical')}
                                >
                                    Technical Skills
                                </button>
                                <button
                                    className={`skill-type ${activeSkill === 'personal' ? 'active' : ''}`}
                                    onClick={() => setActiveSkill('personal')}
                                >
                                    Personal Skills
                                </button>
                                <button
                                    className={`skill-type ${activeSkill === 'toolkit' ? 'active' : ''}`}
                                    onClick={() => setActiveSkill('toolkit')}
                                >
                                    Tool kit
                                </button>
                            </div>

                            {activeSkill === 'technical' && <TechnicalSkillContainer />}
                            {activeSkill === 'personal' && <PersonalSkills />}
                            {activeSkill === 'toolkit' && <ToolKit />}
                        </div>
                    )}

                    {activeComponent === 'journey' && (
                        <div className='journey-timeline-container'>
                            <div className="journey-type">
                                <button
                                    className={`journey ${activeJourney === 'educationalJourney' ? 'active' : ''}`}
                                    onClick={() => setActiveJourney('educationalJourney')}
                                >
                                    Educational Journey
                                </button>
                                <button
                                    className={`journey ${activeJourney === 'technicalJourney' ? 'active' : ''}`}
                                    onClick={() => setActiveJourney('technicalJourney')}
                                >
                                    Technical Journey
                                </button>
                            </div>

                            {activeJourney === 'educationalJourney' && <EducationalJourney />}
                            {activeJourney === 'technicalJourney' && <TechnicalJourney />}
                        </div>
                    )}

                    {activeComponent === 'ranking' && <RankingComponent />}
                    {activeComponent === 'socialMedia' && <SocialMediaContainer />}
                </div>
            </div>
        </div>
    )
}

export default About;
