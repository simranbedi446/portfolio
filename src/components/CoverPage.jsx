import React from 'react';
import { motion } from 'framer-motion';
import beagleHappy from '../assets/beagle_happy.png';

export default function CoverPage({ onOpen }) {
  return (
    <div className="paper-grid text-center flex flex-col justify-between items-center" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
      
      {/* Title block with drop down animation */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        style={{ position: 'relative', width: '100%' }}
      >
        <div className="tape-graphic"></div>
        <h1 className="scratchy" style={{ fontSize: '3.4rem', margin: '10px 0 5px 0', color: 'var(--text-main)', lineHeight: '1.15' }}>
          Simran's Scrapbook
        </h1>
        <p className="natural-hand" style={{ fontSize: '1.4rem', color: 'var(--text-accent)', marginTop: '0' }}>
          Frontend Engineer • Nagpur, IN
        </p>
      </motion.div>

      {/* Floating Beagle Mascot */}
      <motion.div 
        className="sketch-img-container" 
        style={{ margin: '10px auto', maxWidth: '165px' }}
        animate={{ y: [0, -12, 0], rotate: [-1.5, 0.5, -1.5] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      >
        <img 
          src={beagleHappy} 
          alt="Happy Beagle Vinie" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </motion.div>

      {/* Badge & Open button */}
      <div>
        <motion.div 
          className="beagle-badge" 
          style={{ margin: '0 auto 12px auto' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 }}
        >
          <span style={{ fontFamily: 'var(--font-natural)', fontSize: '0.88rem' }}>Next.js / React</span>
          <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-scratchy)' }}>PORTFOLIO</span>
          <span style={{ fontFamily: 'var(--font-natural)', fontSize: '0.88rem' }}>Care For Strays</span>
        </motion.div>
        
        <motion.button 
          className="control-btn" 
          onClick={onOpen}
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 450, damping: 15 }}
          style={{ 
            fontSize: '1.15rem', 
            padding: '8px 20px', 
            margin: '0 auto',
            backgroundColor: 'var(--beagle-gold)',
            color: 'white',
            borderColor: 'var(--beagle-gold-dark)',
            boxShadow: '3px 3px 0px var(--beagle-gold-dark)'
          }}
        >
          Open Simran's Scrapbook 🐕
        </motion.button>
      </div>
    </div>
  );
}
