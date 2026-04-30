import React from 'react';

const FormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            id="popup-fcdd1d9b6d2eac85e4fd390d13d3894f" 
            className="npfPopup" 
            style={{ 
                display: 'block', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 10001,
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}
        >
            <div 
                id="popup-in-fcdd1d9b6d2eac85e4fd390d13d3894f" 
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '450px',
                    backgroundColor: '#e9eaeb',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}
            >
                <div 
                    className="npfTitle npfTitle-fcdd1d9b6d2eac85e4fd390d13d3894f"
                    style={{
                        padding: '15px 20px',
                        backgroundColor: '#e9eaeb',
                        color: '#d91d2a',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}
                >
                    Enquiry Form
                    <button 
                        type="button"
                        onClick={onClose}
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: '2px solid #000',
                            backgroundColor: 'transparent',
                            color: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '22px',
                            fontWeight: 'bold',
                            padding: '0',
                            lineHeight: '0'
                        }}
                    >
                        <span style={{ marginTop: '-4px' }}>&times;</span>
                    </button>
                </div>
                <div id="popup-message-fcdd1d9b6d2eac85e4fd390d13d3894f" className="npfPopup-message" style={{ padding: '0px' }}>
                    <div className="npf_wgts" data-height="500px" data-w="fcdd1d9b6d2eac85e4fd390d13d3894f">
                        <iframe 
                            frameBorder="0" 
                            width="100%" 
                            height="500px" 
                            sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" 
                            src="https://widgets.in8.nopaperforms.com/register?&r=&q=&w=fcdd1d9b6d2eac85e4fd390d13d3894f&m=&cu=http://localhost:5173/"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div 
                id="popup-back-fcdd1d9b6d2eac85e4fd390d13d3894f" 
                onClick={onClose}
                style={{ width: '100%', height: '100%' }}
            ></div>
        </div>
    );
};

export default FormModal;
