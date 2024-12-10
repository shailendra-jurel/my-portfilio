import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MyPic from '../assets/Mypicture.jpeg';


const Home = () => {
  const text = ["Web Developer", "Learner", "Designer", "Backend Developer"];
  const typingSpeed = 200;
  const deletingSpeed = 50;
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const imageRef = useRef(null);

  // Typing Effect
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

  // Image Tilt Effect
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = image.getBoundingClientRect();
      
      // Calculate center of the image
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate mouse position relative to image center
      const x = clientX - centerX;
      const y = clientY - centerY;

      // Define tilt parameters
      const maxTilt = 15;
      const sensitivity = 0.1;

      // Calculate tilt angles
      const tiltX = (y * sensitivity).toFixed(2);
      const tiltY = -(x * sensitivity).toFixed(2);

      // Apply 3D transform with smooth transition
      image.style.transition = 'transform 0.1s ease-out';
      image.style.transform = `
        perspective(1000px) 
        rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg) 
        scale(1.05)
        translateZ(50px)
      `;
    };

    const resetTilt = () => {
      image.style.transition = 'transform 0.3s ease-in-out';
      image.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
        translateZ(0px)
      `;
    };

    // Add event listeners
    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', resetTilt);

    // Cleanup event listeners
    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  const socialLinks = [
    { 
      icon: faGithub, 
      href: "https://github.com/shailendra-jurel",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-700"
    },
    { 
      icon: faLinkedin, 
      href: "https://www.linkedin.com/in/shailendra-jurel/",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-500"
    },
    { 
      icon: faInstagram, 
      href: "https://www.instagram.com/t3cheshwar/",
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-400"
    },
    { 
      icon: faTwitter, 
      href: "https://x.com/Shailendra36532",
      bgColor: "bg-sky-500",
      hoverColor: "hover:bg-sky-400"
    },
    { 
      icon: faEnvelope, 
      href: "mailto:shailendrajurel001@gmail.com",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-400"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] flex items-center justify-center overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 flex items-center justify-center md:justify-start">
              Hi There! 
              <span className="ml-3 text-4xl md:text-5xl lg:text-6xl animate-wave inline-block">👋</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              I'M <span className="ml-2">Shailendra_Jurel</span>
            </h2>
          </div>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 min-h-[1.5em]">
            <span className="text-purple-400">{displayedText}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 pt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${link.bgColor} ${link.hoverColor} 
                  p-3 rounded-full transform transition-all duration-300 
                  hover:-translate-y-2 hover:scale-110 shadow-lg
                `}
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="text-white text-2xl" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
          <img 
            ref={imageRef}
            src={MyPic} 
            alt="Jurel" 
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#112240] group-hover:border-purple-500 transition duration-300 will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;