import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import beagleHappy from '../assets/beagle_happy.png';
import itemBone   from '../assets/item_bone.png';
import itemBall   from '../assets/item_ball.png';
import itemBasket from '../assets/item_basket.png';

/* ─── Item definitions ─── */
const ITEMS = [
  { id: 'bone', src: itemBone,   floorLeft: '56%', size: 56 },
  { id: 'ball', src: itemBall,   floorLeft: '30%', size: 52 },
  { id: 'duck', src: itemBall,   floorLeft: '10%', size: 52 },  // re-use ball as 3rd toy variety
];

/* ─── Phase captions ─── */
const CAPTIONS = [
  '🐾 Vinie is on patrol!',
  'Spotted a bone — on the way!',
  'Got it! 🦴',
  'Trotting to the basket…',
  'Bone dropped in!',
  'Yay! Wag wag! 🐕',
  'Ooh, a ball! Fetching…',
  'Ball secured! 🎾',
  'Back to the basket…',
  'Ball in! Wag wag! 🐾',
  'One more toy left! Going for it…',
  'Got the last one!',
  'Final delivery…',
  '🏆 All tidy! Vinie is the BEST girl! ✨',
];

/*
  Each phase:
    left      — dog's left-edge CSS % in the scene
    face      — 'right' | 'left'  (flips image horizontally)
    holding   — item id the dog is carrying, or null
    basket    — items already deposited
    wag       — tail wag celebration
    dur       — ms before advancing to next phase
*/
const PHASES = [
  { left:'2%',  face:'right', holding:null,   basket:[],               wag:false, dur:900  }, // 0 idle
  { left:'48%', face:'right', holding:null,   basket:[],               wag:false, dur:1100 }, // 1 walk→bone
  { left:'48%', face:'right', holding:'bone', basket:[],               wag:false, dur:500  }, // 2 pick bone
  { left:'76%', face:'right', holding:'bone', basket:[],               wag:false, dur:1100 }, // 3 walk→basket
  { left:'76%', face:'right', holding:null,   basket:['bone'],         wag:false, dur:400  }, // 4 drop bone
  { left:'76%', face:'right', holding:null,   basket:['bone'],         wag:true,  dur:1400 }, // 5 wag
  { left:'22%', face:'left',  holding:null,   basket:['bone'],         wag:false, dur:1100 }, // 6 walk→ball
  { left:'22%', face:'right', holding:'ball', basket:['bone'],         wag:false, dur:500  }, // 7 pick ball
  { left:'76%', face:'right', holding:'ball', basket:['bone'],         wag:false, dur:1100 }, // 8 walk→basket
  { left:'76%', face:'right', holding:null,   basket:['bone','ball'],  wag:true,  dur:1200 }, // 9 wag
  { left:'2%',  face:'left',  holding:null,   basket:['bone','ball'],  wag:false, dur:1400 }, // 10 walk→duck
  { left:'2%',  face:'right', holding:'duck', basket:['bone','ball'],  wag:false, dur:500  }, // 11 pick duck
  { left:'76%', face:'right', holding:'duck', basket:['bone','ball'],  wag:false, dur:1500 }, // 12 walk→basket
  { left:'76%', face:'right', holding:null,   basket:['bone','ball','duck'], wag:true, dur:3000 }, // 13 celebrate!
];

const WALK_PHASES = new Set([1, 3, 6, 8, 10, 12]);

