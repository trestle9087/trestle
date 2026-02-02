import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GalleryPage.css';

// 1. Dynamic imports using Vite's glob import
// Main Gallery (jpg folder)
const mainGalleryModules = import.meta.glob('../assets/jpg/*.{jpg,jpeg,png}', { eager: true });
// Italy Gallery (Italiafinales folder) - including video formats
const italyGalleryModules = import.meta.glob('../assets/Italiafinales/*.{jpg,jpeg,png,mp4,mov}', { eager: true });
// Other Sides (FinalesGallery folder)
const otherSidesModules = import.meta.glob('../assets/FinalesGallery/*.{jpg,jpeg,png}', { eager: true });

// Helper to transform modules object to array of URLs
const getMediaItems = (modules) => {
    return Object.keys(modules).map((path) => {
        const url = modules[path].default;
        const isVideo = path.toLowerCase().endsWith('.mp4') || path.toLowerCase().endsWith('.mov');
        return {
            path,
            url,
            isVideo
        };
    });
};

const GalleryPage = () => {
    const mainItems = getMediaItems(mainGalleryModules);
    const italyItems = getMediaItems(italyGalleryModules);
    const otherSideItems = getMediaItems(otherSidesModules);

    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <main className="gallery-page">
            <div className="gallery-header-section">
                <h1>Our Gallery</h1>
                <p>From coast to coast and without borders,<br />Trestle Media dreams, reaches, and creates.</p>
            </div>

            {/* SECTION 1: MAIN GALLERY */}
            <section className="gallery-category">
                <div className="container">
                    <h2 className="cat-title">Main Gallery</h2>
                    <div className="gallery-grid">
                        {mainItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                className="gallery-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedMedia(item)}
                                layoutId={item.path}
                            >
                                <img src={item.url} alt="Gallery" loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: ITALY */}
            <section className="gallery-category">
                <div className="container">
                    <h2 className="cat-title">Italy</h2>
                    <div className="gallery-grid">
                        {italyItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                className="gallery-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedMedia(item)}
                                layoutId={item.path}
                            >
                                {item.isVideo ? (
                                    <video src={item.url} muted loop autoPlay playsInline className="grid-video" />
                                ) : (
                                    <img src={item.url} alt="Italy" loading="lazy" />
                                )}
                                {item.isVideo && <div className="play-icon">▶</div>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: OTHER SIDES */}
            <section className="gallery-category">
                <div className="container">
                    <h2 className="cat-title">Other Sides</h2>
                    <div className="gallery-grid">
                        {otherSideItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                className="gallery-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedMedia(item)}
                                layoutId={item.path}
                            >
                                <img src={item.url} alt="Other Sides" loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            layoutId={selectedMedia.path}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.isVideo ? (
                                <video
                                    src={selectedMedia.url}
                                    controls
                                    autoPlay
                                    className="lightbox-media"
                                />
                            ) : (
                                <img
                                    src={selectedMedia.url}
                                    alt="Full view"
                                    className="lightbox-media"
                                />
                            )}
                            <button className="close-btn" onClick={() => setSelectedMedia(null)}>×</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default GalleryPage;
