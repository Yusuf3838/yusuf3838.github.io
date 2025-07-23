import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Monitor, Sparkles } from 'lucide-react';

const SkillCategory = React.memo(({ icon: Icon, title, skills, index }) => {
  const [cardFlicker, setCardFlicker] = useState(false);
  
  // Memoize flicker interval to prevent recreation
  const flickerDelay = useMemo(() => Math.random() * 4000 + 3000 + (index * 500), [index]);
  
  // Stable flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCardFlicker(true);
      const timeout = setTimeout(() => setCardFlicker(false), 150);
      return () => clearTimeout(timeout);
    }, flickerDelay);

    return () => clearInterval(interval);
  }, [flickerDelay]);

  // Memoize color mappings to prevent recalculation
  const colors = useMemo(() => ({
    glow: {
      0: 'from-orange-400/30 via-yellow-300/40 to-orange-400/30',
      1: 'from-green-400/30 via-lime-300/40 to-green-400/30',
      2: 'from-blue-400/30 via-cyan-300/40 to-blue-400/30',
      3: 'from-pink-400/30 via-purple-300/40 to-pink-400/30',
      4: 'from-yellow-400/30 via-orange-300/40 to-yellow-400/30'
    },
    border: {
      0: 'border-orange-400/60',
      1: 'border-green-400/60',
      2: 'border-blue-400/60',
      3: 'border-pink-400/60',
      4: 'border-yellow-400/60'
    },
    icon: {
      0: 'text-orange-400',
      1: 'text-green-400',
      2: 'text-blue-400',
      3: 'text-pink-400',
      4: 'text-yellow-400'
    }
  }), []);

  const getSkillIcon = useCallback((skill) => {
  const icons = {
    'React': '/react.png',
    'Node.js': '/nodejs.png',
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
    'CI/CD': '/cicd.png',
    'Postman': '/postman.png',
    'VM Ware': '/vmware.png',
    'UNIX': '/unix.svg',
  };

  return icons[skill] || '/default-tech.svg';
}, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="relative group"
    >
      {/* Outer glow that flickers */}
      <div 
        className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-200 ${
          cardFlicker 
            ? `bg-gradient-to-r ${colors.glow[index]} opacity-100 scale-105` 
            : `bg-gradient-to-r ${colors.glow[index]} opacity-60`
        }`} 
      />
      
      {/* Card container */}
      <div className={`relative bg-black/80 backdrop-blur-sm border ${colors.border[index]} rounded-xl p-6 hover:bg-black/90 transition-all duration-300 group-hover:scale-105`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg bg-black/60 backdrop-blur-sm border ${colors.border[index]}`}>
            <Icon className={`w-5 h-5 ${colors.icon[index]}`} />
          </div>
          <h3 className={`text-xl font-semibold ${colors.icon[index]}`} style={{
            textShadow: `0 0 10px currentColor`
          }}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={`${skill}-${skillIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index * 0.05) + (skillIndex * 0.02) + 0.2 }}
              className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-black/60 text-gray-300 border ${colors.border[index]} hover:${colors.border[index]}/80 transition-colors duration-300`}
            >
              <img 
                src={getSkillIcon(skill)} 
                alt={skill}
                className="w-4 h-4 object-contain"
                loading="lazy"
                decoding="async"
              />
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Scan line effect */}
        {cardFlicker && (
          <div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
          />
        )}
      </div>
    </motion.div>
  );
});

SkillCategory.displayName = 'SkillCategory';

// Memoized floating particle component
const FloatingParticle = React.memo(({ className, duration, delay, yRange }) => (
  <motion.div 
    className={`absolute w-1 h-1 rounded-full ${className}`}
    animate={{ 
      opacity: [0, 1, 0], 
      scale: [0, 1.5, 0],
      y: [0, -yRange/2, -yRange]
    }}
    transition={{ duration, repeat: Infinity, repeatDelay: delay }}
  />
));

FloatingParticle.displayName = 'FloatingParticle';

