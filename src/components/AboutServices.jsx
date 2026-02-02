import React from 'react';
import { motion } from 'framer-motion';
import './AboutServices.css';
import abrahamImg from '../assets/abraham.jpg';
import michImg from '../assets/mich.jpg';

const teamImg = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/AboutPrincipal.jpg";
const lauraProfile = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/FOTO_LAU2_.jpg";

const AboutServices = () => {
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
                    <motion.h3
                        className="services-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our services
                    </motion.h3>
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

                    <div className="services-grid">
                        {/* Service 1 */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
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

                        {/* Service 2 - Using park image placeholder or existing if not precise match, user img link was SectionOne img2. In image user showed "Film Crew Accomodations" on card 2. I will use img2 from SectionOne for now as placeholder for accommodations or production. Wait, img2 from SectionOne is '0B88...'. User image 'uploaded_media...' shows card 2 is "Film Crew Accomodations". I'll use SectionOne's img2 or a placeholder. I will use img2 for now. */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-top-accent"></div>
                            <div className="service-img-wrapper">
                                <img src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/0B88CCDB-2C82-4D54-9D14-89DD844D6519_1_105_c.jpeg" alt="Accomodations" loading="lazy" />
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
                            whileHover={{ y: -10 }}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;
