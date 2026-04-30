import React, { useState } from 'react';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('general');

    const faqData = {
        general: [
            { q: "How old is the University?", a: "We are 38 years old University." },
            { q: "When do I need to submit the documents to support the data I have filled in the form?", a: "Documents need to be submitted during the time of confirmation of Admission." },
            { q: "Does the entire application need to be completed within one session?", a: "Yes." },
            { q: "Do I also need to submit a printed copy of the application form once I have submitted it online?", a: "No." },
            { q: "Which entrance exam is given more preference in the selection process?", a: "Depends on which course are you selecting." }
        ],
        admissions: [
            { q: "Where do I get a copy of the application form?", a: "Either you can visit the university admission office or you can submit the online form." },
            { q: "What documents Are Required Along with Application Form?", a: "All educational marksheets and marksheets of qualifying (entrance) exams are to be submitted along LC/TC, Nationality, GAP and MIGRATION (Where ever necessary). General list of original documents required is displayed on Website." },
            { q: "During online payment, the amount was deducted from my bank account but the transaction ID was not generated? What should I do?", a: "Submit the Copy of the Application form to the admissions office for verification." },
            { q: "Who should I contact if I have a question regarding the status of the application?", a: "You may contact the Admissions Office directly for any status updates." },
            { q: "Can I submit the form without the entrance exam score?", a: "Yes, you can enter the details of the Entrance Examination and leave the score blank if result is awaited." }
        ],
        programmes: [
            { q: "Do all the programs have the same course structure and pedagogy?", a: "The course structure, pedagogy, curriculum, infrastructure & facilities are the same across all the programs." },
            { q: "What are the college timings for the undergraduate programs?", a: "The timings depends on the programmes that you opt for." }
        ],
        career: [
            { q: "What is the placement statistics for the undergraduate programs?", a: "We provide 100% placement assistance to all our students. In 2019 placements, we placed 76% of our students in corporates." },
            { q: "Does The Biyani Group Of Colleges provide internship opportunities?", a: "Yes, for the undergraduate program, internship is compulsory and credit based." }
        ],
        fees: [
            { q: "How do I pay my application fees?", a: "If filled online, payment can be made by Debit Card. If filled offline, the payment has to be made in cash." },
            { q: "Is there any scholarship available?", a: "No." },
            { q: "Is it necessary to pay total Annual fees at a time of Admission?", a: "No. One can pay the fees semester wise. 50% of the annual fees at the time of admission." },
            { q: "What are the Fees payment options available after selection?", a: "One can pay the fees through DD/ Cheque/ RTGS/NEFT or any other alternative online mode." }
        ],
        campus: [
            { q: "Is hostel facility available?", a: "Yes, please find the Hostel information on the website." },
            { q: "Does the school have extracurricular activities for students?", a: "Yes, the school believes in holistic growth and gives equal importance to extra curriculum activities." },
            { q: "Is the campus Well Secured and Well Guarded?", a: "The complete campus is under CCTV surveillance and guarded by professional security personnel." }
        ]
    };

    const tabLabels = {
        general: "General",
        admissions: "Admissions",
        programmes: "Programmes & Learning",
        career: "Career Outcomes",
        fees: "Fees & Finances",
        campus: "Campus & Student Life"
    };

    return (
        <section className="faq-section py-5 bg-white" id="faq">
            <div className="container py-4">
                <div className="text-center mb-5">
                    <h2 className="display-6 fw-bold text-dark mb-2">Frequently Asked <span className="text-red">Questions</span></h2>
                    <div className="mx-auto mt-2 mb-4" style={{ width: '60px', height: '4px', background: 'var(--red)', borderRadius: '2px' }}></div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        {/* Premium Tabs - All Visible (Wrapped) */}
                        <div className="faq-tab-container mb-5 text-center">
                            <ul className="nav nav-pills justify-content-center d-flex flex-wrap" style={{ gap: '10px' }}>
                                {Object.keys(faqData).map(tab => (
                                    <li className="nav-item" key={tab}>
                                        <button 
                                            className={`nav-link text-nowrap px-4 py-2 rounded-pill fw-bold small ls-1 transition-all ${activeTab === tab ? 'active-premium' : 'inactive-premium text-dark'}`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tabLabels[tab].toUpperCase()}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Modern Accordion */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="accordion accordion-flush premium-accordion" id="faqAccordion">
                                    {faqData[activeTab].map((item, idx) => (
                                        <div className="accordion-item mb-4 rounded-4 shadow-sm border-0 transition-all hover-lift-faq" key={`${activeTab}-${idx}`} style={{ background: '#fff', borderLeft: '5px solid transparent' }}>
                                            <h2 className="accordion-header">
                                                <button 
                                                    className={`accordion-button fw-bold py-4 px-4 rounded-4 ${idx === 0 ? '' : 'collapsed'}`} 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target={`#faq-collapse-${activeTab}-${idx}`}
                                                    style={{ fontSize: '1.15rem', background: 'transparent' }}
                                                >
                                                    {item.q}
                                                </button>
                                            </h2>
                                            <div id={`faq-collapse-${activeTab}-${idx}`} className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                                                <div className="accordion-body px-4 pb-4 pt-0 text-secondary" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                                                    <div className="ps-3 border-start border-2 border-light">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .faq-tab-scroll-container::-webkit-scrollbar {
                    height: 4px;
                }
                .faq-tab-scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(158, 27, 53, 0.1);
                    border-radius: 10px;
                }
                .active-premium {
                    background: linear-gradient(135deg, var(--red) 0%, #681319 100%) !important;
                    color: white !important;
                    box-shadow: 0 8px 20px rgba(158, 27, 53, 0.25) !important;
                }
                .inactive-premium {
                    background: #f8f9fa !important;
                    border-color: #eee !important;
                }
                .inactive-premium:hover {
                    background: #f1f1f1 !important;
                    transform: translateY(-1px);
                }
                .premium-accordion .accordion-item {
                    border: 1px solid #f0f0f0 !important;
                }
                .premium-accordion .accordion-item:has(.accordion-button:not(.collapsed)) {
                    border-left: 5px solid var(--red) !important;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
                }
                .premium-accordion .accordion-button:not(.collapsed) {
                    background-color: transparent !important;
                    color: var(--red) !important;
                    box-shadow: none !important;
                }
                .premium-accordion .accordion-button:focus {
                    box-shadow: none !important;
                }
                .hover-lift-faq:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
                    border-color: rgba(158, 27, 53, 0.2) !important;
                }
                .transition-all {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}} />
        </section>
    );
};

export default FAQ;
