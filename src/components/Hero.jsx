import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/jpg/0DAC5358-2C49-4F2A-97A5-F5E538A50C77_1_201_a.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <motion.div
                    className="hero-img"
                    style={{ backgroundImage: `url(${heroBg})` }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                />
            </div>

            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Building bridges between<br />
                        creative minds without borders.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A film production services company that creates paths<br />
                        between minds and nations to tell the best stories.
                    </motion.p>

                    <motion.div
                        className="cta-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link to="/about" className="hero-btn">About us</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
