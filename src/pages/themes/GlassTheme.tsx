import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';

export default function GlassTheme() {
  const { code } = useParams();
  const errorData = {
    '401': 'Authentication Required',
    '403': 'Access Restricted',
    '404': 'Page Not Found',
    '500': 'Internal Exception',
    '503': 'Service Unavailable',
  }[code || '404'] || 'Unknown Error';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center relative overflow-hidden">
      {/* Atmospheric Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-12 md:p-16 rounded-3xl max-w-2xl w-full mx-4 text-center shadow-2xl"
      >
        <h1 className="text-7xl md:text-8xl font-light tracking-tighter mb-6">{code}</h1>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8" />
        <h2 className="text-2xl md:text-3xl font-serif italic text-white/80 mb-6">{errorData}</h2>
        <p className="text-white/40 mb-12 font-light">
          We encountered an unexpected condition. The page you are looking for is currently inaccessible.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm tracking-widest uppercase"
        >
          Go Back
        </Link>
      </motion.div>
    </div>
  );
}
