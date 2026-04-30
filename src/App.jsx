import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Edge from './components/Edge'
import Infrastructure from './components/Infrastructure'
import CampusLife from './components/CampusLife'
import Events from './components/Events'
import Recruiters from './components/Recruiters'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Location from './components/Location'
import Footer from './components/Footer'
import FormModal from './components/FormModal'

function App() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  useEffect(() => {
    // Global Scroll Effects (Navbar Shadow and Back-to-Top)
    const handleScroll = () => {
      const stickyTop = document.querySelector('.sticky-top');
      const backToTop = document.querySelector('.back-to-top');

      if (stickyTop) {
        if (window.scrollY > 300) {
          stickyTop.classList.add('shadow');
          stickyTop.classList.add('top_01');
        } else {
          stickyTop.classList.remove('shadow');
          stickyTop.classList.remove('top_01');
        }
      }

      if (backToTop) {
        if (window.scrollY > 100) {
          backToTop.style.display = 'flex';
          backToTop.style.opacity = '1';
        } else {
          backToTop.style.display = 'none';
          backToTop.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Chatbot Initialization
    const initChatbot = () => {
      if (!document.querySelector('script[src*="niaachtbtscpt.js"]')) {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/57456427e945cf3c4/8aac02df0edb4bf88e41fb6fe7ef927c";
        document.body.appendChild(s);
      }
    };

    initChatbot();

    // NPF Widget Re-initialization for React
    const reinitNpf = () => {
      if (window.NpfWidgetsInit) {
        try {
          new window.NpfWidgetsInit({
            'widgetId': 'fcdd1d9b6d2eac85e4fd390d13d3894f',
            'baseurl': 'widgets.in8.nopaperforms.com',
            'formTitle': 'Enquiry Form',
            'titleColor': '#FF0033',
            'backgroundColor': '#ddd',
            'iframeHeight': '500px',
            'buttonbgColor': '#4c79dc',
            'buttonTextColor': '#FFF',
          });
        } catch (e) {
          console.warn("NPF Re-init skipped or failed:", e);
        }
      }
    };

    // Trigger re-init after a delay to ensure React elements are in DOM
    const npfTimer = setTimeout(reinitNpf, 1000);

    return () => {
      clearTimeout(npfTimer);
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar onEnquireClick={toggleForm} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Programs />
        <Recruiters />
        <Edge />
        <CampusLife />
        <Infrastructure />
        <Events />
        <FAQ />
        <Location />
        <CTA onEnquireClick={toggleForm} />
      </main>
      <Footer />
      


      {/* Floating Action Buttons */}
      <button 
        type="button" 
        className="npfWidgetButton npfWidget-fcdd1d9b6d2eac85e4fd390d13d3894f right_button" 
        id="applyNowBtn"
        onClick={toggleForm}
        style={{
          transition: 'var(--transition)'
        }}
      >
        Apply Now
      </button>

      <FormModal isOpen={isFormOpen} onClose={toggleForm} />

      <a 
        href="https://wa.me/918290636942" 
        className="whatsapp-float shadow-lg" 
        target="_blank" 
        rel="noreferrer" 
        style={{ transition: 'var(--transition)' }}
      >
        <span className="tooltip">WhatsApp Us</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="wa-icon" alt="WhatsApp" />
      </a>

      <a 
        href="tel:+918290636942" 
        className="call-float shadow-lg" 
        style={{ transition: 'var(--transition)' }}
      >
        <span className="tooltip">Call Us</span>
        <i className="bi bi-telephone-fill" style={{ fontSize: '24px' }}></i>
      </a>

      <button 
        className="back-to-top shadow-lg" 
        id="backToTop" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          transition: 'var(--transition)',
          zIndex: 1000
        }}
      >
        <i className="bi bi-arrow-up-short" style={{ fontSize: '28px' }}></i>
      </button>
    </div>
  )
}

export default App
