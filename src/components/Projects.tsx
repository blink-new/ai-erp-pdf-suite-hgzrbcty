import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'React', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing clean design principles and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform with markdown support, user authentication, and content management system.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Design System',
      description: 'A comprehensive design system and component library built for scalable React applications.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      technologies: ['React', 'Storybook', 'TypeScript', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="font-primary text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills in frontend development, 
            design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="card-minimal overflow-hidden group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>

              {/* Project details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="font-primary text-2xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-md font-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex items-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="inline-flex items-center px-6 py-3 bg-accent text-white font-primary font-medium rounded-lg hover:bg-accent/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="inline-flex items-center px-6 py-3 border border-border text-primary font-primary font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-primary text-2xl font-bold text-primary mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white rounded-lg text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white rounded-lg text-primary hover:text-accent transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-primary text-lg font-semibold text-primary mb-2">
                    {project.title}
                  </h4>
                  <p className="text-primary/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-primary/70 rounded text-xs font-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-primary/70 rounded text-xs font-primary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="inline-flex items-center font-primary font-medium text-accent hover:text-accent/80 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;