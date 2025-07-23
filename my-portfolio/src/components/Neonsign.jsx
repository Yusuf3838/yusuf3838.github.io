import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeonSign = () => {
  const [isOn, setIsOn] = useState(true);
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    // Main power on/off cycle
    const powerInterval = setInterval(() => {
      setIsOn(prev => !prev);
      // Turn back on after 200ms
      setTimeout(() => setIsOn(true), 200);
    }, 8000);

    // Random flickering effect
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.95 && isOn) {
        setIsFlickering(true);
        setTimeout(() => setIsFlickering(false), 100);
      }
    }, 100);

    return () => {
      clearInterval(powerInterval);
      clearInterval(flickerInterval);
    };
  }, [isOn]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Main neon sign */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative p-16 w-full"
      >
        <div className="relative">
          {/* Ambient glow effect */}
          <div className={`absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transition-opacity duration-300
            ${isOn ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Main sign container */}
          <div className="relative rounded-2xl p-12">
            <div className="flex flex-col items-center">
              {/* Outer frame */}
              <div className={`relative border-4 border-transparent p-12 rounded-xl
                ${isOn ? 'shadow-[0_0_40px_rgba(96,165,250,0.4)]' : ''}`}>
                
                {/* Blue outline container */}
                <div className={`absolute inset-0 transition-opacity duration-300
                  ${isOn ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Vertical lines */}
                  <div className="h-full w-[2px] bg-blue-400 blur-[1px] absolute left-0 rounded-full shadow-[0_0_15px_#60A5FA]" />
                  <div className="h-full w-[2px] bg-blue-400 blur-[1px] absolute right-0 rounded-full shadow-[0_0_15px_#60A5FA]" />
                  {/* Horizontal lines */}
                  <div className="w-full h-[2px] bg-blue-400 blur-[1px] absolute top-0 rounded-full shadow-[0_0_15px_#60A5FA]" />
                  <div className="w-full h-[2px] bg-blue-400 blur-[1px] absolute bottom-0 rounded-full shadow-[0_0_15px_#60A5FA]" />
                </div>

                {/* OPEN text */}
                <div className="relative">
                  <div 
                    className={`text-8xl md:text-9xl font-light tracking-wider py-8 px-12
                      transition-all duration-300 font-sans
                      ${isOn ? 'opacity-100' : 'opacity-0'}
                      ${isFlickering ? 'opacity-80' : ''}
                      text-red-500`}
                    style={{
                      textShadow: isOn ? `
                        0 0 7px #EF4444,
                        0 0 10px #EF4444,
                        0 0 21px #EF4444,
                        0 0 42px rgba(239,68,68,0.75),
                        0 0 82px rgba(239,68,68,0.5)
                      ` : 'none',
                      letterSpacing: '0.15em'
                    }}
                  >
                    OPEN
                  </div>

                  {/* 24/7 text */}
                  <div 
                    className={`absolute -right-4 top-0 text-4xl md:text-5xl font-light
                      transition-all duration-300
                      ${isOn ? 'opacity-100' : 'opacity-0'}
                      text-pink-500`}
                    style={{
                      textShadow: isOn ? `
                        0 0 7px #EC4899,
                        0 0 10px #EC4899,
                        0 0 21px #EC4899,
                        0 0 42px rgba(236,72,153,0.75)
                      ` : 'none',
                      letterSpacing: '0.1em'
                    }}
                  >
                    24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NeonSign;