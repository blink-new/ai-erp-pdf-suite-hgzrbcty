import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Bridging the gap between beautiful design and functional development.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every project.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Creating experiences that users love and find intuitive.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-primary text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="font-primary text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with a love for creating digital experiences 
            that are both beautiful and functional. My approach combines technical expertise 
            with design sensibility to build products that users truly enjoy.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-minimal p-8">
              <h3 className="font-primary text-xl font-semibold text-primary mb-4">
                My Journey
              </h3>
              <p className="text-primary/70 leading-relaxed mb-4">
                Started as a curious student exploring the intersection of technology and creativity. 
                Over the years, I've developed a deep appreciation for clean, minimalist design 
                inspired by Japanese aesthetics and modern web standards.
              </p>
              <p className="text-primary/70 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or experimenting with the latest frontend technologies.
              </p>
            </div>

            <div className="card-minimal p-8">
              <h3 className="font-primary text-xl font-semibold text-primary mb-4">
                Current Focus
              </h3>
              <ul className="space-y-2 text-primary/70">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  React & Next.js Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  TypeScript & Modern JavaScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  UI/UX Design Systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Performance Optimization
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal p-6 text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-primary font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;