import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import projectImage1 from '../Assets/Project1.jpg'; // Ensure this path is correct
import projectImage2 from '../Assets/Project2.jpg'; // Placeholder image for the new project
import projectImage3 from '../Assets/Project3.jpg'; // Placeholder image for the new project
import projectImage4 from '../Assets/Project4.png'; // Placeholder image for the new project

const projects = [
  {
    title: 'Topic Based Empathetic Chatbot (NLP)',
    skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'NLTK', 'Flask', 'BERT', 'BLEU'],
    imageUrl: projectImage1,
    projectUrl: 'https://github.com/nvikram20/Chatbot',
    icon: faGithub
  },
  {
    title: 'Feedback Summarizer',
    skills: ['Python', 'AWS S3', 'AWS Lambda', 'AWS Transcribe', 'AWS Bedrock', 'Anthropic Claude', 'Jinja2'],
    imageUrl: projectImage2,
    projectUrl: 'https://github.com/nvikram20/Feedback-Summarizer',
    icon: faGithub
  },
  {
    title: 'Advanced RL Algorithms on Atari Environments',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI Gym', 'NumPy', 'Matplotlib'],
    imageUrl: projectImage3,
    projectUrl: 'https://drive.google.com/file/d/1leRXI-rLxTijGBxkiTSV-C_wuMWxRByP/view',
    icon: faLink
  },
  {
    title: 'Amazon Clone',
    skills: ['React JS', 'Redux', 'Firebase', 'Stripe'],
    imageUrl: projectImage4,
    projectUrl: 'https://react-project-834ef.web.app/',
    icon: faLink
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-link">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={project.icon} />
            </a>
          </div>
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-content">
            <div className="project-title">{project.title}</div>
            <div className="project-skills">
              {project.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
