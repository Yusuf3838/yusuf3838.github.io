import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Crown, Sparkles, Github, Globe } from 'lucide-react';

const ProjectCard = React.memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const colorConfig = useMemo(() => {
    const configs = [
      {
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-500/10 to-red-500/10',
        accentColor: 'text-orange-400',
        borderColor: 'border-orange-400/20',
        glowColor: 'shadow-orange-500/20'
      },
      {
        gradient: 'from-emerald-500 to-teal-500',
        bgGradient: 'from-emerald-500/10 to-teal-500/10',
        accentColor: 'text-emerald-400',
        borderColor: 'border-emerald-400/20',
        glowColor: 'shadow-emerald-500/20'
      },
      {
        gradient: 'from-blue-500 to-indigo-500',
        bgGradient: 'from-blue-500/10 to-indigo-500/10',
        accentColor: 'text-blue-400',
        borderColor: 'border-blue-400/20',
        glowColor: 'shadow-blue-500/20'
      },
      {
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-500/10 to-pink-500/10',
        accentColor: 'text-purple-400',
        borderColor: 'border-purple-400/20',
        glowColor: 'shadow-purple-500/20'
      },
      {
        gradient: 'from-yellow-500 to-orange-500',
        bgGradient: 'from-yellow-500/10 to-orange-500/10',
        accentColor: 'text-yellow-400',
        borderColor: 'border-yellow-400/20',
        glowColor: 'shadow-yellow-500/20'
      },
      {
        gradient: 'from-cyan-500 to-blue-500',
        bgGradient: 'from-cyan-500/10 to-blue-500/10',
        accentColor: 'text-cyan-400',
        borderColor: 'border-cyan-400/20',
        glowColor: 'shadow-cyan-500/20'
      }
    ];
    return configs[index % configs.length];
  }, [index]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const isFounderProject = project.title === 'Baro';
  const isGithubLink = project.link.includes('github.com');
  const isPDFLink = project.link.includes('.pdf');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Dynamic background glow */}
      <div className={`
        absolute -inset-6 rounded-[2rem] blur-2xl transition-all duration-700
        bg-gradient-to-br ${colorConfig.bgGradient}
        ${isHovered ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}
      `} />

      {/* Main card with organic shape */}
      <div className={`
        relative h-full bg-white/[0.03] backdrop-blur-xl
        border ${colorConfig.borderColor} rounded-3xl overflow-hidden
        transition-all duration-500 group-hover:bg-white/[0.06]
        ${isHovered ? 'border-opacity-40' : 'border-opacity-100'}
      `}>
        {/* Animated top accent bar */}
        <div className={`
          h-1 bg-gradient-to-r ${colorConfig.gradient} transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-60'}
        `} />

        {/* Content container */}
        <div className="p-8 space-y-6">
          {/* Header with logo and title */}
          <div className="flex items-center gap-4 mb-6">
            {project.title === 'Baro' && !imageError && (
              <motion.div
                className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400/20 to-red-500/20 p-2 backdrop-blur-sm border border-orange-400/30"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <img
                  src="https://barosomaliapp.netlify.app/assets/app_logo-Dj3Mhh_1.png"
                  alt="Baro App Logo"
                  className="w-full h-full object-contain rounded-lg"
                  onError={handleImageError}
                />
              </motion.div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className={`text-2xl font-bold ${colorConfig.accentColor}`}>
                  {project.title}
                </h3>
                {isFounderProject && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30"
                  >
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-medium text-yellow-300">Founder</span>
                  </motion.div>
                )}
              </div>
              <div className={`h-0.5 w-20 bg-gradient-to-r ${colorConfig.gradient} rounded-full`} />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-base">
            {project.description}
          </p>

          {/* Tech stack - fluid layout */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  delay: (index * 0.12) + (tagIndex * 0.05) + 0.3,
                  duration: 0.4
                }}
                className="group/tag flex items-center gap-2 px-3 py-2 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {tag.logo && (
                  <img
                    src={tag.logo}
                    alt={tag.name}
                    className="w-4 h-4 object-contain group-hover/tag:scale-110 transition-transform duration-300"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <span className="text-sm text-gray-400 group-hover/tag:text-gray-300 transition-colors duration-300">
                  {tag.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Action button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index * 0.12) + 0.5 }}
          >
            <motion.a
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                bg-gradient-to-r ${colorConfig.gradient} text-white font-medium
                shadow-lg ${colorConfig.glowColor} hover:shadow-xl
                transition-all duration-300 hover:scale-105
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isPDFLink ? (
                <>
                  <span>View Research</span>
                  <ExternalLink className="w-4 h-4" />
                </>
              ) : isGithubLink ? (
                <>
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4" />
                  <span>Visit Project</span>
                </>
              )}
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle corner decoration */}
        <div className={`
          absolute top-0 right-0 w-32 h-32 
          bg-gradient-to-bl ${colorConfig.gradient} opacity-5 rounded-bl-3xl rounded-tr-3xl
        `} />

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.02] rounded-3xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
});

