import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + vignette overlays that don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,transparent_0%,transparent_40%,rgba(2,6,23,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1 text-xs uppercase tracking-widest text-slate-300 backdrop-blur">
          Information Systems • Technology • Productivity
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-cyan-300">an Information Systems student</span>
          <br className="hidden sm:block" /> focused on building efficient, human-centered systems
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          I love turning complex problems into simple, scalable solutions. Explore my work, skills, and a set of focus tools designed to boost productivity.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-cyan-400">
            View Projects
          </a>
          <a href="#focus" className="rounded-md border border-slate-600 bg-slate-800/70 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-slate-500 hover:bg-slate-800">
            Productivity Tools
          </a>
        </div>
      </div>
    </section>
  );
}
