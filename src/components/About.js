import React from 'react';
import './About.css';
import profilePhoto from './profile.jpg'; // Adjust the path according to your directory structure

const About = () => {
  const handleGetResumeClick = () => {
    window.open('https://drive.google.com/file/d/1jxRWjscAsOdLHKdH1mb5WVzeVzYWEglf/view', '_blank');
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-photo">
          <img src={profilePhoto} alt="Niharika Vikram" className="profile-photo" />
        </div>
        <div className="about-text">
          <p className="about-paragraph">
            Hey! 👋 I’m <span className="highlight-name">Niharika Vikram</span>, a Software Engineer who turns caffeine ☕ into code 💻 and ideas into reality 🌟. 
            With 3+ years of experience in full-stack development, I’ve built everything from edtech platforms 📚 to real-time stock interfaces 📈 
            using my trusty sidekicks <span className="highlight-tech">Java</span>, <span className="highlight-tech">Python</span>, and <span className="highlight-tech">ReactJS</span>. 
            I believe in making technology work for people, not the other way around. 
            When I’m not debugging 🐛, I’m probably hiking 🥾, reading 📖, or experimenting with new recipes 🍳. Let’s create something awesome together! 🚀
          </p>
          <button className="resume-button" onClick={handleGetResumeClick}>Get My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
