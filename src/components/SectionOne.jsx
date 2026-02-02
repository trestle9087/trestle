import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SectionOne.css';

// Images from user request
const img1 = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/D28A3C00-7310-40CA-AF7B-C917FA0FC4E6.jpeg";
const img2 = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/0B88CCDB-2C82-4D54-9D14-89DD844D6519_1_105_c.jpeg";
const img3 = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/3E853575-CD96-43EF-9B40-6AF2F1DB9291_1_102_a.jpeg";

const SectionOne = () => {
    return (
        <section className="section-one" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>20 years of experience</h2>
                    <p>
                        With over 20 years of experience in online production<br />
                        and more than 20 international productions
                    </p>
                </motion.div>

                <div className="grid-layout">
                    {/* Large Left Card */}
                    <motion.div
                        className="card large-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="accent-line"></div>
                        <div className="card-image-wrapper large-image">
                            <img src={img1} alt="Scouting" loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3>Scouting and Locations</h3>
                            <p>Process of finding and securing real-world<br />settings for film, TV, and commercial projects.</p>
                        </div>
                    </motion.div>

                    {/* Top Center Card */}
                    <motion.div
                        className="card medium-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="accent-line"></div>
                        <div className="card-image-wrapper medium-image">
                            <img src={img2} alt="Production" loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3>Production Services</h3>
                            <p>Specialized services that provide<br />comprehensive support in the<br />realization of various productions.</p>
                        </div>
                    </motion.div>

                    {/* Top Right Card */}
                    <motion.div
                        className="card medium-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="accent-line"></div>
                        <div className="card-image-wrapper medium-image">
                            <img src={img3} alt="Post Production" loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3>Post Production Services</h3>
                            <p>Assembly of filmed material,<br />editing of sequences,<br />incorporation of music, dubbing,<br />and sound effects.</p>
                        </div>
                    </motion.div>

                    {/* Bottom Callout Bar */}
                    <motion.div
                        className="callout-bar"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="accent-line"></div>
                        <div className="callout-content">
                            <p><strong>Tlestle Media</strong> from coast to coast offers a<br />wide range of production services.</p>
                            <Link to="/about" className="icon-btn" aria-label="Learn more">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
