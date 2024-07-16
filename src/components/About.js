import React from 'react';
import { useNavigate } from 'react-router-dom';
import animationData from '../animations/anime.json';
import Lottie from 'react-lottie';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    const handleAboutMeClick = () => {
        navigate('/resume');
    };

    const handleGetCvClick = () => {
        window.open('https://drive.google.com/file/d/1jxRWjscAsOdLHKdH1mb5WVzeVzYWEglf/view', '_blank');
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
            <div className="name-animation-container">
                <p className="intro-text">Hello 👋 I'm</p>
                <section className="animation">
                    <div className="first"><div>Niharika Vikram</div></div>
                    <div className="second"><div>a Software Engineer</div></div>
                    <div className="third"><div>a Systems Engineer</div></div>
                </section>
            </div>
            <p>Welcome to my portfolio. Let's build something amazing together!</p>
            <div className="button-container">
                <button className="about-button" onClick={handleAboutMeClick}>About me</button>
                <button className="about-button" onClick={handleGetCvClick}>Get my CV</button>
            </div>
        </div>
    );
};

export default About;
