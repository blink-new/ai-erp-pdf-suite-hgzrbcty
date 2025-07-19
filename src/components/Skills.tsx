import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Webpack', level: 65 },
        { name: 'Vite', level: 80 },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'REST APIs', level: 75 },
      ],
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Figma',
    'Adobe XD', 'Webpack', 'Vite', 'REST APIs', 'GraphQL'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
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
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="font-primary text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern web applications, 
            from frontend interfaces to backend systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card-minimal p-8"
            >
              <h3 className="font-primary text-xl font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-primary text-sm font-medium text-primary">
                        {skill.name}
                      </span>
                      <span className="font-primary text-xs text-primary/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="bg-accent h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-minimal p-8"
        >
          <h3 className="font-primary text-xl font-semibold text-primary mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-muted rounded-lg font-primary text-sm font-medium text-primary hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;