import React from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import projectImage1 from '../Assets/Project1.jpg';
import projectImage2 from '../Assets/Project2.jpg';
import projectImage3 from '../Assets/Project3.jpg';
import projectImage4 from '../Assets/Project4.png';

const projects = [
  {
    title: 'Topic Based Empathetic Chatbot (NLP)',
    skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'NLTK', 'Flask', 'BERT', 'BLEU'],
    imageUrl: projectImage1,
    projectUrl: 'https://github.com/nvikram20/Chatbot',
    icon: faGithub,
  },
  {
    title: 'Feedback Summarizer',
    skills: ['Python', 'AWS S3', 'AWS Lambda', 'AWS Transcribe', 'AWS Bedrock', 'Anthropic Claude', 'Jinja2'],
    imageUrl: projectImage2,
    projectUrl: 'https://github.com/nvikram20/Feedback-Summarizer',
    icon: faGithub,
  },
  {
    title: 'Advanced RL Algorithms on Atari Environments',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI Gym', 'NumPy', 'Matplotlib'],
    imageUrl: projectImage3,
    projectUrl: 'https://drive.google.com/file/d/1leRXI-rLxTijGBxkiTSV-C_wuMWxRByP/view',
    icon: faLink,
  },
  {
    title: 'Amazon Clone',
    skills: ['React JS', 'Redux', 'Firebase', 'Stripe'],
    imageUrl: projectImage4,
    projectUrl: 'https://react-project-834ef.web.app/',
    icon: faLink,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const trail = useTrail(projects.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.9)',
    from: { opacity: 0, transform: 'scale(0.9)' },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div className="projects-container" ref={ref}>
      {trail.map((animation, index) => (
        <animated.div style={animation} className="project-card" key={index}>
          <div className="project-link">
            <a href={projects[index].projectUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={projects[index].icon} />
            </a>
          </div>
          <img src={projects[index].imageUrl} alt={projects[index].title} className="project-image" />
          <div className="project-content">
            <div className="project-title">{projects[index].title}</div>
            <div className="project-skills">
              {projects[index].skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill">{skill}</div>
              ))}
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Projects;
