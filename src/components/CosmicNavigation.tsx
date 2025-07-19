import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderOpen, 
  BookOpen, 
  Mic, 
  Mail, 
  Brain,
  Menu,
  X
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} />, href: '#home' },
  { id: 'about', label: 'About', icon: <User size={20} />, href: '#about' },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} />, href: '#experience' },
  { id: 'skills', label: 'Skills', icon: <Code size={20} />, href: '#skills' },
  { id: 'projects', label: 'Projects', icon: <FolderOpen size={20} />, href: '#projects' },
  { id: 'blog', label: 'Blog', icon: <BookOpen size={20} />, href: '#blog' },
  { id: 'voice', label: 'Voice Notes', icon: <Mic size={20} />, href: '#voice' },
  { id: 'philosophy', label: 'Philosophy', icon: <Brain size={20} />, href: '#philosophy' },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
];

const CosmicNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Floating Orbs */}
      <motion.nav
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="glass rounded-full px-6 py-3 backdrop-blur-xl border border-white/10">
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'bg-accent text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.icon}
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {item.label}
                </motion.div>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent/50"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-6 right-6 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full glass backdrop-blur-xl border border-white/10 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div
              className="absolute top-20 right-6 glass rounded-2xl p-6 backdrop-blur-xl border border-white/10 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-accent text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-cosmic-purple to-cosmic-cyan z-50 origin-left"
        style={{ scaleX: scrollY / (document.body.scrollHeight - window.innerHeight) }}
      />
    </>
  );
};

export default CosmicNavigation;