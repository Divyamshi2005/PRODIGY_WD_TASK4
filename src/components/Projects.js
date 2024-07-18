import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import project1Image from '../assets/project-images/project1-image.jpg';
import project3Image from '../assets/project-images/project3-image.jpg';

const projectData = [
  {
    title: 'Online Health and Nuitrition',
    image: project1Image,
    description: 'Our Online Health and Nutrition App, powered by Django, helps you maintain a balanced lifestyle effortlessly. Track meals, monitor nutrients, access personalized recipes, and consult with experts—all within a user-friendly interface designed to support your health goals.',
    link: 'https://project1-link.com'
  },
  {
    title: 'Online Bus Reservation System',
    image: project3Image,
    description: 'Experience seamless travel planning with our Online Bus Reservation System, built on React.js. Easily book tickets, view schedules, and manage your journey details with real-time updates, ensuring a smooth and reliable travel experience.',
    link: 'https://project3-link.com'
  }
];

function Projects() {
  return (
    <motion.section
      className="projects"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <div className="project-details">
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </motion.section>
  );
}

export default Projects;
