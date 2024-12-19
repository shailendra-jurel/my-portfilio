import React from 'react';
import profile from '../assets/Profile.pdf';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-center text-7xl md:text-2xl lg:text-10xl font-bold text-[#7442ad] bg-[#fbd9ad] py-4 rounded-lg">
          {['R', 'e', 's', 'u', 'm', 'e'].map((char, index) => (
            <span 
              key={index} 
              className="inline-block px-1 hover:scale-110 transition-transform duration-300"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      
      <div className="w-full overflow-hidden shadow-lg rounded-lg">
        <embed 
          src={profile} 
          className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh]" 
          type="application/pdf"
        />
        <br />
          <embed 
          src={profile} 
          className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh]" 
          type="application/pdf"
        />
      </div>
    </div>
  );
}

export default Resume;