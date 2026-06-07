import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './CoverPage';
import SanctuaryPage from './SanctuaryPage';
import PackAgreementPage from './PackAgreementPage';
import SafeSpaceToolkit from './SafeSpaceToolkit';
import VinieBoard from './VinieBoard';
import ContactPostcard from './ContactPostcard';

const TABS = [
  { id: 'sanctuary', label: '1. Welcome' },
  { id: 'agreement', label: '2. Values' },
  { id: 'toolkit', label: '3. Toolkit' },
  { id: 'board', label: '4. Projects' },
  { id: 'contact', label: '5. Postcard' }
];

export default function Notebook({ currentPage, setCurrentPage, isOpen, setIsOpen }) {
  const handleOpen = () => {
    setIsOpen(true);
    setCurrentPage('sanctuary');
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentPage('cover');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'sanctuary':
        return <SanctuaryPage />;
      case 'agreement':
        return <PackAgreementPage />;
      case 'toolkit':
        return <SafeSpaceToolkit />;
      case 'board':
        return <VinieBoard />;
      case 'contact':
        return <ContactPostcard />;
      default:
        return <CoverPage onOpen={handleOpen} />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'sanctuary': return 'Welcome Sanctuary';
      case 'agreement': return 'My Engineering Values';
      case 'toolkit': return 'Safe Space Toolkit';
      case 'board': return 'My Creative Board';
      case 'contact': return 'Send a Postcard Bark';
      default: return '';
    }
  };

  return (
    <div className="notebook-wrapper">
      {/* Global SVG Definitions for Cap Gradients */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          {/* Chrome Corner Cap Gradients */}
          <linearGradient id="cap-chrome-top-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f0f0f0" />
            <stop offset="60%" stopColor="#c8c8c8" />
            <stop offset="85%" stopColor="#9e9e9e" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="cap-chrome-top-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f0f0f0" />
            <stop offset="60%" stopColor="#c8c8c8" />
            <stop offset="85%" stopColor="#9e9e9e" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="cap-chrome-bottom-left" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f0f0f0" />
            <stop offset="60%" stopColor="#c8c8c8" />
            <stop offset="85%" stopColor="#9e9e9e" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="cap-chrome-bottom-right" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f0f0f0" />
            <stop offset="60%" stopColor="#c8c8c8" />
            <stop offset="85%" stopColor="#9e9e9e" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          {/* Gold Corner Cap Gradients */}
          <linearGradient id="cap-gold-top-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="30%" stopColor="#f1c40f" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <linearGradient id="cap-gold-top-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="30%" stopColor="#f1c40f" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <linearGradient id="cap-gold-bottom-left" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="30%" stopColor="#f1c40f" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <linearGradient id="cap-gold-bottom-right" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="30%" stopColor="#f1c40f" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>
      </svg>

      <div className="notebook-binder">
        {/* Embossed Paw Print Metal Corner Guards */}
        <div className="corner-guard top-left">
          <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
            {/* Triangular plate */}
            <path 
              d="M 0 16 A 16 16 0 0 1 16 0 L 40 0 L 0 40 Z" 
              fill="var(--cap-fill-top-left)" 
              stroke="var(--cap-stroke)" 
              strokeWidth="0.8" 
            />
            {/* Embossed Paw Print highlight */}
            <g transform="translate(0.4, 0.4)">
              <ellipse cx="12" cy="14" rx="4.2" ry="3.7" fill="var(--paw-shadow)" />
              <circle cx="6" cy="12" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="9.5" cy="8" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="14.5" cy="8" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="18" cy="12" r="1.6" fill="var(--paw-shadow)" />
            </g>
            {/* Embossed Paw Print indent */}
            <g>
              <ellipse cx="12" cy="14" rx="4" ry="3.5" fill="var(--paw-emboss)" />
              <circle cx="6" cy="12" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="9.5" cy="8" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="14.5" cy="8" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="18" cy="12" r="1.5" fill="var(--paw-emboss)" />
            </g>
          </svg>
        </div>

        <div className="corner-guard top-right">
          <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
            <path 
              d="M 0 0 L 24 0 A 16 16 0 0 1 40 16 L 40 40 Z" 
              fill="var(--cap-fill-top-right)" 
              stroke="var(--cap-stroke)" 
              strokeWidth="0.8" 
            />
            <g transform="translate(0.4, 0.4)">
              <ellipse cx="28" cy="14" rx="4.2" ry="3.7" fill="var(--paw-shadow)" />
              <circle cx="34" cy="12" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="30.5" cy="8" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="25.5" cy="8" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="22" cy="12" r="1.6" fill="var(--paw-shadow)" />
            </g>
            <g>
              <ellipse cx="28" cy="14" rx="4" ry="3.5" fill="var(--paw-emboss)" />
              <circle cx="34" cy="12" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="30.5" cy="8" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="25.5" cy="8" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="22" cy="12" r="1.5" fill="var(--paw-emboss)" />
            </g>
          </svg>
        </div>

        <div className="corner-guard bottom-left">
          <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
            <path 
              d="M 0 0 L 40 40 L 16 40 A 16 16 0 0 1 0 24 Z" 
              fill="var(--cap-fill-bottom-left)" 
              stroke="var(--cap-stroke)" 
              strokeWidth="0.8" 
            />
            <g transform="translate(0.4, 0.4)">
              <ellipse cx="12" cy="26" rx="4.2" ry="3.7" fill="var(--paw-shadow)" />
              <circle cx="6" cy="28" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="9.5" cy="32" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="14.5" cy="32" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="18" cy="28" r="1.6" fill="var(--paw-shadow)" />
            </g>
            <g>
              <ellipse cx="12" cy="26" rx="4" ry="3.5" fill="var(--paw-emboss)" />
              <circle cx="6" cy="28" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="9.5" cy="32" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="14.5" cy="32" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="18" cy="28" r="1.5" fill="var(--paw-emboss)" />
            </g>
          </svg>
        </div>

        <div className="corner-guard bottom-right">
          <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
            <path 
              d="M 40 0 L 40 24 A 16 16 0 0 1 24 40 L 0 40 Z" 
              fill="var(--cap-fill-bottom-right)" 
              stroke="var(--cap-stroke)" 
              strokeWidth="0.8" 
            />
            <g transform="translate(0.4, 0.4)">
              <ellipse cx="28" cy="26" rx="4.2" ry="3.7" fill="var(--paw-shadow)" />
              <circle cx="34" cy="28" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="30.5" cy="32" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="25.5" cy="32" r="1.6" fill="var(--paw-shadow)" />
              <circle cx="22" cy="28" r="1.6" fill="var(--paw-shadow)" />
            </g>
            <g>
              <ellipse cx="28" cy="26" rx="4" ry="3.5" fill="var(--paw-emboss)" />
              <circle cx="34" cy="28" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="30.5" cy="32" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="25.5" cy="32" r="1.5" fill="var(--paw-emboss)" />
              <circle cx="22" cy="28" r="1.5" fill="var(--paw-emboss)" />
            </g>
          </svg>
        </div>

        {/* Ring Binder Spiral */}
        <div className="spiral-rings">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="ring-loop"></div>
          ))}
        </div>

        {/* Index Tabs */}
        {isOpen && (
          <div className="index-tabs">
            {TABS.map((tab, idx) => (
              <motion.div
                key={tab.id}
                onClick={() => setCurrentPage(tab.id)}
                className={`index-tab ${currentPage === tab.id ? 'active' : ''}`}
                whileHover={{ scale: 1.15, x: 4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{
                  backgroundColor: 
                    tab.id === 'sanctuary' ? '#ecdca5' : 
                    tab.id === 'agreement' ? '#a5ecd1' : 
                    tab.id === 'toolkit' ? '#a5c8ec' : 
                    tab.id === 'board' ? '#eca5a5' : '#eca5e3',
                  color: '#443'
                }}
              >
                {tab.label}
              </motion.div>
            ))}
          </div>
        )}

        {/* Inside Page Sheet Wrapper */}
        <div className="notebook-page" style={{ perspective: '1200px', minHeight: isOpen ? '580px' : '450px', transformStyle: 'preserve-3d' }}>
          
          {/* Realistic Punched Holes along left margin */}
          <div className="punched-holes">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="hole-punch"></div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ rotateY: 85, opacity: 0, transformOrigin: 'left center' }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -110, opacity: 0, transformOrigin: 'left center' }}
              transition={{ 
                type: 'spring', 
                stiffness: 85, 
                damping: 14, 
                mass: 0.85 
              }}
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                flexGrow: 1,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              {isOpen ? (
                <>
                  {/* Header inside the open notebook */}
                  <div className="page-header">
                    <span className="handwriting" style={{ fontSize: '1.4rem', color: 'var(--text-subtle)' }}>
                      Page: {TABS.findIndex(t => t.id === currentPage) + 1} / {TABS.length}
                    </span>
                    
                    <h2 className="page-title">{getPageTitle()}</h2>
                    
                    <motion.button 
                      onClick={handleClose} 
                      className="control-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontSize: '0.9rem', padding: '3px 8px' }}
                    >
                      📕 Close Book
                    </motion.button>
                  </div>

                  {/* Main Scrollable Content Area */}
                  <div className="page-content" style={{ flexGrow: 1 }}>
                    {renderActivePage()}
                  </div>
                </>
              ) : (
                /* Cover rendering inside the sheet frame */
                <CoverPage onOpen={handleOpen} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
