import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Palette, Zap, Terminal } from 'lucide-react';

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
  const [glitchText, setGlitchText] = useState(false);
  const [scanLines, setScanLines] = useState(0);
  const [lightningFlash, setLightningFlash] = useState(false);
  const [codeRain, setCodeRain] = useState([]);
  const [hologramFlicker, setHologramFlicker] = useState(false);

  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Advanced mouse parallax transforms
  const parallaxX = useTransform(mouseXSpring, [0, 1], [-20, 20]);
  const parallaxY = useTransform(mouseYSpring, [0, 1], [-10, 10]);
  const rotateX = useTransform(mouseYSpring, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-5, 5]);

  // Enhanced flicker patterns with glitch effects
  useEffect(() => {
    const createAdvancedFlicker = () => {
      const patterns = [
        [150, 80, 120, 250, 100],
        [300, 150, 200],
        [80, 50, 100, 80, 150],
        [200, 100, 80, 200, 120, 90]
      ];
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      let delay = 0;
      
      pattern.forEach((duration, index) => {
        setTimeout(() => {
          setFlicker(true);
          if (Math.random() > 0.7) setGlitchText(true);
          if (Math.random() > 0.8) setLightningFlash(true);
          
          setTimeout(() => {
            setFlicker(false);
            setGlitchText(false);
            setLightningFlash(false);
          }, duration);
        }, delay);
        delay += duration + (index === 0 ? 100 : 50);
      });
    };
    
    const interval = setInterval(createAdvancedFlicker, Math.random() * 3500 + 2500);
    return () => clearInterval(interval);
  }, []);

  // Hologram effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHologramFlicker(true);
      setTimeout(() => setHologramFlicker(false), 200);
    }, Math.random() * 8000 + 5000);
    return () => clearInterval(interval);
  }, []);

  // Scan lines animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLines(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Badge flickers with enhanced timing
  useEffect(() => {
    const interval1 = setInterval(() => {
      setBadgeFlicker1(true);
      setTimeout(() => setBadgeFlicker1(false), 200);
    }, Math.random() * 4000 + 2500);

    const interval2 = setInterval(() => {
      setBadgeFlicker2(true);
      setTimeout(() => setBadgeFlicker2(false), 200);
    }, Math.random() * 4000 + 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Enhanced rain with electrical effects
  useEffect(() => {
    const createRainDrop = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      duration: Math.random() * 1.5 + 2.5,
      delay: Math.random() * 1.5,
      opacity: Math.random() * 0.8 + 0.3,
      isElectric: Math.random() > 0.85,
      thickness: Math.random() > 0.8 ? 'w-1' : 'w-0.5'
    });

    const interval = setInterval(() => {
      setRainDrops(prev => {
        const newDrops = [...prev, createRainDrop()];
        return newDrops.length > 25 ? newDrops.slice(-25) : newDrops;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Code rain effect
  useEffect(() => {
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const createCodeDrop = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      char: characters[Math.floor(Math.random() * characters.length)],
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.6 + 0.2
    });

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCodeRain(prev => {
          const newDrops = [...prev, createCodeDrop()];
          return newDrops.length > 15 ? newDrops.slice(-15) : newDrops;
        });
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Enhanced mouse tracking
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
        const newEffect = { 
          id: Math.random(), 
          x, 
          y, 
          timestamp: Date.now(),
          type: Math.random() > 0.5 ? 'electric' : 'neon'
        };
        setClickEffects(prev => [...prev, newEffect]);
        setTimeout(() => {
          setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
        }, 1500);
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
    <section ref={heroRef} id="home" className="relative min-h-screen w-full overflow-hidden bg-black pt-32 sm:pt-36 md:pt-40">
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-20">
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ top: `${scanLines}%` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 0.1, repeat: Infinity }}
        />
      </div>

      {/* Lightning Flash Overlay */}
      {lightningFlash && (
        <motion.div
          className="absolute inset-0 z-35 bg-white/10"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.15 }}
        />
      )}

      {/* Enhanced Edge Fades */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Background with advanced parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ x: parallaxX, y: parallaxY }}
        animate={{ 
          x: [0, -15, 0], 
          y: [0, -8, 0],
          scale: flicker ? [1, 1.02, 1] : [1, 1.01, 1]
        }}
        transition={{ 
          duration: flicker ? 0.2 : 25, 
          repeat: Infinity, 
          ease: flicker ? "easeInOut" : "linear" 
        }}
      >
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-200 ${
            flicker ? 'brightness-95 contrast-130 saturate-150' : 'brightness-45 contrast-115 saturate-120'
          }`}
          style={{
            backgroundImage: 'url(/pexels-daydream-753072845-30918259.jpg)',
            filter: `
              saturate(${flicker ? '1.5' : '1.2'}) 
              hue-rotate(${flicker ? '8deg' : '3deg'}) 
              brightness(${flicker ? '0.95' : '0.45'})
              ${glitchText ? 'blur(0.5px)' : ''}
            `,
          }}
        />
      </motion.div>

      {/* Enhanced Rain with Electrical Effects */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            className={`absolute ${drop.thickness} h-16 ${
              drop.isElectric 
                ? 'bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent shadow-lg shadow-cyan-400/50' 
                : 'bg-gradient-to-b from-transparent via-blue-200/40 to-transparent'
            }`}
            style={{ left: `${drop.x}%`, top: '-64px', opacity: drop.opacity }}
            animate={{ 
              y: [0, window.innerHeight + 70], 
              opacity: [0, drop.opacity, drop.opacity * 0.8, 0],
              x: drop.isElectric ? [0, Math.sin(Date.now()) * 2, 0] : [0, 1, 0]
            }}
            transition={{ duration: drop.duration, delay: drop.delay, ease: "linear" }}
          />
        ))}
      </div>

      {/* Code Rain */}
      <div className="absolute inset-0 z-6 pointer-events-none">
        {codeRain.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-green-300/60 text-sm font-mono"
            style={{ left: `${drop.x}%`, top: '-20px', opacity: drop.opacity }}
            animate={{ 
              y: [0, window.innerHeight + 30], 
              opacity: [0, drop.opacity, 0]
            }}
            transition={{ duration: drop.duration, delay: drop.delay, ease: "linear" }}
          >
            {drop.char}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Atmospheric Lighting */}
      <motion.div
        className="absolute inset-0 z-10 transition-all duration-300"
        style={{
          background: flicker
            ? `
              radial-gradient(ellipse 1600px 1000px at 50% 10%, rgba(255,240,180,0.6) 0%, rgba(255,235,160,0.35) 20%, rgba(255,230,140,0.2) 35%, rgba(255,225,120,0.12) 55%, transparent 80%),
              radial-gradient(ellipse 800px 600px at 20% 80%, rgba(0,255,127,0.15) 0%, rgba(0,255,127,0.08) 40%, transparent 70%),
              radial-gradient(ellipse 600px 400px at 80% 20%, rgba(255,69,0,0.12) 0%, rgba(255,69,0,0.06) 50%, transparent 80%)
            `
            : `
              radial-gradient(ellipse 1200px 800px at 50% 10%, rgba(255,240,180,0.3) 0%, rgba(255,235,160,0.18) 20%, rgba(255,230,140,0.12) 35%, rgba(255,225,120,0.06) 55%, transparent 80%),
              radial-gradient(ellipse 600px 400px at 25% 75%, rgba(0,255,127,0.08) 0%, rgba(0,255,127,0.04) 40%, transparent 70%),
              radial-gradient(ellipse 400px 300px at 75% 25%, rgba(255,69,0,0.06) 0%, rgba(255,69,0,0.03) 50%, transparent 80%)
            `
        }}
      />

      {/* Content Container with 3D Transform */}
      <motion.div 
        className="relative z-20 flex flex-col min-h-screen px-4 py-4 sm:px-6 sm:py-6"
        style={{ 
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100, rotateX: -10 }}
          animate={{ opacity: 1, y: -50, rotateX: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex justify-center mt-4 sm:mt-6 md:mt-8 flex-col items-center"
        >
          <div className="relative px-2 py-2 sm:px-4 sm:py-4">
            {/* Enhanced Main Title with Perfect Neon Effect using PNG */}
            <div className="relative text-center">
              <motion.img
                src="/Name (1).png"
                alt="Yusuf Sheikhali"
                className={`neon-image-main ${flicker ? 'flicker' : ''} ${glitchText ? 'glitch-effect' : ''}`}
                style={{ maxWidth: '25%', height: 'auto', margin: '0 auto', filter: 'drop-shadow(0 0 15px #FF6B35) drop-shadow(0 0 30px #FF4500)' }}
                animate={glitchText ? {
                  x: [0, -2, 2, -1, 1, 0],
                } : {}}
                transition={{ duration: 0.15 }}
              />
              {hologramFlicker && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              )}
            </div>

            {/* Enhanced Subtitle with Perfect Neon using PNGs side by side */}
            <motion.div
              className={`neon-image-subtitle ${flicker ? 'flicker' : ''} text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.1em] text-center whitespace-nowrap transition-all duration-200 mt-1 sm:mt-2 flex justify-center gap-0 sm:gap-1 relative uppercase`}
            >
              <motion.span 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50" 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    '0 0 5px rgba(0, 255, 127, 0.5)',
                    '0 0 20px rgba(0, 255, 127, 0.8)',
                    '0 0 5px rgba(0, 255, 127, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.img
                src="/AlwaysOpen (1).png"
                alt="Always Open"
                className="inline-block"
                style={{ maxWidth: '20%', height: 'auto', filter: 'drop-shadow(0 0 15px #00FF7F) drop-shadow(0 0 30px #32CD32)' }}
              />
              <motion.img
                src="/AlwaysCoding (1).png"
                alt="Always Coding"
                className="inline-block"
                style={{ maxWidth: '20%', height: 'auto', filter: 'drop-shadow(0 0 15px #00FF7F) drop-shadow(0 0 30px #32CD32)' }}
              />
              <motion.span 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50" 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    '0 0 5px rgba(0, 255, 127, 0.5)',
                    '0 0 20px rgba(0, 255, 127, 0.8)',
                    '0 0 5px rgba(0, 255, 127, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            {/* Welcome Text with Perfect Neon using PNG */}
            <div className="relative text-center mt-1 sm:mt-2">
              <motion.img
                src="/Slogan (1).png"
                alt="Welcome to my digital space"
                className={`neon-image-welcome ${flicker ? 'flicker' : ''} ${glitchText ? 'glitch-effect' : ''}`}
                style={{ maxWidth: '25%', height: 'auto', margin: '0 auto', filter: 'drop-shadow(0 0 15px #DA291C) drop-shadow(0 0 30px #FF4500)' }}
                animate={glitchText ? {
                  x: [0, -2, 2, -1, 1, 0],
                } : {}}
                transition={{ duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm mt-8 sm:mt-12 md:mt-16"
        >
          {/* Enhanced Professional Badges */}
          <motion.div 
            className="relative flex items-center gap-1 sm:gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-full border-2 border-[#FF6720]/70 bg-black/20 backdrop-blur-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6720]" />
            <span className="text-gray-100 font-semibold">Full Stack Developer</span>
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              animate={{ 
                borderColor: badgeFlicker1 ? 'rgba(255, 103, 32, 1)' : 'rgba(255, 103, 32, 0.7)',
                boxShadow: badgeFlicker1 
                  ? '0 0 25px rgba(255, 103, 32, 0.9), inset 0 0 25px rgba(255, 103, 32, 0.2)' 
                  : '0 0 15px rgba(255, 103, 32, 0.5), inset 0 0 15px rgba(255, 103, 32, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            />
            <Zap className="absolute -top-1 -right-1 w-3 h-3 text-[#FF6720]/70 opacity-70" />
          </motion.div>
          
          <motion.div 
            className="relative flex items-center gap-1 sm:gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-full border-2 border-[#007A53]/70 bg-black/20 backdrop-blur-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A53]" />
            <span className="text-gray-100 font-semibold">UI/UX Designer</span>
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              animate={{ 
                borderColor: badgeFlicker2 ? 'rgba(0, 122, 83, 1)' : 'rgba(0, 122, 83, 0.7)',
                boxShadow: badgeFlicker2 
                  ? '0 0 25px rgba(0, 122, 83, 0.9), inset 0 0 25px rgba(0, 122, 83, 0.2)' 
                  : '0 0 15px rgba(0, 122, 83, 0.5), inset 0 0 15px rgba(0, 122, 83, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            />
            <Terminal className="absolute -top-1 -right-1 w-3 h-3 text-[#007A53]/70 opacity-70" />
          </motion.div>

          <motion.div 
            className="relative flex items-center gap-1 sm:gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-full border-2 border-[#DA291C]/70 bg-black/20 backdrop-blur-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#DA291C]" />
            <span className="text-gray-100 font-semibold">Creative Technologist</span>
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              animate={{ 
                borderColor: badgeFlicker1 ? 'rgba(218, 41, 28, 1)' : 'rgba(218, 41, 28, 0.7)',
                boxShadow: badgeFlicker1 
                  ? '0 0 25px rgba(218, 41, 28, 0.9), inset 0 0 25px rgba(218, 41, 28, 0.2)' 
                  : '0 0 15px rgba(218, 41, 28, 0.5), inset 0 0 15px rgba(218, 41, 28, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            />
            <Code className="absolute -top-1 -right-1 w-3 h-3 text-[#DA291C]/70 opacity-70" />
          </motion.div>
        </motion.div>

        <div className="flex-1" />
      </motion.div>

      {/* Enhanced Floating Skill Icons */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {Object.entries(skillIcons).slice(0, 12).map(([skill, src], i) => (
          <motion.div
            key={skill}
            className="absolute"
            style={{
              top: `${45 + Math.sin(i * 0.8) * 25}%`,
              left: i * 9 - 120 + '%',
            }}
          >
            <motion.img
              src={src}
              alt={`${skill} icon`}
              className="w-11 h-11 opacity-0 filter drop-shadow-lg"
              animate={{
                x: [0, window.innerWidth + 100, 0],
                opacity: [0, 0.8, 0.6, 0.8, 0],
                scale: [0.8, 1.1, 1, 1.1, 0.8],
                rotate: [0, 360]
              }}
              transition={{
                duration: 12 + i * 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
            
            {/* Skill icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Click Effects */}
      {clickEffects.map((effect) => (
        <div key={effect.id}>
          <motion.div
            className={`absolute rounded-full ${
              effect.type === 'electric' 
                ? 'bg-cyan-400/60 shadow-lg shadow-cyan-400/50' 
                : 'bg-orange-400/60 shadow-lg shadow-orange-400/50'
            }`}
            style={{ left: effect.x - 20, top: effect.y - 20, width: 40, height: 40 }}
            animate={{ 
              scale: [1, 3, 0], 
              opacity: [1, 0.7, 0],
              rotate: [0, 180]
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          {/* Ripple effect */}
          <motion.div
            className="absolute border-2 border-white/30 rounded-full"
            style={{ left: effect.x - 10, top: effect.y - 10, width: 20, height: 20 }}
            animate={{ 
              scale: [1, 8], 
              opacity: [0.8, 0]
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      ))}
    </section>
  );
};

export default Hero;