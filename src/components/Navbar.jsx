import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Helper to handle scrolling to anchors
    const handleScroll = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="brand-section">
                    <Link to="/" className="brand-link">
                        <img
                            src="https://raw.githubusercontent.com/manu18ac-dot/Imagenes/refs/heads/main/Icon-Trestle-Degradado.png"
                            alt="Trestle Media"
                            className="brand-logo"
                        />
                        <span className="brand-text">Trestle Media</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About & Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)}>About & Services</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                            <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
