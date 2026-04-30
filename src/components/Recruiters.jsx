import React from 'react';
import { getAssetPath } from '../utils/paths';
import './Recruiters.css';

const Recruiters = () => {
    // Exact paths from User's Snippet
    const base2025 = "https://www.biyanicolleges.org/wp-content/uploads/2025/06/";
    const base2024 = "https://www.biyanicolleges.org/wp-content/uploads/2024/04/";

    const recruitersList = [
        { src: `${base2025}1.webp` }, { src: `${base2025}2.webp` }, { src: `${base2025}3-1.webp` },
        { src: `${base2025}4-1.webp` }, { src: `${base2025}5-1.webp` }, { src: `${base2025}5-2.webp` },
        { src: `${base2025}7-1.webp` }, { src: `${base2025}8-1.webp` }, { src: `${base2025}10.webp` },
        { src: `${base2025}project.png` }, { src: `${base2024}12.webp` }, { src: `${base2024}13.webp` },
        { src: `${base2025}14.webp` }, { src: `${base2024}15.webp` }, { src: `${base2024}16.webp` },
        { src: `${base2024}17.webp` }, { src: `${base2024}18.webp` }, { src: `${base2024}19.webp` },
        { src: `${base2024}20.webp` }, { src: `${base2024}21.webp` }, { src: `${base2024}22.webp` },
        { src: `${base2024}23.webp` }, { src: `${base2024}25.webp` }, { src: `${base2024}26.webp` },
        { src: `${base2024}27.webp` }, { src: `${base2024}28.webp` }, { src: `${base2024}29.webp` },
        { src: `${base2024}30.webp` }, { src: `${base2024}31.webp` }, 
        { src: `https://www.biyanicolleges.org/wp-content/uploads/2024/06/dell-1.jpg` }
    ];

    // Split for top and bottom rows
    const half = Math.ceil(recruitersList.length / 2);
    const row1 = recruitersList.slice(0, half);
    const row2 = recruitersList.slice(half);

    // Accreditation and Approval logo lists
    const accreditationsList = [
        { src: "img/logo/naac.webp" },
        { src: "img/logo/naac-footer.webp" },
        { src: "img/accreditation/1.webp" },
        { src: "img/accreditation/10.webp" },
        { src: "img/accreditation/19.webp" },
        { src: "img/accreditation/bm.png" },
        { src: "img/accreditation/stock-vector-education-department.jpg" },
        { src: "img/accreditation/Rnc.gif" }
    ];

    const approvalsList = [
        { src: "img/accreditation/University-of-Rajasthan.jfif" },
        { src: "img/accreditation/Rajasthan -University.png" },
        { src: "img/accreditation/Rajasthan_Technical_University.jpg" },
        { src: "img/accreditation/16.webp" },
        { src: "img/accreditation/Viswakrma.png" },
        { src: "img/accreditation/Jagadguru.png" },
        { src: "img/accreditation/Radhakrishnan.jfif" }
    ];

    const getImagePath = (path) => {
        return getAssetPath(path);
    };

    return (
        <section className="py-5 recruiters_section" id="recruiters" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fcf7f7 50%, #fdf4f5 100%)' }}>
            <div className="container pt-4">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold text-dark">Top <span className="text-red">Recruiters</span></h2>
                    <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'var(--red)', borderRadius: '2px', marginTop: '15px' }}></div>
                </div>
            </div>

            {/* Infinite Marquee Section - Recruiters */}
            <div className="container-fluid px-0 mb-5 pb-4 overflow-hidden">
                {/* Row 1: Scrolling Left */}
                <div className="marquee-container mb-4">
                    <div className="marquee-content marquee-left">
                        {row1.map((logo, index) => (
                            <div className="recruiter-marquee-card bg-white shadow-sm" key={`r1-a-${index}`} style={{ borderRadius: '16px' }}>
                                <img src={getImagePath(logo.src)} alt={`Recruiter ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className="marquee-content marquee-left" aria-hidden="true">
                        {row1.map((logo, index) => (
                            <div className="recruiter-marquee-card bg-white shadow-sm" key={`r1-b-${index}`} style={{ borderRadius: '16px' }}>
                                <img src={getImagePath(logo.src)} alt={`Recruiter ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scrolling Right */}
                <div className="marquee-container">
                    <div className="marquee-content marquee-right">
                        {row2.map((logo, index) => (
                            <div className="recruiter-marquee-card bg-white shadow-sm" key={`r2-a-${index}`} style={{ borderRadius: '16px' }}>
                                <img src={getImagePath(logo.src)} alt={`Recruiter ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className="marquee-content marquee-right" aria-hidden="true">
                        {row2.map((logo, index) => (
                            <div className="recruiter-marquee-card bg-white shadow-sm" key={`r2-b-${index}`} style={{ borderRadius: '16px' }}>
                                <img src={getImagePath(logo.src)} alt={`Recruiter ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accreditations & Approvals Section */}
            <div className="container-fluid py-5 mt-3">
                <div className="container py-2">
                    <div className="row g-5 justify-content-center">
                        
                        {/* Our Accreditations Box */}
                        <div className="col-lg-6">
                            <div className="bg-white p-4 p-md-5 h-100 overflow-hidden shadow-premium position-relative border-0" style={{ borderRadius: '30px' }}>
                                <h3 className="text-center h3 mb-4 text-dark fw-bold" style={{ letterSpacing: '0.5px' }}>Our <span className="text-red">Accreditations</span></h3>
                                
                                <div className="marquee-container" style={{ margin: '0 -48px' }}>
                                    <div className="marquee-content marquee-left" style={{ animationDuration: '30s', paddingLeft: '1rem', gap: '1rem' }}>
                                        {accreditationsList.map((logo, index) => (
                                            <div className="recruiter-marquee-card shadow-sm border-0" key={`acc-a-${index}`} style={{ minWidth: '160px', height: '110px', borderRadius: '16px', background: '#fafafa' }}>
                                                <img src={getImagePath(logo.src)} alt="Accreditation" loading="lazy" style={{ maxHeight: '75px', maxWidth: '130px' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="marquee-content marquee-left" aria-hidden="true" style={{ animationDuration: '30s', paddingLeft: '1rem', gap: '1rem' }}>
                                        {accreditationsList.map((logo, index) => (
                                            <div className="recruiter-marquee-card shadow-sm border-0" key={`acc-b-${index}`} style={{ minWidth: '160px', height: '110px', borderRadius: '16px', background: '#fafafa' }}>
                                                <img src={getImagePath(logo.src)} alt="Accreditation" loading="lazy" style={{ maxHeight: '75px', maxWidth: '130px' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Approvals & Ranking Box */}
                        <div className="col-lg-6">
                            <div className="bg-white p-4 p-md-5 h-100 overflow-hidden shadow-premium position-relative border-0" style={{ borderRadius: '30px' }}>
                                <h3 className="text-center h3 mb-4 text-dark fw-bold" style={{ letterSpacing: '0.5px' }}>Approvals <span className="text-red">& Ranking</span></h3>
                                
                                <div className="marquee-container" style={{ margin: '0 -48px' }}>
                                    <div className="marquee-content marquee-left" style={{ animationDuration: '28s', paddingLeft: '1rem', gap: '1rem' }}>
                                        {approvalsList.map((logo, index) => (
                                            <div className="recruiter-marquee-card shadow-sm border-0" key={`app-a-${index}`} style={{ minWidth: '160px', height: '110px', borderRadius: '16px', background: '#fafafa' }}>
                                                <img src={getImagePath(logo.src)} alt="Approval" loading="lazy" style={{ maxHeight: '75px', maxWidth: '130px' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="marquee-content marquee-left" aria-hidden="true" style={{ animationDuration: '28s', paddingLeft: '1rem', gap: '1rem' }}>
                                        {approvalsList.map((logo, index) => (
                                            <div className="recruiter-marquee-card shadow-sm border-0" key={`app-b-${index}`} style={{ minWidth: '160px', height: '110px', borderRadius: '16px', background: '#fafafa' }}>
                                                <img src={getImagePath(logo.src)} alt="Approval" loading="lazy" style={{ maxHeight: '75px', maxWidth: '130px' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Recruiters;
