import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArtisticBackground from './components/ArtisticBackground';
import ArtisticNavigation from './components/ArtisticNavigation';
import ArtisticHero from './components/ArtisticHero';
import ArtisticSections from './components/ArtisticSections';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
    
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Artistic Background Layer */}
      <ArtisticBackground />
      
      {/* Navigation Layer */}
      <ArtisticNavigation />
      
      {/* Main Content */}
      <main className="relative z-30">
        {/* Hero Section */}
        <ArtisticHero />
        
        {/* Content Sections */}
        <ArtisticSections />
        
        {/* Blog Section Placeholder */}
        <section id="blog" className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
              Philosophical Blog
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Coming Soon - A space for deep thoughts and cosmic wisdom
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-indigo-400/30 transition-colors duration-300">
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60">Blog Post {i}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cosmic Thoughts #{i}</h3>
                  <p className="text-white/70">Exploring the intersection of technology and consciousness...</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Voice Notes Section Placeholder */}
        <section id="voice" className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 bg-clip-text text-transparent mb-6">
              Voice Notes
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Coming Soon - Audio thoughts from the cosmic journey
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-400/30 transition-colors duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                      🎙️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Voice Note {i}</h3>
                      <p className="text-white/60">2:30 duration</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Philosophy Section Placeholder */}
        <section id="philosophy" className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              Philosophy
            </h2>
            <p className="text-xl text-white/70 mb-12">
              The intersection of ancient wisdom and modern technology
            </p>
            <div className="max-w-4xl mx-auto space-y-8">
              <blockquote className="text-2xl text-white/90 font-light italic border-l-4 border-indigo-500 pl-6">
                "In the vast cosmos of code and consciousness, we find that every algorithm echoes the patterns of the universe itself."
              </blockquote>
              <blockquote className="text-2xl text-white/90 font-light italic border-l-4 border-purple-500 pl-6">
                "Technology is not separate from nature—it is nature expressing itself through human creativity."
              </blockquote>
              <blockquote className="text-2xl text-white/90 font-light italic border-l-4 border-blue-500 pl-6">
                "The most beautiful code is written not just for machines, but for the elevation of human consciousness."
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Contact Section Placeholder */}
        <section id="contact" className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              Connect
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Let's explore the cosmic possibilities together
            </p>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                  <p className="text-white/70 mb-6">
                    Whether you want to discuss philosophy, technology, or the universe itself, 
                    I'm always open to meaningful conversations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-indigo-400">📧</span>
                      <span className="text-white">cosmic@philosopher.dev</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-purple-400">🌐</span>
                      <span className="text-white">cosmicphilosopher.dev</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400">🐦</span>
                      <span className="text-white">@CosmicPhilosopher</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-indigo-400/50 focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-indigo-400/50 focus:outline-none"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-indigo-400/50 focus:outline-none resize-none"
                  />
                  <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative z-30 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 mb-4">
            © 2024 Cosmic Philosopher. Bridging worlds through code and consciousness.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-indigo-400 transition-colors duration-300">Privacy</a>
            <a href="#" className="text-white/60 hover:text-indigo-400 transition-colors duration-300">Terms</a>
            <a href="#" className="text-white/60 hover:text-indigo-400 transition-colors duration-300">Philosophy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;