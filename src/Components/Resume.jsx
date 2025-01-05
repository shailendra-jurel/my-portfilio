import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faSpinner, 
  faChevronLeft, 
  faChevronRight,
  faExpand,
  faCompress
} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const resumes = [
    {
      id: '154mg-Ao342F0HTZKnPcnhHi5vjnmSpNQ',
      title: 'Full Stack Developer',
      description: 'Focused on web development skills and experiences'
    },
    {
      id: 'YOUR_SECOND_RESUME_ID',
      title: 'UI/UX Designer',
      description: 'Highlighting design and user experience projects'
    },
    {
      id: 'YOUR_THIRD_RESUME_ID',
      title: 'Technical Lead',
      description: 'Emphasizing leadership and project management'
    }
  ];

  const getGoogleDriveUrl = (fileId) => `https://drive.google.com/file/d/${fileId}/preview`;
  const getDownloadUrl = (fileId) => `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handlePrevious = () => {
    setCurrentResumeIndex((prev) => (prev > 0 ? prev - 1 : resumes.length - 1));
    setIsLoading(true);
  };

  const handleNext = () => {
    setCurrentResumeIndex((prev) => (prev < resumes.length - 1 ? prev + 1 : 0));
    setIsLoading(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="w-full bg-black relative">
      {/* Background Pattern - Now relative positioned */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:30px_30px] [background-position:center] opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {['R', 'e', 's', 'u', 'm', 'e'].map((char, index) => (
              <span
                key={index}
                className="inline-block px-1 hover:scale-110 transition-transform duration-300
                         text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="text-center text-gray-400 text-lg">
            Swipe or use arrows to view different resume versions
          </p>
        </div>

        {/* Resume Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
                     w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700
                     flex items-center justify-center group
                     transform transition-all duration-300 hover:scale-110"
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className="text-cyan-400 group-hover:text-white" 
            />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
                     w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700
                     flex items-center justify-center group
                     transform transition-all duration-300 hover:scale-110"
          >
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="text-cyan-400 group-hover:text-white" 
            />
          </button>

          {/* Resume Card */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-xl border border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {resumes[currentResumeIndex].title}
                </h2>
                <p className="text-gray-400">{resumes[currentResumeIndex].description}</p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => window.open(getDownloadUrl(resumes[currentResumeIndex].id), '_blank')}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg
                         transform hover:scale-105 transition-all duration-300 
                         flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-white" />
                  <span className="text-white">Download</span>
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg
                         transition-all duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon 
                    icon={isFullscreen ? faCompress : faExpand} 
                    className="text-cyan-400" 
                  />
                  <span className="text-gray-300">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className={`relative w-full overflow-hidden rounded-lg bg-gray-800 transition-all duration-300
                          ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[70vh]'}`}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <FontAwesomeIcon 
                    icon={faSpinner} 
                    className="text-cyan-400 text-4xl animate-spin" 
                  />
                </div>
              )}
              <iframe
                src={getGoogleDriveUrl(resumes[currentResumeIndex].id)}
                className={`w-full ${isFullscreen ? 'h-screen' : 'h-full'}`}
                title={`Resume - ${resumes[currentResumeIndex].title}`}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          {/* Resume Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {resumes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentResumeIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                         ${currentResumeIndex === index 
                           ? 'bg-gradient-to-r from-cyan-500 to-purple-500 w-6' 
                           : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;