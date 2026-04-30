import React from 'react';
import { getAssetPath } from '../utils/paths';

const About = () => {
    return (
        <section id="aboutus" className="py-5 bg-white position-relative overflow-hidden">
            {/* Soft Background Accents */}
            <div 
                className="position-absolute" 
                style={{ 
                    top: '-15%', 
                    right: '-10%', 
                    width: '500px', 
                    height: '500px', 
                    background: 'radial-gradient(circle, rgba(158, 27, 53, 0.05) 0%, transparent 70%)', 
                    borderRadius: '50%', 
                    zIndex: 0
                }}
            ></div>

            <div className="container py-lg-5 position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 pe-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
                        <div className="about-content">
                            <div className="d-flex align-items-center mb-4">
                                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--red)', marginRight: '15px', borderRadius: '2px' }}></div>
                                <h6 className="text-red fw-bold text-uppercase mb-0 ls-2 small">Our Legacy & Vision</h6>
                            </div>
                            
                            <h2 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2', color: 'var(--dark)' }}>
                                About <span className="text-gradient">Biyani Group</span> <br/>
                                of Colleges, Jaipur
                            </h2>
                            
                            <div className="ps-0">
                                <p className="lead-sm text-secondary mb-4" style={{ textAlign: 'justify', lineHeight: '1.9', fontSize: '1.1rem' }}>
                                    Our journey began in February 2005 with the establishment of Biyani Girls College, affiliated with the University of Rajasthan. Driven by a mission to educate and empower through excellence, we have grown into one of Rajasthan's premier educational hubs.
                                </p>
                                <p className="text-muted mb-0" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                                    Over the past two decades, we have fostered strategic partnerships with leading global universities and industrial giants, creating a rich, dynamic learning ecosystem that prepares students for global challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="about-image-wrapper position-relative p-2">
                            {/* Decorative Frame Element */}
                            <div 
                                className="position-absolute" 
                                style={{ 
                                    top: '0', 
                                    right: '0', 
                                    width: '120px', 
                                    height: '120px', 
                                    borderTop: '5px solid var(--red)', 
                                    borderRight: '5px solid var(--red)',
                                    opacity: '0.1',
                                    zIndex: 0,
                                    borderRadius: '0 30px 0 0'
                                }}
                            ></div>
                            
                            <div className="about-image-card shadow-lg position-relative z-1 image-glow" style={{ borderRadius: '30px', overflow: 'hidden' }}>
                                <img 
                                    src={getAssetPath('img/WEBSITE.jpg')}
                                    className="img-fluid w-100" 
                                    alt="About Biyani Group" 
                                    style={{ 
                                        display: 'block', 
                                        objectFit: 'contain', 
                                        maxHeight: '550px',
                                        backgroundColor: '#f8f9fa' 
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
