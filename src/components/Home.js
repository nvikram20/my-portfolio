import React, { useCallback, useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
 // Ensure this import is correct
import './Home.css';

const Home = () => {
    const [animateEducation, setAnimateEducation] = useState(false);

    const aboutRef = useRef(null);
    const educationRef = useRef(null);

    const handleScrollToSection = (section) => {
        if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'education' && educationRef.current) {
            setAnimateEducation(true);
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.roadmap-item');
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    item.classList.add('fade-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className="about-section" ref={aboutRef}>
            <Navbar />

                <About />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
