import React from 'react';
import { Code, Database, BarChart3, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Student Performance Dashboard',
    icon: <BarChart3 className="h-5 w-5 text-cyan-400" />,
    desc: 'An interactive BI dashboard tracking course KPIs, attendance, and outcomes using modern data viz.',
    stack: ['React', 'FastAPI', 'MongoDB']
  },
  {
    title: 'Service Desk Ticketing System',
    icon: <Layers className="h-5 w-5 text-cyan-400" />,
    desc: 'Lightweight ITSM-style request management with role-based flows and analytics.',
    stack: ['React', 'Node', 'PostgreSQL']
  },
  {
    title: 'Course Planner Optimizer',
    icon: <Code className="h-5 w-5 text-cyan-400" />,
    desc: 'Helps students plan semesters with prerequisites, workload balance, and graduation tracking.',
    stack: ['Python', 'Next.js', 'Neo4j']
  },
  {
    title: 'Data Collection Portal',
    icon: <Database className="h-5 w-5 text-cyan-400" />,
    desc: 'Secure data intake with validation, audit logs, and export to analytics pipelines.',
    stack: ['Django', 'MongoDB', 'Tailwind']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A snapshot of my work in analytics, systems design, and building useful tools for students and organizations.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 md:block">Get in touch</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700 hover:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                  {p.icon}
                </div>
                <h3 className="text-lg font-medium">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-slate-700 bg-slate-800/70 px-2 py-1 text-xs text-slate-300">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
