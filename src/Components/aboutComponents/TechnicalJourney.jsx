function TechnicalJourney() {
    return (


        <div>
            <div className="education-timeline-container">
                <div className="timeline-card left-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon" ></i>
                        <h2>JAVA</h2>
                        <p>
                            Proficient in Java and Spring Boot, specializing in backend development.
                            Actively engaged in competitive programming to enhance problem-solving skills.
                        </p>
                        <span className="left-card-arrow"></span>
                    </div>
                </div>

                <div className="timeline-card right-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon"></i>
                        <h2>PYTHON</h2>
                        <p>
                            Skilled in Python with expertise in data analysis using libraries 
                            like Matplotlib, NumPy, and Pandas. Developed a web scraper for extracting 
                            product data from websites like Amazon.
                        </p>
                        <span className="right-card-arrow"></span>
                    </div>
                </div>

                <div className="timeline-card left-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon"></i>
                        <h2>HTML,CSS AND JS</h2>
                        <p>
                            Proficient in front-end development with HTML, CSS, and JavaScript. 
                            Created an e-commerce website and several other web projects.
                        </p>
                        <span className="left-card-arrow"></span>
                    </div>
                </div>


                <div className="timeline-card right-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon"></i>
                        <h2>C</h2>
                        <p>
                            Acquired fundamental skills in C language, capable of writing basic
                             programs and performing file handling operations.
                        </p>
                        <span className="right-card-arrow"></span>
                    </div>
                </div>

                <div className="timeline-card right-card last-star">
                    <div className="timeline-text-box">
                        <i className="fas fa-star grad-cap-icon star-icon" ></i> {/* Star icon */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalJourney;