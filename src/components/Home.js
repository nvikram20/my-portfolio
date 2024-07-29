import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, experienceRef, projectsRef, contactRef }} />
      <div className="section" id="home" ref={homeRef}>
        <About />
      </div>
      <div className="section" id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div className="section" id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div className="section" id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
