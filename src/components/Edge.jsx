import React from 'react';
import { getAssetPath } from '../utils/paths';
import './Edge.css';

const Edge = () => {
    const edgeFeatures = [
        { img: "img/edge/2.webp", title: "Global Opportunities" },
        { img: "img/edge/Value_Education.png", title: "Value Education" },
        { img: "img/edge/cartificate.png", title: "Certification Courses" },
        { img: "img/edge/Ai.webp", title: "AI & Startup Training" }
    ];

    const splitTitle = (title) => {
        const words = title.split(' ');
        if (words.length <= 1) return title;
        if(title === "AI & Startup Training") return <><span className="d-block">AI & Startup</span><span className="d-block">Training</span></>;
        return <><span className="d-block">{words[0]}</span><span className="d-block">{words.slice(1).join(' ')}</span></>;
    };

    return (
        <section className="edge-section" id="biyani-edge">
            <div className="edge-bg-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 col-xl-5">
                            <div className="edge-content-box p-4 p-md-0">
                                <div className="mb-4">
                                    <h2 className="display-5 fw-bolder text-dark mb-2">
                                        THE BIYANI EDGE
                                    </h2>
                                    <div className="title-underline"></div>
                                </div>
                                
                                <h5 className="sub-title mb-4">
                                    "Empowering education with values, vision, and purpose."
                                </h5>
                                
                                <p className="desc-text mb-3">
                                    Built on 21 years of trust and legacy, one of Biyani’s key strengths is its safe and supportive environment, where students feel confident to grow and express themselves. We maintain a strong balance between academics and extracurricular activities by focusing on quality education, practical learning, skill development, cultural engagement, and career opportunities preparing students to build successful and meaningful futures.
                                </p>
                                
                                <p className="desc-text mb-5">
                                    We also emphasize value-based education, helping students develop strong character and ethical values. 
                                    Our campuses are equipped with modern infrastructure, well-designed classrooms, advanced labs, libraries, and vibrant learning spaces that enhance the overall academic experience.
                                </p>

                                <div className="row g-3">
                                    {edgeFeatures.map((feat, idx) => (
                                        <div className="col-6" key={idx}>
                                            <div className="edge-feature-card">
                                                <div className="icon-wrapper">
                                                    <img src={getAssetPath(feat.img)} loading="lazy" alt={feat.title} />
                                                </div>
                                                <p className="m-0 fw-bold">{splitTitle(feat.title)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Edge;
