import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code, Cloud, Palette, ChevronRight, Sparkles } from 'lucide-react';

const SkillCard = React.memo(({ icon: Icon, title, points, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorConfig = useMemo(() => {
    const configs = {
      0: {
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-500/10 to-red-500/10',
        iconColor: 'text-orange-400',
        borderColor: 'border-orange-400/30',
        accentColor: 'text-orange-300'
      },
      1: {
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-500/10 to-emerald-500/10',
        iconColor: 'text-green-400',
        borderColor: 'border-green-400/30',
        accentColor: 'text-green-300'
      },
      2: {
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-500/10 to-cyan-500/10',
        iconColor: 'text-blue-400',
        borderColor: 'border-blue-400/30',
        accentColor: 'text-blue-300'
      },
      3: {
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-500/10 to-pink-500/10',
        iconColor: 'text-purple-400',
        borderColor: 'border-purple-400/30',
        accentColor: 'text-purple-300'
      }
    };
    return configs[index] || configs[0];
  }, [index]);

  return (
    <div 
      className={`
        relative group h-full transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
      }}
    >
      {/* Background glow */}
      <div className={`
        absolute -inset-4 rounded-3xl transition-all duration-300
        bg-gradient-to-r ${colorConfig.bgGradient}
        ${isHovered ? 'opacity-80 scale-105 blur-xl' : 'opacity-40 scale-100 blur-lg'}
      `} />
      
      {/* Main card */}
      <div className={`
        relative h-full bg-white/5 backdrop-blur-sm border ${colorConfig.borderColor}
        rounded-2xl p-8 transition-all duration-200
        hover:bg-white/10 hover:border-opacity-60 hover:-translate-y-2
      `}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`
            relative p-4 rounded-xl bg-gradient-to-r ${colorConfig.gradient}
            shadow-lg transition-transform duration-200
            group-hover:scale-105 group-hover:rotate-2
          `}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold ${colorConfig.iconColor} mb-1`}>
              {title}
            </h3>
            <div className={`h-1 w-16 bg-gradient-to-r ${colorConfig.gradient} rounded-full`} />
          </div>
        </div>

        {/* Points */}
        <div className="space-y-4">
          {points.map((point, pointIndex) => (
            <div
              key={pointIndex}
              className={`
                flex items-start gap-3 transition-all duration-200
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
              `}
              style={{ 
                transitionDelay: isVisible ? `${(index * 50) + (pointIndex * 30) + 100}ms` : '0ms'
              }}
            >
              <div className={`
                mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${colorConfig.gradient}
                transition-all duration-200 group-hover:scale-125
              `} />
              
              <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-200">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Hover indicator */}
        <div className={`
          mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-200
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          <span className={colorConfig.accentColor}>Learn more</span>
          <ChevronRight className={`w-4 h-4 ${colorConfig.accentColor}`} />
        </div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-2xl
          bg-gradient-to-br ${colorConfig.gradient} opacity-10
        `} />
      </div>
    </div>
  );
});

const OptimizedFloatingShape = React.memo(({ className, size, style }) => {
  return (
    <div
      className={`absolute ${className} ${size} rounded-full opacity-20`}
      style={{
        ...style,
        animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
      }}
    />
  );
});

const WhatIDo = () => {
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

  const skills = useMemo(() => [
    {
      icon: Brain,
      title: 'Data Science & AI',
      points: [
        'Developing highly scalable production ready models for various deep learning and statistical use cases',
        'Experience working with Computer Vision and NLP projects using TensorFlow, PyTorch, and scikit learn',
        'Complex quantitative modeling for dynamic forecasting and time series analysis with advanced statistical methods',
        'Building intelligent systems that can process and analyze large datasets to extract meaningful insights'
      ],
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      points: [
        'Building responsive, high performance web applications using React, Redux, and modern JavaScript frameworks',
        'Developing cross platform mobile applications using Flutter, React Native, and native Android/iOS development',
        'Creating robust backend systems and APIs using Node.js, Express, Python Flask, and microservices architecture',
        'Implementing real time features, authentication systems, and database optimization for scalable applications'
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      points: [
        'Designing and deploying applications on AWS, Google Cloud Platform, and Azure with auto scaling capabilities',
        'Managing containerized applications using Docker and Kubernetes for efficient deployment and orchestration',
        'Implementing CI/CD pipelines for automated testing, building, and deployment of applications',
        'Setting up monitoring, logging, and alerting systems to ensure high availability and performance'
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      points: [
        'Creating intuitive and visually appealing user interfaces with a focus on accessibility and user experience',
        'Designing comprehensive design systems and style guides for consistent branding across platforms',
        'Conducting user research and usability testing to optimize application flow and user satisfaction',
        'Proficient in Figma, Adobe Creative Suite, and prototyping tools for rapid design iteration'
      ],
    },
  ], []);

  const floatingShapes = useMemo(() => [
    { className: 'bg-orange-400/30', size: 'w-2 h-2', style: { left: '10%', top: '20%' } },
    { className: 'bg-green-400/30', size: 'w-1 h-1', style: { left: '85%', top: '30%' } },
    { className: 'bg-blue-400/30', size: 'w-3 h-3', style: { left: '70%', top: '70%' } },
    { className: 'bg-purple-400/30', size: 'w-1 h-1', style: { left: '20%', top: '80%' } },
    { className: 'bg-pink-400/30', size: 'w-2 h-2', style: { left: '90%', top: '15%' } }
  ], []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10px, -15px) scale(1.1); }
          50% { transform: translate(-5px, 10px) scale(0.9); }
          75% { transform: translate(-10px, -5px) scale(1.05); }
        }
      `}</style>
      
      <section 
        ref={containerRef}
        id="what-i-do" 
        className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)'
        }}
      >
        {/* Simplified Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,165,0,0.08) 0%, transparent 60%),
                radial-gradient(circle at 80% 70%, rgba(34,197,94,0.06) 0%, transparent 60%),
                radial-gradient(circle at 40% 80%, rgba(59,130,246,0.05) 0%, transparent 60%),
                radial-gradient(circle at 70% 20%, rgba(168,85,247,0.06) 0%, transparent 60%)
              `
            }}
          />
          
          {/* Optimized Floating Shapes */}
          {floatingShapes.map((shape, index) => (
            <OptimizedFloatingShape key={index} {...shape} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl md:text-6xl font-bold relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 via-blue-400 to-purple-400">
                  What I Do
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-lg">Transforming ideas into digital reality</p>
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} isVisible={skillsInView} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-40" />
              <p className="relative text-gray-300 text-lg px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                Ready to bring your next project to life? Let's collaborate and create something amazing together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhatIDo;