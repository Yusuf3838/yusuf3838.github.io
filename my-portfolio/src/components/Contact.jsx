import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send, Sparkles } from 'lucide-react';

const ContactIcon = ({ href, icon: Icon, label, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colorConfig = useMemo(() => {
    const configs = [
      {
        gradient: 'from-orange-400/20 to-red-400/20',
        iconColor: 'text-orange-400',
        borderColor: 'border-orange-400/20',
        iconBg: 'from-orange-400/30 to-red-400/30'
      },
      {
        gradient: 'from-emerald-400/20 to-teal-400/20',
        iconColor: 'text-emerald-400',
        borderColor: 'border-emerald-400/20',
        iconBg: 'from-emerald-400/30 to-teal-400/30'
      },
      {
        gradient: 'from-blue-400/20 to-cyan-400/20',
        iconColor: 'text-blue-400',
        borderColor: 'border-blue-400/20',
        iconBg: 'from-blue-400/30 to-cyan-400/30'
      }
    ];
    return configs[index] || configs[0];
  }, [index]);

  return (
    <a
      ref={cardRef}
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
      }}
    >
      <div className={`
        relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        backdrop-blur-xl border ${colorConfig.borderColor} rounded-3xl overflow-hidden
        transition-all duration-500 group shadow-2xl
        ${isHovered ? 'from-white/15 via-white/8 border-opacity-40 -translate-y-2' : 'border-opacity-100'}
      `}>
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorConfig.gradient.replace('/20', '/60')}`} />

        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Icon container */}
          <div className="relative mb-6">
            <div className={`
              inline-flex p-5 rounded-2xl bg-gradient-to-br ${colorConfig.iconBg}
              backdrop-blur-sm border border-white/20 transition-all duration-300
              ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
            `}>
              <Icon className={`w-8 h-8 ${colorConfig.iconColor}`} />
            </div>
          </div>

          {/* Label */}
          <h3 className={`text-2xl font-bold ${colorConfig.iconColor} mb-4 tracking-tight`}>
            {label}
          </h3>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed text-base mb-6">
            {description}
          </p>

          {/* Divider */}
          <div className={`h-0.5 w-12 bg-gradient-to-r ${colorConfig.gradient.replace('/20', '/60')} rounded-full mx-auto mb-4`} />

          {/* Hover indicator */}
          <div 
            className="flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)'
            }}
          >
            <Send className={`w-4 h-4 ${colorConfig.iconColor}`} />
            <span className={colorConfig.iconColor}>Connect Now</span>
          </div>
        </div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-3xl
          bg-gradient-to-bl ${colorConfig.gradient} opacity-10
        `} />
      </div>
    </a>
  );
};

const Contact = () => {
  const [headerInView, setHeaderInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <section 
      id="contact" 
      className="snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400">
              Get In Touch
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 text-gray-400 text-lg lg:text-xl mb-8">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <p>Let's create something amazing together</p>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>

          {/* Description Card */}
          <div 
            className="max-w-3xl mx-auto"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                I'm always excited to collaborate on innovative projects and explore new opportunities. 
                Whether you have a groundbreaking idea, need technical expertise, or just want to connect, 
                I'd love to hear from you. Let's turn your vision into reality.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((contact, index) => (
            <ContactIcon key={contact.label} {...contact} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
          }}
        >
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-block max-w-3xl hover:bg-white/10 transition-all duration-500">
            <p className="text-gray-200 text-base lg:text-lg">
              <span className="text-orange-400 font-semibold">Ready to collaborate?</span>
              {' '}Choose your preferred way to connect and let's start building something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;