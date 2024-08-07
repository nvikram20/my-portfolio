import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <SocialIcons />
      </Router>
    </div>
  );
}

export default App;
