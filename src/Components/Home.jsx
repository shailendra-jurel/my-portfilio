import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, faLinkedin, faInstagram, faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, faDownload, faArrowDown 
} from "@fortawesome/free-solid-svg-icons";

import  Mypicture from "../assets/Mypicture.jpeg";

const Home = () => {
  const text = ["Web Developer", "Full Stack Engineer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const imageRef = useRef(null);
  const cursorRef = useRef(null);

  // Typing Effect
  useEffect(() => {
    const handleTyping = () => {
      const currentText = text[textIndex];
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % text.length);
        }
      }
    };

    const timerId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timerId);
  }, [displayedText, isDeleting, textIndex]);

  // Enhanced Image Tilt Effect
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = image.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const x = clientX - centerX;
      const y = clientY - centerY;

      const maxTilt = 15;
      const sensitivity = 0.1;

      const tiltX = (y * sensitivity).toFixed(2);
      const tiltY = -(x * sensitivity).toFixed(2);

      requestAnimationFrame(() => {
        image.style.transform = `
          perspective(1000px) 
          rotateX(${tiltX}deg) 
          rotateY(${tiltY}deg) 
          scale(1.05)
          translateZ(50px)
        `;
      });
    };

    const resetTilt = () => {
      image.style.transition = 'transform 0.5s ease-out';
      image.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
        translateZ(0px)
      `;
    };

    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', resetTilt);

    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  // Optimized Cursor Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: faGithub, 
      href: "https://github.com/shailendra-jurel",
      label: "GitHub",
      color: "hover:from-cyan-500 hover:to-blue-500"
    },
    { 
      icon: faLinkedin, 
      href: "https://www.linkedin.com/in/shailendra-jurel/",
      label: "LinkedIn",
      color: "hover:from-blue-500 hover:to-cyan-500"
    },
    { 
      icon: faInstagram, 
      href: "https://www.instagram.com/t3cheshwar/",
      label: "Instagram",
      color: "hover:from-purple-500 hover:to-pink-500"
    },
    { 
      icon: faTwitter, 
      href: "https://x.com/Shailendra36532",
      label: "Twitter",
      color: "hover:from-blue-400 hover:to-blue-600"
    },
    { 
      icon: faEnvelope, 
      href: "mailto:shailendrajurel001@gmail.com",
      label: "Email",
      color: "hover:from-red-500 hover:to-pink-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Optimized cursor light effect */}
      <div 
        className="fixed w-32 h-32 pointer-events-none blur-2xl opacity-30 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 64}px, ${mousePosition.y - 64}px)`,
          willChange: 'transform'
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:30px_30px] [background-position:center] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-8 mt-10 md:mt-0">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x pb-2">
                Hi There! 
                <span className="ml-3 animate-wave inline-block">👋</span>
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Shailendra_Jurel</span>
            </h2>
          </div>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[1.5em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{displayedText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg 
                           transform hover:scale-105 transition-all duration-300 
                           flex items-center space-x-2 group">
              <span className="text-white">Download CV</span>
              <FontAwesomeIcon 
                icon={faDownload} 
                className="text-white text-lg group-hover:animate-bounce" 
              />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-lg transform transition-all duration-300 
                         hover:-translate-y-2 hover:scale-110 bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                         ${link.color}`}
                aria-label={link.label}
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="text-2xl text-cyan-400 group-hover:text-white transition-colors duration-300" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <img 
            ref={imageRef}
            src={Mypicture}
            alt="Jurel" 
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-black 
                     transition-transform duration-200 will-change-transform cursor-pointer"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-cyan-400 text-2xl" 
          />
        </div>
      )}
    </div>
  );
}

export default Home;