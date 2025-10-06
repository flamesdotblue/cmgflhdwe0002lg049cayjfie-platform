import React from 'react';
import { Star } from 'lucide-react';

export default function HeroNebula() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0820] via-[#0b0820] to-black">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-16 -left-24 h-72 w-72 rounded-full blur-3xl bg-fuchsia-600/30" />
        <div className="absolute top-20 -right-24 h-64 w-64 rounded-full blur-3xl bg-indigo-600/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[36rem] rounded-full blur-3xl bg-cyan-500/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
          <Star size={14} className="text-yellow-300" />
          <span>Cosmic Template Library</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Craft galaxies of pages in minutes</h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Pick a constellation of components and watch your brand come to life. Responsive, accessible, and entirely yours.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <Card key={t.title} title={t.title} tagline={t.tagline} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, tagline }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
        }}
      />
      <div className="relative z-10">
        <div className="h-28 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 border border-white/10" />
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{tagline}</p>
        <button className="mt-4 inline-flex items-center text-sm text-fuchsia-300 hover:text-fuchsia-200">
          Preview template →
        </button>
      </div>
    </div>
  );
}

const templates = [
  { title: 'Aurora', tagline: 'Prismatic gradients for SaaS and startups.' },
  { title: 'Event Horizon', tagline: 'Bold hero blocks and crisp typography.' },
  { title: 'Quasar', tagline: 'Ecommerce-ready with luminous product grids.' },
];
