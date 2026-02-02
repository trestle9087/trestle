import React from 'react';
import { motion } from 'framer-motion';
import './SectionTwo.css';

const lauraImg = "https://raw.githubusercontent.com/REACHSLEGENDA/img2/refs/heads/main/6459A0FD-C1AA-459E-8076-E07A5B7E5E18_1_201_a.jpg";

const SectionTwo = () => {
    return (
        <section className="section-two" id="about">
            <div className="container">
                <motion.div
                    className="feature-panel"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.005, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
                >
                    <div className="panel-image-container">
                        <img src={lauraImg} alt="Laura Somerville" className="panel-image" loading="lazy" />
                        <div className="panel-overlay"></div>
                    </div>

                    <div className="panel-content">
                        <p className="highlight-text">
                            <span className="orange-bold">Laura Somerville,</span> CEO of Trestle Media, has become
                            one of the most sought-after online producers in the
                            US when it comes to shooting <span className="orange-text">television series in
                                Spanish.</span>
                        </p>
                        <p className="secondary-text">
                            She has brought Televisa series such as “Por amar sin
                            ley 2”, “Vino el amor”, “Pasión y Poder”, and “La doble
                            vida de Estela Carrillo” to the screen, to name just a few.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionTwo;
