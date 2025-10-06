import React from 'react';
import Navbar from './components/Navbar';
import HeroCosmicCover from './components/HeroCosmicCover';
import HeroNebula from './components/HeroNebula';
import HeroLaunchCallout from './components/HeroLaunchCallout';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main className="flex flex-col">
        <HeroCosmicCover />
        <HeroNebula />
        <HeroLaunchCallout />
      </main>
    </div>
  );
}

export default App;
