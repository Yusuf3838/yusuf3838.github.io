import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Brain, Code, Cloud, Palette, ChevronRight, Sparkles } from 'lucide-react';

const SkillCard = React.memo(({ icon: Icon, title, points, index }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
      style={{ perspective: '1000px' }}
    >
      {/* Background glow */}
      <div className={`
        absolute -inset-4 rounded-3xl blur-2xl transition-all duration-500
        bg-gradient-to-r ${colorConfig.bgGradient}
        ${isHovered ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}
      `} />
      
      {/* Main card */}
      <div className={`
        relative h-full bg-white/5 backdrop-blur-sm border ${colorConfig.borderColor}
        rounded-2xl p-8 transition-all duration-300
        ${isHovered ? 'bg-white/10 border-opacity-60' : ''}
      `}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`
            relative p-4 rounded-xl bg-gradient-to-r ${colorConfig.gradient}
            shadow-lg transition-transform duration-300
            ${isHovered ? 'scale-110 rotate-3' : ''}
          `}>
            <Icon className="w-8 h-8 text-white" />
            
            {/* Icon glow effect */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`
                  absolute -inset-2 rounded-xl blur-md -z-10
                  bg-gradient-to-r ${colorConfig.gradient} opacity-60
                `}
              />
            )}
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
            <motion.div
              key={pointIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                delay: (index * 0.15) + (pointIndex * 0.1) + 0.3,
                duration: 0.5
              }}
              className="group/point flex items-start gap-3"
            >
              <div className={`
                mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${colorConfig.gradient}
                transition-all duration-300 group-hover/point:scale-125
              `} />
              
              <p className="text-gray-300 leading-relaxed group-hover/point:text-gray-200 transition-colors duration-300">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          className="mt-6 flex items-center gap-2 text-sm font-medium"
        >
          <span className={colorConfig.accentColor}>Learn more</span>
          <ChevronRight className={`w-4 h-4 ${colorConfig.accentColor}`} />
        </motion.div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-2xl
          bg-gradient-to-br ${colorConfig.gradient} opacity-10
        `} />
      </div>
    </motion.div>
  );
});

const FloatingShape = React.memo(({ className, size, initialX, initialY, duration }) => {
  return (
    <motion.div
      className={`absolute ${className} ${size} rounded-full blur-sm opacity-30`}
      style={{ left: initialX, top: initialY }}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -50, 30, 0],
        scale: [1, 1.3, 0.9, 1],
        opacity: [0.3, 0.7, 0.4, 0.3]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
});

const WhatIDo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

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
    { className: 'bg-orange-400', size: 'w-3 h-3', initialX: '10%', initialY: '20%', duration: 12 },
    { className: 'bg-green-400', size: 'w-2 h-2', initialX: '85%', initialY: '30%', duration: 15 },
    { className: 'bg-blue-400', size: 'w-4 h-4', initialX: '70%', initialY: '70%', duration: 18 },
    { className: 'bg-purple-400', size: 'w-2 h-2', initialX: '20%', initialY: '80%', duration: 14 },
    { className: 'bg-pink-400', size: 'w-3 h-3', initialX: '90%', initialY: '15%', duration: 16 }
  ], []);

  return (
    <section 
      ref={containerRef}
      id="what-i-do" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,165,0,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(34,197,94,0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(59,130,246,0.06) 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, rgba(168,85,247,0.08) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating Shapes */}
        {floatingShapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 via-blue-400 to-purple-400">
                What I Do
              </span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-green-400/20 via-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h2>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400 text-lg">Transforming ideas into digital reality</p>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-2xl blur-xl" />
            <p className="relative text-gray-300 text-lg px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              Ready to bring your next project to life? Let's collaborate and create something amazing together.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIDo;