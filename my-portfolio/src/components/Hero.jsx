import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

// Liquid Gradient Background (CSS gradients version)
const LiquidGradientBackground = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        '--x': 'calc(var(--posX, 0) * 1px)',
        '--y': 'calc(var(--posY, 0) * 1px)',
        backgroundImage: `
          linear-gradient(115deg, #d3ffd7, #000),
          radial-gradient(90% 100% at calc(50% + var(--x)) calc(0% + var(--y)), #c8c8c8, #16002d),
          radial-gradient(100% 100% at calc(80% - var(--x)) calc(0% - var(--y)), #faff00, #240000),
          radial-gradient(150% 210% at calc(100% + var(--x)) calc(0% + var(--y)), #14af7d, #000aff),
          radial-gradient(100% 100% at calc(100% - var(--x)) calc(30% - var(--y)), #ff4d00, #00c8ff),
          linear-gradient(60deg, red, #7856ff)
        `,
        backgroundBlendMode: 'overlay, overlay, difference, difference, difference, normal',
      }}
    />
  );
};

// Text reveal animation component
const TextReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="overflow-hidden"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clickEffects, setClickEffects] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePos({ x, y });

      document.documentElement.style.setProperty('--posX', x);
      document.documentElement.style.setProperty('--posY', y);
    }
  }, []);

  const handleClick = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newEffect = { id: Math.random(), x, y, timestamp: Date.now() };
      setClickEffects((prev) => [...prev.slice(-4), newEffect]);
      setTimeout(() => {
        setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (heroEl && mounted) {
      heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
      heroEl.addEventListener('click', handleClick);
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('click', handleClick);
      }
    };
  }, [handleMouseMove, handleClick, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black pl-0 md:pl-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Liquid Gradient Background */}
      <LiquidGradientBackground />

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Name */}
          <div className="relative mb-8">
            <TextReveal delay={0.2}>
              <motion.h1
                className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontWeight: 900,
                  background: `
                    linear-gradient(135deg, 
                      #ffffff 0%,
                      #f0f0f0 15%,
                      #e0e0e0 30%,
                      #ffffff 45%,
                      #f5f5f5 60%,
                      #ffffff 75%,
                      #e8e8e8 90%,
                      #ffffff 100%
                    )
                  `,
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'contrast(1.1) brightness(1.1)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                YUSUF
                <br />
                <span 
                  className="block"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        #ffffff 0%,
                        #f8f8f8 20%,
                        #e5e5e5 40%,
                        #ffffff 60%,
                        #f0f0f0 80%,
                        #ffffff 100%
                      )
                    `,
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  SHEIKHALI
                </span>
              </motion.h1>
            </TextReveal>
            
            {/* Subtle underline */}
            <motion.div
              className="mx-auto mt-6 relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
          
          {/* Status Indicator */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="w-3 h-3 rounded-full shadow-lg"
                style={{
                  background: 'radial-gradient(circle, #00ff88 0%, #00cc6a 100%)',
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.6)',
                }}
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest"
                style={{
                  background: 'linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AVAILABLE • CREATING • INNOVATING
              </motion.span>
              <motion.div
                className="w-3 h-3 rounded-full shadow-lg"
                style={{
                  background: 'radial-gradient(circle, #00ff88 0%, #00cc6a 100%)',
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.6)',
                }}
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {[
              { icon: Code, text: 'Full Stack Developer', borderColor: 'rgba(168, 85, 247, 0.5)', iconColor: '#a855f7' },
              { icon: Palette, text: 'UI/UX Designer', borderColor: 'rgba(236, 72, 153, 0.5)', iconColor: '#ec4899' },
              { icon: Zap, text: 'Creative Technologist', borderColor: 'rgba(6, 182, 212, 0.5)', iconColor: '#06b6d4' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="group relative"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: `0 10px 40px ${item.borderColor.replace('0.5', '0.3')}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.2) }}
              >
                <div 
                  className="absolute -inset-1 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${item.borderColor.replace('0.5', '0.2')}, ${item.borderColor.replace('0.5', '0.2')})`,
                  }}
                />
                <motion.div
                  className="relative flex items-center gap-3 px-6 py-3 rounded-full border-2 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors relative overflow-hidden group"
                  style={{
                    borderColor: item.borderColor,
                  }}
                  animate={{
                    borderColor: [
                      item.borderColor,
                      item.borderColor.replace('0.5', '0.8'),
                      item.borderColor,
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.borderColor.replace('0.5', '0.2')}, transparent)`,
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <item.icon 
                    className="w-5 h-5 relative z-10"
                    style={{ color: item.iconColor }}
                  />
                  <span className="text-white font-medium relative z-10">
                    {item.text}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced click effects */}
      {clickEffects.map((effect) => (
        <React.Fragment key={effect.id}>
          <motion.div
            className="absolute rounded-full pointer-events-none z-30 border-2"
            style={{
              left: effect.x - 25,
              top: effect.y - 25,
              width: 50,
              height: 50,
              borderColor: 'rgba(255, 255, 255, 0.6)',
            }}
            animate={{ 
              scale: [1, 6], 
              opacity: [1, 0],
              borderColor: [
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0)',
              ]
            }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none z-30"
            style={{
              left: effect.x - 15,
              top: effect.y - 15,
              width: 30,
              height: 30,
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            }}
            animate={{ 
              scale: [1, 3, 0], 
              opacity: [1, 0.7, 0],
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`sparkle-${effect.id}-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-30"
              style={{
                left: effect.x + (Math.random() - 0.5) * 100,
                top: effect.y + (Math.random() - 0.5) * 100,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
              }}
              transition={{
                duration: 1.5,
                ease: 'easeOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </motion.section>
  );
};

export default Hero;