import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactIcon = ({ href, icon: Icon, label, index }) => {
  const [iconFlicker, setIconFlicker] = useState(false);

  // Random flicker effect for each icon
  useEffect(() => {
    const interval = setInterval(() => {
      setIconFlicker(true);
      setTimeout(() => setIconFlicker(false), 150);
    }, Math.random() * 4000 + 3000 + (index * 800));

    return () => clearInterval(interval);
  }, [index]);

  const glowColors = {
    0: 'from-orange-400/30 via-yellow-300/40 to-orange-400/30', // Mail - orange
    1: 'from-green-400/30 via-lime-300/40 to-green-400/30',     // GitHub - green
    2: 'from-blue-400/30 via-cyan-300/40 to-blue-400/30'       // LinkedIn - blue
  };

  const borderColors = {
    0: 'border-orange-400/60',
    1: 'border-green-400/60',
    2: 'border-blue-400/60'
  };

  const iconColors = {
    0: 'text-orange-400',
    1: 'text-green-400',
    2: 'text-blue-400'
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Outer glow that flickers */}
      <div 
        className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-200 ${
          iconFlicker 
            ? `bg-gradient-to-r ${glowColors[index]} opacity-100 scale-110` 
            : `bg-gradient-to-r ${glowColors[index]} opacity-60`
        }`} 
      />
      
      {/* Icon container */}
      <div className={`relative p-4 rounded-xl bg-black/80 backdrop-blur-sm border ${borderColors[index]} hover:bg-black/90 transition-all duration-300 group-hover:scale-105`}>
        <Icon className={`w-8 h-8 ${iconColors[index]} transition-all duration-300`} style={{
          filter: iconFlicker ? 'drop-shadow(0 0 10px currentColor)' : 'none'
        }} />
        
        {/* Lightning bolt indicator */}
        <span className={`absolute -top-1 -right-1 ${iconColors[index]} opacity-0 group-hover:opacity-100 transition-opacity text-xs`}>
          ⚡
        </span>

        {/* Scan line effect */}
        <div 
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-200 ${
            iconFlicker ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: iconFlicker ? 'scan 0.5s ease-in-out' : 'none'
          }}
        />
      </div>

      {/* Label */}
      <motion.span 
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold ${iconColors[index]} opacity-0 group-hover:opacity-100 transition-all duration-300`}
        style={{
          textShadow: '0 0 5px currentColor'
        }}
      >
        {label}
      </motion.span>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(60px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </motion.a>
  );
};

const Contact = () => {
  const [sectionFlicker, setSectionFlicker] = useState(false);

  // Section-wide flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSectionFlicker(true);
      setTimeout(() => setSectionFlicker(false), 200);
    }, Math.random() * 6000 + 4000);

    return () => clearInterval(interval);
  }, []);

  const contactLinks = [
    {
      href: "mailto:yusuf.sheikhali@outlook.com",
      icon: Mail,
      label: "Email"
    },
    {
      href: "https://github.com/Yusuf3838",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/yusufsheikhali/",
      icon: Linkedin,
      label: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen w-full overflow-hidden bg-black">
      {/* Street-like background with subtle texture */}
      <div 
        className={`absolute inset-0 transition-all duration-200 ${
          sectionFlicker ? 'opacity-40' : 'opacity-20'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient lighting gradients */}
      <div 
        className={`absolute inset-0 transition-all duration-200 ${
          sectionFlicker ? 'opacity-100' : 'opacity-70'
        }`}
        style={{
          background: sectionFlicker 
            ? 'radial-gradient(ellipse 1000px 600px at 50% 50%, rgba(255,165,0,0.15) 0%, rgba(255,215,0,0.1) 30%, transparent 70%), radial-gradient(ellipse 800px 400px at 30% 70%, rgba(0,255,127,0.1) 0%, rgba(50,255,150,0.05) 40%, transparent 80%)'
            : 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(255,165,0,0.08) 0%, rgba(255,215,0,0.05) 30%, transparent 70%), radial-gradient(ellipse 600px 300px at 30% 70%, rgba(0,255,127,0.06) 0%, rgba(50,255,150,0.03) 40%, transparent 80%)'
        }}
      />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            {/* Title glow */}
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
                Get In Touch
              </span>
            </h2>
          </div>

          {/* Description card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            {/* Description card glow */}
            <div 
              className={`absolute -inset-2 rounded-xl blur-xl transition-all duration-200 ${
                sectionFlicker 
                  ? 'bg-gradient-to-r from-orange-400/30 via-green-300/40 to-orange-400/30 opacity-100' 
                  : 'bg-gradient-to-r from-orange-400/20 via-green-300/30 to-orange-400/20 opacity-70'
              }`} 
            />
            
            <div className="relative bg-black/80 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              
              {/* Card scan line effect */}
              <div 
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transition-all duration-200 ${
                  sectionFlicker ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Contact icons */}
        <div className="flex justify-center items-center gap-12 mb-8">
          {contactLinks.map((contact, index) => (
            <ContactIcon key={index} {...contact} index={index} />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/5 w-1 h-1 bg-orange-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.5, 0],
            y: [0, -30, -60]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.2, 0],
            y: [0, -25, -50]
          }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            x: [0, 40, 80]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-orange-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.3, 0],
            x: [0, -35, -70]
          }}
          transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 3 }}
        />
      </div>
    </section>
  );
};

export default Contact;