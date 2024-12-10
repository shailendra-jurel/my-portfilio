import React from 'react';
import './ProjectSeper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import DashboardClone from '../assets/Dashboard-Clone.png'
import LibraryApp from '../assets/Library-app.png'
import ProductService from '../assets/productService.png'
import CartService from '../assets/CartService.png'
import ToDoList from '../assets/ToDoList.png'
import TicTacToe from '../assets/TicTacToe.png'
import ECommerce from '../assets/ECommerce.png'
import Quiz from '../assets/Quiz.png'


function ProjectSeper() {

    const handleCardClick = (link) => {
        if (link) {
            window.open(link, '_blank'); // Open link in a new tab
        }
    };


    return (

        

        <div className="project-seper" id='project-seper'>
            <div className='project-heading'>
                <div>
                    <h1>
                        {'Projects'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                    </h1>
                </div>
            </div>

            <div className='Project-container'>
                <div className='Project-card' onClick={() => handleCardClick("https://github.com/shailendra-jurel")}>
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



                <div className='Project-card' onClick={() => handleCardClick("https://github.com/shailendra-jurel")}>
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


                <div className='Project-card' onClick={() => handleCardClick("https://github.com/shailendra-jurel")}>
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


                <div className='Project-card' onClick={()=> handleCardClick("https://github.com/shailendra-jurel")}>
                    <div className='project-card-heading'>
                        <h1>Fake Store cart Service</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={CartService}></img>
                        <p className='project-description'>
                            I built a backend application using Spring Boot and REST APIs,
                            integrating the "Fake Store API". Users
                            can manage their carts and view products in each cart, showcasing my
                            skills in backend development and API integration.
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



                <div className='Project-card' onClick={() => handleCardClick("https://github.com/shailendra-jurel")}>
                    <div className='project-card-heading'>
                        <h1>To Do List</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={ToDoList}></img>
                        <p className='project-description'>
                            I built a To-Do list application using React and Node.js. It allows
                            users to prioritize tasks based on their deadlines and importance,
                            store them efficiently, and provides a user-friendly interface for
                            managing daily tasks effectively.
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



                <div className='Project-card' onClick={()=>handleCardClick("https://github.com/shailendra-jurel")}>
                    <div className='project-card-heading'>
                        <h1>Tic Tac Toe</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={TicTacToe}></img>
                        <p className='project-description'>
                            I built a Tic Tac Toe application using Spring Boot for the backend,
                            allowing players to enjoy the game in the terminal. This project showcases
                            my skills in backend development and interactive game design.
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


                <div className='Project-card'>
                    <div className='project-card-heading'>
                        <h1>E-Commerce Website</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={ECommerce}></img>
                        <p className='project-description'>
                            I developed an e-commerce website using HTML, CSS, and JavaScript.
                            This project showcases my frontend skills by providing a user-friendly
                            interface for browsing and purchasing items, demonstrating proficiency in
                            web development fundamentals.
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



                <div className='Project-card'>
                    <div className='project-card-heading'>
                        <h1>Quiz Application</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src={Quiz}></img>
                        <p className='project-description'>
                            I created an entertaining quiz app using HTML, CSS, and JavaScript.
                            Users can enjoy interactive quizzes with amusing questions and engaging
                            feedback, demonstrating my frontend development skills in a fun and interactive way.
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

            </div>
        </div>
    )
}

export default ProjectSeper;