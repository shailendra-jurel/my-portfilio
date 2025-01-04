import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import DashboardClone from '../assets/Dashboard-Clone.png';
import LibraryApp from '../assets/Library-app.png';
import ProductService from '../assets/productService.png';
import CartService from '../assets/CartService.png';
import ToDoList from '../assets/ToDoList.png';
import TicTacToe from '../assets/TicTacToe.png';
import ECommerce from '../assets/ECommerce.png';
import Quiz from '../assets/Quiz.png';

const projects = [
  {
    title: 'Scaler Dashboard Clone',
    image: DashboardClone,
    description:
      'A dashboard clone of Scaler School of Technology using HTML and CSS, showcasing a functional and visually appealing UI.',
    techStack: 'HTML, CSS, JavaScript',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'Library App',
    image: LibraryApp,
    description:
      'A Kotlin-based mobile app simulating a community library where users can share and rent books.',
    techStack: 'Kotlin',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'Fake Store Product Service',
    image: ProductService,
    description:
      'A Spring Boot backend fetching goods from Fake Store API and storing them in a database.',
    techStack: 'Java, Spring Boot',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'E-Commerce Site',
    image: ECommerce,
    description: 'A full-stack E-commerce website with cart and checkout functionality.',
    techStack: 'React, Node.js, MongoDB',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'To-Do List App',
    image: ToDoList,
    description: 'A simple to-do app to manage daily tasks effectively.',
    techStack: 'React, Tailwind CSS',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'Tic-Tac-Toe',
    image: TicTacToe,
    description: 'A fun tic-tac-toe game with a clean and interactive UI.',
    techStack: 'React',
    link: 'https://github.com/shailendra-jurel',
  },
  {
    title: 'Quiz App',
    image: Quiz,
    description: 'A quiz application with real-time scoring and analytics.',
    techStack: 'React, Firebase',
    link: 'https://github.com/shailendra-jurel',
  },
];

const ProjectSeper = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen text-gray-800 py-10 px-5">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-10">
        {'Projects'.split('').map((char, index) => (
          <span
            key={index}
            className="hover:text-blue-500 transition duration-300"
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-48 w-full rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.techStack}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </button>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-center text-sm mb-4 px-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSeper;
