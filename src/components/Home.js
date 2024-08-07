import React, { useRef, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [currentSection, setCurrentSection] = React.useState('home');

  const scrollToSection = (sectionRef, section) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  const scrollToTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection('home');
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
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
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, experienceRef, projectsRef, skillsRef, contactRef }} />
      <SwitchTransition>
        <CSSTransition
          key={currentSection}
          timeout={500}
          classNames="fade"
        >
          <div className="section-container">
            <div className="section" id="home" ref={homeRef}><About /></div>
            <div className="section" id="experience" ref={experienceRef}><Experience /></div>
            <div className="section" id="projects" ref={projectsRef}><Projects /></div>
            <div className="section" id="skills" ref={skillsRef}><Skills /></div>
            <div className="section" id="contact" ref={contactRef}><Contact /></div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Home;
