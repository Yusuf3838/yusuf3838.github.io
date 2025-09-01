import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send, Sparkles } from 'lucide-react';

const ContactIcon = React.memo(({ href, icon: Icon, label, description, index, isVisible }) => {
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
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={`
        group block relative transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:-translate-y-2
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: isVisible ? `${index * 120}ms` : '0ms'
      }}
    >
      {/* Background glow */}
      <div className={`
        absolute -inset-4 rounded-3xl transition-all duration-300
        bg-gradient-to-r ${colorConfig.bgGradient}
        ${isHovered ? 'opacity-80 scale-105 blur-xl' : 'opacity-50 scale-100 blur-lg'}
      `} />

      {/* Main card */}
      <div className={`
        relative bg-white/[0.04] backdrop-blur-xl border ${colorConfig.borderColor}
        rounded-2xl p-8 transition-all duration-200 text-center
        hover:bg-white/[0.08] hover:border-opacity-60
      `}>
        {/* Icon container */}
        <div className="relative mb-6">
          <div className={`
            inline-flex p-6 rounded-2xl bg-gradient-to-r ${colorConfig.gradient}
            shadow-xl ${colorConfig.glowColor} transition-all duration-200
            group-hover:scale-105 group-hover:rotate-2
          `}>
            <Icon className="w-8 h-8 text-white" />
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
        <div className={`
          mt-4 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          <Send className={`w-4 h-4 ${colorConfig.iconColor}`} />
          <span className={colorConfig.iconColor}>Connect</span>
        </div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-16 h-16 rounded-bl-2xl rounded-tr-2xl
          bg-gradient-to-bl ${colorConfig.gradient} opacity-10
        `} />
      </div>
    </a>
  );
});

const OptimizedFloatingParticle = React.memo(({ className, size, style }) => {
  return (
    <div
      className={`absolute ${className} ${size} rounded-full opacity-20`}
      style={{
        ...style,
        animation: `floatContact ${8 + Math.random() * 6}s ease-in-out infinite`,
      }}
    />
  );
});

const Contact = () => {
  const containerRef = useRef(null);
  const contactRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px" 
  });
  const contactInView = useInView(contactRef, { 
    once: true, 
    margin: "-50px" 
  });

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
    { className: 'bg-orange-400/25', size: 'w-2 h-2', style: { left: '20%', top: '25%' } },
    { className: 'bg-emerald-400/25', size: 'w-3 h-3', style: { left: '80%', top: '35%' } },
    { className: 'bg-blue-400/25', size: 'w-1 h-1', style: { left: '70%', top: '70%' } },
    { className: 'bg-purple-400/25', size: 'w-2 h-2', style: { left: '30%', top: '75%' } },
    { className: 'bg-cyan-400/25', size: 'w-1 h-1', style: { left: '15%', top: '15%' } }
  ], []);

  return (
    <>
      <style jsx>{`
        @keyframes floatContact {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(12px, -20px) scale(1.1); }
          50% { transform: translate(-8px, 15px) scale(0.9); }
          75% { transform: translate(-12px, -8px) scale(1.05); }
        }
      `}</style>
      
      <section 
        ref={containerRef}
        id="contact" 
        className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
        }}
      >
        {/* Simplified Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 20%, rgba(255,165,0,0.06) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(34,197,94,0.05) 0%, transparent 60%),
                radial-gradient(circle at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)
              `
            }}
          />
          
          {/* Optimized floating particles */}
          {floatingParticles.map((particle, index) => (
            <OptimizedFloatingParticle key={index} {...particle} />
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
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-6xl font-bold relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400">
                  Get In Touch
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-400 text-lg">Let's create something amazing together</p>
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
            </div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative max-w-3xl mx-auto"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-2xl blur-xl opacity-40" />
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
          <div ref={contactRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactLinks.map((contact, index) => (
              <ContactIcon key={contact.label} {...contact} index={index} isVisible={contactInView} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 via-emerald-400/15 to-blue-400/15 rounded-2xl blur-xl opacity-40" />
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
                <p className="text-gray-300 text-base">
                  <span className="text-orange-400 font-semibold">Ready to collaborate?</span> 
                  {' '}Choose your preferred way to connect and let's start building something extraordinary.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-to-l from-blue-400/5 to-transparent rounded-full blur-3xl opacity-60" />
        </div>
      </section>
    </>
  );
};

export default Contact;