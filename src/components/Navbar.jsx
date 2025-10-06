import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between rounded-b-2xl border-b border-white/10 bg-black/40 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-white/90 group-hover:text-white transition-colors font-semibold tracking-wide">NovaSite</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Templates</a>
          <a href="#" className="hover:text-white">Pricing</a>
        </nav>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
        >
          <Rocket size={16} />
          <span>Launch Builder</span>
        </a>
      </div>
    </header>
  );
}
