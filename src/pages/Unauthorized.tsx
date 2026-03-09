import { motion } from 'motion/react';
import { Fingerprint, Home } from 'lucide-react';
import AtmosphericBackground from '../components/AtmosphericBackground';

export default function Unauthorized() {
  return (
    <AtmosphericBackground color="96,165,250">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Fingerprint size={120} className="text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]" />
      </motion.div>

      <motion.h1 
        className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900/20 leading-none tracking-tighter mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        401
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 mt-4"
      >
        <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
          Identity unverified.
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          You lack the necessary credentials to access this sector of the void.
        </p>

        <a 
          href="https://adixxlee.ru" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-medium hover:scale-105 transition-transform mt-8"
        >
          <Home size={20} />
          Return to Home
        </a>
      </motion.div>
    </AtmosphericBackground>
  );
}
