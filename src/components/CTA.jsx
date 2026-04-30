import React from 'react';

const CTA = ({ onEnquireClick }) => {
    return (
        <section className="dycta-cta-section bg-red py-5">
            <div className="container text-center">
                <h1 className="dycta-title">
                    Get the <span className="text-red fw-600">Biyani Group Of Colleges</span>
                    <br />
                    Advantage Today!
                </h1>

                <div className="dycta-cta-buttons mt-4">
                    <button 
                        type="button" 
                        className="npfWidgetButton npfWidget-fcdd1d9b6d2eac85e4fd390d13d3894f dycta-btn mx-2"
                        onClick={onEnquireClick}
                    >
                        Apply Now <span>→</span>
                    </button>
                    <a 
                        href="tel:+918290636942" 
                        className="npfWidgetButton dycta-btn mx-2 text-white text-decoration-none d-inline-flex align-items-center justify-content-center"
                    >
                        Schedule a Call <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
