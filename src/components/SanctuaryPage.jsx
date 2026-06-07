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
      className="paper-lined sanctuary-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Intro row: beagle + speech bubble */}
      <motion.div variants={itemVariants} className="sanctuary-intro-row">
        <motion.div 
          className="sketch-img-container sanctuary-beagle-img"
          animate={{ rotate: [-2, 0, -2] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <img src={beagleCurious} alt="Curious Beagle Vinie" style={{ width: '100%', height: 'auto' }} />
        </motion.div>
        
        <div className="speech-bubble">
          <div className="speech-bubble-tail" />
          <p className="natural-hand" style={{ fontSize: '1.2rem', margin: 0, lineHeight: '1.6', color: 'var(--bubble-text)' }}>
            "Welcome to my creative sanctuary! I'm Simran, a Frontend Engineer. Beside me is Vinie, my virtual helper beagle. Since I love street dogs and founded Care For Strays, Vinie is here to make this portfolio feel cozy and safe!"
          </p>
        </div>
      </motion.div>

      {/* About me */}
      <motion.div variants={itemVariants}>
        <h3 className="scratchy" style={{ fontSize: '2rem', margin: '0 0 8px 0', color: 'var(--text-accent)' }}>
          About Me &amp; My Engineering Philosophy
        </h3>
        <p className="natural-hand" style={{ fontSize: '1rem', margin: 0, lineHeight: '1.7' }}>
          I am a <strong>Frontend Engineer</strong> with experience building real-time, data-driven web applications using React, Next.js, and TypeScript. I have a proven track record in developing complex dashboard interfaces, optimizing frontend performance for low-latency interactions, and collaborating cross-functionally on design systems. I am passionate about creating intuitive, high-performance interfaces that bridge the gap between complex systems and seamless user experiences.
        </p>
      </motion.div>

      {/* Edu + Certs grid */}
      <motion.div variants={itemVariants} className="sanctuary-grid">
        <div>
          <h4 className="scratchy" style={{ fontSize: '1.6rem', margin: '0 0 8px 0', color: 'var(--text-collar)' }}>
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

        <div className="sanctuary-certs">
          <h4 className="scratchy" style={{ fontSize: '1.6rem', margin: '0 0 8px 0', color: 'var(--text-accent)' }}>
            🏆 My Certifications
          </h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <li>React.js Essential Training (LinkedIn)</li>
            <li>GitHub Project Management &amp; Collaboration</li>
            <li>Career Essentials in GitHub Professional</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
