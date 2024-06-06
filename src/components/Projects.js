import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Projects.css';

const Projects = () => {
  const [flipped, setFlipped] = useState([false, false, false]); // Adjusted for three projects

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 200); // delay each card by 200ms
    });
  }, []);

  const handleFlip = (index) => {
    setFlipped(flipped.map((flip, i) => (i === index ? !flip : flip)));
  };

  const projects = [
    {
      title: 'Topic Based Empathetic Chatbot',
      description: 'Built an end-to-end empathetic chatbot, incorporating complex NLP techniques to ensure contextually relevant and emotionally intelligent interactions. Meticulous model fine-tuning and data training significantly uplifted key metrics like BERT and BLEU scores. The final product was a sophisticated chatbot capable of understanding and engaging in empathetic conversations.',
      techStack: 'Python, TensorFlow, GPT-2, BERT, BLEU, BLEURT, Git',
      link: 'https://github.com/nvikram20/Chatbot'
    },
    {
      title: 'Amazon Clone',
      description: 'Developed an Amazon Clone Web Application, featuring full-stack e-commerce functionality with user authentication, real-time database interactions, and efficient image management. The project includes secure payment processing, error handling, and is optimized for global accessibility and scalability.',
      techStack: 'ReactJS, HTML, CSS, Redux, Firebase, Stripe API, Firebase Hosting with CDN optimization',
      link: 'https://react-project-834ef.web.app/' // Provide the correct GitHub link here
    },
  ];

  return (
    <div className="projects-container">
      <Navbar />
      <div className="projects-content">
        <div className="cards-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className={`card-front ${flipped[index] ? 'hide-background' : ''}`}>
                  <h3>{project.title}</h3>
                  <h5>Tech Stack: {project.techStack}</h5>
                  <button
                    className="button-30"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the card flip
                      handleFlip(index);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <div className="card-back">
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-30"
                    onClick={(e) => e.stopPropagation()} // Prevent the card flip
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
