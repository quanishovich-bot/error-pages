import { motion } from 'motion/react';
import { ShieldAlert, Home } from 'lucide-react';
import AtmosphericBackground from '../components/AtmosphericBackground';

export default function Forbidden() {
  return (
    <AtmosphericBackground color="248,113,113">
      <motion.div
        animate={{ x: [-5, 5, -5, 5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        className="relative"
      >
        <ShieldAlert size={120} className="text-red-400 drop-shadow-[0_0_30px_rgba(248,113,113,0.5)]" />
      </motion.div>

      <motion.h1 
        className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-900/20 leading-none tracking-tighter mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        403
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 mt-4"
      >
        <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
          Access strictly forbidden.
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          This area is quarantined. Further attempts to breach will be logged.
        </p>

        <a 
          href="https://adixxlee.ru" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-full font-medium hover:scale-105 transition-transform mt-8"
        >
          <Home size={20} />
          Return to Home
        </a>
      </motion.div>
    </AtmosphericBackground>
  );
}
