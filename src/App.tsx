import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Ghost, ShieldAlert, Fingerprint, ServerCrash, AlertTriangle, Coffee } from 'lucide-react';

import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';
import Unauthorized from './pages/Unauthorized';
import InternalServerError from './pages/InternalServerError';
import ServiceUnavailable from './pages/ServiceUnavailable';
import Teapot from './pages/Teapot';

function Navigation() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex gap-6 z-50 shadow-2xl">
      <Link to="/401" className="text-white/70 hover:text-white transition-colors" title="401 Unauthorized">
        <Fingerprint size={20} />
      </Link>
      <Link to="/403" className="text-white/70 hover:text-white transition-colors" title="403 Forbidden">
        <ShieldAlert size={20} />
      </Link>
      <Link to="/404" className="text-white/70 hover:text-white transition-colors" title="404 Not Found">
        <Ghost size={20} />
      </Link>
      <Link to="/500" className="text-white/70 hover:text-white transition-colors" title="500 Internal Server Error">
        <ServerCrash size={20} />
      </Link>
      <Link to="/503" className="text-white/70 hover:text-white transition-colors" title="503 Service Unavailable">
        <AlertTriangle size={20} />
      </Link>
      <Link to="/418" className="text-white/70 hover:text-white transition-colors" title="418 I'm a Teapot">
        <Coffee size={20} />
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/404" replace />} />
        <Route path="/401" element={<Unauthorized />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<InternalServerError />} />
        <Route path="/503" element={<ServiceUnavailable />} />
        <Route path="/418" element={<Teapot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}
