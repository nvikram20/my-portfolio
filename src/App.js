import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Home from './components/Home';
import Connect from './components/Connect';
import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  useEffect(() => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    document.body.appendChild(circle);

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(circle);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <SocialIcons />
      </Router>
    </div>
  );
}

export default App;
