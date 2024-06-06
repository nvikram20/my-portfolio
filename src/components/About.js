import React from 'react';
import { ReactTyped, Typed } from 'react-typed'; 
import { useNavigate } from 'react-router-dom';
import animationData from '../animations/anime.json';
import Lottie from 'react-lottie';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    const handleAboutMeClick = () => {
        navigate('/resume');
    };

    return (
        <div className="about-container">
            <div className='lotte-container'>
            <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
            }}
            height={200}
            width={200}
        />
            </div>
          
            <h1>Hey there! Call me Niharika</h1>
            <ReactTyped
                strings={[
                    "Debugging my way through life.",
                    "O(1) solutions, O(n) coffee.",
                    "Coding my way to glory."
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
            <p>Welcome to my portfolio. Let's build something amazing together!</p>
            <div className="button-container">
                <button className="about-button" onClick={handleAboutMeClick}>About me</button>
                <button className="about-button">Get my CV</button>
            </div>
        </div>
    );
};

export default About;
