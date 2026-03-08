import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';

export default function BrutalistTheme() {
  const { code } = useParams();
  const errorData = {
    '401': 'UNAUTHORIZED',
    '403': 'FORBIDDEN',
    '404': 'NOT FOUND',
    '500': 'SERVER ERROR',
    '503': 'UNAVAILABLE',
  }[code || '404'] || 'UNKNOWN';

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <header className="border-b-4 border-black p-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">SYS.ERR</div>
        <div className="text-sm font-bold uppercase">Status: Critical</div>
      </header>
      
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className="border-b-4 md:border-b-0 md:border-r-4 border-black p-12 flex flex-col justify-center">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[8rem] md:text-[12rem] leading-none font-black tracking-tighter"
          >
            {code}
          </motion.h1>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mt-4">{errorData}</h2>
        </div>
        
        <div className="p-12 flex flex-col justify-center bg-black text-white">
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-md">
            THE REQUESTED OPERATION COULD NOT BE COMPLETED. PLEASE VERIFY YOUR CLEARANCE OR RETURN TO THE INDEX.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-white text-black text-xl font-bold uppercase py-4 px-8 border-4 border-white hover:bg-black hover:text-white transition-colors w-fit"
          >
            Return to Index
          </Link>
        </div>
      </main>
    </div>
  );
}
