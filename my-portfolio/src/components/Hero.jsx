import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Code, Palette } from 'lucide-react';

const skillIcons = {
  'React': '/react.png',
  'Angular': '/angular.png',
  'JavaScript': '/javascript.png',
  'Python': '/python.png',
  'Docker': '/docker.png',
  'Git': '/git.png',
  'Flutter': '/flutter.svg',
  'MongoDB': '/mongo.png',
  'PostgreSQL': '/postgre.png',
  'MySQL': '/mysql.png',
  'VS Code': '/vscode.png',
  'Swift': '/swift.png',
  'Kotlin': '/Kotlin.png',
  'Java': '/java.svg',
  'C++': '/c++.png',
  'C#': '/csharp.png',
  'AWS': '/aws.png',
  'Google Firestore': '/firestore.png',
  'Linux': '/linux.png',
  'Windows': '/windows.png',
  'macOS': '/macos.png',
  'Pandas': '/pandas.png',
  'NumPy': '/numpy.svg',
  'Postman': '/postman.png',
  'VM Ware': '/vmware.png',
  'UNIX': '/unix.svg',
};

const Hero = () => {
  const [flicker, setFlicker] = useState(false);
  const [badgeFlicker1, setBadgeFlicker1] = useState(false);
  const [badgeFlicker2, setBadgeFlicker2] = useState(false);
  const [rainDrops, setRainDrops] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clickEffects, setClickEffects] = useState([]);

  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const createFlickerPattern = () => {
      const patterns = [
        [200, 100, 150, 300],
        [400, 200],
        [100],
        [250, 150, 100, 200]
      ];
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      let delay = 0;
      pattern.forEach((duration) => {
        setTimeout(() => {
          setFlicker(true);
          setTimeout(() => setFlicker(false), duration);
        }, delay);
        delay += duration + 50;
      });
    };
    const interval = setInterval(createFlickerPattern, Math.random() * 4000 + 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setBadgeFlicker1(true);
      setTimeout(() => setBadgeFlicker1(false), 150);
    }, Math.random() * 3500 + 2000);

    const interval2 = setInterval(() => {
      setBadgeFlicker2(true);
      setTimeout(() => setBadgeFlicker2(false), 150);
    }, Math.random() * 3500 + 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  useEffect(() => {
    const createRainDrop = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      duration: Math.random() * 2 + 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.6 + 0.2
    });

    const interval = setInterval(() => {
      setRainDrops(prev => {
        const newDrops = [...prev, createRainDrop()];
        return newDrops.length > 20 ? newDrops.slice(-20) : newDrops;
      });
    }, 600); // Slowed down from 300ms to 600ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleClick = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newEffect = { id: Math.random(), x, y, timestamp: Date.now() };
        setClickEffects(prev => [...prev, newEffect]);
        setTimeout(() => {
          setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
        }, 1000);
      }
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      heroEl.addEventListener('click', handleClick);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('click', handleClick);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Edge and Bottom Fade Effect */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />
        <div
          className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-black/60 via-black/20 to-transparent"
        />
        <div
          className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-black/60 via-black/20 to-transparent"
        />
      </div>

      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`w-[120%] h-[120%] bg-cover bg-center bg-no-repeat transition-all duration-200 ${
            flicker ? 'brightness-90 contrast-125' : 'brightness-50 contrast-110'
          }`}
          style={{
            backgroundImage: 'url(/7-11.jpg)',
            filter: `saturate(1.3) hue-rotate(5deg) ${flicker ? 'brightness(0.9)' : 'brightness(0.5)'}`,
          }}
        />
      </motion.div>

      {/* Rain */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute w-0.5 h-12 bg-gradient-to-b from-transparent via-blue-200/40 to-transparent"
            style={{ left: `${drop.x}%`, top: '-48px', opacity: drop.opacity }}
            animate={{ y: [0, window.innerHeight + 50], opacity: [0, drop.opacity, 0] }}
            transition={{ duration: drop.duration, delay: drop.delay, ease: "linear" }}
          />
        ))}
      </div>

      {/* Lighting */}
      <motion.div
        className="absolute inset-0 z-10 transition-all duration-200"
        style={{
          background: flicker
            ? `radial-gradient(ellipse 1400px 900px at 50% 15%, rgba(255,240,180,0.5) 0%, rgba(255,235,160,0.3) 25%, rgba(255,230,140,0.18) 40%, rgba(255,225,120,0.1) 60%, transparent 85%)`
            : `radial-gradient(ellipse 1000px 700px at 50% 15%, rgba(255,240,180,0.25) 0%, rgba(255,235,160,0.15) 25%, rgba(255,230,140,0.1) 40%, rgba(255,225,120,0.05) 60%, transparent 85%)`
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen px-4 py-4 sm:px-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mt-12 sm:mt-16 md:mt-20 flex-col items-center"
        >
          <div className="relative px-2 py-4 sm:px-4 sm:py-6">
            <motion.h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[0.15em] text-center whitespace-nowrap transition-all duration-200 ${
                flicker ? 'brightness-150 scale-105' : ''
              }`}
              style={{
                color: 'transparent',
                textShadow: flicker
                  ? '0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 20px #FF4500, 0 0 40px #FF4500'
                  : '0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 20px #FF4500',
                WebkitTextStroke: '0.5px #FF4500',
                fontFamily: "'Overcame Demo Outline', 'Arial Black', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Yusuf Sheikhali
            </motion.h1>

            <motion.div
              className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.1em] text-center whitespace-nowrap transition-all duration-200 mt-2 sm:mt-3 md:mt-4 flex items-center gap-1 sm:gap-2 ${
                flicker ? 'brightness-150 scale-105' : ''
              }`}
              style={{
                color: 'transparent',
                textShadow: flicker
                  ? '0 0 5px #00FF7F, 0 0 10px #00FF7F, 0 0 20px #00FF7F, 0 0 40px #00FF7F'
                  : '0 0 5px #00FF7F, 0 0 10px #00FF7F, 0 0 20px #00FF7F',
                WebkitTextStroke: '0.25px #00FF7F',
                fontFamily: "'Overcame Demo Outline', 'Arial Black', sans-serif'",
                textTransform: 'uppercase'
              }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
              Always Open / Always Coding
            </motion.div>

            {/* Badges moved under and aligned left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm mt-2 sm:mt-4 ml-0 sm:ml-[-20px]"
            >
              <div className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-2 rounded-full border-2 border-orange-400/60 bg-transparent backdrop-blur-md">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span className="text-gray-100 font-semibold">Full Stack Developer</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: badgeFlicker1 ? '0 0 20px rgba(255, 69, 0, 0.8)' : '0 0 8px rgba(255, 69, 0, 0.4)' }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-2 rounded-full border-2 border-yellow-400/60 bg-transparent backdrop-blur-md">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="text-gray-100 font-semibold">UI/UX Designer</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: badgeFlicker2 ? '0 0 20px rgba(255, 255, 0, 0.8)' : '0 0 8px rgba(255, 255, 0, 0.4)' }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex-1" />
      </div>

      {/* Floating particles - now 12 */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 4 === 0 ? 'bg-orange-300' : 
              i % 4 === 1 ? 'bg-yellow-300' : 
              i % 4 === 2 ? 'bg-red-400' : 'bg-amber-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -30, -60],
              x: [0, Math.sin(i) * 20, Math.cos(i) * 15]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              repeatDelay: 2 + i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating Skill Icons */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {Object.entries(skillIcons).map(([skill, src], i) => (
          <motion.img
            key={skill}
            src={src}
            alt={`${skill} icon`}
            className="absolute w-6 h-6 opacity-70"
            style={{
              top: `${50 + Math.sin(i * 0.5) * 20}%`, // Vertical offset with wave-like spacing
              left: i * 8 - 100 + '%', // Initial horizontal stagger off-screen left
            }}
            animate={{
              x: [0, window.innerWidth, 0], // Wave in and out horizontally
              opacity: [0, 1, 0], // Fade in and out
            }}
            transition={{
              duration: 10 + i * 1, // Staggered duration for wave effect
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Click Effects */}
      {clickEffects.map((effect) => (
        <motion.div
          key={effect.id}
          className="absolute w-8 h-8 rounded-full bg-orange-400/50"
          style={{ left: effect.x - 16, top: effect.y - 16 }}
          animate={{ scale: [1, 2, 0], opacity: [1, 0.5, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </section>
  );
};

export default Hero;