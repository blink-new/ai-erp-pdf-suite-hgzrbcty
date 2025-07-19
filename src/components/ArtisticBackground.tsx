import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ArtisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create artistic particles with different behaviors
    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = 150;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${Math.random() * 60 + 220}, 70%, ${Math.random() * 30 + 50}%)`,
          type: Math.floor(Math.random() * 4), // Different particle types
          angle: Math.random() * Math.PI * 2,
          pulse: Math.random() * 0.02 + 0.01,
          trail: []
        });
      }
    };

    createParticles();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Artistic animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 8, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw constellation connections
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;
      
      particlesRef.current.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.angle += particle.pulse;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x += dx * force * 0.01;
          particle.y += dy * force * 0.01;
        }

        // Add to trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }

        // Draw particle trail
        if (particle.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          for (let j = 1; j < particle.trail.length; j++) {
            ctx.lineTo(particle.trail[j].x, particle.trail[j].y);
          }
          ctx.strokeStyle = `${particle.color.replace(')', ', 0.3)')}`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Draw different particle types
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);

        switch (particle.type) {
          case 0: {// Glowing orbs
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 3);
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * 3, 0, Math.PI * 2);
            ctx.fill();
            break;
          }

          case 1: // Sacred geometry
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let j = 0; j < 6; j++) {
              const angle = (j * Math.PI) / 3;
              const x = Math.cos(angle) * particle.size;
              const y = Math.sin(angle) * particle.size;
              if (j === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            break;

          case 2: // Zen circles
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * 1.5, 0, Math.PI * 2);
            ctx.stroke();
            break;

          case 3: // Tech diamonds
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size, 0);
            ctx.lineTo(0, particle.size);
            ctx.lineTo(-particle.size, 0);
            ctx.closePath();
            ctx.fill();
            break;
        }

        ctx.restore();

        // Draw connections between nearby particles
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(100 - distance) / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0F0F23 0%, #000814 50%, #000000 100%)' }}
      />
      
      {/* Artistic overlay gradients */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`
            }}
          >
            <div className="w-32 h-32 border border-indigo-400/30 rotate-45 rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtisticBackground;