import { motion } from 'motion/react';
import { Coffee, Home } from 'lucide-react';
import AtmosphericBackground from '../components/AtmosphericBackground';

export default function Teapot() {
  return (
    <AtmosphericBackground color="52,211,153">
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Coffee size={120} className="text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]" />
      </motion.div>

      <motion.h1 
        className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900/20 leading-none tracking-tighter mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        418
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 mt-4"
      >
        <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
          I am a teapot.
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          This server refuses to brew coffee because it is, permanently, a teapot.
        </p>

        <a 
          href="https://adixxlee.ru" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:scale-105 transition-transform mt-8"
        >
          <Home size={20} />
          Return to Home
        </a>
      </motion.div>
    </AtmosphericBackground>
  );
}
