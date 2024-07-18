// src/components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import './About.css';
import profilePic from '../assets/profile-pic.jpg'; // Import your profile picture

const About = () => {
  return (
    <div className="about-section">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="about-content">
        <div>
          <h2 className="section-title">Who Am I?</h2>
          <p className="about-text">
            Hi, I'm DIVYAMSHI, a passionate web developer currently studying at KLUniversity, Guntur. I specialize in creating dynamic and beautiful web applications using modern technologies like React.js and Node.js.
          </p>
          <p className="about-text">
            I have a strong foundation in computer science, with a focus on algorithms, data structures, and software engineering principles. My goal is to leverage my skills to build innovative and user-friendly digital experiences.
          </p>
          <p className="about-text">
            For a detailed list of my skills, please visit my <Link to="/skills">Skills Page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
