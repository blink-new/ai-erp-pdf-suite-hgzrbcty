import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CosmicHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const particles = particlesRef.current;

    if (!hero || !title || !subtitle || !particles) return;

    // GSAP Parallax animations
    gsap.set([title, subtitle], { y: 100, opacity: 0 });

    const tl = gsap.timeline();
    
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    })
    .to(subtitle, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8");

    // Parallax scroll effect
    gsap.to(hero, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Floating particles animation
    gsap.to(particles.children, {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-180, 180)",
      duration: "random(3, 6)",
      ease: "none",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const philosophicalQuotes = [
    "The cosmos is within us. We are made of star-stuff. - Carl Sagan",
    "In the depth of winter, I finally learned that there was in me an invincible summer. - Albert Camus",
    "The way is not in the sky. The way is in the heart. - Buddha",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci"
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % philosophicalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [philosophicalQuotes.length]);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Geometric Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              i % 4 === 0 ? 'bg-accent' :
              i % 4 === 1 ? 'bg-cosmic-purple' :
              i % 4 === 2 ? 'bg-cosmic-cyan' : 'bg-cosmic-gold'
            } rounded-full opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Philosophical Quote */}
        <motion.div
          className="mb-8"
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="philosophy-text text-gray-400 text-lg max-w-2xl mx-auto italic">
            "{philosophicalQuotes[currentQuote]}"
          </p>
        </motion.div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Cosmic</span>
          <br />
          <span className="text-white font-japanese">Philosopher</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed korean-tech"
        >
          Bridging the cosmos of technology and philosophy through 
          <span className="text-accent font-semibold"> innovative design</span>, 
          <span className="text-cosmic-purple font-semibold"> mindful development</span>, and 
          <span className="text-cosmic-cyan font-semibold"> universal wisdom</span>
        </p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 glass border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Portfolio</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex items-center justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-accent/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-accent rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Cosmic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cosmic-purple/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-cosmic-cyan/20 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-cosmic-gold/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default CosmicHero;