import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Code, Palette, Brain, Globe, Rocket, Heart,
  BookOpen, Mic, Camera, Lightbulb, Star, Zap
} from 'lucide-react';

const ArtisticSections: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const skills = useMemo(() => [
    { name: "React & Next.js", level: 95, icon: Code, color: "from-blue-400 to-cyan-400" },
    { name: "TypeScript", level: 90, icon: Zap, color: "from-indigo-400 to-purple-400" },
    { name: "Node.js & Python", level: 88, icon: Globe, color: "from-green-400 to-emerald-400" },
    { name: "UI/UX Design", level: 85, icon: Palette, color: "from-pink-400 to-rose-400" },
    { name: "AI & Machine Learning", level: 82, icon: Brain, color: "from-orange-400 to-red-400" },
    { name: "Philosophy & Ethics", level: 95, icon: Heart, color: "from-purple-400 to-indigo-400" }
  ], []);

  const projects = [
    {
      title: "Quantum Meditation App",
      description: "AI-powered meditation platform combining ancient wisdom with quantum physics principles",
      tech: ["React", "AI", "WebGL", "Philosophy"],
      color: "from-purple-500 to-pink-500",
      icon: Brain
    },
    {
      title: "Cosmic Code Editor",
      description: "Revolutionary code editor with space-themed UI and philosophical code comments",
      tech: ["TypeScript", "Electron", "GSAP", "Zen"],
      color: "from-blue-500 to-indigo-500",
      icon: Code
    },
    {
      title: "Digital Mandala Generator",
      description: "Sacred geometry art generator inspired by Indian, Japanese, and Korean aesthetics",
      tech: ["Canvas", "Math", "Art", "Culture"],
      color: "from-green-500 to-teal-500",
      icon: Palette
    },
    {
      title: "Philosophical Blog Platform",
      description: "Multi-cultural wisdom sharing platform with voice notes and artistic design",
      tech: ["Next.js", "Voice AI", "Design", "Wisdom"],
      color: "from-orange-500 to-red-500",
      icon: BookOpen
    }
  ];

  useEffect(() => {
    if (skillsInView) {
      skills.forEach((skill, index) => {
        gsap.to(`.skill-bar-${index}`, {
          width: `${skill.level}%`,
          duration: 2,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    }
  }, [skillsInView, skills]);

  return (
    <div className="relative">
      {/* Parallax Background Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              About the Journey
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Artistic Portrait Area */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Geometric Frame */}
                <div className="absolute inset-0 border-2 border-indigo-400/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-reverse-spin" />
                
                {/* Portrait Placeholder */}
                <div className="absolute inset-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Camera className="w-16 h-16 text-white/60" />
                </div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    style={{
                      left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Bridging Worlds Through Code & Consciousness
              </h3>
              
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  Born from the intersection of <span className="text-indigo-300">ancient wisdom</span> and 
                  <span className="text-purple-300"> modern technology</span>, I craft digital experiences 
                  that touch the soul while pushing the boundaries of what's possible.
                </p>
                
                <p>
                  My journey spans from the <span className="text-blue-300">meditative gardens of Japan</span> to 
                  the <span className="text-orange-300">vibrant tech hubs of Korea</span>, from the 
                  <span className="text-green-300">spiritual depths of India</span> to the 
                  <span className="text-red-300">artistic renaissance of Italy</span>.
                </p>
                
                <p>
                  Each line of code I write carries the essence of philosophical inquiry, 
                  each design reflects the harmony of diverse cultures, and each project 
                  aims to elevate human consciousness through technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {['Philosopher', 'Developer', 'Artist', 'Dreamer'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Galaxy Section */}
      <section ref={skillsRef} id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Skills Galaxy
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each skill is a star in my cosmic constellation of knowledge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-indigo-400/30 transition-colors duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <p className="text-white/60">{skill.level}% Mastery</p>
                    </div>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`skill-bar-${index} h-full bg-gradient-to-r ${skill.color} rounded-full w-0 transition-all duration-1000`}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Constellation */}
      <section ref={projectsRef} id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Project Constellation
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each project is a unique star in the universe of possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden group-hover:border-indigo-400/30 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 border border-white/10 rounded-full text-sm text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      className={`w-full py-3 bg-gradient-to-r ${project.color} rounded-lg text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Project
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtisticSections;