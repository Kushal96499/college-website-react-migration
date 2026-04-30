import React from 'react';

const Location = () => {
    return (
        <section className="py-5 bg-white" id="location">
            <div className="container py-4">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-5 fw-bold text-dark mb-2">Our <span className="text-red">Location</span></h2>
                        <div className="mx-auto" style={{ width: '60px', height: '4px', borderRadius: '2px', backgroundColor: 'var(--red)' }}></div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="map-container shadow-premium rounded-4 overflow-hidden border border-light" style={{ height: '500px' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0620955941913!2d75.77649991502444!3d26.95662176418858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b6a20faecb%3A0x62cb579ae2c49d0c!2sBiyani%20Group%20Of%20Colleges!5e0!3m2!1sen!2sin!4v1713854100000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, display: 'block' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Biyani Group of Colleges Campus Location"
                            ></iframe>
                        </div>
                        <div className="text-center mt-4">
                            <a 
                                href="https://www.google.com/maps/dir//Biyani+Group+Of+Colleges,+Mall+Rd,+Sector-3,+Vidyadhar+Nagar,+Jaipur,+Rajasthan+302039/@26.9566218,75.7764999,17z" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn btn-modern px-5 py-3 text-white" 
                                style={{ background: 'var(--red)' }}
                            >
                                <i className="bi bi-geo-alt-fill me-2"></i> Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
