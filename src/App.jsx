import React from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import HeroNebula from './components/HeroNebula';
import HeroCallout from './components/HeroCallout';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main className="flex flex-col">
        <HeroSpline />
        <HeroNebula />
        <HeroCallout />
      </main>
    </div>
  );
}

export default App;
