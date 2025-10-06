import React from 'react';

export default function HeroCosmicCover() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">
      <BackgroundCosmos />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.0) 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          Build the website you imagine—
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300">
            powered by the cosmos
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
          Design, launch, and grow with a builder that feels like starlight. No code required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
            Start Free
          </a>
          <a href="#" className="px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-md transition">
            Explore Templates
          </a>
        </div>
        <div className="mt-10 flex items-center gap-4 text-xs text-white/60">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          <span>Live preview canvas. Drag, drop, and ship at light-speed.</span>
        </div>
      </div>
    </section>
  );
}

function BackgroundCosmos() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(192,132,252,0.25),transparent_50%),radial-gradient(1000px_700px_at_110%_10%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(800px_500px_at_50%_120%,rgba(34,211,238,0.18),transparent_50%)]" />
      <Stars />
      <Orbits />
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0 opacity-[0.9]" style={{
      backgroundImage: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9) 50%, rgba(0,0,0,0) 51%),
                        radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.8) 50%, rgba(0,0,0,0) 51%),
                        radial-gradient(1.5px 1.5px at 80% 40%, rgba(255,255,255,0.7) 50%, rgba(0,0,0,0) 51%),
                        radial-gradient(1.5px 1.5px at 30% 80%, rgba(255,255,255,0.75) 50%, rgba(0,0,0,0) 51%),
                        radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6) 50%, rgba(0,0,0,0) 51%)`,
      backgroundRepeat: 'no-repeat',
    }} />
  );
}

function Orbits() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.15">
        <circle cx="50" cy="52" r="30" />
        <circle cx="48" cy="50" r="40" />
        <circle cx="52" cy="48" r="50" />
      </g>
    </svg>
  );
}
