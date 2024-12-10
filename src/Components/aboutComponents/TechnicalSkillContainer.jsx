// import './TechnicalSkill.css'
import React from "react";
function TechnicalSkillContainer() {
    return (
        <div>
            <div className='technicalSkillContainer'>
                <h1 className="skill--">Technical Skills</h1>
                <div className='skill-inner-container'>
                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#ff9999' }}>60%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '60%', backgroundColor: '#ff9999' }}></div>
                            <h1 className='skill-name' style={{ color: '#ff9999' }}>C</h1>
                        </div>
                    </div>

                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#99ccff' }}>85%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '75%', backgroundColor: '#99ccff' }}></div>
                            <h1 className='skill-name' style={{ color: '#99ccff' }}>Java</h1>
                        </div>
                    </div>

                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#99ff99' }}>70%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '70%', backgroundColor: '#99ff99' }}></div>
                            <h1 className='skill-name' style={{ color: '#99ff99' }}>Python</h1>
                        </div>
                    </div>

                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#ffcc99' }}>95%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '95%', backgroundColor: '#ffcc99' }}></div>
                            <h1 className='skill-name' style={{ color: '#ffcc99' }}>HTML</h1>
                        </div>
                    </div>

                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#ffb3ff' }}>75%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '75%', backgroundColor: '#ffb3ff' }}></div>
                            <h1 className='skill-name' style={{ color: '#ffb3ff' }}>CSS</h1>
                        </div>
                    </div>

                    <div className='tech-skill'>
                        <h1 className='skill-percent' style={{ color: '#c2ffb3' }}>80%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '70%', backgroundColor: '#c2ffb3' }}></div>
                            <h1 className='skill-name' style={{ color: '#c2ffb3' }}>JavaScript</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkillContainer;