import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import DashboardClone from '../assets/Dashboard-Clone.png'
import LibraryApp from '../assets/Library-app.png'
import ProductService from '../assets/productService.png'


function Project() {
    return (
        <div className='Project' id='project'>
            <div className='Project-heading'>
                <div>
                    <h1>
                        {'Projects'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                    </h1>
                </div>
            </div>

            <div className='Project-container'>
            <div className='Project-card' onClick={() => handleCardClick("https://github.com/cherry-1729-9090/web_dev_bonus_projecthttps://github.com/cherry-1729-9090/Dash-board-clone")}>
                    <div className='project-card-heading'>
                        <h1>Scaler Dash board clone</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={DashboardClone}></img>
                        <p className='project-description'>
                            My first project is a dashboard clone of Scaler School of Technology,
                            made with HTML and CSS. It highlights my web development skills,
                            showcasing a functional and visually appealing user interface with
                            responsive design, marking the start of my web development journey.
                        </p>
                    </div>

                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                HTML, CSS, JavaScript
                            </p>
                        </div>
                    </div>
                </div>



                <div className='Project-card' onClick={() => handleCardClick("https://github.com/cherry-1729-9090/zolo_project")}>
                    <div className='project-card-heading'>
                        <h1>Library App</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={LibraryApp}></img>
                        <p className='project-description'>
                            I developed a mobile app using Kotlin that simulates a community library.
                            People in a city can share their books by listing them on the app, and others
                            can rent these books. This project showcases my Kotlin skills and my ability to
                            create practical and user-friendly applications.
                        </p>
                    </div>
                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                Kotlin
                            </p>
                        </div>
                    </div>
                </div>


                <div className='Project-card' onClick={() => handleCardClick("https://github.com/cherry-1729-9090/FakeStoreProductService_05")}>
                    <div className='project-card-heading'>
                        <h1>Fake Store Product Service</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={ProductService}></img>
                        <p className='project-description'>
                            I built a backend application using Spring Boot and REST APIs
                            named "Fake Store API." This project fetches goods from the
                            Fake Store API and stores them in a database, demonstrating my skills
                            in backend development and API integration.
                        </p>
                    </div>

                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                Java, Spring Boot
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Project;
