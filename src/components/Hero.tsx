import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-primary text-5xl md:text-7xl font-bold text-primary mb-4">
              Priyanshu
            </h1>
            <div className="font-japanese text-xl md:text-2xl text-muted-foreground mb-6">
              フロントエンド開発者
            </div>
            <p className="font-primary text-lg md:text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Frontend Developer crafting beautiful, functional digital experiences 
              with clean code and thoughtful design.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-200 group"
              >
                <social.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-8 py-4 bg-accent text-white font-primary font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 text-primary/60 hover:text-accent transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;