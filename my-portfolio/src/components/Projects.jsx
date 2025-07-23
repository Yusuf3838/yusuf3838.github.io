import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = React.memo(({ project, index }) => {
  const [cardFlicker, setCardFlicker] = useState(false);

  // Memoize color configurations to avoid recalculation
  const colorConfig = useMemo(() => {
    const glowColors = [
      'from-orange-400/30 via-yellow-300/40 to-orange-400/30',
      'from-green-400/30 via-lime-300/40 to-green-400/30',
      'from-blue-400/30 via-cyan-300/40 to-blue-400/30',
      'from-pink-400/30 via-purple-300/40 to-pink-400/30',
      'from-yellow-400/30 via-orange-300/40 to-yellow-400/30'
    ];

    const borderColors = [
      'border-orange-400/60',
      'border-green-400/60',
      'border-blue-400/60',
      'border-pink-400/60',
      'border-yellow-400/60'
    ];

    const linkColors = [
      'text-orange-400 hover:text-yellow-400',
      'text-green-400 hover:text-lime-400',
      'text-blue-400 hover:text-cyan-400',
      'text-pink-400 hover:text-purple-400',
      'text-yellow-400 hover:text-orange-400'
    ];

    const colorIndex = index % 5;
    return {
      glow: glowColors[colorIndex],
      border: borderColors[colorIndex],
      link: linkColors[colorIndex]
    };
  }, [index]);

  // Optimized flicker effect with better cleanup
  useEffect(() => {
    const flickerDelay = 4000 + Math.random() * 5000 + (index * 800);
    
    const interval = setInterval(() => {
      setCardFlicker(true);
      const timeout = setTimeout(() => setCardFlicker(false), 150);
      return () => clearTimeout(timeout);
    }, flickerDelay);

    return () => clearInterval(interval);
  }, [index]);

  // Memoize motion variants
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, duration: 0.8 }
  }), [index]);

  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
  }, []);

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
        <div className="flex items-center justify-center gap-3 mb-4 text-center">
          {project.title === 'Baro' && (
            <img
              src="https://barosomaliapp.netlify.app/assets/app_logo-Dj3Mhh_1.png"
              alt="Baro App Logo"
              className="w-8 h-8 object-contain rounded-lg"
              loading="lazy"
              onError={handleImageError}
            />
          )}
          <h3 className={`text-xl font-bold text-center ${colorConfig.link.split(' ')[0]}`} style={{
            textShadow: `0 0 10px currentColor`
          }}>
            {project.title}
          </h3>
        </div>

        {project.title === 'Baro' && (
          <div className="mb-4 text-center">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40">
              👑 Founder
            </span>
          </div>
        )}

        <p className="text-gray-300 mb-6 leading-relaxed text-center">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index * 0.1) + (i * 0.05) + 0.3 }}
              className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-black/60 text-gray-300 border ${colorConfig.border} hover:${colorConfig.border}/80 transition-colors duration-300`}
            >
              <img
                src={tag.logo}
                alt={tag.name}
                className="w-4 h-4 object-contain"
                loading="lazy"
                onError={handleImageError}
              />
              <span>{tag.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={project.link}
            className={`inline-flex items-center ${colorConfig.link} transition-colors font-semibold`}
            style={{
              textShadow: `0 0 5px currentColor`
            }}
          >
            View Project →
          </a>
        </div>

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

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [sectionFlicker, setSectionFlicker] = useState(false);

  // Optimized section flicker with better interval management
  useEffect(() => {
    const flickerDelay = 4000 + Math.random() * 6000;
    
    const interval = setInterval(() => {
      setSectionFlicker(true);
      const timeout = setTimeout(() => setSectionFlicker(false), 200);
      return () => clearTimeout(timeout);
    }, flickerDelay);

    return () => clearInterval(interval);
  }, []);

  // Memoize projects data to prevent recreation on each render
  const projects = useMemo(() => [
    {
      title: 'Baro',
      description: 'Launched a multi-platform language learning app (iOS, Android) live on the iOS app store and Google play store, featuring real-time translation, text-to-speech, and multiple learning modes.',
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

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen w-full overflow-hidden bg-black">
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
                My Projects
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(300px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;