import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

// Optimized Liquid Gradient Background with defined colors
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

// Enhanced text reveal with stagger effect
const TextReveal = ({ children, delay = 0, stagger = false }) => {
  if (stagger && React.Children.count(children) > 1) {
    return (
      <div className="overflow-hidden">
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (index * 0.1),
              ease: "easeOut" 
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

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
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
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

  useEffect(() => {
    const heroEl = heroRef.current;
    if (heroEl && mounted) {
      heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove, mounted]);

  if (!mounted) {
    return (
      <div className="snap-start snap-always min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
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
      className="snap-start snap-always relative min-h-screen w-full overflow-hidden bg-black pl-0 md:pl-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Enhanced Liquid Gradient Background */}
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
          {/* Enhanced Main Name with letter animations */}
          <div className="relative mb-8">
            <TextReveal delay={0.2}>
              <motion.h1
                className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
                style={{
                  lineHeight: '0.8',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontWeight: 900,
                }}
              >
                {/* YUSUF with optimized text gradient */}
                <motion.span
                  className="block"
                  style={{
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
                </motion.span>
                
                {/* SHEIKHALI with optimized text gradient */}
                <motion.span 
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
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  SHEIKHALI
                </motion.span>
              </motion.h1>
            </TextReveal>
            
            {/* Enhanced underline with pulse effect */}
            <motion.div
              className="mx-auto mt-6 relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              style={{ height: '3px' }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                }}
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    'linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)',
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                  width: '30%',
                }}
                animate={{ x: ['-100%', '300%'] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
          
          {/* Enhanced Status Indicator with breathing effect */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.2, 1], 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #00ff88 0%, #00cc6a 100%)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 136, 0.4)',
                      '0 0 30px rgba(0, 255, 136, 0.8)',
                      '0 0 10px rgba(0, 255, 136, 0.4)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{ 
                    scale: [1, 2.5, 1], 
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.span
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest relative"
                style={{
                  background: 'linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
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
                <motion.div
                  className="absolute -inset-1 rounded-lg opacity-0"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                  }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.span>
              
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.2, 1], 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #00ff88 0%, #00cc6a 100%)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 136, 0.4)',
                      '0 0 30px rgba(0, 255, 136, 0.8)',
                      '0 0 10px rgba(0, 255, 136, 0.4)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{ 
                    scale: [1, 2.5, 1], 
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced Skills Tags with improved hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {[
              { icon: Code, text: 'Full Stack Developer', borderColor: 'rgba(168, 85, 247, 0.5)', iconColor: '#a855f7', glowColor: '#a855f7' },
              { icon: Palette, text: 'UI/UX Designer', borderColor: 'rgba(236, 72, 153, 0.5)', iconColor: '#ec4899', glowColor: '#ec4899' },
              { icon: Zap, text: 'Creative Technologist', borderColor: 'rgba(6, 182, 212, 0.5)', iconColor: '#06b6d4', glowColor: '#06b6d4' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="group relative"
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.2) }}
              >
                {/* Enhanced glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur-lg"
                  style={{
                    background: `radial-gradient(circle, ${item.glowColor}40, transparent 70%)`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="relative flex items-center gap-3 px-6 py-3 rounded-full border-2 bg-black/20 backdrop-blur-sm group overflow-hidden"
                  style={{
                    borderColor: item.borderColor,
                  }}
                  animate={{
                    borderColor: [
                      item.borderColor,
                      item.borderColor.replace('0.5', '0.8'),
                      item.borderColor,
                    ],
                    backgroundColor: [
                      'rgba(0, 0, 0, 0.2)',
                      'rgba(0, 0, 0, 0.1)',
                      'rgba(0, 0, 0, 0.2)',
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.7,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderColor: item.borderColor.replace('0.5', '1'),
                  }}
                >
                  {/* Animated background sweep */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.borderColor.replace('0.5', '0.3')}, transparent)`,
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  {/* Enhanced icon with rotation on hover */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon 
                      className="w-5 h-5 relative z-10"
                      style={{ color: item.iconColor }}
                    />
                  </motion.div>
                  
                  {/* Enhanced text with letter spacing animation */}
                  <motion.span 
                    className="text-white font-medium relative z-10"
                    whileHover={{
                      letterSpacing: '0.05em',
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.text}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle edge enhancement */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: `
            linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 20%),
            linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 15%),
            linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 10%),
            linear-gradient(270deg, rgba(0,0,0,0.4) 0%, transparent 10%)
          `,
        }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
};

export default Hero;