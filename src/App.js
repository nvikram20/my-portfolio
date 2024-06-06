import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Home from './components/Home';
import Connect from './components/Connect';
import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
