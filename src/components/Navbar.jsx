import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${scrolled ? 'bg-slate-900/80 backdrop-blur border-b border-slate-800' : 'bg-transparent'} fixed inset-x-0 top-0 z-50`}> 
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-tight">
          <span className="text-cyan-400">IS</span> Student
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#home" className="text-sm text-slate-200 hover:text-white">Home</a>
          <a href="#projects" className="text-sm text-slate-200 hover:text-white">Projects</a>
          <a href="#focus" className="text-sm text-slate-200 hover:text-white">Focus Tools</a>
        </div>
        <a href="#contact" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-cyan-400">
          Contact
        </a>
      </nav>
    </header>
  );
}
