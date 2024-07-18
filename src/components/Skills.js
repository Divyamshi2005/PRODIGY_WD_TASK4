import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: faCode,
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 }
    ]
  },
  {
    category: 'Frameworks and Libraries',
    icon: faProjectDiagram,
    skills: [
      { name: 'React', level: 85 },
      
      { name: 'Django', level: 60 }
    ]
  },
  {
    category: 'Tools and Platforms',
    icon: faTools,
    skills: [
      { name: 'Git', level: 95 },
    
    ]
  },
  {
    category: 'Other Skills',
    icon: faDatabase,
    skills: [
      { name: 'SQL', level: 80 },

      { name: 'UI/UX Design', level: 65 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      {skillsData.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3>
            <FontAwesomeIcon icon={skillCategory.icon} className="category-icon" />
            {skillCategory.category}
          </h3>
          <div className="skills-list">
            {skillCategory.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
                  <span style={{ width: `${skill.level}%` }} className="progress-bar"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
