import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import MyPic from '../assets/Mypicture.jpeg';


function Home() {
    const text = ["Web Developer", "Learner", "Designer", "Backend Developer"];
    const typingSpeed = 200;
    const deletingSpeed = 50;
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[textIndex].length) {
                    setDisplayedText((prev) => prev + text[textIndex].charAt(prev.length));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, prev.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timerId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timerId);
    }, [text, typingSpeed, deletingSpeed, displayedText, isDeleting, textIndex]);

    // Mouse move effect
    useEffect(() => {
        const image = document.querySelector(".home-image img");

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { left, top, width, height } = image.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            const maxTilt = 15;

            const tiltX = (y / height) * maxTilt;
            const tiltY = -(x / width) * maxTilt;

            image.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        };

        const resetTilt = () => {
            image.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        };

        image.addEventListener("mousemove", handleMouseMove);
        image.addEventListener("mouseleave", resetTilt);

        return () => {
            image.removeEventListener("mousemove", handleMouseMove);
            image.removeEventListener("mouseleave", resetTilt);
        };
    }, []);

    return (
        <div className="HomePage">

            <section className="home-header">
            
                <h1 className="heading">
                    Hi There!
                    <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                    I'M 
                    <strong className="main-name">  Shailendra_Jurel</strong>
                </h1>
                <div className="typing-effect">{displayedText}|</div>



                <div className="social-logos">
                    <a href="https://github.com/shailendra-jurel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="foo" icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/shailendra-jurel/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="foo" icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/t3cheshwar/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="foo" icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://x.com/Shailendra36532" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="foo" icon={faTwitter} size="2x" />
                    </a>
                    <a href="mailto:shailendrajurel001@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="foo" icon={faEnvelope} size="2x" />
                    </a>
                </div>


            </section>

            
            <section className="home-image">
                <img src={MyPic} alt="Jurel" />
            </section>

        </div>
    );
}

export default Home;
