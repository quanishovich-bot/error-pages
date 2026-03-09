import { motion } from 'motion/react';
import { ServerCrash, Home } from 'lucide-react';
import AtmosphericBackground from '../components/AtmosphericBackground';

export default function InternalServerError() {
  return (
    <AtmosphericBackground color="251,146,60">
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="relative"
      >
        <ServerCrash size={120} className="text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]" />
      </motion.div>

      <motion.h1 
        className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-900/20 leading-none tracking-tighter mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        500
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 mt-4"
      >
        <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
          Core systems failing.
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          A critical anomaly has disrupted the server matrix. Engineers have been notified.
        </p>

        <a 
          href="https://adixxlee.ru" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:scale-105 transition-transform mt-8"
        >
          <Home size={20} />
          Return to Home
        </a>
      </motion.div>
    </AtmosphericBackground>
  );
}
