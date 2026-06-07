import React from 'react';
import { motion } from 'framer-motion';

const PACK_RULES = [
  {
    emoji: '🤝',
    title: 'Empathy-First Collaboration (No Biting)',
    desc: 'Critique the code, not the developer. I believe in constructive, kind feedback that helps teams grow rather than tearing them down.'
  },
  {
    emoji: '📢',
    title: 'Openness & Safety (Howl When Lost)',
    desc: 'No one should drown in silence. Asking questions, speaking up, and raising concerns early is a sign of a high-trust, collaborative engineering environment.'
  },
  {
    emoji: '🌱',
    title: 'Continuous Innovation (Dig New Holes)',
    desc: 'Safe spaces foster creativity. I embrace experimentation, testing wild ideas, and blame-free retrospectives as vital pathways to growth.'
  },
  {
    emoji: '✨',
    title: 'Appreciative Culture (Sniff Out Good Vibes)',
    desc: 'Teams perform best when they feel valued. I make it a priority to celebrate others\' achievements and encourage collaborative success.'
  },
  {
    emoji: '🐕‍🦺',
    title: 'Shared Ownership (Pack Support)',
    desc: 'Leave no developer behind. I actively support pair programming, knowledge sharing, and lending a hand when sprint timelines get tough.'
  }
];

export default function PackAgreementPage() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 14 } 
    }
  };

  return (
    <div className="paper-lined" style={{ minHeight: '480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ marginBottom: '5px' }}>
        <h3 className="handwriting" style={{ fontSize: '1.8rem', margin: '0 0 10px 0', color: 'var(--text-accent)' }}>
          My Engineering Pack Values
        </h3>
        <p style={{ margin: 0, fontSize: '0.98rem', color: 'var(--text-subtle)' }}>
          A productive frontend development flow thrives on mutual trust. Here are the core team values I stand for:
        </p>
      </div>

      {/* Stagger list of values */}
      <motion.div 
        variants={listVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        {PACK_RULES.map((rule, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}
          >
            <span style={{ fontSize: '1.8rem', width: '32px', textAlign: 'center', flexShrink: 0 }}>
              {rule.emoji}
            </span>
            <div>
              <strong style={{ fontSize: '1.08rem', color: 'var(--text-main)' }}>{rule.title}</strong>
              <p style={{ fontSize: '0.92rem', margin: '2px 0 0 0', lineHeight: '1.4' }}>{rule.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
