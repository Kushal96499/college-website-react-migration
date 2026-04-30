import React, { useState } from 'react';
import { getAssetPath } from '../utils/paths';

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Oorja (Orientation)",
      title: "Oorja (Orientation Programme)",
      desc: "Coldplay’s Music of the Spheres Tour Enchants Fans",
      images: ["img/Oorja/COLLAGE-1.jpg", "img/Oorja/COLLAGE-2.jpg", "img/Oorja/COLLAGE-2A.jpg"],
      isSlider: true
    },
    {
      label: "Global Exchange",
      title: "Global Exchange Programme",
      desc: "Top international women cricketers",
      images: ["img/Exchange/1ST.jpg"],
      isSlider: false
    },
    {
      label: "BICON Conference",
      title: "BICON (International Conference)",
      desc: "14 March 2025",
      images: ["img/Bicon/COLLAGE-2.jpg", "img/Bicon/COLLAGE-3.jpg"],
      isSlider: true
    },
    {
      label: "Navyayan (Dandiya)",
      title: "Navyayan (Dandiya Nights)",
      desc: "Grand Symphony Orchestra",
      images: ["img/Navyayan/1ST.jpg", "img/Navyayan/2ND.jpg", "img/Navyayan/3RD.jpg"],
      isSlider: true
    },
    {
      label: "Rajjay (Youth Fest)",
      title: "Rajjay (Inter College Youth Fest)",
      desc: "A. R. Rahman brings his magic",
      images: ["img/Rajjay/COLLAGE-1.jpg"],
      isSlider: false
    },
    {
      label: "Tarang (Sports)",
      title: "Tarang (Sports Meet)",
      desc: "Annual Inter-College Sports Event",
      images: ["img/Tarang/COLLAGE-1.jpg", "img/Tarang/COLLAGE-2.jpg"],
      isSlider: true
    },
    {
      label: "Swad Utsav",
      title: "Swad Utsav (Food Carnival)",
      desc: "Culinary excellence on campus",
      images: ["img/Swad/COLLAGE-1.jpg"],
      isSlider: false
    },
    {
      label: "Santa Run",
      title: "Santa Run (Marathon)",
      desc: "Spreading warmth and cheer",
      images: ["img/Santa/COLLAGE-1.jpg"],
      isSlider: false
    },
    {
      label: "Workshops",
      title: "Workshops and Seminars",
      desc: "Upskilling and continuous learning",
      images: ["img/Workshops/1ST.jpg", "img/Workshops/2ND.jpg", "img/Workshops/3RD.jpg", "img/Workshops/4TH.jpg"],
      isSlider: true
    },
    {
      label: "Industrial Visits",
      title: "Industrial Visits",
      desc: "Bridging the industry-academia gap",
      images: ["img/Industrial/2ND.jpg", "img/Industrial/3RD.jpg", "img/Industrial/4TH.jpg"],
      isSlider: true
    }
  ];

  return (
    <section className="expanding-tabs py-5 bg-white" id="campus-life">
      <div className="container-fluid px-lg-5 py-2 position-relative z-1">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold text-dark mb-2">
              Life at <span className="text-red">Biyani Group Of Colleges</span>
            </h2>
            <div className="mx-auto" style={{ width: '80px', height: '4px', borderRadius: '2px', backgroundColor: 'var(--red)' }}></div>
            <p className="text-secondary mt-3 fw-medium text-uppercase ls-1 small">EXPLORE OUR VIBRANT CAMPUS CULTURE</p>
          </div>
        </div>
        
        <div className="tabs-container mx-auto" style={{ maxWidth: '1450px' }}>
          {tabs.map((tab, index) => (
            <div 
              key={index} 
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="tab-label">
                <span className="plus-icon"><i className="bi bi-patch-plus-fill"></i></span>
                <p className="fw-bold m-0" style={{ letterSpacing: '1px' }}>{tab.label.toUpperCase()}</p>
              </div>

              <div className="tab-panel">
                {tab.isSlider ? (
                  <div id={`carousel-${index}`} className="carousel slide carousel-fade h-100" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                      {tab.images.map((img, i) => (
                        <div className={`carousel-item h-100 ${i === 0 ? 'active' : ''}`} key={i}>
                          <img src={getAssetPath(img)} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt={tab.title} />
                        </div>
                      ))}
                    </div>
                    {tab.images.length > 1 && (
                      <>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev" style={{ width: '10%', zIndex: 10 }}>
                          <span className="d-flex align-items-center justify-content-center bg-white shadow-lg rounded-circle" style={{ width: '45px', height: '45px', opacity: '0.9', transition: 'all 0.3s ease' }}>
                            <i className="bi bi-chevron-left text-dark fs-5"></i>
                          </span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next" style={{ width: '10%', zIndex: 10 }}>
                          <span className="d-flex align-items-center justify-content-center bg-white shadow-lg rounded-circle" style={{ width: '45px', height: '45px', opacity: '0.9', transition: 'all 0.3s ease' }}>
                            <i className="bi bi-chevron-right text-dark fs-5"></i>
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <img src={getAssetPath(tab.images[0])} className="w-100 h-100" style={{ objectFit: 'cover' }} alt={tab.title} />
                )}

                <div className="tab-text">
                  <div className="content-wrapper">
                    <h2 className="display-6 fw-bold mb-2 text-white">{tab.title}</h2>
                    <div className="line"></div>
                    {tab.desc && <p className="lead m-0 text-white-50 fw-medium small">{tab.desc}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .expanding-tabs .tabs-container {
          display: flex;
          height: 65vh;
          min-height: 500px;
          max-height: 750px;
          gap: 15px;
          align-items: stretch;
          padding: 10px 0;
        }

        .expanding-tabs .tab {
          display: flex;
          transition: all 0.6s cubic-bezier(0.2, 1, 0.2, 1);
          width: 70px;
          min-width: 70px;
          cursor: pointer;
          background: linear-gradient(180deg, #9e1b35 0%, #7d1027 100%);
          border-radius: 20px;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(158, 27, 53, 0.1);
        }

        .expanding-tabs .tab:hover {
          background: linear-gradient(180deg, #b31e3d 0%, #9e1b35 100%);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(158, 27, 53, 0.2);
        }

        .expanding-tabs .tab.active {
          flex: 1;
          width: auto;
          background: transparent;
          border-radius: 30px;
          box-shadow: none;
          transform: none;
        }

        .expanding-tabs .tab-label {
          width: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 35px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          flex-shrink: 0;
          transition: opacity 0.3s ease;
          color: #fff;
        }

        .expanding-tabs .tab-label p {
          font-size: 0.85rem;
          white-space: nowrap;
          font-weight: 700;
        }

        .expanding-tabs .plus-icon {
          font-size: 1.4rem;
          margin-bottom: 20px;
          transform: rotate(180deg);
          color: #fff;
        }

        .expanding-tabs .tab.active .tab-label {
          display: none;
          opacity: 0;
        }

        .expanding-tabs .tab-panel {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.5s ease;
          transition-delay: 0.2s;
          border-radius: 30px;
          overflow: hidden;
        }

        .expanding-tabs .tab.active .tab-panel {
          opacity: 1;
          visibility: visible;
          position: relative;
        }

        .expanding-tabs .tab-text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px 35px 35px;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0) 100%
          );
          z-index: 5;
          pointer-events: none;
        }

        .expanding-tabs .tab-text .line {
          width: 60px;
          height: 4px;
          background: #9e1b35;
          margin: 15px 0;
          border-radius: 2px;
        }

        @media(max-width: 991px) {
          .expanding-tabs .tabs-container {
            flex-direction: column;
            height: auto;
            max-height: none;
            gap: 12px;
          }

          .expanding-tabs .tab {
            width: 100% !important;
            flex-direction: column;
            height: 60px;
            min-height: 60px;
          }

          .expanding-tabs .tab.active {
            height: 400px;
            border-radius: 24px;
          }

          .expanding-tabs .tab-label {
            writing-mode: horizontal-tb;
            width: 100%;
            height: 60px;
            flex-direction: row-reverse;
            padding: 0 20px;
            transform: none;
            justify-content: space-between;
          }

          .expanding-tabs .plus-icon {
            transform: none;
            margin: 0;
          }

          .expanding-tabs .tab-panel {
            position: relative;
            height: calc(100% - 60px);
            border-radius: 0 0 24px 24px;
          }
        }
      `}} />
    </section>
  );
};

export default CampusLife;
