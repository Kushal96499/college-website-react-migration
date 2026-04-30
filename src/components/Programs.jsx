import React, { useState, useEffect } from 'react';
import programsData from '../data/programsData';
import { getAssetPath } from '../utils/paths';

const Programs = () => {
    const [activeDept, setActiveDept] = useState(Object.keys(programsData)[0]);
    const [activeLevel, setActiveLevel] = useState('ug');
    const [activeProgram, setActiveProgram] = useState(null);
    const [readMoreStates, setReadMoreStates] = useState({});

    useEffect(() => {
        const dept = programsData[activeDept];
        const programsAtLevel = dept.programs[activeLevel] || [];
        if (programsAtLevel.length > 0) {
            setActiveProgram(programsAtLevel[0].id);
        } else {
            const firstAvailableLevel = Object.keys(dept.programs).find(k => dept.programs[k].length > 0);
            if (firstAvailableLevel) {
                setActiveLevel(firstAvailableLevel);
                setActiveProgram(dept.programs[firstAvailableLevel][0].id);
            }
        }
    }, [activeDept]);

    useEffect(() => {
        const dept = programsData[activeDept];
        const programsAtLevel = dept.programs[activeLevel] || [];
        if (programsAtLevel.length > 0) {
            setActiveProgram(programsAtLevel[0].id);
        }
    }, [activeLevel]);

    const toggleReadMore = (programId) => {
        setReadMoreStates(prev => ({
            ...prev,
            [programId]: !prev[programId]
        }));
    };

    const getImagePath = (path) => {
        if (!path) return '';
        if (path.startsWith('http')) return path;
        return getAssetPath(`img/${path}`);
    };

    return (
        <section id="programs" className="py-5 bg-white">
            <div className="container">
                {/* Section Title */}
                <div className="mb-5 text-center">
                    <h2 className="display-5 fw-bold text-dark mb-2">Programs <span className="text-red">Offered</span></h2>
                    <div className="mx-auto" style={{ width: '80px', height: '4px', borderRadius: '2px', backgroundColor: 'var(--red)' }}></div>
                </div>

                {/* 1. Category Grid (Departments) */}
                <div className="row g-3 mb-5">
                    {Object.entries(programsData).map(([key, dept]) => (
                        <div className="col-6 col-md-4 col-lg-2" key={key}>
                            <button 
                                className={`btn w-100 h-100 py-3 px-2 fw-bold text-uppercase transition-all hover-lift ${activeDept === key ? 'bg-white text-red border border-red shadow-premium' : 'bg-red text-white shadow-sm'}`}
                                onClick={() => setActiveDept(key)}
                                style={{ fontSize: '10px', letterSpacing: '0.5px', minHeight: '60px', borderRadius: '20px', borderWidth: activeDept === key ? '2px' : '0' }}
                            >
                                {dept.name}
                            </button>
                        </div>
                    ))}
                </div>

                {/* 2. Level Tabs */}
                <div className="row g-0 mb-5 bg-light p-1 shadow-sm mx-auto" style={{ borderRadius: '30px', maxWidth: '800px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    {['ug', 'pg', 'diploma', 'integrated'].map(level => {
                        const hasPrograms = programsData[activeDept].programs[level] && programsData[activeDept].programs[level].length > 0;
                        if (!hasPrograms) return null;
                        return (
                            <div className="col" key={level}>
                                <button 
                                    className={`btn w-100 py-3 fw-bold text-uppercase border-0 transition-all ${activeLevel === level ? 'bg-red text-white shadow-md' : 'bg-transparent text-dark hover-lift-sm'}`}
                                    onClick={() => setActiveLevel(level)}
                                    style={{ fontSize: '13px', borderRadius: '28px', letterSpacing: '0.5px' }}
                                >
                                    {level === 'ug' ? 'Undergraduate' : level === 'pg' ? 'Postgraduate' : level}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* 3. Program Tiles */}
                <div className="row g-4 mb-5">
                    {(programsData[activeDept].programs[activeLevel] || []).map(program => (
                        <div className="col-12 col-md-4" key={program.id}>
                            <div 
                                className={`p-4 h-100 cursor-pointer transition-all hover-lift ${activeProgram === program.id ? 'bg-white border-red shadow-premium' : 'bg-white border text-dark shadow-sm'}`}
                                onClick={() => setActiveProgram(program.id)}
                                style={{ borderRadius: '24px', border: activeProgram === program.id ? '2px solid var(--red)' : '1px solid rgba(0,0,0,0.08)' }}
                            >
                                <h6 className="mb-0 fw-bold small" style={{ color: activeProgram === program.id ? 'var(--red)' : '#333' }}>{program.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. School Banner */}
                <div className="bg-red text-white text-center py-3 px-4 mb-5 shadow-premium mx-auto" style={{ borderRadius: '30px', maxWidth: '700px' }}>
                    <h5 className="mb-0 fw-bolder text-uppercase" style={{ letterSpacing: '1px' }}>School of {programsData[activeDept].name}</h5>
                </div>

                {/* 5. Detailed Program View */}
                {activeProgram && (
                    <div className="glass-card p-4 p-md-5 bg-white shadow-premium border-0 mb-4 tab-fade-in mx-auto" key={activeProgram} style={{ borderRadius: '30px' }}>
                        {(programsData[activeDept].programs[activeLevel] || []).map(program => {
                            if (activeProgram !== program.id) return null;
                            const isExpanded = readMoreStates[program.id];
                            return (
                                <div key={program.id}>
                                    <div className="row g-5 align-items-start text-start">
                                        {/* Image Collage */}
                                        <div className="col-lg-5">
                                            <div className="position-relative overflow-hidden shadow-premium" style={{ borderRadius: '24px' }}>
                                                <img 
                                                    src={getImagePath(program.image)} 
                                                    className="img-fluid w-100 object-fit-cover" 
                                                    style={{ minHeight: '380px' }}
                                                    alt={program.title}
                                                    onError={(e) => { e.target.src = 'img/Admission-in-Biyani.png'; }}
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Info Section */}
                                        <div className="col-lg-7">
                                            <h2 className="fw-bolder mb-3 text-dark display-6">{program.title}</h2>
                                            <p className="lead-sm text-secondary mb-4" style={{ textAlign: 'justify', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                                {isExpanded ? program.description : `${program.description.substring(0, 350)}...`}
                                            </p>
                                            <button className="btn btn-link text-red p-0 fw-bolder text-decoration-underline mb-4 border-0 shadow-none hover-lift-sm" onClick={() => toggleReadMore(program.id)}>
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>

                                            {/* Details Accordion */}
                                            <div className="accordion custom-accordion" id={`det-${program.id}`}>
                                                <div className="accordion-item mb-3 border-0 overflow-hidden shadow-sm hover-lift-sm" style={{ borderRadius: '20px' }}>
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button bg-light text-dark fw-bold px-4 py-3 border-0 shadow-none" style={{ borderRadius: '20px' }} type="button" data-bs-toggle="collapse" data-bs-target={`#elig-tab-${program.id}`}>
                                                            <i className="bi bi-info-circle-fill text-red me-3 fs-5"></i> Eligibility
                                                        </button>
                                                    </h2>
                                                    <div id={`elig-tab-${program.id}`} className="accordion-collapse collapse show" data-bs-parent={`#det-${program.id}`}>
                                                        <div className="accordion-body bg-white border-top p-4">
                                                            <ul className="mb-0 ps-3">
                                                                {program.eligibility.map((item, idx) => <li key={idx} className="mb-2 text-dark" style={{ fontWeight: '500' }}>{item}</li>)}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-0 border-0 overflow-hidden shadow-sm hover-lift-sm" style={{ borderRadius: '20px' }}>
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed bg-light text-dark fw-bold px-4 py-3 border-0 shadow-none" style={{ borderRadius: '20px' }} type="button" data-bs-toggle="collapse" data-bs-target={`#dur-tab-${program.id}`}>
                                                            <i className="bi bi-clock-fill text-red me-3 fs-5"></i> Duration
                                                        </button>
                                                    </h2>
                                                    <div id={`dur-tab-${program.id}`} className="accordion-collapse collapse" data-bs-parent={`#det-${program.id}`}>
                                                        <div className="accordion-body bg-white border-top p-4">
                                                            <p className="mb-0 fw-bolder text-dark fs-5">{program.duration}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Programs;
