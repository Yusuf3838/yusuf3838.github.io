import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send, Sparkles } from 'lucide-react';

const ContactIcon = React.memo(({ href, icon: Icon, label, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorConfig = useMemo(() => {
    const configs = [
      {
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-500/10 to-red-500/10',
        iconColor: 'text-orange-400',
        borderColor: 'border-orange-400/30',
        glowColor: 'shadow-orange-500/25'
      },
      {
        gradient: 'from-emerald-500 to-teal-500',
        bgGradient: 'from-emerald-500/10 to-teal-500/10',
        iconColor: 'text-emerald-400',
        borderColor: 'border-emerald-400/30',
        glowColor: 'shadow-emerald-500/25'
      },
      {
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-500/10 to-cyan-500/10',
        iconColor: 'text-blue-400',
        borderColor: 'border-blue-400/30',
        glowColor: 'shadow-blue-500/25'
      }
    ];
    return configs[index] || configs[0];
  }, [index]);

  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group block relative"
      style={{ perspective: '1000px' }}
    >
      {/* Background glow */}
      <div className={`
        absolute -inset-4 rounded-3xl blur-2xl transition-all duration-500
        bg-gradient-to-r ${colorConfig.bgGradient}
        ${isHovered ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}
      `} />

      {/* Main card */}
      <div className={`
        relative bg-white/[0.04] backdrop-blur-xl border ${colorConfig.borderColor}
        rounded-2xl p-8 transition-all duration-300 text-center
        ${isHovered ? 'bg-white/[0.08] border-opacity-60' : ''}
      `}>
        {/* Icon container */}
        <div className="relative mb-6">
          <div className={`
            inline-flex p-6 rounded-2xl bg-gradient-to-r ${colorConfig.gradient}
            shadow-xl ${colorConfig.glowColor} transition-all duration-300
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
                  absolute -inset-3 rounded-2xl blur-lg -z-10
                  bg-gradient-to-r ${colorConfig.gradient} opacity-60
                `}
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className={`text-xl font-bold ${colorConfig.iconColor}`}>
            {label}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
          <div className={`h-0.5 w-12 bg-gradient-to-r ${colorConfig.gradient} rounded-full mx-auto`} />
        </div>

        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          className="mt-4 flex items-center justify-center gap-2 text-sm font-medium"
        >
          <Send className={`w-4 h-4 ${colorConfig.iconColor}`} />
          <span className={colorConfig.iconColor}>Connect</span>
        </motion.div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-16 h-16 rounded-bl-2xl rounded-tr-2xl
          bg-gradient-to-bl ${colorConfig.gradient} opacity-10
        `} />
      </div>
    </motion.a>
  );
});

const FloatingParticle = React.memo(({ className, size, initialX, initialY, duration, delay }) => {
  return (
    <motion.div
      className={`absolute ${className} ${size} rounded-full blur-sm opacity-30`}
      style={{ left: initialX, top: initialY }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -60, 40, 0],
        scale: [1, 1.5, 0.8, 1],
        opacity: [0.3, 0.8, 0.4, 0.3]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  );
});

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const contactLinks = useMemo(() => [
    {
      href: "mailto:yusuf.sheikhali@outlook.com",
      icon: Mail,
      label: "Email",
      description: "Drop me a line and let's start a conversation about your next project"
    },
    {
      href: "https://github.com/Yusuf3838",
      icon: Github,
      label: "GitHub",
      description: "Explore my code, contribute to projects, and see what I'm building"
    },
    {
      href: "https://www.linkedin.com/in/yusufsheikhali/",
      icon: Linkedin,
      label: "LinkedIn",
      description: "Connect professionally and stay updated with my latest work"
    }
  ], []);

  const floatingParticles = useMemo(() => [
    { className: 'bg-orange-400', size: 'w-2 h-2', initialX: '20%', initialY: '25%', duration: 12, delay: 0 },
    { className: 'bg-emerald-400', size: 'w-3 h-3', initialX: '80%', initialY: '35%', duration: 15, delay: 2 },
    { className: 'bg-blue-400', size: 'w-1 h-1', initialX: '70%', initialY: '70%', duration: 18, delay: 4 },
    { className: 'bg-purple-400', size: 'w-2 h-2', initialX: '30%', initialY: '75%', duration: 14, delay: 1 },
    { className: 'bg-cyan-400', size: 'w-1 h-1', initialX: '15%', initialY: '15%', duration: 16, delay: 3 }
  ], []);

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(255,165,0,0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(34,197,94,0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating particles */}
        {floatingParticles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
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
          <motion.div className="relative inline-block mb-8">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400">
                Get In Touch
              </span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 via-emerald-400/15 to-blue-400/15 rounded-2xl blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h2>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <p className="text-gray-400 text-lg">Let's create something amazing together</p>
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to collaborate on innovative projects and explore new opportunities. 
                Whether you have a groundbreaking idea, need technical expertise, or just want to connect, 
                I'd love to hear from you. Let's turn your vision into reality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((contact, index) => (
            <ContactIcon key={contact.label} {...contact} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 via-emerald-400/15 to-blue-400/15 rounded-2xl blur-xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
              <p className="text-gray-300 text-base">
                <span className="text-orange-400 font-semibold">Ready to collaborate?</span> 
                {' '}Choose your preferred way to connect and let's start building something extraordinary.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-to-l from-blue-400/5 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default Contact;