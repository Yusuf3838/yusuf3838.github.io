import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, FolderOpen, Mail, ExternalLink } from 'lucide-react';

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

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Logo Button - Fixed Position */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect */}
          <div 
            className={`absolute -inset-2 rounded-xl blur-lg transition-all duration-300 ${
              navFlicker ? 'opacity-100' : 'opacity-60'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
            }}
          />
          
          {/* Logo container */}
          <div className="relative w-12 h-12 bg-black/70 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/80 group-hover:border-white/30">
            {/* Placeholder for logo.png - replace this with actual image */}
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center text-black font-bold text-sm">
              YS
            </div>
            {/* Uncomment and use this when you have logo.png */}
            {/* <img src="logo.png" alt="Logo" className="w-8 h-8 object-contain" /> */}
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: isOpen ? '100%' : '-100%',
              opacity: isOpen ? [0, 1, 0] : 0
            }}
            transition={{ duration: 0.8 }}
          />
        </motion.button>
      </motion.div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              opacity: { duration: 0.2 }
            }}
            className="fixed left-0 top-0 h-full w-80 z-50"
          >
            {/* Sidebar glow effect */}
            <div 
              className={`absolute -inset-4 blur-xl transition-all duration-500 ${
                navFlicker ? 'opacity-100' : 'opacity-70'
              }`}
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.1) 0%,
                    rgba(255,255,255,0.05) 50%,
                    rgba(255,255,255,0.1) 100%
                  )
                `,
              }}
            />

            {/* Sidebar content */}
            <div className="relative h-full bg-black/80 backdrop-blur-xl border-r border-white/20">
              {/* Sidebar header */}
              <div className="p-8 border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center text-black font-bold text-xl">
                    YS
                  </div>
                  <h2 
                    className="text-xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    Yusuf Sheikhali
                  </h2>
                  <p className="text-sm text-white/60">
                    Full Stack Developer
                  </p>
                </motion.div>
              </div>

              {/* Navigation items */}
              <nav className="p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                    >
                      {/* Hover glow */}
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                      
                      {/* Icon */}
                      <item.icon 
                        className="w-5 h-5 relative z-10 transition-colors group-hover:text-white"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      />
                      
                      {/* Text */}
                      <span 
                        className="relative z-10 font-medium transition-colors group-hover:text-white"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {item.name}
                      </span>

                      {/* Arrow indicator */}
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-4 h-4 text-white/50" />
                      </motion.div>

                      {/* Scan line effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-6 right-6"
              >
                <div className="text-center">
                  {/* Status indicator */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #00ff88 0%, #00cc6a 100%)',
                        boxShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                      }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-white/60">Available for projects</span>
                  </div>

                  {/* Decorative line */}
                  <div 
                    className="h-px w-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Ambient particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                  className="absolute top-1/4 left-8 w-1 h-1 bg-white/30 rounded-full"
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                />
                <motion.div 
                  className="absolute top-1/2 right-8 w-1 h-1 bg-white/20 rounded-full"
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.2, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;