function EducationalJourney() {
    return (


        <div>
            <div className="technical-timeline-container">
                <div className="timeline-card left-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon" ></i>
                        <h2>SECONDARY SCHOOL CERTIFICATE EDUCATION</h2>
                        <h4>2020 - 2021</h4>
                        <p>
                            Achieved 91 percentage at  St.Cf Andrews School,
                            demonstrating consistent excellence in secondary education.
                        </p>
                        <span className="left-card-arrow"></span>
                    </div>
                </div>

                <div className="timeline-card right-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon"></i>
                        <h2>INTERMEDIATE</h2>
                        <h4>2021-2023</h4>
                        <p>
                            Attained 80% in CNSPS Public School Intermediate examinations,
                            reflecting strong academic performance and dedication to excellence.
                        </p>
                        <span className="right-card-arrow"></span>
                    </div>
                </div>

                <div className="timeline-card left-card">
                    <div className="timeline-text-box">
                        <i className="fas fa-graduation-cap grad-cap-icon"></i>
                        <h2>UNDER GRADUATION</h2>
                        <h4>2023-2027</h4>
                        <p>
                            Currently enrolled in an undergraduate program at
                            Scaler School of Technology, advancing skills and knowledge in technology
                            and computer science.
                        </p>
                        <span className="left-card-arrow"></span>
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

export default EducationalJourney;