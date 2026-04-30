import React from 'react';

const Navbar = ({ onEnquireClick }) => {
    return (
        <div className="container-fluid h_nav fixed-top glass-nav px-0 shadow-sm" style={{ transition: 'all 0.4s ease', zIndex: 1050 }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light py-2">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <img 
                            src="https://www.biyanicolleges.org/wp-content/uploads/2024/03/cropped-cropped-logo-1.png.webp" 
                            className="hero_logo_01" 
                            loading="lazy" 
                            alt="Biyani Logo" 
                            style={{ height: '48px', transition: 'all 0.3s ease' }}
                        />
                    </a>
                    
                    {/* Drawer Toggler for Mobile */}
                    <button 
                        className="navbar-toggler shadow-none" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#mobileDrawer" 
                        aria-controls="mobileDrawer"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse justify-content-end align-items-center d-none d-lg-flex">
                        <div className="navbar-nav gap-lg-4 px-lg-0">
                            <a href="#aboutus" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">About Us</a>
                            <a href="#programs" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">Programs</a>
                            <a href="#recruiters" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">Recruiters</a>
                            <a href="#campus-life" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">Campus Life</a>
                            <a href="#events" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">Events</a>
                            <a href="#faq" className="nav-item nav-link nav-link-modern text-uppercase fw-bold small ls-1">FAQ</a>
                        </div>
                        <div className="ms-4">
                            <button 
                                type="button" 
                                className="btn btn-modern px-4 py-2 text-white" 
                                style={{ 
                                    background: 'linear-gradient(135deg, var(--red) 0%, #681319 100%)',
                                    fontSize: '0.85rem',
                                    boxShadow: '0 4px 15px rgba(158, 27, 53, 0.3)'
                                }}
                                onClick={onEnquireClick}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Mobile Sidedrawer (Offcanvas) - Moved outside nav for better z-index handling */}
            <div 
                className="offcanvas offcanvas-end border-0 shadow-lg" 
                tabIndex="-1" 
                id="mobileDrawer" 
                aria-labelledby="mobileDrawerLabel"
            >
                <div className="offcanvas-header border-bottom py-4" style={{ background: '#fff' }}>
                    <img 
                        src="https://www.biyanicolleges.org/wp-content/uploads/2024/03/cropped-cropped-logo-1.png.webp" 
                        style={{ height: '40px' }} 
                        alt="Logo" 
                    />
                    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column p-0" style={{ background: '#fff', paddingBottom: '100px' }}>
                    <div className="p-4 d-flex flex-column gap-1">
                        <a href="#aboutus" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>ABOUT US</span>
                            <i className="bi bi-info-circle text-muted"></i>
                        </a>
                        <a href="#programs" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>PROGRAMS</span>
                            <i className="bi bi-mortarboard text-muted"></i>
                        </a>
                        <a href="#recruiters" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>RECRUITERS</span>
                            <i className="bi bi-briefcase text-muted"></i>
                        </a>
                        <a href="#campus-life" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>CAMPUS LIFE</span>
                            <i className="bi bi-building text-muted"></i>
                        </a>
                        <a href="#events" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>EVENTS</span>
                            <i className="bi bi-calendar-event text-muted"></i>
                        </a>
                        <a href="#faq" className="py-3 fw-bold text-decoration-none border-bottom d-flex align-items-center justify-content-between" data-bs-dismiss="offcanvas" style={{ color: '#1a1a1a', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                            <span>FAQ</span>
                            <i className="bi bi-question-circle text-muted"></i>
                        </a>
                        
                        <button 
                            className="btn btn-red w-100 mt-5 fw-bold py-3 shadow-lg" 
                            onClick={() => { onEnquireClick(); }}
                            data-bs-dismiss="offcanvas"
                            style={{ 
                                borderRadius: '50px', 
                                background: 'linear-gradient(135deg, var(--red) 0%, #681319 100%)', 
                                color: '#fff',
                                letterSpacing: '1px'
                            }}
                        >
                            APPLY FOR ADMISSION
                        </button>
                    </div>
                </div>
                <div className="mt-auto p-4 bg-light text-center border-top">
                    <p className="small text-secondary m-0 fw-bold">Biyani Group of Colleges</p>
                    <p className="small text-muted m-0" style={{ fontSize: '0.75rem' }}>Admissions 2026-27</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
