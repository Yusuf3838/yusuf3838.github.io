import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ExternalLink, Crown, Sparkles, Github, Globe, FileText } from 'lucide-react';

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const colorConfig = useMemo(() => {
    const configs = [
      {
        gradient: 'from-orange-400/20 to-red-400/20',
        accentColor: 'text-orange-400',
        borderColor: 'border-orange-400/20',
      },
      {
        gradient: 'from-emerald-400/20 to-teal-400/20',
        accentColor: 'text-emerald-400',
        borderColor: 'border-emerald-400/20',
      },
      {
        gradient: 'from-blue-400/20 to-indigo-400/20',
        accentColor: 'text-blue-400',
        borderColor: 'border-blue-400/20',
      },
      {
        gradient: 'from-purple-400/20 to-pink-400/20',
        accentColor: 'text-purple-400',
        borderColor: 'border-purple-400/20',
      },
      {
        gradient: 'from-yellow-400/20 to-orange-400/20',
        accentColor: 'text-yellow-400',
        borderColor: 'border-yellow-400/20',
      },
      {
        gradient: 'from-cyan-400/20 to-blue-400/20',
        accentColor: 'text-cyan-400',
        borderColor: 'border-cyan-400/20',
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
    <div 
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`,
        willChange: isInView ? 'auto' : 'opacity, transform'
      }}
    >
      <div className={`
        relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        backdrop-blur-xl border ${colorConfig.borderColor} rounded-3xl overflow-hidden
        transition-all duration-300 group shadow-2xl
        ${isHovered ? 'from-white/15 via-white/8 border-opacity-40 scale-[1.02]' : 'border-opacity-100'}
      `}
      style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorConfig.gradient.replace('/20', '/60')}`} />

        {/* Content */}
        <div className="relative p-8">
          {/* Header with logo */}
          <div className="flex items-start gap-4 mb-6">
            {project.title === 'Baro' && !imageError && (
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400/20 to-red-500/20 p-2.5 backdrop-blur-sm border border-orange-400/30 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <img
                  src="https://barosomaliapp.netlify.app/assets/app_logo-Dj3Mhh_1.png"
                  alt="Baro App Logo"
                  className="w-full h-full object-contain rounded-lg"
                  onError={handleImageError}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className={`text-2xl lg:text-3xl font-bold ${colorConfig.accentColor} tracking-tight`}>
                  {project.title}
                </h3>
                {isFounderProject && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-semibold text-yellow-300">Founder</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed text-base lg:text-lg mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
              >
                {tag.logo && (
                  <img
                    src={tag.logo}
                    alt={tag.name}
                    className="w-4 h-4 object-contain"
                    onError={(e) => e.target.style.display = 'none'}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="text-sm text-gray-300 font-medium">
                  {tag.name}
                </span>
              </div>
            ))}
          </div>

          {/* Action button */}
          <div className="pt-4">
            <a
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                bg-gradient-to-r ${colorConfig.gradient.replace('/20', '/30')}
                backdrop-blur-sm border border-white/20
                text-white font-semibold
                transition-all duration-300 hover:scale-105 hover:-translate-y-1
                hover:border-white/30 hover:shadow-lg
              `}
            >
              {isPDFLink ? (
                <>
                  <FileText className="w-5 h-5" />
                  <span>View Research</span>
                </>
              ) : isGithubLink ? (
                <>
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </>
              ) : (
                <>
                  <Globe className="w-5 h-5" />
                  <span>Visit Project</span>
                </>
              )}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Subtle corner decoration */}
        <div className={`
          absolute top-0 right-0 w-32 h-32 
          bg-gradient-to-bl ${colorConfig.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl
        `} />
      </div>
    </div>
  );
};

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="text-center mb-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            willChange: isInView ? 'auto' : 'opacity, transform'
          }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 via-blue-400 to-purple-400">
              Featured Projects
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 text-gray-400 text-lg lg:text-xl">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <p>Building the future, one project at a time</p>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
            willChange: isInView ? 'auto' : 'opacity, transform'
          }}
        >
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block max-w-3xl hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-semibold text-blue-400">Interested in Collaboration?</span>
            </div>
            <p className="text-gray-300 text-base lg:text-lg">
              Let's connect and create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;