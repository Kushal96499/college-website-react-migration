import React from 'react';

const Stats = () => {
    const statsData = [
        { value: "21+", label: "Years Legacy", icon: "bi-bank" },
        { value: "12500+", label: "Global Alumni", icon: "bi-globe" },
        { value: "420+", label: "Expert Faculty", icon: "bi-person-workspace" },
        { value: "6725", label: "Students", icon: "bi-people" },
        { value: "700", label: "Hostel Seats", icon: "bi-building-check" },
        { value: "16", label: "Global Partners", icon: "bi-hand-thumbs-up" },
        { value: "4+", label: "Green Campuses", icon: "bi-tree" },
        { value: "20+", label: "Institutions", icon: "bi-mortarboard" },
        { value: "23+", label: "Girls' Courses", icon: "bi-gender-female" },
        { value: "18+", label: "Co-ed Courses", icon: "bi-people-fill" },
        { value: "17+", label: "Govt. Approvals", icon: "bi-shield-check" }
    ];

    const marqueeItems = [...statsData, ...statsData];

    return (
        <section className="stats-modern-section py-4" style={{ background: '#fcfcfc', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <div className="container-fluid">
                <div className="marquee-wrapper overflow-hidden">
                    <div className="marquee-inner d-flex align-items-center py-2">
                        {marqueeItems.map((stat, index) => (
                            <div className="stat-card-compact mx-3" key={index}>
                                <div className="card h-100 border-0 rounded-4 shadow-sm bg-white p-3 d-flex align-items-center flex-row" style={{ minWidth: '240px', border: '1px solid #f0f0f0 !important' }}>
                                    <div className="icon-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: 'rgba(158, 27, 53, 0.05)', borderRadius: '12px' }}>
                                        <i className={`bi ${stat.icon} text-red fs-5`}></i>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold mb-0 text-red" style={{ fontSize: '1.4rem' }}>{stat.value}</h4>
                                        <p className="text-secondary small fw-bold text-uppercase mb-0 opacity-75" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .marquee-wrapper {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
                .marquee-inner {
                    width: max-content;
                    animation: stats-scroll 40s linear infinite;
                }
                .marquee-inner:hover {
                    animation-play-state: paused;
                }
                .stat-card-compact .card {
                    transition: all 0.3s ease;
                    border: 1px solid #eee !important;
                }
                .stat-card-compact:hover .card {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.06) !important;
                    border-color: var(--red) !important;
                }
                @keyframes stats-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-240px * ${statsData.length} - 2rem * ${statsData.length})); }
                }
                @media (max-width: 768px) {
                    .stat-card-compact {
                        min-width: 220px;
                    }
                }
            `}} />
        </section>
    );
};

export default Stats;
