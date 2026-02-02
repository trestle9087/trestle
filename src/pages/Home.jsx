import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import GalleryCarousel from '../components/GalleryCarousel';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <SectionTwo />
            <SectionOne />
            <GalleryCarousel />
        </main>
    );
};

export default Home;
