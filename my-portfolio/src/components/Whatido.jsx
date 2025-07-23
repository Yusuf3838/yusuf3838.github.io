import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, Palette } from 'lucide-react';

const SkillCard = React.memo(({ icon: Icon, title, points, index }) => {
  const [cardFlicker, setCardFlicker] = useState(false);
  
  // Memoize color configurations
  const colorConfig = useMemo(() => {
    const glowColors = {
      0: 'from-orange-400/30 via-yellow-300/40 to-orange-400/30',
      1: 'from-green-400/30 via-lime-300/40 to-green-400/30',
      2: 'from-blue-400/30 via-cyan-300/40 to-blue-400/30',
      3: 'from-pink-400/30 via-purple-300/40 to-pink-400/30'
    };

    const borderColors = {
      0: 'border-orange-400/60',
      1: 'border-green-400/60', 
      2: 'border-blue-400/60',
      3: 'border-pink-400/60'
    };

    const iconColors = {
      0: 'text-orange-400',
      1: 'text-green-400',
      2: 'text-blue-400', 
      3: 'text-pink-400'
    };

    return {
      glow: glowColors[index],
      border: borderColors[index],
      icon: iconColors[index]
    };
  }, [index]);

  // Optimized flicker effect
  useEffect(() => {
    const flickerDelay = 3000 + Math.random() * 4000 + (index * 500);
    
    const interval = setInterval(() => {
      setCardFlicker(true);
      const timeout = setTimeout(() => setCardFlicker(false), 150);
      return () => clearTimeout(timeout);
    }, flickerDelay);

    return () => clearInterval(interval);
  }, [index]);

  // Memoize animation variants
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.2, duration: 0.8 }
  }), [index]);

  return (
    <motion.div
      initial={cardVariants.initial}
      whileInView={cardVariants.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={cardVariants.transition}
      className="relative group"
    >
      <div 
        className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-200 ${
          cardFlicker 
            ? `bg-gradient-to-r ${colorConfig.glow} opacity-100 scale-110` 
            : `bg-gradient-to-r ${colorConfig.glow} opacity-60`
        }`} 
      />
      
      <div className={`relative bg-black/80 backdrop-blur-sm border ${colorConfig.border} rounded-xl p-6 hover:bg-black/90 transition-all duration-300 group-hover:scale-105`}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-black/60 backdrop-blur-sm border ${colorConfig.border}`}>
            <Icon className={`w-6 h-6 ${colorConfig.icon}`} />
          </div>
          <h3 className={`text-xl font-bold tracking-wide ${colorConfig.icon}`} style={{
            textShadow: `0 0 10px currentColor, 0 0 20px currentColor`,
            fontFamily: "'Arial Black', sans-serif"
          }}>
            {title}
          </h3>
        </div>

        <ul className="space-y-4">
          {points.map((point, pointIndex) => (
            <motion.li 
              key={pointIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index * 0.2) + (pointIndex * 0.1) + 0.3 }}
              className="text-gray-200 flex items-start gap-3 text-sm leading-relaxed"
            >
              <span className={`${colorConfig.icon} mt-1 font-bold`} style={{
                textShadow: `0 0 5px currentColor`
              }}>⚡</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        <div 
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-200 ${
            cardFlicker ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: cardFlicker ? 'scan 0.5s ease-in-out' : 'none'
          }}
        />
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

// Memoized floating particle component
const FloatingParticle = React.memo(({ className, delay, duration }) => (
  <motion.div 
    className={`absolute w-1 h-1 rounded-full ${className}`}
    animate={{ 
      opacity: [0, 1, 0], 
      scale: [0, 1.5, 0],
      y: [0, -30, -60]
    }}
    transition={{ duration, repeat: Infinity, repeatDelay: delay }}
  />
));

FloatingParticle.displayName = 'FloatingParticle';

const WhatIDo = () => {
  const [sectionFlicker, setSectionFlicker] = useState(false);

  // Optimized section flicker
  useEffect(() => {
    const flickerDelay = 4000 + Math.random() * 6000;
    
    const interval = setInterval(() => {
      setSectionFlicker(true);
      const timeout = setTimeout(() => setSectionFlicker(false), 200);
      return () => clearTimeout(timeout);
    }, flickerDelay);

    return () => clearInterval(interval);
  }, []);

  // Memoize skills data
  const skills = useMemo(() => [
    {
      icon: Brain,
      title: 'Data Science & AI',
      points: [
        'Developing highly scalable production-ready models for various deep learning and statistical use cases',
        'Experience working with Computer Vision and NLP projects',
        'Complex quantitative modeling for dynamic forecasting and time series analysis',
      ],
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      points: [
        'Building responsive website front ends using React and Redux',
        'Developing mobile applications using Flutter, React Native, and Kotlin',
        'Creating application backends in Node, Express, and Flask',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Infra-Architecture',
      points: [
        'Experience working on multiple cloud platforms',
        'Hosting and maintaining websites on virtual machine instances with database integration',
        'Deploying deep learning models on the cloud for mobile devices',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      points: [
        'Designing highly attractive user interfaces for mobile and web applications',
        'Customizing logo designs and building logos from scratch',
        'Creating application flow to optimize user experience',
      ],
    },
  ], []);

  // Memoize background styles
  const backgroundStyles = useMemo(() => ({
    grid: {
      backgroundImage: `
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    },
    gradient: sectionFlicker 
      ? 'radial-gradient(ellipse 1000px 600px at 30% 40%, rgba(255,165,0,0.15) 0%, rgba(255,215,0,0.1) 30%, transparent 70%), radial-gradient(ellipse 800px 400px at 70% 60%, rgba(0,255,127,0.1) 0%, rgba(50,255,150,0.05) 40%, transparent 80%)'
      : 'radial-gradient(ellipse 800px 500px at 30% 40%, rgba(255,165,0,0.08) 0%, rgba(255,215,0,0.05) 30%, transparent 70%), radial-gradient(ellipse 600px 300px at 70% 60%, rgba(0,255,127,0.06) 0%, rgba(50,255,150,0.03) 40%, transparent 80%)'
  }), [sectionFlicker]);

  // Memoized floating particles data
  const particles = useMemo(() => [
    { className: "top-1/4 left-1/5 bg-orange-300", delay: 4, duration: 5 },
    { className: "top-3/4 right-1/4 bg-green-300", delay: 2.5, duration: 4.5 },
    { className: "top-1/2 right-1/3 bg-blue-300", delay: 1.5, duration: 6 }
  ], []);

  return (
    <section id="what-i-do" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen w-full overflow-hidden bg-black">
      <div 
        className={`absolute inset-0 transition-all duration-200 ${
          sectionFlicker ? 'opacity-40' : 'opacity-20'
        }`}
        style={backgroundStyles.grid}
      />

      <div 
        className={`absolute inset-0 transition-all duration-200 ${
          sectionFlicker ? 'opacity-100' : 'opacity-70'
        }`}
        style={{ background: backgroundStyles.gradient }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <div 
              className={`absolute -inset-6 rounded-2xl blur-2xl transition-all duration-200 ${
                sectionFlicker 
                  ? 'bg-gradient-to-r from-orange-400/40 via-green-300/50 to-orange-400/40 opacity-100 scale-110' 
                  : 'bg-gradient-to-r from-orange-400/20 via-green-300/30 to-orange-400/20 opacity-80'
              }`} 
            />
            
            <h2 className={`relative text-4xl font-bold mb-6 transition-all duration-200 ${
              sectionFlicker ? 'brightness-150 scale-105' : ''
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                What I Do
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(200px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default WhatIDo;