import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Wrench, Monitor, Sparkles, Zap } from 'lucide-react';

const SkillBubble = React.memo(({ skill, category }) => {
  const categoryColors = {
    languages: 'from-orange-500 to-red-500',
    frameworks: 'from-green-500 to-emerald-500', 
    databases: 'from-blue-500 to-cyan-500',
    tools: 'from-purple-500 to-pink-500',
    systems: 'from-yellow-500 to-amber-500'
  };

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
    <div className={`
      relative px-4 py-2 rounded-full border border-white/20
      bg-gradient-to-r ${categoryColors[category]}
      shadow-md transition-all duration-150 cursor-pointer
      hover:scale-105 hover:shadow-lg hover:-translate-y-0.5
    `}>
      <div className="flex items-center gap-2">
        <img 
          src={getSkillIcon(skill)} 
          alt={skill}
          className="w-4 h-4 object-contain"
          loading="lazy"
        />
        <span className="text-white font-medium text-sm">{skill}</span>
      </div>
    </div>
  );
});

const SkillCategory = React.memo(({ icon: Icon, title, skills, category, isVisible }) => {
  const categoryColors = {
    languages: { main: 'text-orange-400', gradient: 'from-orange-400/20 to-red-400/20' },
    frameworks: { main: 'text-green-400', gradient: 'from-green-400/20 to-emerald-400/20' },
    databases: { main: 'text-blue-400', gradient: 'from-blue-400/20 to-cyan-400/20' },
    tools: { main: 'text-purple-400', gradient: 'from-purple-400/20 to-pink-400/20' },
    systems: { main: 'text-yellow-400', gradient: 'from-yellow-400/20 to-amber-400/20' }
  };

  const colors = categoryColors[category];

  return (
    <div className={`mb-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${colors.gradient}`}>
          <Icon className={`w-5 h-5 ${colors.main}`} />
        </div>
        <h3 className={`text-lg font-semibold ${colors.main}`}>
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBubble
            key={skill}
            skill={skill}
            category={category}
          />
        ))}
      </div>
    </div>
  );
});

const OptimizedFloatingOrb = React.memo(({ className, size = "w-2 h-2", style }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className} ${size} opacity-30`}
      style={style}
      animate={{
        x: [0, 20, -10, 0],
        y: [0, -20, 10, 0],
        opacity: [0.2, 0.4, 0.2, 0.2]
      }}
      transition={{
        duration: 12 + Math.random() * 6,
        repeat: Infinity,
        ease: "linear" // More performance-friendly easing
      }}
    />
  );
});

function About() {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px" 
  });
  const skillsInView = useInView(skillsRef, { 
    once: true, 
    margin: "-50px" 
  });

  const skills = useMemo(() => ({
    languages: ['Swift', 'Kotlin', 'C++', 'C#', 'Java', 'JavaScript', 'Python'],
    frameworks: ['React', 'Node.js', 'Pandas', 'NumPy', 'Angular', 'Flutter'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Google Firestore'],
    tools: ['Docker', 'Git', 'CI/CD', 'Postman', 'VS Code', 'VM Ware'],
    systems: ['Windows', 'UNIX', 'Linux', 'macOS']
  }), []);

  // Simplified orb generation with better performance
  const orbs = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({ // Reduced from 8 to 6
      id: i,
      className: [
        'bg-orange-400/20',
        'bg-green-400/20', 
        'bg-blue-400/20',
        'bg-purple-400/20',
        'bg-yellow-400/20',
        'bg-pink-400/20'
      ][i],
      size: 'w-1 h-1', // Consistent smaller size
      style: {
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`
      }
    }))
  , []);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,165,0,0.08) 0%, transparent 60%),
              radial-gradient(circle at 75% 75%, rgba(34,197,94,0.06) 0%, transparent 60%)
            `
          }}
        />
        
        {/* Reduced Floating Orbs */}
        {orbs.map((orb) => (
          <OptimizedFloatingOrb key={orb.id} {...orb} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-blue-400">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full stack developer with over 3 years of experience crafting 
                  scalable web applications and mobile solutions. My journey in software development 
                  began with a curiosity for problem solving and has evolved into a deep expertise 
                  across multiple programming paradigms and technology stacks.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Specializing in modern JavaScript frameworks like React and Node.js, I've built 
                  everything from responsive web applications to complex backend systems. My experience 
                  spans across mobile development with Flutter and Swift, database architecture with 
                  both SQL and NoSQL solutions, and cloud deployment strategies using AWS and containerization.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  What sets me apart is my commitment to writing clean, maintainable code and my 
                  passion for user experience. I believe that great software isn't just functional, it's 
                  intuitive, performant, and accessible.
                </p>
                
                <div className="flex items-center gap-3 text-green-400 mb-3">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">What Drives Me</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  I'm deeply motivated by the intersection of creativity and technology. Every line of 
                  code I write is an opportunity to solve real world problems and create meaningful 
                  impact. I thrive in collaborative environments where I can learn from others while 
                  contributing my expertise in system architecture, performance optimization, and modern 
                  development practices. My goal is always to deliver solutions that not only meet 
                  requirements but exceed expectations in terms of performance, scalability, and user satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Technical Skills</h3>
                </div>
                
                <div className="space-y-6">
                  <SkillCategory 
                    icon={Code} 
                    title="Languages" 
                    skills={skills.languages} 
                    category="languages"
                    isVisible={skillsInView}
                  />
                  <SkillCategory 
                    icon={Monitor} 
                    title="Frameworks & Libraries" 
                    skills={skills.frameworks} 
                    category="frameworks"
                    isVisible={skillsInView}
                  />
                  <SkillCategory 
                    icon={Database} 
                    title="Databases" 
                    skills={skills.databases} 
                    category="databases"
                    isVisible={skillsInView}
                  />
                  <SkillCategory 
                    icon={Wrench} 
                    title="Tools" 
                    skills={skills.tools} 
                    category="tools"
                    isVisible={skillsInView}
                  />
                  <SkillCategory 
                    icon={Monitor} 
                    title="Operating Systems" 
                    skills={skills.systems} 
                    category="systems"
                    isVisible={skillsInView}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;