function About() {
  const [sectionFlicker, setSectionFlicker] = useState(false);
  const [aboutFlicker, setAboutFlicker] = useState(false);
  const [passionFlicker, setPassionFlicker] = useState(false);

  // Memoize random delays to prevent recalculation
  const delays = useMemo(() => ({
    section: Math.random() * 6000 + 4000,
    about: Math.random() * 8000 + 5000,
    passion: Math.random() * 7000 + 4500
  }), []);

  // Optimized flicker effects with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setSectionFlicker(true);
      setTimeout(() => setSectionFlicker(false), 200);
    }, delays.section);

    return () => clearInterval(interval);
  }, [delays.section]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutFlicker(true);
      setTimeout(() => setAboutFlicker(false), 150);
    }, delays.about);

    return () => clearInterval(interval);
  }, [delays.about]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPassionFlicker(true);
      setTimeout(() => setPassionFlicker(false), 150);
    }, delays.passion);

    return () => clearInterval(interval);
  }, [delays.passion]);

  // Memoize skills data to prevent recreation
  const skills = useMemo(() => ({
    languages: ['Swift', 'Kotlin', 'C++', 'C#', 'Java', 'JavaScript', 'Python'],
    frameworks: ['React', 'Node.js', 'Pandas', 'NumPy', 'Angular', 'Flutter'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Google Firestore'],
    tools: ['Docker', 'Git', 'CI/CD', 'Postman', 'VS Code', 'VM Ware'],
    systems: ['Windows', 'UNIX', 'Linux', 'macOS']
  }), []);

  // Memoize particle configurations
  const particles = useMemo(() => [
    { className: "top-1/4 left-1/5 bg-orange-300", duration: 5, delay: 4, yRange: 60 },
    { className: "top-3/4 right-1/4 bg-green-300", duration: 4.5, delay: 2.5, yRange: 50 },
    { className: "top-1/2 right-1/3 bg-yellow-300", duration: 6, delay: 1.5, yRange: 40 },
    { className: "bottom-1/4 left-1/3 bg-orange-400", duration: 5.5, delay: 3, yRange: 70 },
    { className: "top-1/2 left-1/6 bg-green-400", duration: 4.2, delay: 2, yRange: 50 },
    { className: "bottom-1/3 right-1/5 bg-yellow-400", duration: 6.5, delay: 3.5, yRange: 60 }
  ], []);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen w-full overflow-hidden bg-black">
      {/* Street-like background with subtle texture - optimized */}
      <div 
        className={`absolute inset-0 transition-opacity duration-200 ${
          sectionFlicker ? 'opacity-40' : 'opacity-20'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          willChange: 'opacity'
        }}
      />

      {/* Ambient lighting gradients - simplified */}
      <div 
        className={`absolute inset-0 transition-opacity duration-200 ${
          sectionFlicker ? 'opacity-100' : 'opacity-70'
        }`}
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 30% 40%, rgba(255,165,0,0.08) 0%, transparent 70%), radial-gradient(ellipse 600px 300px at 70% 60%, rgba(0,255,127,0.06) 0%, transparent 80%)',
          willChange: 'opacity'
        }}
      />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      <div className="relative z-20">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-6">
            {/* Title glow */}
            <div 
              className={`absolute -inset-6 rounded-2xl blur-2xl transition-all duration-200 ${
                sectionFlicker 
                  ? 'bg-gradient-to-r from-orange-400/40 via-green-300/50 to-orange-400/40 opacity-100 scale-105' 
                  : 'bg-gradient-to-r from-orange-400/20 via-green-300/30 to-orange-400/20 opacity-80'
              }`} 
            />
            
            <h2 className={`relative text-4xl font-bold transition-transform duration-200 ${
              sectionFlicker ? 'scale-105' : ''
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                About Me
              </span>
            </h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* About text glow */}
            <div 
              className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-200 ${
                aboutFlicker 
                  ? 'bg-gradient-to-r from-orange-400/30 via-green-300/40 to-orange-400/30 opacity-100 scale-105' 
                  : 'bg-gradient-to-r from-orange-400/15 via-green-300/20 to-orange-400/15 opacity-60'
              }`} 
            />
            
            <div className={`relative bg-black/80 backdrop-blur-sm border border-orange-400/60 rounded-lg p-6 transition-all duration-300 hover:bg-black/90 ${
              aboutFlicker ? 'scale-105' : ''
            }`}>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for crafting modern, scalable, and user-centric applications. 
                With a strong foundation in cutting-edge web and mobile technologies,
                I thrive on solving complex problems and delivering solutions that make a meaningful impact.
              </p>
              
              {/* Scan line effect */}
              {aboutFlicker && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          <SkillCategory icon={Code} title="Languages" skills={skills.languages} index={0} />
          <SkillCategory icon={Monitor} title="Frameworks & Libraries" skills={skills.frameworks} index={1} />
          <SkillCategory icon={Database} title="Databases" skills={skills.databases} index={2} />
          <SkillCategory icon={Wrench} title="Tools" skills={skills.tools} index={3} />
          <SkillCategory icon={Monitor} title="Operating Systems" skills={skills.systems} index={4} />
        </div>

        {/* Passion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="text-center mb-6 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-green-400/60">
              <Sparkles className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400" style={{
                textShadow: `0 0 10px currentColor`
              }}>
                What Drives Me
              </h3>
            </div>
          </div>
          
          <div className="relative">
            {/* Passion text glow */}
            <div 
              className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-200 ${
                passionFlicker 
                  ? 'bg-gradient-to-r from-green-400/30 via-lime-300/40 to-green-400/30 opacity-100 scale-105' 
                  : 'bg-gradient-to-r from-green-400/15 via-lime-300/20 to-green-400/15 opacity-60'
              }`} 
            />
            
            <div className={`relative bg-black/80 backdrop-blur-sm border border-green-400/60 rounded-lg p-6 transition-all duration-300 hover:bg-black/90 ${
              passionFlicker ? 'scale-105' : ''
            }`}>
              <p className="text-gray-300 leading-relaxed">
                I'm deeply committed to building intuitive, performance-driven applications that enhance user experiences. 
                I continuously seek opportunities to learn, innovate, and stay ahead in the ever-evolving world of technology.
              </p>
              
              {/* Scan line effect */}
              {passionFlicker && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles - optimized */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}
      </div>
    </section>
  );
}

export default About;