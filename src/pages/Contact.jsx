import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const contactBg = "https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/49D4B5BB-7203-49C7-8192-B88D73A6537E_4_5005_c.jpeg";

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xpqlkkvq", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <main className="contact-page">
            <div className="contact-hero">
                <img src={contactBg} alt="Contact Trestle Media" className="contact-bg-img" />
                <div className="contact-overlay"></div>

                <div className="container contact-content">
                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="contact-title">Get in Touch</h1>
                        <p className="contact-subtitle">
                            Ready to start your next production? We'd love to hear from you.
                        </p>

                        {status === 'success' ? (
                            <div className="success-message">
                                <h3>Thank you!</h3>
                                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                                <button onClick={() => setStatus('idle')} className="reset-btn">Send another message</button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required disabled={status === 'submitting'} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" required disabled={status === 'submitting'} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Tell us about your project" required disabled={status === 'submitting'}></textarea>
                                </div>

                                <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'error' && <p className="error-msg">Oops! There was a problem submitting your form.</p>}
                            </form>
                        )}

                        <div className="additional-info">
                            <div className="info-item">
                                <span className="label">Location</span>
                                <span className="value">Boston, Massachusetts</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Phone</span>
                                <span className="value">+1 (617) 461-8983</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Email</span>
                                <a href="mailto:laura@trestle-media.com" className="value link">laura@trestle-media.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
