import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.0) 60%)'
      }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          Build the website you imagine—
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300">
            powered by the cosmos
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
          NovaSite is a next-gen website builder where creativity meets starlight. Design, launch, and grow—no code required.
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
