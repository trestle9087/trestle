import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './AboutServices.css';
import abrahamImg from '../assets/abraham.jpg';
import michImg from '../assets/mich.jpg';

const teamImg = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/AboutPrincipal.jpg";
const lauraProfile = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/FOTO_LAU2_.jpg";

const AboutServices = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 430; // Card width (400) + gap (30)
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="about-services" id="about">
            <div className="about-header-image">
                <img src={teamImg} alt="Trestle Media Team" className="team-photo" />
                <div className="about-title-overlay">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        About Trestle Media
                    </motion.h2>
                </div>
            </div>

            <div className="about-content-container">
                <div className="container">
                    <motion.p
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Since 2005, Laura Somerville has found a way to meet the need for foreign film and television productions
                        to tell stories in our country, which is why she courageously founded Trestle Media. With over 20 years of
                        experience in line production and more than 20 international productions under her belt, Laura Somerville
                        has become one of the most sought-after line producers in the United States when it comes to shooting
                        television series in Spanish. Her bilingualism and bicultural background, combined with a deep knowledge
                        of television production, make her one of the most competitive professionals in the industry. Proof of this
                        are the award-winning Televisa series “Por amar sin ley 2”, “Vino el amor”, “Pasión y Poder”, and “La doble
                        vida de Estela Carrillo”, to name just a few.
                    </motion.p>
                </div>
            </div>

            {/* TEAM SECTION */}
            <div className="team-section">
                <div className="container">
                    <motion.h3
                        className="team-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Team
                    </motion.h3>

                    <div className="team-grid">
                        {/* Member 1: Laura */}
                        <motion.div
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="team-img-wrapper">
                                <img src={lauraProfile} alt="Laura Somerville" />
                            </div>
                            <h4 className="member-name">Laura Somerville</h4>
                            <p className="member-role">Producer / Founder</p>
                        </motion.div>

                        {/* Member 2: Abraham */}
                        <motion.div
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="team-img-wrapper">
                                <img src={abrahamImg} alt="Abraham Reyes" />
                            </div>
                            <h4 className="member-name">Abraham Reyes</h4>
                            <p className="member-role">VFX supervisor / Cinematographer</p>
                        </motion.div>

                        {/* Member 3: Mich */}
                        <motion.div
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="team-img-wrapper">
                                <img src={michImg} alt="Mich Sanabia" />
                            </div>
                            <h4 className="member-name">Mich Sanabia</h4>
                            <p className="member-role">VFX supervisor / Filmmaker</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* SERVICES SECTION */}
            <div className="about-services-section">
                <div className="container">
                    <div className="services-header-row">
                        <motion.h3
                            className="services-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our services
                        </motion.h3>
                    </div>
                    <motion.p
                        className="services-description"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        From coast to coast, Trestle Media offers a wide range of<br />
                        production services, including online production,<br />
                        location scouting, location management, and filming<br />
                        permit processing. In addition, Trestle Media has grown<br />
                        and begun offering professional visual effects and color<br />
                        correction post-production services.
                    </motion.p>

                    <div className="services-carousel-wrapper" ref={scrollRef}>
                        <div className="services-grid">
                            {/* Service 1 */}
                            <motion.div
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="card-top-accent"></div>
                                <div className="service-img-wrapper">
                                    <img src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/D28A3C00-7310-40CA-AF7B-C917FA0FC4E6.jpeg" alt="Scouting" loading="lazy" />
                                </div>
                                <div className="service-content">
                                    <h4>Scouting and Locations</h4>
                                    <p>Process of finding and securing real-world settings for film, TV, and commercial projects.</p>
                                </div>
                            </motion.div>

                            {/* Service 2 */}
                            <motion.div
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="card-top-accent"></div>
                                <div className="service-img-wrapper">
                                    <img src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/49D4B5BB-7203-49C7-8192-B88D73A6537E_4_5005_c.jpeg" alt="Accomodations" loading="lazy" />
                                </div>
                                <div className="service-content">
                                    <h4>Film Crew Accomodations</h4>
                                    <p>We can arrange the best places for a great place to rest to the entire crew.</p>
                                </div>
                            </motion.div>

                            {/* Service 3 */}
                            <motion.div
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="card-top-accent"></div>
                                <div className="service-img-wrapper">
                                    <img src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/3E853575-CD96-43EF-9B40-6AF2F1DB9291_1_102_a.jpeg" alt="Production Services" loading="lazy" />
                                </div>
                                <div className="service-content">
                                    <h4>Production Services</h4>
                                    <p>Specialized services that provide comprehensive support in the realization of various productions.</p>
                                </div>
                            </motion.div>

                            {/* Service 4: Post Production (New) */}
                            <motion.div
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="card-top-accent"></div>
                                <div className="service-img-wrapper">
                                    <img src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/Italya2/IMG_4313%20copia.jpg" alt="Post Production" loading="lazy" />
                                </div>
                                <div className="service-content">
                                    <h4>Post Production Services</h4>
                                    <p>Assembly of filmed material, editing of sequences, incorporation of music, dubbing, and sound effects.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn prev" onClick={() => scroll('left')} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="carousel-btn next" onClick={() => scroll('right')} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;
