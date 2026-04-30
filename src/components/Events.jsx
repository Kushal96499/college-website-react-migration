import React from 'react';

const Events = () => {
    const eventItems = [
        {
            title: "Red Hat Linux Training Workshop",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/03/Linux_training_2-2048x1365.jpg",
            date: "12 MAR 2026",
            description: "Advanced hands-on session on Linux administration and security."
        },
        {
            title: "Data Science & AI Hands-on Workshop",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/04/Data_science_workshop.webp",
            date: "18 APR 2026",
            description: "Exploring machine learning models and big data analytics."
        },
        {
            title: "IBM SkillsBuild: IT Excellence Training",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/02/seminar-workshop-7.jpg",
            date: "25 SEPT 2026",
            description: "Industry-certified training for future-ready IT professionals."
        },
        {
            title: "Financial Markets & Investment Seminar",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/02/seminar-workshop-7.jpg",
            date: "05 NOV 2026",
            description: "Understanding stock markets and wealth management strategies."
        },
        {
            title: "Annual Cultural Fest: OORJA 2026",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/03/Linux_training_2-2048x1365.jpg",
            date: "20 DEC 2026",
            description: "A grand celebration of talent, art, and cultural diversity."
        },
        {
            title: "Global Education Summit",
            img: "https://www.biyanicolleges.org/wp-content/uploads/2026/04/Data_science_workshop.webp",
            date: "15 JAN 2027",
            description: "International leaders discussing the future of higher education."
        }
    ];

    return (
        <section className="events-premium-section py-5 bg-white" id="events">
            <div className="container py-4 position-relative">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-5 fw-bold text-dark mb-2">Events <span className="text-red">& News</span></h2>
                        <div className="mx-auto mt-2" style={{ width: '80px', height: '4px', background: 'var(--red)', borderRadius: '2px' }}></div>
                        <p className="mt-3 text-secondary fw-semibold text-uppercase small ls-2">CAMPUS HIGHLIGHTS & ACADEMIC DISCOVERY</p>
                    </div>
                </div>

                {/* Desktop Carousel (3 Items) */}
                <div id="eventsCarouselDesktop" className="carousel slide d-none d-md-block" data-bs-ride="false">
                    <div className="carousel-inner pt-2 pb-4">
                        <div className="carousel-item active">
                            <div className="row g-4">
                                {eventItems.slice(0, 3).map((item, idx) => (
                                    <div className="col-4" key={idx}>
                                        <div className="card h-100 border rounded-5 overflow-hidden transition-all hover-raised-event" style={{ borderColor: '#efefef' }}>
                                            <div className="position-relative overflow-hidden">
                                                <img src={item.img} className="card-img-top event-img-zoom" style={{ height: '280px', objectFit: 'cover' }} alt={item.title} />
                                                <div className="position-absolute top-0 end-0 m-3 bg-red text-white px-3 py-1 rounded-pill extra-small fw-bold shadow-sm">
                                                    {item.date}
                                                </div>
                                            </div>
                                            <div className="card-body p-4 bg-white">
                                                <h6 className="card-title fw-bold text-dark mb-2" style={{ lineHeight: '1.4', fontSize: '1.1rem' }}>{item.title}</h6>
                                                <p className="text-secondary small mb-0">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row g-4">
                                {eventItems.slice(3, 6).map((item, idx) => (
                                    <div className="col-4" key={idx}>
                                        <div className="card h-100 border rounded-5 overflow-hidden transition-all hover-raised-event" style={{ borderColor: '#efefef' }}>
                                            <div className="position-relative overflow-hidden">
                                                <img src={item.img} className="card-img-top event-img-zoom" style={{ height: '280px', objectFit: 'cover' }} alt={item.title} />
                                                <div className="position-absolute top-0 end-0 m-3 bg-red text-white px-3 py-1 rounded-pill extra-small fw-bold shadow-sm">
                                                    {item.date}
                                                </div>
                                            </div>
                                            <div className="card-body p-4 bg-white">
                                                <h6 className="card-title fw-bold text-dark mb-2" style={{ lineHeight: '1.4', fontSize: '1.1rem' }}>{item.title}</h6>
                                                <p className="text-secondary small mb-0">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highly Visible Desktop Controls */}
                    <button className="carousel-nav-btn prev shadow-lg" type="button" data-bs-target="#eventsCarouselDesktop" data-bs-slide="prev">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="carousel-nav-btn next shadow-lg" type="button" data-bs-target="#eventsCarouselDesktop" data-bs-slide="next">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>

                {/* Mobile Carousel (1 Item) */}
                <div id="eventsCarouselMobile" className="carousel slide d-md-none" data-bs-ride="false">
                    <div className="carousel-inner">
                        {eventItems.map((item, idx) => (
                            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                                <div className="card border rounded-5 overflow-hidden mx-2 mb-4 shadow-sm" style={{ borderColor: '#eee' }}>
                                    <img src={item.img} className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt={item.title} />
                                    <div className="card-body p-4 bg-white">
                                        <div className="text-red fw-bold small mb-2">{item.date}</div>
                                        <h6 className="card-title fw-bold text-dark mb-0">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-red-premium rounded-circle me-3" type="button" data-bs-target="#eventsCarouselMobile" data-bs-slide="prev">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="btn btn-red-premium rounded-circle" type="button" data-bs-target="#eventsCarouselMobile" data-bs-slide="next">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .carousel-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 60px;
                    height: 60px;
                    background: var(--red) !important;
                    color: white !important;
                    border-radius: 50%;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    z-index: 10;
                }
                .carousel-nav-btn.prev { left: -30px; }
                .carousel-nav-btn.next { right: -30px; }
                
                .carousel-nav-btn:hover {
                    transform: translateY(-50%) scale(1.15);
                    background: #3d0303 !important;
                    box-shadow: 0 15px 30px rgba(158, 27, 53, 0.4) !important;
                }
                
                .btn-red-premium {
                    background: var(--red);
                    color: white;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .hover-raised-event {
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                
                .hover-raised-event:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
                    border-color: rgba(158, 27, 53, 0.2) !important;
                }
                
                .event-img-zoom {
                    transition: transform 0.6s ease;
                }
                .hover-raised-event:hover .event-img-zoom {
                    transform: scale(1.05);
                }
                
                .extra-small {
                    font-size: 0.7rem;
                }
                
                @media (max-width: 1400px) {
                    .carousel-nav-btn.prev { left: -10px; }
                    .carousel-nav-btn.next { right: -10px; }
                }
            `}} />
        </section>
    );
};

export default Events;
