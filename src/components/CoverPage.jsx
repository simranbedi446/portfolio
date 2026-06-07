import React from 'react';
import { motion } from 'framer-motion';
import VinieToyStory from './VinieToyStory';

export default function CoverPage({ onOpen }) {
  return (
    <div
      className="paper-grid text-center"
      style={{
        height: '100%',
        minHeight: '420px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        gap: '12px',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        style={{ width: '100%' }}
      >
        <h1
          className="handwriting"
          style={{ fontSize: '3rem', margin: '6px 0 4px 0', color: 'var(--text-main)', lineHeight: '1.2' }}
        >
          Simran's Scrapbook
        </h1>
        <p
          className="handwriting"
          style={{ fontSize: '1.5rem', color: 'var(--text-accent)', margin: 0 }}
        >
          Frontend Engineer • Nagpur, IN
        </p>
      </motion.div>

      {/* ── Vinie's Toy Story Animation ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55 }}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: '175px',
        }}
      >
        <VinieToyStory />
      </motion.div>

      {/* Badge + Open button */}
      <div>
        <motion.div
          className="beagle-badge"
          style={{ margin: '0 auto 12px auto' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.25 }}
        >
          <span>Next.js / React</span>
          <span style={{ fontSize: '1.2rem' }}>PORTFOLIO</span>
          <span>Care For Strays</span>
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
            boxShadow: '3px 3px 0px var(--beagle-gold-dark)',
          }}
        >
          Open Simran's Scrapbook 🐕
        </motion.button>
      </div>
    </div>
  );
}
