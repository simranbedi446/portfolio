import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS = [
  {
    id: 1,
    type: 'project',
    title: 'Celestial Cycles',
    category: 'Interactive React Game',
    desc: 'Engineered a grid alignment game using React state with card matching logic. Built a low-latency Web Audio API synthesiser for dynamic audio and Framer Motion for physics-based spring transitions. Features a real-time heuristic AI agent and glowing SVG connection lines.',
    tech: 'React, Web Audio API, Framer Motion, SVG',
    impact: 'Demonstrated advanced UI engineering, game state trees, and custom web graphics overlays.',
    rotation: '-1.5deg',
    emoji: '🌌'
  },
  {
    id: 2,
    type: 'experience',
    title: 'ProCohat Technologies',
    category: 'Frontend Engineer',
    desc: 'Architected and maintained high-performance Next.js UI dashboards, ensuring pixel-perfect responsiveness and SEO compliance. Integrated authentication and email handlers (Supabase/NodeMailer). Promoted to Full-time after an 8-month internship.',
    tech: 'Next.js, Tailwind CSS, Supabase, TypeScript',
    impact: 'Optimized full-stack pages for SEO and responsiveness, leading to faster load times and 100% bug-free delivery.',
    rotation: '2deg',
    emoji: '💻'
  },
  {
    id: 3,
    type: 'volunteer',
    title: 'Care For Strays',
    category: 'Founder & Initiative Lead',
    desc: 'Independently founded and managed a stray dog welfare initiative in Nagpur. Led feeding drives, distributed reflective safety collars, and coordinated medical care with local veterinarians.',
    tech: 'Leadership, Community Operations',
    impact: 'Saved and fed hundreds of street dogs, directly inspiring the dog-themed comfort concept of this portfolio!',
    rotation: '-1deg',
    emoji: '🐕'
  },
  {
    id: 4,
    type: 'skills',
    title: 'Technical Toolbox',
    category: 'Core Technologies',
    desc: 'Proficient in JavaScript (ES6+), React.js, Next.js, TypeScript, CSS3/Tailwind CSS, ShadCN UI, Web Audio API, Supabase, NodeMailer, Git/GitHub, Jest testing, Vercel deployments, and DNS/Domain management.',
    tech: 'Frontend & Operations Stack',
    impact: 'A versatile skill set spanning UI design systems, performance optimization, unit testing, and production deployment pipeline setups.',
    rotation: '1.2deg',
    emoji: '🧰'
  }
];

export default function VinieBoard() {
  const [selectedItem, setSelectedItem] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 15 } 
    }
  };

  return (
    <div className="paper-grid" style={{ minHeight: '480px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <h3 className="handwriting" style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: 'var(--text-accent)' }}>
          Simran's Board of Work &amp; Digs
        </h3>
        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-subtle)' }}>
          Clippings from my frontend development engineering, stray dog welfare, and technical skills. Click on a card to inspect:
        </p>
      </div>

      {/* Grid of scrapbook clippings with Framer Motion stagger */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '5px' }}
      >
        {ITEMS.map((item) => (
          <motion.div 
            key={item.id}
            variants={cardVariants}
            className="scrapbook-card"
            onClick={() => setSelectedItem(item)}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            style={{ 
              '--rotation': item.rotation, 
              cursor: 'pointer',
              border: selectedItem?.id === item.id ? '2.5px solid var(--beagle-gold)' : '1px solid var(--card-border)',
              padding: '10px'
            }}
          >
            <div style={{ position: 'absolute', top: '-10px', left: '42%', transform: 'rotate(-4deg)', width: '35px', height: '14px', backgroundColor: 'rgba(198, 138, 76, 0.2)', borderLeft: '1px dashed var(--card-border)', borderRight: '1px dashed var(--card-border)' }}></div>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '1.8rem' }}>{item.emoji}</span>
              <div>
                <h4 className="handwriting" style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-main)' }}>
                  {item.title}
                </h4>
                <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-accent)', fontWeight: 'bold' }}>
                  {item.category}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', margin: '8px 0 0 0', lineHeight: '1.35', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Clipped details card inspector with AnimatePresence */}
      <div style={{ minHeight: '130px', marginTop: '10px', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {selectedItem ? (
            <motion.div 
              key={selectedItem.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              style={{ background: 'var(--sticky-bg)', border: '2px dashed var(--sticky-border)', borderRadius: '8px', padding: '12px', position: 'relative', boxShadow: '3px 3px 6px rgba(0,0,0,0.03)', transition: 'background 0.3s, border-color 0.3s' }}
            >
              <div style={{ position: 'absolute', top: '-12px', right: '15px', transform: 'rotate(10deg)', width: '50px', height: '18px', backgroundColor: 'rgba(210, 77, 87, 0.15)', borderLeft: '1px dashed var(--card-border)', borderRight: '1px dashed var(--card-border)' }}></div>
              
              <h4 className="handwriting" style={{ fontSize: '1.4rem', color: 'var(--sticky-text)', margin: '0 0 5px 0', transition: 'color 0.3s' }}>
                📝 Notebook Clip Details: {selectedItem.title}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.88rem' }}>
                <div>
                  <strong>Details:</strong>
                  <p style={{ margin: '4px 0 0 0', lineHeight: '1.4' }}>{selectedItem.desc}</p>
                </div>
                <div style={{ borderLeft: '1.5px dashed var(--inner-box-border)', paddingLeft: '15px' }}>
                  <strong>Technologies &amp; Scope:</strong>
                  <code style={{ fontSize: '0.78rem', display: 'block', padding: '3px 6px', background: 'var(--inner-box-bg)', borderRadius: '4px', margin: '4px 0 8px 0', border: '1px solid var(--inner-box-border)', color: 'var(--text-main)', transition: 'background 0.3s, border-color 0.3s, color 0.3s' }}>
                    {selectedItem.tech}
                  </code>
                  <strong>Impact &amp; Goals:</strong>
                  <p style={{ margin: '2px 0 0 0', lineHeight: '1.4', fontStyle: 'italic', color: 'var(--text-main)' }}>{selectedItem.impact}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ border: '2px dashed var(--card-border)', borderRadius: '8px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}
            >
              <p className="handwriting" style={{ fontSize: '1.2rem', color: 'var(--text-subtle)', margin: 0 }}>
                Select a project, job, or volunteer card above to view stack and impact details!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