export default function VinieToyStory() {
  const [idx, setIdx] = useState(0);
  const p = PHASES[idx];
  const walking = WALK_PHASES.has(idx);

  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % PHASES.length), p.dur);
    return () => clearTimeout(t);
  }, [idx]);

  const onFloor = (id) => p.holding !== id && !p.basket.includes(id);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '250px',
      userSelect: 'none',
      overflow: 'hidden',
    }}>

      {/* ── Realistic floor ── */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '32px',
        background: 'linear-gradient(180deg, rgba(210,195,175,0.18) 0%, rgba(190,170,145,0.28) 100%)',
        borderTop: '1.5px solid rgba(160,135,105,0.22)',
      }} />
      {/* Floor grain lines */}
      {[18, 34, 52, 68, 84].map(pct => (
        <div key={pct} style={{
          position: 'absolute', bottom: '0', left: `${pct}%`, width: '1px', height: '30px',
          background: 'rgba(150,120,90,0.08)',
        }} />
      ))}

      {/* ── Floor items ── */}
      {ITEMS.map(item => (
        <AnimatePresence key={item.id}>
          {onFloor(item.id) && (
            <motion.div
              key={`floor-${item.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, y: -30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              style={{
                position: 'absolute',
                bottom: '28px',
                left: item.floorLeft,
                transform: 'translateX(-50%)',
              }}
            >
              <img
                src={item.src}
                alt={item.id}
                style={{ width: `${item.size}px`, height: `${item.size}px`, objectFit: 'contain', display: 'block' }}
              />
              {/* Drop shadow oval */}
              <div style={{
                width: `${item.size * 0.7}px`, height: '6px',
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
                margin: '-2px auto 0',
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* ── Basket ── */}
      <div style={{ position: 'absolute', bottom: '24px', right: '3%' }}>
        <img
          src={itemBasket}
          alt="basket"
          style={{ width: '90px', height: '90px', objectFit: 'contain', display: 'block' }}
        />
        {/* Items peeking out of basket */}
        <div style={{
          position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '2px', justifyContent: 'center',
        }}>
          <AnimatePresence>
            {p.basket.map(id => {
              const item = ITEMS.find(i => i.id === id);
              return (
                <motion.img
                  key={id}
                  src={item.src}
                  alt={id}
                  initial={{ y: 20, opacity: 0, scale: 0.3 }}
                  animate={{ y: 0, opacity: 1, scale: 0.55 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                />
              );
            })}
          </AnimatePresence>
        </div>
        {/* Basket shadow */}
        <div style={{
          width: '75px', height: '8px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
          margin: '-3px auto 0',
        }} />
      </div>

      {/* ── Dog ── */}
      <motion.div
        animate={{ left: p.left }}
        transition={{ duration: p.dur / 1000 * 0.88, ease: [0.37, 0, 0.63, 1] }}
        style={{ position: 'absolute', bottom: '24px', width: '115px' }}
      >
        {/* Item carried above dog */}
        <AnimatePresence mode="wait">
          {p.holding && (
            <motion.div
              key={p.holding}
              initial={{ scale: 0, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: -18, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}
            >
              <img
                src={ITEMS.find(i => i.id === p.holding)?.src}
                alt={p.holding}
                style={{ width: '38px', height: '38px', objectFit: 'contain' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dog image */}
        <motion.img
          src={beagleHappy}
          alt="Vinie the beagle"
          animate={{
            scaleX: p.face === 'left' ? -1 : 1,
            /* Realistic walk: slight lean side-to-side + vertical hop */
            y: walking ? [0, -7, -1, -7, 0] : 0,
            rotate: walking
              ? (p.face === 'right' ? [0, 1.5, -1, 1.5, 0] : [0, -1.5, 1, -1.5, 0])
              : p.wag
              ? [0, -12, 12, -12, 12, -8, 8, -4, 0]
              : 0,
          }}
          transition={{
            scaleX: { duration: 0.12 },
            y: walking
              ? { duration: 0.42, repeat: Math.ceil(p.dur / 420), ease: [0.45, 0, 0.55, 1] }
              : { duration: 0.2 },
            rotate: walking
              ? { duration: 0.42, repeat: Math.ceil(p.dur / 420), ease: 'easeInOut' }
              : p.wag
              ? { duration: 0.95, repeat: 1, ease: 'easeInOut' }
              : { duration: 0.2 },
          }}
          style={{ width: '115px', height: 'auto', display: 'block' }}
        />

        {/* Dog ground shadow */}
        <motion.div
          animate={{ scaleX: walking ? [1, 0.85, 1, 0.85, 1] : 1 }}
          transition={{ duration: 0.42, repeat: walking ? Infinity : 0 }}
          style={{
            width: '85px', height: '10px',
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
            margin: '-4px auto 0',
          }}
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
            position: 'absolute',
            bottom: '2px', left: 0, right: 0,
            margin: 0, textAlign: 'center',
            fontSize: '0.85rem', lineHeight: 1.3,
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
