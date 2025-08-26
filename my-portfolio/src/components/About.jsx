import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code, Database, Wrench, Monitor, Sparkles, Zap } from 'lucide-react';

const SkillBubble = React.memo(({ skill, index, category, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: delay + (index * 0.05), 
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className={`
        relative px-4 py-2 rounded-full border border-white/20
        bg-gradient-to-r ${categoryColors[category]}
        shadow-lg transition-all duration-300
        ${isHovered ? 'shadow-2xl' : ''}
      `}>
        <div className="flex items-center gap-2">
          <img 
            src={getSkillIcon(skill)} 
            alt={skill}
            className="w-4 h-4 object-contain"
          />
          <span className="text-white font-medium text-sm">{skill}</span>
        </div>
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`
              absolute -inset-1 rounded-full blur-sm -z-10
              bg-gradient-to-r ${categoryColors[category]} opacity-75
            `}
          />
        )}
      </div>
    </motion.div>
  );
});

const SkillCategory = React.memo(({ icon: Icon, title, skills, category, index }) => {
  const categoryColors = {
    languages: { main: 'text-orange-400', gradient: 'from-orange-400/20 to-red-400/20' },
    frameworks: { main: 'text-green-400', gradient: 'from-green-400/20 to-emerald-400/20' },
    databases: { main: 'text-blue-400', gradient: 'from-blue-400/20 to-cyan-400/20' },
    tools: { main: 'text-purple-400', gradient: 'from-purple-400/20 to-pink-400/20' },
    systems: { main: 'text-yellow-400', gradient: 'from-yellow-400/20 to-amber-400/20' }
  };

  const colors = categoryColors[category];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${colors.gradient} backdrop-blur-sm`}>
          <Icon className={`w-5 h-5 ${colors.main}`} />
        </div>
        <h3 className={`text-lg font-semibold ${colors.main}`}>
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIndex) => (
          <SkillBubble
            key={skill}
            skill={skill}
            index={skillIndex}
            category={category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
});

const FloatingOrb = React.memo(({ className, size = "w-2 h-2", initialX, initialY }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className} ${size} blur-sm`}
      style={{ left: initialX, top: initialY }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        opacity: [0.3, 0.8, 0.4, 0.3],
        scale: [1, 1.2, 0.8, 1]
      }}
      transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
});

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const skills = useMemo(() => ({
    languages: ['Swift', 'Kotlin', 'C++', 'C#', 'Java', 'JavaScript', 'Python'],
    frameworks: ['React', 'Node.js', 'Pandas', 'NumPy', 'Angular', 'Flutter'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Google Firestore'],
    tools: ['Docker', 'Git', 'CI/CD', 'Postman', 'VS Code', 'VM Ware'],
    systems: ['Windows', 'UNIX', 'Linux', 'macOS']
  }), []);

  const orbs = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      className: [
        'bg-orange-400/30',
        'bg-green-400/30', 
        'bg-blue-400/30',
        'bg-purple-400/30',
        'bg-yellow-400/30',
        'bg-pink-400/30',
        'bg-cyan-400/30',
        'bg-red-400/30'
      ][i % 8],
      size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-2 h-2',
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,165,0,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(34,197,94,0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating Orbs */}
        {orbs.map((orb) => (
          <FloatingOrb key={orb.id} {...orb} />
        ))}
      </div>

      <motion.div 
        style={{ y: smoothY, opacity }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-blue-400">
              About Me
            </span>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-green-400/20 to-blue-400/20 rounded-2xl blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-2xl blur-xl" />
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
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
                    index={0}
                  />
                  <SkillCategory 
                    icon={Monitor} 
                    title="Frameworks & Libraries" 
                    skills={skills.frameworks} 
                    category="frameworks"
                    index={1}
                  />
                  <SkillCategory 
                    icon={Database} 
                    title="Databases" 
                    skills={skills.databases} 
                    category="databases"
                    index={2}
                  />
                  <SkillCategory 
                    icon={Wrench} 
                    title="Tools" 
                    skills={skills.tools} 
                    category="tools"
                    index={3}
                  />
                  <SkillCategory 
                    icon={Monitor} 
                    title="Operating Systems" 
                    skills={skills.systems} 
                    category="systems"
                    index={4}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;