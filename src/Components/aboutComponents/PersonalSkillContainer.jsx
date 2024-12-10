import '../About.css';
import React from 'react';

function PersonalSkillContainer() {
    return (
        <div>
            <div className='personalSkillContainer'>
                <h1 className='skill--'>Personal Skills</h1>
                <div className='skill-inner-container'>
                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#ffb3b3' }}>60%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '75%', backgroundColor: '#ffb3b3' }}></div>
                            <h1 className='skill-name' style={{ color: '#ffb3b3' }}>Communication Skills</h1>
                        </div>
                    </div>

                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#b3d9ff' }}>90%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '80%', backgroundColor: '#b3d9ff' }}></div>
                            <h1 className='skill-name' style={{ color: '#b3d9ff' }}>Project Management</h1>
                        </div>
                    </div>

                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#d9ffb3' }}>80%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '75%', backgroundColor: '#d9ffb3' }}></div>
                            <h1 className='skill-name' style={{ color: '#d9ffb3' }}>Problem Solving</h1>
                        </div>
                    </div>

                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#ffd9b3' }}>85%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '80%', backgroundColor: '#ffd9b3' }}></div>
                            <h1 className='skill-name' style={{ color: '#ffd9b3' }}>Analytical Skills</h1>
                        </div>
                    </div>

                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#ffb3e6' }}>70%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '78%', backgroundColor: '#ffb3e6' }}></div>
                            <h1 className='skill-name' style={{ color: '#ffb3e6' }}>Organization</h1>
                        </div>
                    </div>

                    <div className='personal-skill'>
                        <h1 className='skill-percent' style={{ color: '#e6ffb3' }}>99%</h1>
                        <div className='skill-bar'>
                            <div className='skill-fill' style={{ width: '80%', backgroundColor: '#e6ffb3' }}></div>
                            <h1 className='skill-name' style={{ color: '#e6ffb3' }}>Creativity</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalSkillContainer;