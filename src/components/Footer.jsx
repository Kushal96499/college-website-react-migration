import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                {/* Copyright Start */}
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="d-flex justify-content-center align-items-center py-3">
                                    <img
                                        src="https://biyaniiti.com/blschool/wp-content/uploads/2026/03/BIYANI-LOGO-1-1.png"
                                        className="hero_logo_01"
                                        loading="lazy"
                                        alt="Biyani Logo Footer"
                                    />
                                    <div className="footerImgDivider"></div>
                                </div>
                                 <div className="footerDivider"></div>
                                
                                <div className="social-links d-flex justify-content-center gap-3 mb-4 mt-2">
                                    <a href="https://www.facebook.com/BiyaniGroupofCollege/" target="_blank" rel="noreferrer" className="social-icon facebook">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/biyani-group-of-colleges-jaipur/posts/?feedView=all" target="_blank" rel="noreferrer" className="social-icon linkedin">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCvSr4X6hHtX2C5OfZ7jLfYA" target="_blank" rel="noreferrer" className="social-icon youtube">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                    <a href="https://www.instagram.com/biyanigroupofcollegesofficial/" target="_blank" rel="noreferrer" className="social-icon instagram">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>

                                <span className="text-light opacity-75 small">
                                    © 2025 Biyani Group Of Colleges. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
