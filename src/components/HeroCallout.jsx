import React from 'react';

export default function HeroCallout() {
  return (
    <section className="relative w-full py-24 md:py-28 bg-black">
      <Starfield />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
          <div className="pointer-events-none absolute inset-0" style={{
            background: 'radial-gradient(120% 100% at 100% 0%, rgba(139,92,246,0.25) 0%, rgba(0,0,0,0) 60%)'
          }} />
          <div className="relative z-10 p-8 md:p-12">
            <p className="uppercase tracking-widest text-xs text-white/60">Launch</p>
            <h3 className="mt-2 text-2xl md:text-4xl font-semibold">
              Publish at light-speed with built‑in hosting
            </h3>
            <p className="mt-3 text-white/80 max-w-2xl">
              One click to ship. Custom domains, SSL, and blazing asset delivery—no configuration, no friction.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="px-5 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-medium transition">
                Get Started Free
              </a>
              <a href="#" className="px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-md transition">
                See pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 opacity-[0.85]" style={{
        backgroundImage: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9) 50%, rgba(0,0,0,0) 51%),
                          radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.8) 50%, rgba(0,0,0,0) 51%),
                          radial-gradient(1.5px 1.5px at 80% 40%, rgba(255,255,255,0.7) 50%, rgba(0,0,0,0) 51%),
                          radial-gradient(1.5px 1.5px at 30% 80%, rgba(255,255,255,0.75) 50%, rgba(0,0,0,0) 51%),
                          radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6) 50%, rgba(0,0,0,0) 51%)`,
        backgroundRepeat: 'no-repeat'
      }} />
    </div>
  );
}
