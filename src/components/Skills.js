import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "Java", "R", "C#", "Solidity", "TypeScript", "C"], className: "grid-item-1" },
    { category: "Web Technologies", items: ["Vue.js", "Redux", "Framer-motion", "EmailJS", "RESTful API", "Jest", "D3.js", "NightWatch.js", "Three.js", "Vite.js", "gRPC", "Nuxt.js", "Vuex", "Chart.js", "React.js", "Tailwind CSS", "Flask", "Next.js", "jQuery", "web3", "JS", "CSS", "HTML", "AdobeXD", "Figma"], className: "grid-item-4" },
    { category: "Databases & Cloud", items: ["Redis", "Azure Cloud", "Azure DevOps", "Virtualization", "GCP", "OpenALM", "IaC", "MySQL", "SQL", "PostgreSQL", "AWS"], className: "grid-item-5" },
    { category: "Libraries", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "Numpy", "Matplotlib"], className: "grid-item-4" },
    { category: "Others", items: ["Docker", "CI/CD", "Elastic Search", "Confluence", "Scrum", "MobaXterm", "SDLC", "Jira", ".NET", "Node-RED", "Service Now", "Agile", "Kubernetes", "Ganache Truffle", "Spark", "Microservices", "Creative Design", "Tableau", "PowerBI", "ADFS", "Matlab", "Apache Airflow", "Sole", "Git", "Hadoop"], className: "grid-item-3" },
    { category: "Competitive Programming", items: ["LeetCode"], className: "grid-item-2" },
    { category: "Certifications", items: ["Google Data Analytics Professional Certificate"], className: "grid-item-2" }
];

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const trail = useTrail(skills.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        config: { mass: 5, tension: 2000, friction: 200 },
        delay: 200
    });

    return (
        <div className="skills-container" ref={ref}>
            <h1 className="section-title">Skills</h1>
            <div className="skills-grid">
                {trail.map((animation, index) => (
                    <animated.div style={animation} key={index} className={`grid-item ${skills[index].className}`}>
                        <animated.h2 className="section-title" style={{ animationDelay: `${index * 0.1}s` }}>{skills[index].category}</animated.h2>
                        <div className="skill-items">
                            {skills[index].items.map((item, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-content">{item}</div>
                                </div>
                            ))}
                        </div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
