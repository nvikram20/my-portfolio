import React, { useState, useEffect } from 'react';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    role: 'Software Engineer',
    company: 'Edukaizen',
    duration: 'May 2020 - Apr 2022',
    location: 'Bangalore, KA, India',
    techStack: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
    details: [
      'Engineered a full-stack application for an edtech startup using Java, Spring Boot, React.js, and PostgreSQL, advancing data accuracy by 30% and improving user experience.',
      'Increased database performance by 60% through normalization, indexing, and query optimization in PostgreSQL, cutting response times from 750ms to 300ms.',
      'Implemented modular React.js components, reducing codebase by 20%, and set up CI/CD pipelines with Jenkins for streamlined deployments.',
      'Migrated legacy systems to a microservices architecture on Azure, resulting in greater scalability and resilience. Connected APIs with Django REST Framework, promoting tool accessibility and student engagement by 25%.',
      'Customized educational tools with teaching staff, ensuring reliability and compliance. Utilized AI-driven analytics and Azure Cognitive Services to improve query handling and boost user satisfaction by 30%.',
    ],
  },
  {
    type: 'work',
    role: 'Software Engineer – Virtual Intern',
    company: 'JPMorgan Chase & Co',
    duration: 'Dec 2021 - Jan 2022',
    location: 'Hyderabad, TS, India',
    techStack: ['Java', 'Spring Boot', 'WebSockets'],
    details: [
      'Contributed to developing a real-time stock price interface leveraging Java, Spring Boot, and WebSockets, facilitating better trading decision-making by 20%.',
      'Maintained robust version control with Git, guaranteeing seamless updates and high availability, while participating in code reviews to elevate code quality.',
      'Revamped data accessibility by RESTful APIs, enabling smoother data retrieval and user interactions within the stock price interface.',
    ],
  },
  {
    type: 'work',
    role: 'Software Engineering Intern',
    company: 'Vignan University',
    duration: 'Apr 2019 - Feb 2020',
    location: 'Guntur, AP, India',
    techStack: ['Python', 'Django', 'Angular', 'PostgreSQL'],
    details: [
      'Led development of a campus event management app with Python, Django, Angular, and PostgreSQL, streamlining event organization for 5,000+ students with secure RESTful APIs.',
      'Developed a responsive frontend with Angular, incorporated real-time notifications via WebSockets, and enhanced security with OAuth2, boosting event engagement by 30% and ensuring robust performance.',
      'Introduced a robust event scheduling feature with reminders and calendar integrations, expanding event participation by 25%.',
    ],
  },
  {
    type: 'education',
    degree: "Master's Degree, Computer Science",
    institution: 'University at Buffalo',
    duration: 'Aug 2022 - Dec 2023',
    location: 'Buffalo, NY, USA',
  },
  {
    type: 'education',
    degree: "Bachelor's Degree, Computer Science",
    institution: 'Vignan University',
    duration: 'Jul 2016 - May 2020',
    location: 'Guntur, AP, India',
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, { threshold: 0.1 });

    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <h2 className="education-title">Education</h2>
      </div>
      <div className="experience-grid">
        <div className="experience-column">
          {workExperiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot bg-blue-500 border-white border-4 rounded-full"></div>
              <div className="card">
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-title">
                      {exp.role}
                    </div>
                    <div className="card-subtitle">
                      {exp.company}
                    </div>
                    <div className="card-duration">
                      {exp.duration} · {exp.location}
                    </div>
                  </div>
                  <div className="tech-stack">
                    {exp.techStack && exp.techStack.map((tech, idx) => (
                      <span key={idx} className="tech">{tech}</span>
                    ))}
                  </div>
                  <button className="read-more" onClick={() => handleReadMore(exp)}>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="education-column">
          {educationExperiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot bg-blue-500 border-white border-4 rounded-full"></div>
              <div className="card">
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-title">
                      {exp.degree}
                    </div>
                    <div className="card-subtitle">
                      {exp.institution}
                    </div>
                    <div className="card-duration">
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedExperience && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className="modal-header">
              <h3>{selectedExperience.type === 'work' ? selectedExperience.role : selectedExperience.degree}</h3>
              <h4>{selectedExperience.type === 'work' ? selectedExperience.company : selectedExperience.institution}</h4>
            </div>
            <div className="modal-body">
              <div>{selectedExperience.duration}</div>
              {selectedExperience.details && (
                <ul>
                  {selectedExperience.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;