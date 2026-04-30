import React from 'react';
import { getAssetPath } from '../utils/paths';
import './Infrastructure.css';

const Infrastructure = () => {
    const infraItems = [
        { title: "Prayer", img: "img/infra/PREYER.JPG", class: "infra-card-lg" },
        { title: "GYM", img: "img/infra/GYM.JPG", class: "" },
        { title: "Garden", img: "img/infra/GARDEN.JPG", class: "" },
        { title: "Transport", img: "img/infra/TRASPORT.JPG", class: "" },
        { title: "Yoga", img: "img/infra/YOGA.JPG", class: "" },
        { title: "Cafeteria", img: "img/infra/CANTEENT.JPG", class: "" }
    ];

    return (
        <section className="campus-section pt-5 pb-5" id="infrastructure">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark mb-2">Our <span className="text-red">Infrastructure</span></h2>
                    <div className="mx-auto" style={{ width: '80px', height: '4px', borderRadius: '2px', backgroundColor: 'var(--red)' }}></div>
                    <p className="mt-3 text-secondary fw-medium" style={{ letterSpacing: '1px' }}>EXPLORE OUR WORLD-CLASS CAMPUS FACILITIES</p>
                </div>

                {/* DESKTOP GRID - Premium Mosaic */}
                <div className="row g-4 d-none d-lg-flex">
                    <div className="col-lg-6">
                        <div className={`infra-card-enhancement infra-card-lg mb-4`}>
                            <img src={getAssetPath(infraItems[0].img)} className="infra-img-bg" alt={infraItems[0].title} />
                            <div className="infra-content">
                                <h5>{infraItems[0].title}</h5>
                            </div>
                        </div>
                        <div className={`infra-card-enhancement`}>
                            <img src={getAssetPath(infraItems[1].img)} className="infra-img-bg" alt={infraItems[1].title} />
                            <div className="infra-content">
                                <h5>{infraItems[1].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className={`infra-card-enhancement`} style={{ minHeight: '280px' }}>
                                    <img src={getAssetPath(infraItems[2].img)} className="infra-img-bg" alt={infraItems[2].title} />
                                    <div className="infra-content">
                                        <h5>{infraItems[2].title}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={`infra-card-enhancement`} style={{ minHeight: '280px' }}>
                                    <img src={getAssetPath(infraItems[3].img)} className="infra-img-bg" alt={infraItems[3].title} />
                                    <div className="infra-content">
                                        <h5>{infraItems[3].title}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`infra-card-enhancement`} style={{ minHeight: '284px' }}>
                                    <img src={getAssetPath(infraItems[4].img)} className="infra-img-bg" alt={infraItems[4].title} />
                                    <div className="infra-content">
                                        <h5>{infraItems[4].title}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`infra-card-enhancement`} style={{ minHeight: '284px' }}>
                                    <img src={getAssetPath(infraItems[5].img)} className="infra-img-bg" alt={infraItems[5].title} />
                                    <div className="infra-content">
                                        <h5>{infraItems[5].title}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE LIST - Premium Vertical */}
                <div className="row d-lg-none px-3">
                    {infraItems.map((item, idx) => (
                        <div className="col-12 mb-4" key={idx}>
                            <div className="infra-card position-relative shadow-premium">
                                <img src={getAssetPath(item.img)} className="w-100 infra-img" alt={item.title} />
                                <div className="infra-overlay"></div>
                                <h5 className="infra-title">{item.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
