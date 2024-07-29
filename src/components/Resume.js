import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Resume.css';

const Resume = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="resume-page">

      <div className="resume-info-section">
      <div className="info-section">
        <Typography variant="h4" className="info-title">A Little About Me </Typography>
        <Typography variant="body1" className="info-text">
          My career as a Computer Science graduate has been characterized by over 3+ years of dedicated full-stack development, 
          where I have honed my skills in diverse programming languages and web technologies. I am committed to constructing 
          sophisticated, user-friendly applications that are not just functional but also adhere to the highest standards of quality 
          and compliance.
        </Typography>
      </div>
      <div className="rcontainer">
        <Accordion className='accord-main' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="accord-main-title" variant="h5">Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accord-inner-cont"> 
              <Typography className="accord-cont-heading" variant="h6">University at Buffalo, Buffalo, NY, USA</Typography>
              <Typography  className="accord-cont-body" variant="body1">Masters in Computer Science and Engineering</Typography>
              <Typography className="accord-cont-body" variant="body2"><span className='years-all'>AUG 2022 – DEC 2023</span></Typography>
              <Typography className="accord-cont-body" variant="body2"><strong>Courses:</strong> Modern Networking Concepts, Data Structures and Algorithms, etc.</Typography>
              <Divider className="custom-divider" />
            </div>
            <div className="accord-inner-cont">
              <Typography  className="accord-cont-heading" variant="h6">Vignan University, Guntur, AP, IN</Typography>
              <Typography className="accord-cont-body" variant="body1">Bachelors in Computer Science and Engineering</Typography>
              <Typography  className="accord-cont-body" variant="body2"><span className='years-all'>JUL 2016 – MAY 2020</span></Typography>
              <Typography className="accord-cont-body" variant="body2"><strong>Courses:</strong> Data Structures & Algorithms, Statistics, Database Management Systems.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accord-main' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="accord-main-title" variant="h5">Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography className="accord-cont-heading"  variant="h6">Edukaizen, Bangalore, KA, IN</Typography>
              <Typography className="accord-cont-body-work" variant="body1"><span className='role-name'>Software Engineer</span></Typography>
              <Typography  className="accord-cont-body-work" variant="body2"><span className='years-all'>MAY 2020 – APR 2022</span></Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Spearheaded the development of the school’s website and e-learning platforms with React.js, SQL, and AWS, significantly enhancing user experience.</Typography>
              <Typography  className="accord-cont-body-work" variant="body2">● Achieved a 20% increase in student and faculty engagement via interactive classes and responsive design.</Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Led backend and frontend optimizations, enhancing security and performance – Reduced bugs by ~30% and improved Site speed by ~20%.</Typography>
              <Typography  className="accord-cont-body-work" variant="body2">● Collaborated with educational staff to customize tools to pedagogical needs, ensuring system reliability.</Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Maintained comprehensive documentation and provided ongoing technical support, bolstering system stability and customer satisfaction.</Typography>
              <Divider className="custom-divider" />
            </div>
            <div>
              <Typography className="accord-cont-heading"  variant="h6">JPMorgan Chase & Co</Typography>
              <Typography className="accord-cont-body-work" variant="body1"><span className='role-name'>Software Engineer – Virtual Intern</span></Typography>
              <Typography className="accord-cont-body-work" variant="body2"><span className='years-all'>DEC 2021 – JAN 2022</span></Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Developed a real-time interface for stock price data feed using Java and Git, enhancing trading decision-making and data accessibility.</Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Utilized proprietary frameworks to create dynamic visual representations of financial data for traders, and contributed to an open-source project, demonstrating initiative and technical proficiency.</Typography>
              <Divider className="custom-divider" />
            </div>
            <div>
              <Typography  className="accord-cont-heading"  variant="h6">Vignan University, Guntur, AP, IN</Typography>
              <Typography className="accord-cont-body-work" variant="body1"><span className='role-name'>Software Engineer Intern</span></Typography>
              <Typography className="accord-cont-body-work"  variant="body2"><span className='years-all'>AUG 2019 – FEB 2020</span></Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Developed an advanced student information system, Incorporating AI analytics to boost student performance predictions by 20% and leveraging cloud technology for a 15% increase in data management efficiency.</Typography>
              <Typography className="accord-cont-body-work" variant="body2">● Developed comprehensive API integrations, enhancing educational tool accessibility and improving student engagement by 25%, establishing a new standard for academic resource integration.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accord-main' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="accord-main-title" variant="h5">Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="skills-grid">
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-react"></i>
                <Typography>React js/native</Typography>
              </div>
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-angular"></i>
                <Typography>Angular</Typography>
              </div>
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-js"></i>
                <Typography>JavaScript</Typography>
              </div>
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-node"></i>
                <Typography>Node.js</Typography>
              </div>
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-python"></i>
                <Typography>Python</Typography>
              </div>
              <div className={`skill-item ${expanded === 'panel3' ? 'bounce' : ''}`}>
                <i className="fab fa-git-alt"></i>
                <Typography>Git</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
    </div>
  );
};

export default Resume;
