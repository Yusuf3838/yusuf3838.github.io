import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Brain, Code, Cloud, Palette, Lightbulb, Users, Target, Monitor, Sparkles } from 'lucide-react';

const SkillBubble = React.memo(({ skill, category }) => {
  const categoryColors = {
    languages: 'from-orange-500 to-red-500',
    frameworks: 'from-green-500 to-emerald-500',
    databases: 'from-blue-500 to-cyan-500',
    tools: 'from-purple-500 to-pink-500',
    systems: 'from-yellow-500 to-amber-500'
  };

  return (
    <div className={`
      relative px-3 py-2 rounded-xl border border-white/20
      bg-gradient-to-r ${categoryColors[category]}
      shadow-lg transition-all duration-300 cursor-pointer
      hover:scale-110 hover:shadow-xl hover:-translate-y-1
      flex items-center gap-2
    `}>
      {skill.logo && (
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-4 h-4 object-contain"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />
      )}
      <span className="text-white font-medium text-sm">{skill.name}</span>
    </div>
  );
});

const TimelineItem = ({ item, index, isDesktop, isInView }) => {
  const isLeft = isDesktop && index % 2 === 0;

  return (
    <div 
      className={`relative flex ${
        isDesktop ? (isLeft ? 'flex-row' : 'flex-row-reverse') : 'flex-row'
      } items-center mb-16 lg:mb-24`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`,
        willChange: isInView ? 'auto' : 'opacity, transform'
      }}
    >
      <div className={`w-full ${
        isDesktop ? `lg:w-5/12 ${isLeft ? 'pr-16' : 'pl-16'}` : 'pl-8'
      }`}>
        <div 
          className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:from-white/15 hover:via-white/8 transition-all duration-300 group overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient.replace('/20', '/60')}`} />
          
          <div className="relative mb-6">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient.replace('/20', '/30')} backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-7 h-7 ${item.iconColor || 'text-white'}`} />
            </div>
          </div>
          
          <h3 className={`text-2xl lg:text-3xl font-bold ${item.titleColor} mb-6 tracking-tight`}>
            {item.title}
          </h3>
          
          {item.description && (
            <p className="text-gray-200 leading-relaxed mb-6 text-base lg:text-lg">
              {item.description}
            </p>
          )}
          
          {item.points && (
            <div className="space-y-4 mb-6">
              {item.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient.replace('/20', '/80')} flex-shrink-0`} />
                  <p className="text-gray-200 leading-relaxed text-sm lg:text-base">{point}</p>
                </div>
              ))}
            </div>
          )}
          
          {item.skills && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <SkillBubble
                  key={skill.name}
                  skill={skill}
                  category={skill.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Journey() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const timelineData = useMemo(() => [
    {
      icon: Lightbulb,
      iconColor: 'text-orange-400',
      titleColor: 'text-orange-400',
      gradient: 'from-orange-400/20 to-red-400/20',
      title: "The Spark",
      description: "My journey began with curiosity for problem solving and a fascination with how technology shapes our world. What started as tinkering with code quickly evolved into a passion for creating meaningful digital experiences.",
    },
    {
      icon: Code,
      iconColor: 'text-green-400',
      titleColor: 'text-green-400',
      gradient: 'from-green-400/20 to-emerald-400/20',
      title: "Full Stack Mastery",
      description: "Over 3 years of crafting scalable web applications and mobile solutions. I specialize in modern JavaScript frameworks and have built everything from responsive interfaces to complex backend systems.",
      skills: [
        { name: 'React', category: 'frameworks', logo: '/react.png' },
        { name: 'Node.js', category: 'frameworks', logo: '/nodejs.png' },
        { name: 'JavaScript', category: 'languages', logo: '/javascript.png' },
        { name: 'Python', category: 'languages', logo: '/python.png' }
      ],
    },
    {
      icon: Monitor,
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-400',
      gradient: 'from-blue-400/20 to-cyan-400/20',
      title: "Cross Platform Expertise",
      description: "My experience spans mobile development with Flutter, Kotlin and Swift, database architecture with both SQL and NoSQL solutions, and cloud deployment strategies using modern containerization.",
      skills: [
        { name: 'Flutter', category: 'frameworks', logo: '/flutter.svg' },
        { name: 'Swift', category: 'languages', logo: '/swift.png' },
        { name: 'MongoDB', category: 'databases', logo: '/mongodb.png' },
        { name: 'Docker', category: 'tools', logo: '/docker.png' }
      ],
    },
    {
      icon: Target,
      iconColor: 'text-purple-400',
      titleColor: 'text-purple-400',
      gradient: 'from-purple-400/20 to-pink-400/20',
      title: "Code Philosophy",
      description: "What sets me apart is my commitment to writing clean, maintainable code and my passion for user experience. I believe great software isn't just functional, it's intuitive, performant, and accessible.",
      skills: [
        { name: 'Git', category: 'tools', logo: '/git.png' },
        { name: 'CI/CD', category: 'tools', logo: '/cicd.png' },
        { name: 'AWS', category: 'systems', logo: '/aws.png' },
        { name: 'Linux', category: 'systems', logo: '/linux.png' }
      ],
    },
    {
      icon: Users,
      iconColor: 'text-yellow-400',
      titleColor: 'text-yellow-400',
      gradient: 'from-yellow-400/20 to-amber-400/20',
      title: "Collaborative Impact",
      description: "I thrive in collaborative environments where I can learn from others while contributing expertise in system architecture and performance optimization. My goal is delivering solutions that exceed expectations.",
      skills: [
        { name: 'PostgreSQL', category: 'databases', logo: '/postgresql.png' },
        { name: 'Postman', category: 'tools', logo: '/postman.png' },
        { name: 'VS Code', category: 'tools', logo: '/vscode.png' },
        { name: 'C++', category: 'languages', logo: '/cpp.png' }
      ],
    },
    {
      icon: Brain,
      iconColor: 'text-orange-400',
      titleColor: 'text-orange-400',
      gradient: 'from-orange-400/20 to-red-400/20',
      title: "Data Science & AI",
      points: [
        "Developing highly scalable production ready models for various deep learning and statistical use cases",
        "Experience working with Computer Vision and NLP projects using TensorFlow, PyTorch, and scikit learn",
        "Complex quantitative modeling for dynamic forecasting and time series analysis with advanced statistical methods"
      ],
    },
    {
      icon: Code,
      iconColor: 'text-green-400',
      titleColor: 'text-green-400',
      gradient: 'from-green-400/20 to-emerald-400/20',
      title: "Full Stack Development",
      points: [
        "Building responsive, high performance web applications using React, Redux, and modern JavaScript frameworks",
        "Developing cross platform mobile applications using Flutter, React Native, and native Android/iOS development",
        "Creating robust backend systems and APIs using Node.js, Express, Python Flask, and microservices architecture"
      ],
    },
    {
      icon: Cloud,
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-400',
      gradient: 'from-blue-400/20 to-cyan-400/20',
      title: "Cloud Infrastructure",
      points: [
        "Designing and deploying applications on AWS, Google Cloud Platform, and Azure with auto scaling capabilities",
        "Managing containerized applications using Docker and Kubernetes for efficient deployment and orchestration",
        "Implementing CI/CD pipelines for automated testing, building, and deployment of applications"
      ],
    },
    {
      icon: Palette,
      iconColor: 'text-purple-400',
      titleColor: 'text-purple-400',
      gradient: 'from-purple-400/20 to-pink-400/20',
      title: "UI/UX Design",
      points: [
        "Creating intuitive and visually appealing user interfaces with a focus on accessibility and user experience",
        "Designing comprehensive design systems and style guides for consistent branding across platforms",
        "Proficient in Figma, Adobe Creative Suite, and prototyping tools for rapid design iteration"
      ],
    }
  ], []);

  return (
    <section 
      ref={sectionRef}
      className="snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-blue-400">
              My Journey & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto">
            From curiosity driven beginnings to full stack expertise. Discover my path and the technologies I have mastered.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Bar */}
          <div 
            className={`absolute ${
              isDesktop ? 'left-1/2 -translate-x-1/2' : 'left-3'
            } h-full w-1`}
            style={{
              background: 'linear-gradient(180deg, #d3ffd7 0%, #faff00 12%, #14af7d 25%, #ff4d00 37%, #00c8ff 50%, #7856ff 62%, #ff4d00 75%, #14af7d 87%, #d3ffd7 100%)',
              boxShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
          />

          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isDesktop={isDesktop}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`${isDesktop ? 'text-center' : 'ml-12'} mt-20`}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
            willChange: isInView ? 'auto' : 'opacity, transform'
          }}
        >
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block max-w-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-semibold text-blue-400">Ready to Build Something Amazing?</span>
            </div>
            <p className="text-gray-300">
              Let's collaborate and create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}