import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';
import AtmosphericBackground from '../components/AtmosphericBackground';

export default function NotFound() {
  return (
    <AtmosphericBackground color="255,255,255">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Ghost size={120} className="text-white/80 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
        <motion.div 
          className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.h1 
        className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none tracking-tighter mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 mt-4"
      >
        <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
          Looks like you're lost in the void.
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          The page you are looking for has vanished into the dark matter of the internet.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform mt-8"
        >
          <Home size={20} />
          Return to Base
        </Link>
      </motion.div>
    </AtmosphericBackground>
  );
}
