import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navFlicker, setNavFlicker] = useState(false);

  // Random flicker effect for navbar
  useEffect(() => {
    const interval = setInterval(() => {
      setNavFlicker(true);
      setTimeout(() => setNavFlicker(false), 150);
    }, Math.random() * 5000 + 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Flickering background overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-200 pointer-events-none ${
          navFlicker ? 'opacity-30' : 'opacity-15'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient lighting for navbar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-200 pointer-events-none ${
          navFlicker ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          background: navFlicker 
            ? 'radial-gradient(ellipse 800px 100px at 50% 0%, rgba(255,165,0,0.2) 0%, rgba(255,215,0,0.15) 30%, transparent 70%)'
            : 'radial-gradient(ellipse 600px 80px at 50% 0%, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.08) 30%, transparent 70%)'
        }}
      />

      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/20">
        {/* Outer glow that flickers */}
        <div 
          className={`absolute -inset-2 bg-gradient-to-r from-orange-400/20 via-green-300/30 to-orange-400/20 blur-xl transition-all duration-200 ${
            navFlicker ? 'opacity-100 scale-110' : 'opacity-60'
          }`} 
        />

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 group ${
                      navFlicker ? 'brightness-125' : ''
                    }`}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="relative text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-green-400 transition-all">
                      {item}
                    </span>

                    {/* Lightning bolt indicator */}
                    <span className="absolute -top-1 -right-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                      ⚡
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 rounded-md border border-orange-400/30 bg-black/60 text-gray-300 hover:text-orange-400 transition-colors ${
                  navFlicker ? 'brightness-125' : ''
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity" />
                <span className="relative">
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden relative"
          >
            {/* Mobile menu glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 via-green-300/30 to-orange-400/20 blur-xl opacity-80" />
            
            <div className="relative bg-black/90 backdrop-blur-sm border-t border-orange-400/20 px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="relative block px-3 py-2 rounded-md text-base font-bold text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-green-400 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Mobile hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    {item}
                    <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">⚡</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Scan line effect */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent transition-all duration-200 ${
            navFlicker ? 'opacity-100' : 'opacity-40'
          }`}
        />
      </nav>

      {/* Floating particles for navbar area */}
      <div className="fixed top-0 left-0 right-0 h-20 z-45 pointer-events-none">
        <motion.div 
          className="absolute top-2 left-1/4 w-1 h-1 bg-orange-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            x: [0, 30, 60]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.div 
          className="absolute top-3 right-1/3 w-1 h-1 bg-green-300 rounded-full"
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.2, 0],
            x: [0, -25, -50]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>
    </>
  );
};

export default Navbar;