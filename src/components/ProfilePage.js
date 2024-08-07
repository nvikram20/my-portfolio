import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-grid">
        <div className="grid-item">
          <h2 className="section-title">Competitive Programming</h2>
          <p>Check out my competitive programming profile on <a href="https://leetcode.com/">LeetCode</a>.</p>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Certifications</h2>
          <ul>
            <li><a href="https://example.com/cert1">Certification 1</a></li>
            <li><a href="https://example.com/cert2">Certification 2</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Data Structures</h2>
          <ul>
            <li>Array</li>
            <li>Linked List</li>
            <li>Stack</li>
            <li>Queue</li>
            <li>Tree</li>
            <li>Graph</li>
            <li>Hash Table</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Programming Languages</h2>
          <div className="technologies-container">
            <div className="technology-item">JavaScript</div>
            <div className="technology-item">Python</div>
            <div className="technology-item">Java</div>
            <div className="technology-item">C++</div>
            <div className="technology-item">Ruby</div>
          </div>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Front End Technologies</h2>
          <div className="technologies-container">
            <div className="technology-item">React</div>
            <div className="technology-item">Vue</div>
            <div className="technology-item">Angular</div>
            <div className="technology-item">HTML</div>
            <div className="technology-item">CSS</div>
          </div>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Backend Technologies</h2>
          <div className="technologies-container">
            <div className="technology-item">Node.js</div>
            <div className="technology-item">Express</div>
            <div className="technology-item">Django</div>
            <div className="technology-item">Flask</div>
          </div>
        </div>
        <div className="grid-item">
          <h2 className="section-title">API Experience</h2>
          <div className="technologies-container">
            <div className="technology-item">REST</div>
            <div className="technology-item">GraphQL</div>
            <div className="technology-item">SOAP</div>
          </div>
        </div>
        <div className="grid-item">
          <h2 className="section-title">Cloud Skills</h2>
          <div className="technologies-container">
            <div className="technology-item">AWS</div>
            <div className="technology-item">Azure</div>
            <div className="technology-item">Google Cloud</div>
          </div>
        </div>
        <div className="grid-item">
          <h2 className="section-title">SQL Database Skills</h2>
          <div className="technologies-container">
            <div className="technology-item">MySQL</div>
            <div className="technology-item">PostgreSQL</div>
            <div className="technology-item">SQLite</div>
            <div className="technology-item">SQL Server</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
