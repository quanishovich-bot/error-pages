import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Ghost, Box, Droplets, Terminal } from 'lucide-react';

// Classic Pages
import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';
import Unauthorized from './pages/Unauthorized';
import InternalServerError from './pages/InternalServerError';
import ServiceUnavailable from './pages/ServiceUnavailable';
import Teapot from './pages/Teapot';

// Theme Pages
import BrutalistTheme from './pages/themes/BrutalistTheme';
import GlassTheme from './pages/themes/GlassTheme';
import DataGridTheme from './pages/themes/DataGridTheme';

function Navigation() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex gap-6 z-50 shadow-2xl">
      <Link to="/" className="text-white/70 hover:text-white transition-colors flex items-center gap-2" title="Home">
        <Home size={20} />
        <span className="text-sm font-medium">Home</span>
      </Link>
    </div>
  );
}

function HomePage() {
  const codes = ['401', '403', '404', '500', '503'];
  const themes = [
    { id: 'classic', name: 'Atmospheric Dark', icon: <Ghost size={24}/>, path: '' },
    { id: 'brutalist', name: 'Brutalism', icon: <Box size={24}/>, path: '/brutalist' },
    { id: 'glass', name: 'Glassmorphism', icon: <Droplets size={24}/>, path: '/glass' },
    { id: 'datagrid', name: 'Data Grid', icon: <Terminal size={24}/>, path: '/datagrid' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 md:p-16 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-16"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            Error Page Gallery
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore different error codes across professional design themes. Choose a theme and an error code below.
          </p>
        </div>

        <div className="space-y-12">
          {themes.map(theme => (
            <div key={theme.id} className="space-y-6">
              <div className="flex items-center gap-3 text-2xl font-semibold border-b border-zinc-800 pb-4 text-zinc-300">
                {theme.icon}
                <h2>{theme.name}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {codes.map(code => (
                  <Link 
                    key={`${theme.id}-${code}`}
                    to={`${theme.path}/${code}`}
                    className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800 hover:border-zinc-500 transition-all flex flex-col items-center justify-center gap-2 group hover:scale-105"
                  >
                    <span className="text-3xl font-black text-zinc-600 group-hover:text-white transition-colors">{code}</span>
                  </Link>
                ))}
                {theme.id === 'classic' && (
                  <Link 
                    to="/418"
                    className="p-6 rounded-2xl border border-emerald-900/50 bg-emerald-900/10 hover:bg-emerald-900/30 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-2 group hover:scale-105"
                  >
                    <span className="text-3xl font-black text-emerald-700 group-hover:text-emerald-400 transition-colors">418</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Classic Routes */}
        <Route path="/401" element={<Unauthorized />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<InternalServerError />} />
        <Route path="/503" element={<ServiceUnavailable />} />
        <Route path="/418" element={<Teapot />} />
        
        {/* Theme Routes */}
        <Route path="/brutalist/:code" element={<BrutalistTheme />} />
        <Route path="/glass/:code" element={<GlassTheme />} />
        <Route path="/datagrid/:code" element={<DataGridTheme />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}
