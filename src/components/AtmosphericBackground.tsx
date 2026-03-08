import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function AtmosphericBackground({ children, color = '255,255,255' }: { children: React.ReactNode, color?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden relative flex items-center justify-center font-sans">
      {/* Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Interactive Colored Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(${color}, 0.08) 0%, transparent 80%)`,
        }}
      />
      
      {/* Ambient Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${color}, 0.03) 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
        {children}
      </div>
    </div>
  );
}
