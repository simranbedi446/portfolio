import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import beagleSleeping from '../assets/beagle_sleeping.png';

const MOODS = [
  { 
    id: 'happy', 
    emoji: '🐕', 
    label: 'Green Tests', 
    response: 'Wagging tail! Your code is compiling, tests are passing, and you are in the flow. Share some of this positive energy by approving a peer\'s pull request with a kind comment! 🐾' 
  },
  { 
    id: 'tired', 
    emoji: '💤', 
    label: 'Brain Fried', 
    response: 'Hydration error or brain overflow? I recommend step-away debugging. Close the IDE, grab some water, and take a 15-minute screen break. Vinie will stand guard at your terminal. 💤' 
  },
  { 
    id: 'anxious', 
    emoji: '😰', 
    label: 'Imposter Alert', 
    response: 'Imposter syndrome is just a failing unit test. You have solved complex dashboard architectures before and you belong in the pack. Look back at your git history to see how much you\'ve built! 🛡️' 
  },
  { 
    id: 'creative', 
    emoji: '💡', 
    label: 'Deep Digging', 
    response: 'In the zone! Dig up those refactors, build clean components, and don\'t worry about initial mess. You can tidy up your Tailwind classes in the next commit! 💡' 
  },
  { 
    id: 'grumpy', 
    emoji: '😠', 
    label: 'Conflicts', 
    response: 'Growling at a massive Git conflict or DNS propagation issues? Walk away for 10 minutes. I know this pain well—fresh eyes and a hot cup of tea will make the resolution simple. 🦴' 
  }
];

const TREATS = [
  "You are not your console.log output or your code review changes.",
  "A responsive, beautiful UI starts with a relaxed and well-rested engineer.",
  "Next.js build errors happen. It is just feedback, not a reflection of your talent.",
  "DNS configurations take time to propagate. Be patient with your domains and yourself.",
  "Even senior frontend architects look up basic CSS styles. Never feel bad for asking.",
  "Tailwind classes can get messy. Take a deep breath and refactor into smaller components.",
  "A blame-free retro is the best dev treat. Celebrate team learnings, not just bug-free deployments.",
  "You are a vital member of this engineering pack. I believe in your code! 🐾"
];

export default function SafeSpaceToolkit() {
  const [activeTab, setActiveTab] = useState('mood');
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentTreat, setCurrentTreat] = useState('');

  const handleMoodSelect = (mood) => setSelectedMood(mood);
  const handleDispenseTreat = () => {
    const randomIdx = Math.floor(Math.random() * TREATS.length);
    setCurrentTreat(TREATS[randomIdx]);
  };

  return (
    <div className="paper-grid toolkit-page">
      {/* Tab nav */}
      <div className="toolkit-tab-nav">
        <button 
          onClick={() => setActiveTab('mood')} 
          className="handwriting toolkit-tab-btn"
          style={{ 
            color: activeTab === 'mood' ? 'var(--text-accent)' : 'var(--text-subtle)',
            textDecoration: activeTab === 'mood' ? 'underline' : 'none'
          }}
        >
          🐾 Dev Mood Tracker
        </button>
        <button 
          onClick={() => setActiveTab('treat')} 
          className="handwriting toolkit-tab-btn"
          style={{ 
            color: activeTab === 'treat' ? 'var(--text-accent)' : 'var(--text-subtle)',
            textDecoration: activeTab === 'treat' ? 'underline' : 'none'
          }}
        >
          🥯 Treat Dispenser
        </button>
      </div>

      {/* TOOL 1: MOOD TRACKER */}
      {activeTab === 'mood' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 className="handwriting" style={{ fontSize: '1.6rem', margin: '0 0 5px 0', color: 'var(--text-accent)' }}>
              How is your dev tail wagging today?
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Click on the paw matching your current dev state for some supportive advice:</p>
          </div>

          {/* 5-mood grid — becomes 3-col then 2-col on mobile */}
          <div className="mood-grid">
            {MOODS.map((m) => (
              <motion.button 
                key={m.id} 
                className="mood-paw-btn" 
                onClick={() => handleMoodSelect(m)}
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                style={{ 
                  backgroundColor: selectedMood?.id === m.id ? 'var(--beagle-gold-light)' : 'transparent',
                  borderColor: selectedMood?.id === m.id ? 'var(--beagle-gold)' : 'var(--card-border)',
                  color: selectedMood?.id === m.id ? '#1b120f' : 'var(--text-main)'
                }}
              >
                <span style={{ fontSize: '2rem' }}>{m.emoji}</span>
                <span className="handwriting" style={{ fontSize: '1rem', wordBreak: 'break-word', textAlign: 'center' }}>{m.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mood response — image + text stacked on mobile */}
          <div className="mood-response-box">
            <AnimatePresence mode="wait">
              {selectedMood ? (
                <motion.div 
                  key={selectedMood.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 14 }}
                  className="mood-response-inner"
                >
                  <motion.img 
                    src={beagleSleeping} 
                    alt="Vinie sleeping" 
                    className="mood-beagle-img"
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  />
                  <div>
                    <h4 className="handwriting" style={{ fontSize: '1.3rem', margin: '0 0 5px 0', color: 'var(--text-accent)' }}>
                      My &amp; Vinie's Advice:
                    </h4>
                    <p style={{ fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>{selectedMood.response}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: '1.2rem', color: 'var(--text-subtle)', margin: 0 }}
                  className="handwriting"
                >
                  Select a code mood paw above to see our advice!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* TOOL 2: TREAT DISPENSER */}
      {activeTab === 'treat' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
          <div>
            <h3 className="handwriting" style={{ fontSize: '1.6rem', margin: '0 0 5px 0', color: 'var(--text-accent)' }}>
              Mindful Engineering Treats
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Sometimes you just need a treat. Click below to grab a fresh code-mindfulness treat from the jar!</p>
          </div>

          <motion.button 
            onClick={handleDispenseTreat}
            className="control-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'var(--beagle-gold)', 
              color: 'white', 
              borderColor: 'var(--beagle-gold-dark)', 
              padding: '10px 25px', 
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🍖 Dispense Dev Treat
          </motion.button>

          <div style={{ width: '100%', maxWidth: '450px', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              {currentTreat ? (
                <motion.div 
                  key={currentTreat}
                  initial={{ y: 80, scale: 0.8, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: -80, scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 13 }}
                  className="treat-card" 
                  style={{ display: 'flex', gap: '15px', alignItems: 'center', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>🍖</span>
                  <div>
                    <h4 className="handwriting" style={{ fontSize: '1.3rem', color: 'var(--text-accent)', margin: '0 0 4px 0' }}>
                      Cozy Dev Treat:
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: '1.4' }}>{currentTreat}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ border: '2px dashed var(--card-border)', borderRadius: '12px', width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <p className="handwriting" style={{ fontSize: '1.2rem', color: 'var(--text-subtle)', margin: 0 }}>
                    Click the button to open a treat!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
