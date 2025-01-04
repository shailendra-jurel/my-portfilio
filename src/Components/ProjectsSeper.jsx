import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Search, ExternalLink, Code, X } from 'lucide-react';

// Import your project images
import DashboardClone from "../assets/Dashboard-Clone.png";
import LibraryApp from '../assets/Library-app.png';
import ProductService from '../assets/productService.png';
import CartService from '../assets/CartService.png';
import ToDoList from '../assets/ToDoList.png';
import TicTacToe from '../assets/TicTacToe.png';
import ECommerce from '../assets/ECommerce.png';
import Quiz from '../assets/Quiz.png';

const projects = [
  {
    id: 1,
    title: "Scaler Dashboard Clone",
    description: "A responsive dashboard UI inspired by modern admin panels.",
    image: DashboardClone,
    github: "https://github.com/your-profile/dashboard-clone",
    liveDemo: "https://your-live-demo-link.com",
    techStack: "React, Tailwind CSS"
  },
  {
    id: 2,
    title: "Library App",
    image: LibraryApp,
    description: 'A Kotlin-based mobile app simulating a community library where users can share and rent books.',
    techStack: 'Kotlin',
    github: 'https://github.com/shailendra-jurel',
  },
  {
    id: 3,
    title: 'Fake Store Product Service',
    image: ProductService,
    description: 'A Spring Boot backend fetching goods from Fake Store API and storing them in a database.',
    techStack: 'Java, Spring Boot',
    github: 'https://github.com/shailendra-jurel',
  },
  {
    id: 4,
    title: 'To-Do List App',
    image: ToDoList,
    description: 'A simple to-do app to manage daily tasks effectively.',
    techStack: 'React, Tailwind CSS',
    github: 'https://github.com/shailendra-jurel',
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe',
    image: TicTacToe,
    description: 'A fun tic-tac-toe game with a clean and interactive UI.',
    techStack: 'React',
    github: 'https://github.com/shailendra-jurel',
  },
  {
    id: 6,
    title: 'Quiz App',
    image: Quiz,
    description: 'A quiz application with real-time scoring and analytics.',
    techStack: 'React, Firebase',
    github: 'https://github.com/shailendra-jurel',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const projectsPerPage = 6;

  // Get all unique tech stacks
  const techStacks = ['all', ...new Set(projects.flatMap(project => 
    project.techStack ? project.techStack.split(', ') : []
  ))];

  // Filter projects based on search and tech stack
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'all' || 
                       (project.techStack && project.techStack.includes(selectedTech));
    return matchesSearch && matchesTech;
  });

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Custom Modal Component
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <p className="text-gray-400">{project.description}</p>
            
            {project.techStack && (
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                View Code
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my latest works showcasing modern web development techniques and creative solutions.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full md:w-auto bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
          >
            {techStacks.map(tech => (
              <option key={tech} value={tech}>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowModal(true);
                    }}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <Code size={16} />
                    View Details
                  </button>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-white" />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                      >
                        <ExternalLink size={16} className="text-gray-400 hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-700 disabled:opacity-50 hover:border-cyan-400 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-700 disabled:opacity-50 hover:border-cyan-400 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setShowModal(false);
              setSelectedProject(null);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;