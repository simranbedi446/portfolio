import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import beagleHappy from '../assets/beagle_happy.png';

const ITEMS = [
  { id: 'bone', emoji: '🦴', floorLeft: '54%' },
  { id: 'ball', emoji: '🎾', floorLeft: '28%' },
  { id: 'duck', emoji: '🐥', floorLeft: '9%'  },
];

const CAPTIONS = [
  '🐾 Vinie is on patrol!',
  'Spotted a bone! On my way...',
  'Got it! 🦴 Nom nom!',
  'Trotting to the basket...',
  'Bone is safe! ✓',
  'Good girl! Wag wag! 🐕',
  'Ooh — a tennis ball! 👀',
  'Ball secured! 🎾',
  'Back to the basket...',
  'Ball in! Another wag! 🐾',
  'One more... a rubber duck! 🐥',
  'Duck grabbed!',
  'Last trip to the basket...',
  '🏆 All tidy! Vinie is the BEST girl! 🐾✨',
];

// Each phase: dog position, direction, what she's holding, what's in basket, tail wag, phase duration (ms)
const PHASES = [
  { left: '2%',  face: 'right', holding: null,   basket: [],                  wag: false, dur: 900  },
  { left: '46%', face: 'right', holding: null,   basket: [],                  wag: false, dur: 1100 },
  { left: '46%', face: 'right', holding: 'bone', basket: [],                  wag: false, dur: 450  },
  { left: '75%', face: 'right', holding: 'bone', basket: [],                  wag: false, dur: 1050 },
  { left: '75%', face: 'right', holding: null,   basket: ['bone'],            wag: false, dur: 350  },
  { left: '75%', face: 'right', holding: null,   basket: ['bone'],            wag: true,  dur: 1300 },
  { left: '20%', face: 'left',  holding: null,   basket: ['bone'],            wag: false, dur: 1100 },
  { left: '20%', face: 'right', holding: 'ball', basket: ['bone'],            wag: false, dur: 450  },
  { left: '75%', face: 'right', holding: 'ball', basket: ['bone'],            wag: false, dur: 1100 },
  { left: '75%', face: 'right', holding: null,   basket: ['bone','ball'],     wag: true,  dur: 1100 },
  { left: '1%',  face: 'left',  holding: null,   basket: ['bone','ball'],     wag: false, dur: 1350 },
  { left: '1%',  face: 'right', holding: 'duck', basket: ['bone','ball'],     wag: false, dur: 450  },
  { left: '75%', face: 'right', holding: 'duck', basket: ['bone','ball'],     wag: false, dur: 1450 },
  { left: '75%', face: 'right', holding: null,   basket: ['bone','ball','duck'], wag: true, dur: 2800 },
];

const WALKING_PHASES = new Set([1, 3, 6, 8, 10, 12]);

export default function VinieToyStory() {
  const [idx, setIdx] = useState(0);
  const p = PHASES[idx];
  const isWalking = WALKING_PHASES.has(idx);

  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % PHASES.length), p.dur);
    return () => clearTimeout(t);
  }, [idx]);

  const onFloor = (id) => p.holding !== id && !p.basket.includes(id);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '175px',
      userSelect: 'none',
      overflow: 'hidden',
    }}>

      {/* Faint ground line */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '3%', right: '3%',
        height: '1.5px', borderRadius: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.07) 15%, rgba(0,0,0,0.07) 85%, transparent)',
      }} />

      {/* ── Floor items ── */}
      {ITEMS.map(item => (
        <AnimatePresence key={item.id}>
          {onFloor(item.id) && (
            <motion.span
              key={`floor-${item.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, y: -28, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              style={{
                position: 'absolute', bottom: '28px', left: item.floorLeft,
                fontSize: '1.55rem', lineHeight: 1,
                transform: 'translateX(-50%)',
                display: 'inline-block',
              }}
            >
              {item.emoji}
            </motion.span>
          )}
        </AnimatePresence>
      ))}

      {/* ── Basket ── */}
      <div style={{
        position: 'absolute', bottom: '16px', right: '3%',
        fontSize: '2.5rem', lineHeight: 1,
      }}>
        🧺
      </div>

      {/* Items collected inside basket */}
      <div style={{
        position: 'absolute', bottom: '58px', right: '3%',
        display: 'flex', gap: '1px',
        transform: 'translateX(6%)',
      }}>
        <AnimatePresence>
          {p.basket.map(id => (
            <motion.span
              key={id}
              initial={{ y: 22, opacity: 0, scale: 0.3 }}
              animate={{ y: 0, opacity: 1, scale: 0.72 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              style={{ fontSize: '1.1rem', lineHeight: 1 }}
            >
              {ITEMS.find(i => i.id === id)?.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Dog ── */}
      <motion.div
        animate={{ left: p.left }}
        transition={{ duration: p.dur / 1000 * 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: 'absolute', bottom: '20px', width: '68px' }}
      >
        {/* Item carried above dog's head */}
        <AnimatePresence mode="wait">
          {p.holding && (
            <motion.div
              key={p.holding}
              initial={{ scale: 0, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: -14, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              style={{
                textAlign: 'center', fontSize: '1.28rem',
                lineHeight: 1, marginBottom: '2px',
              }}
            >
              {ITEMS.find(i => i.id === p.holding)?.emoji}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dog image — flip when walking left, bounce when walking, wag when celebrating */}
        <motion.img
          src={beagleHappy}
          alt="Vinie the beagle"
          animate={{
            scaleX: p.face === 'left' ? -1 : 1,
            y: isWalking ? [0, -5, 0, -5, 0] : 0,
            rotate: p.wag ? [0, -10, 10, -10, 10, -6, 6, -3, 0] : 0,
          }}
          transition={{
            scaleX: { duration: 0.12 },
            y: isWalking
              ? { duration: 0.36, repeat: Math.ceil(p.dur / 360), ease: 'easeInOut' }
              : { duration: 0.2 },
            rotate: p.wag
              ? { duration: 0.85, repeat: 1, ease: 'easeInOut' }
              : { duration: 0.2 },
          }}
          style={{ width: '68px', height: 'auto', display: 'block' }}
        />
      </motion.div>

      {/* ── Story caption ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            margin: 0, textAlign: 'center',
            fontSize: '0.82rem', lineHeight: 1.3,
            color: 'var(--text-subtle)',
            fontFamily: 'var(--font-handwriting)',
          }}
        >
          {CAPTIONS[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
