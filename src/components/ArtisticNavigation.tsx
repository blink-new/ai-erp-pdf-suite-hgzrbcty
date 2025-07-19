import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Home, User, Briefcase, Code, FolderOpen, 
  PenTool, Mic, Mail, Heart, Menu, X 
} from 'lucide-react';

const ArtisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'from-blue-400 to-cyan-400' },
    { id: 'about', label: 'About', icon: User, color: 'from-purple-400 to-pink-400' },
    { id: 'experience', label: 'Experience', icon: Briefcase, color: 'from-green-400 to-emerald-400' },
    { id: 'skills', label: 'Skills', icon: Code, color: 'from-orange-400 to-red-400' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, color: 'from-indigo-400 to-purple-400' },
    { id: 'blog', label: 'Blog', icon: PenTool, color: 'from-yellow-400 to-orange-400' },
    { id: 'voice', label: 'Voice Notes', icon: Mic, color: 'from-pink-400 to-rose-400' },
    { id: 'philosophy', label: 'Philosophy', icon: Heart, color: 'from-teal-400 to-blue-400' },
    { id: 'contact', label: 'Contact', icon: Mail, color: 'from-violet-400 to-purple-400' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut"
      });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Cosmic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
      />

      {/* Desktop Navigation - Floating Orbs */}
      <motion.nav
        className="hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Orb Background */}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} p-0.5 shadow-lg shadow-indigo-500/25`}>
              <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <item.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Glowing Ring */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 blur-md`}
              animate={{
                scale: activeSection === item.id ? [1, 1.2, 1] : 1,
                opacity: activeSection === item.id ? [0.3, 0.6, 0.3] : 0
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Label */}
            <motion.div
              className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <div className="bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-medium whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-900/90 rotate-45 border-l border-b border-white/10" />
              </div>
            </motion.div>

            {/* Particle Trail */}
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-sm`} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/25"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-40 p-6"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="mt-16 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full group relative overflow-hidden"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r ${item.color} p-0.5`}>
                        <div className="flex-1 flex items-center space-x-4 bg-slate-900/80 rounded-xl p-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium">{item.label}</span>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-xl`}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  <div className="text-center text-white/60 text-sm">
                    Cosmic Portfolio
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Action Buttons */}
      <motion.div
        className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Scroll to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-0.5 shadow-lg shadow-purple-500/25"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default ArtisticNavigation;