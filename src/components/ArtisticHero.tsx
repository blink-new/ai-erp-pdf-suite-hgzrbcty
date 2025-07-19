import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Download, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const ArtisticHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const philosophicalQuotes = [
    {
      text: "The universe is not only stranger than we imagine, it is stranger than we can imagine.",
      author: "J.B.S. Haldane",
      culture: "Western Philosophy"
    },
    {
      text: "道可道，非常道。名可名，非常名。",
      translation: "The Tao that can be spoken is not the eternal Tao.",
      author: "Lao Tzu",
      culture: "Chinese Wisdom"
    },
    {
      text: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।",
      translation: "May all beings be happy, may all beings be free from illness.",
      author: "Sanskrit Mantra",
      culture: "Indian Philosophy"
    },
    {
      text: "一期一会",
      translation: "One time, one meeting - treasure every encounter.",
      author: "Japanese Wisdom",
      culture: "Japanese Philosophy"
    },
    {
      text: "Красота спасёт мир",
      translation: "Beauty will save the world.",
      author: "Fyodor Dostoevsky",
      culture: "Russian Literature"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % philosophicalQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [philosophicalQuotes.length]);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        opacity: 0, 
        y: 100, 
        rotationX: -90,
        transformOrigin: "50% 50% -50px"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Artistic Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Geometric Art */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <div 
              className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} 
                         border border-indigo-400/20 rounded-lg transform rotate-45 
                         ${Math.random() > 0.5 ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : ''}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-6 max-w-6xl mx-auto">
        {/* Artistic Name Display */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <h1 
              ref={textRef}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            >
              {splitText("COSMIC")}
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white/80 tracking-wider">
              {splitText("PHILOSOPHER")}
            </h2>
            
            {/* Artistic Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </div>
        </motion.div>

        {/* Philosophical Quote Carousel */}
        <motion.div
          className="mb-12 h-32 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative max-w-4xl">
            {philosophicalQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 text-center ${index === currentQuote ? 'opacity-100' : 'opacity-0'}`}
                animate={{
                  opacity: index === currentQuote ? 1 : 0,
                  y: index === currentQuote ? 0 : 20
                }}
                transition={{ duration: 0.8 }}
              >
                <blockquote className="text-xl md:text-2xl text-white/90 font-light italic mb-2">
                  "{quote.text}"
                </blockquote>
                {quote.translation && (
                  <p className="text-lg text-indigo-300 mb-2">
                    {quote.translation}
                  </p>
                )}
                <cite className="text-sm text-white/60">
                  — {quote.author} • {quote.culture}
                </cite>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Artistic Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Full-Stack Developer • Digital Artist • Philosophical Thinker
          <br />
          <span className="text-indigo-300">Bridging Technology with Human Consciousness</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group px-8 py-4 border-2 border-indigo-400/50 rounded-full text-white font-medium hover:bg-indigo-400/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          {[
            { icon: Github, href: "#", color: "from-gray-400 to-gray-600" },
            { icon: Linkedin, href: "#", color: "from-blue-400 to-blue-600" },
            { icon: Twitter, href: "#", color: "from-sky-400 to-blue-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} p-0.5 shadow-lg`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <social.icon className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm">Explore</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>

      {/* Artistic Side Decorations */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl" />
    </motion.section>
  );
};

export default ArtisticHero;