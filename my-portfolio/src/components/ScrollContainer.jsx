
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Palette, Zap, Brain, Cloud, Lightbulb, Users, Target, Monitor, Sparkles } from 'lucide-react';

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  return (
    <div 
      ref={containerRef}
      className="snap-y snap-mandatory overflow-y-scroll h-screen w-full"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  );
};
export default ScrollContainer;