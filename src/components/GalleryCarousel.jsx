import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import './GalleryCarousel.css';

const GalleryCarousel = () => {
    const [images, setImages] = useState([]);
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    const x = useMotionValue(0);

    useEffect(() => {
        // Dynamically import all images from the jpg folder
        const modules = import.meta.glob('../assets/jpg/*.{jpg,jpeg,png}');

        const loadImages = async () => {
            const loadedImages = await Promise.all(
                Object.keys(modules).map(async (key) => {
                    const module = await modules[key]();
                    return module.default;
                })
            );
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            // Recalculate width logic
            // inner width - carousel (viewport) width
            const scrollWidth = carouselRef.current.scrollWidth;
            const offsetWidth = carouselRef.current.offsetWidth;
            setWidth(scrollWidth - offsetWidth);
        }
    }, [images]);

    const slide = (direction) => {
        const currentX = x.get();
        const moveAmount = 400; // Approx scroll amount
        let newX;

        if (direction === 'left') {
            newX = currentX + moveAmount;
        } else {
            newX = currentX - moveAmount;
        }

        // Clamp values
        // max right is 0 (start)
        // max left is -width (end)
        if (newX > 0) newX = 0;
        if (newX < -width) newX = -width;

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    return (
        <section className="section gallery-section" id="gallery">
            <div className="container" style={{ overflow: 'visible' }}> {/* Visible overflow for buttons if needed, or keep hidden container */}
                <div className="gallery-header">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="gallery-title"
                    >
                        + Gallery
                    </motion.h2>
                </div>

                <div className="carousel-wrapper">
                    <button className="nav-btn prev-btn" onClick={() => slide('left')} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <motion.div
                        ref={carouselRef}
                        className="carousel"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="inner-carousel"
                            style={{ x }} // Bind motion value
                        >
                            {images.map((image, index) => (
                                <motion.div className="item" key={index}>
                                    <img src={image} alt={`Gallery ${index}`} loading="lazy" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <button className="nav-btn next-btn" onClick={() => slide('right')} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