const FloatingOrb = React.memo(({ className, size, initialX, initialY, duration }) => {
  return (
    <motion.div
      className={`absolute ${className} ${size} rounded-full blur-lg opacity-20`}
      style={{ left: initialX, top: initialY }}
      animate={{
        x: [0, 60, -40, 0],
        y: [0, -80, 40, 0],
        scale: [1, 1.4, 0.8, 1],
        opacity: [0.2, 0.6, 0.3, 0.2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
});

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const projects = useMemo(() => [
    {
      title: 'Baro',
      description: 'Launched a multi platform language learning app (iOS, Android) live on the iOS app store and Google play store, featuring real-time translation, text-to-speech, and multiple learning modes.',
      tags: [
        { name: 'Flutter', logo: '/flutter.svg' },
        { name: 'Node.js', logo: '/nodejs.png' },
        { name: 'AWS', logo: '/aws.png' },
        { name: 'Azure', logo: '/azure.png' },
        { name: 'Google Cloud', logo: '/gc.png' },
      ],
      link: 'https://barosomaliapp.netlify.app/',
    },
    {
      title: 'NutriDex',
      description: 'Developed a label scanner app for health and fitness supplements to track ingredients.',
      tags: [
        { name: 'Kotlin', logo: '/Kotlin.png' },
        { name: 'Google ML Kit', logo: '/ml.png' },
        { name: 'Google Firestore', logo: '/firestore.png' },
      ],
      link: 'https://github.com/HasanYousaf/NutriDex',
    },
    {
      title: 'Bike Sharing Demand Prediction',
      description: 'Built a regression model to predict hourly bike rental demand using the Bike Sharing Dataset.',
      tags: [
        { name: 'Python', logo: '/python.png' },
        { name: 'PyCaret', logo: '/pycaret.png' },
      ],
      link: 'https://github.com/Yusuf3838/bike-sharing-prediction-pycare',
    },
    {
      title: 'Mood Capsule',
      description: 'AI powered app that transforms user moods into personalized experiences with custom images, soundtracks, and recommendations.',
      tags: [
        { name: 'React', logo: '/react.png' },
        { name: 'TypeScript', logo: '/typescript.png' },
        { name: 'Node.js', logo: '/nodejs.png' },
        { name: 'Express.js', logo: '/express.png' },
        { name: 'Hugging Face', logo: '/huggingface.png' },
        { name: 'AI Horde', logo: '/aihorde.png' },
      ],
      link: 'https://github.com/Yusuf3838/story-mood-crafter',
    },
    {
      title: 'Product Marketplace',
      description: 'Created an iOS product marketplace with a serverless backend using AWS Amplify.',
      tags: [
        { name: 'Swift', logo: '/swift.png' },
        { name: 'iOS', logo: '/ios.svg' },
        { name: 'AWS Amplify', logo: '/amplify.png' },
      ],
      link: 'https://github.com/JonathanHugo/Product-Marketplace',
    },
    {
      title: 'Quantum Key Distribution Analysis',
      description: 'IEEE report analyzing quantum key distribution protocols and their applications in secure communication systems.',
      tags: [
        { name: 'Research', logo: '/research.png' },
        { name: 'IEEE', logo: '/ieee.png' },
        { name: 'Quantum Cryptography', logo: '/quantum.png' },
      ],
      link: '/QKDReport.pdf',
    }
  ], []);

  const floatingOrbs = useMemo(() => [
    { className: 'bg-orange-400', size: 'w-4 h-4', initialX: '15%', initialY: '20%', duration: 14 },
    { className: 'bg-emerald-400', size: 'w-3 h-3', initialX: '85%', initialY: '30%', duration: 16 },
    { className: 'bg-blue-400', size: 'w-5 h-5', initialX: '75%', initialY: '75%', duration: 18 },
    { className: 'bg-purple-400', size: 'w-2 h-2', initialX: '25%', initialY: '80%', duration: 15 },
    { className: 'bg-cyan-400', size: 'w-3 h-3', initialX: '90%', initialY: '10%', duration: 17 }
  ], []);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,165,0,0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(34,197,94,0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168,85,247,0.07) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating orbs */}
        {floatingOrbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
      </div>

      <motion.div 
        style={{ y: smoothY, opacity }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div className="relative inline-block mb-6">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 via-blue-400 to-purple-400">
                My Projects
              </span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 via-emerald-400/15 via-blue-400/15 to-purple-400/15 rounded-2xl blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h2>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400 text-lg">Building the future, one project at a time</p>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 to-purple-400/15 rounded-2xl blur-xl" />
            <p className="relative text-gray-300 text-lg px-8 py-4 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl">
              Interested in collaborating or learning more about my work? Let's connect and create something extraordinary.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;