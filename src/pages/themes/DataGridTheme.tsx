import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';

export default function DataGridTheme() {
  const { code } = useParams();
  const errorData = {
    '401': 'ERR_UNAUTHORIZED',
    '403': 'ERR_FORBIDDEN',
    '404': 'ERR_NOT_FOUND',
    '500': 'ERR_INTERNAL_SERVER',
    '503': 'ERR_SERVICE_UNAVAILABLE',
  }[code || '404'] || 'ERR_UNKNOWN';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a1a1aa] font-mono p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto border border-zinc-800 bg-[#111] rounded-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="border-b border-zinc-800 bg-[#18181b] p-4 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="text-xs uppercase tracking-widest text-zinc-500">System Monitor v2.4</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="p-8 md:col-span-2 flex flex-col justify-center">
            <div className="text-xs text-red-500 mb-4 uppercase tracking-widest">Critical Alert</div>
            <motion.h1 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl md:text-9xl font-bold text-white mb-4"
            >
              {code}
            </motion.h1>
            <h2 className="text-2xl text-zinc-300 mb-8">{errorData}</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Timestamp</span>
                <span className="text-white">{new Date().toISOString()}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Target URI</span>
                <span className="text-white">/restricted/zone</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Client IP</span>
                <span className="text-white">192.168.1.104</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#18181b] flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Actions</h3>
            <div className="space-y-4 flex-1">
              <Link to="/" className="block w-full text-center py-3 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors text-sm">
                Acknowledge & Return
              </Link>
              <button className="block w-full text-center py-3 border border-zinc-700 hover:bg-zinc-800 transition-colors text-sm">
                View Full Logs
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <div className="text-xs text-zinc-600 mb-2">System Status</div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 w-1/4 h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
