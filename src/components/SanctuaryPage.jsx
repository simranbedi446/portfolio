import React from 'react';
import { motion } from 'framer-motion';
import beagleCurious from '../assets/beagle_curious.png';

export default function SanctuaryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    }
  };

  return (
    <motion.div 
      className="paper-lined" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ minHeight: '480px', display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      
      {/* Intro row with speech bubble */}
      <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
        <motion.div 
          className="sketch-img-container" 
          style={{ flexShrink: 0, maxWidth: '140px' }}
          animate={{ rotate: [-2, 0, -2] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <img src={beagleCurious} alt="Curious Beagle Vinie" style={{ width: '100%', height: 'auto' }} />
        </motion.div>
        
        <div style={{ position: 'relative', background: 'var(--bubble-bg)', border: '2px solid var(--bubble-border)', borderRadius: '12px', padding: '15px', flexGrow: 1, boxShadow: '2px 2px 5px rgba(0,0,0,0.05)', transition: 'background 0.3s, border-color 0.3s' }}>
          <div style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: '20px', height: '20px', backgroundColor: 'var(--bubble-bg)', borderLeft: '2px solid var(--bubble-border)', borderBottom: '2px solid var(--bubble-border)', transition: 'background 0.3s, border-color 0.3s' }}></div>
          <p className="handwriting" style={{ fontSize: '1.25rem', margin: 0, lineHeight: '1.4', color: 'var(--bubble-text)', transition: 'color 0.3s' }}>
            "Welcome to my creative sanctuary! I'm Simran, a Frontend Engineer. Beside me is Vinie, my virtual helper beagle. Since I love street dogs and founded Care For Strays, Vinie is here to make this portfolio feel cozy and safe!"
          </p>
        </div>
      </motion.div>

      {/* Profile summary card */}
      <motion.div variants={itemVariants} style={{ marginTop: '10px' }}>
        <h3 className="handwriting" style={{ fontSize: '1.9rem', margin: '0 0 8px 0', color: 'var(--text-accent)' }}>
          About Me &amp; My Engineering Philosophy
        </h3>
        <p style={{ fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>
          I am a <strong>Frontend Engineer</strong> with experience building real-time, data-driven web applications using React, Next.js, and TypeScript. I have a proven track record in developing complex dashboard interfaces, optimizing frontend performance for low-latency interactions, and collaborating cross-functionally on design systems. I am passionate about creating intuitive, high-performance interfaces that bridge the gap between complex systems and seamless user experiences.
        </p>
      </motion.div>

      {/* Grid columns */}
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginTop: '5px' }}>
        <div>
          <h4 className="handwriting" style={{ fontSize: '1.5rem', margin: '0 0 8px 0', color: 'var(--text-collar)' }}>
            🎓 My Education
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <strong style={{ fontSize: '0.95rem' }}>Master's in Computer Application (MCA)</strong>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>RTMNU - Shri Shivaji Science College • 2022 - 2024</div>
            </div>
            <div>
              <strong style={{ fontSize: '0.95rem' }}>Bachelor in Business Administration (BBA)</strong>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>RTMNU - Tirpude Institute of Management • 2016 - 2019</div>
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '1.5px dashed rgba(0,0,0,0.1)', paddingLeft: '20px' }}>
          <h4 className="handwriting" style={{ fontSize: '1.5rem', margin: '0 0 8px 0', color: 'var(--text-accent)' }}>
            🏆 My Certifications
          </h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '0.9rem', lineHeight: '1.5' }}>
            <li>React.js Essential Training (LinkedIn)</li>
            <li>GitHub Project Management &amp; Collaboration</li>
            <li>Career Essentials in GitHub Professional</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
