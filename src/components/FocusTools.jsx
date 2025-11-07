import React, { useEffect, useMemo, useState } from 'react';
import { Clock, Target, CheckCircle2, PauseCircle, PlayCircle } from 'lucide-react';

function useTimer(initialSeconds = 1500) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mmss = useMemo(() => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }, [seconds]);

  const reset = (s = initialSeconds) => setSeconds(s);

  return { seconds, running, setRunning, reset, mmss };
}

export default function FocusTools() {
  const { seconds, running, setRunning, reset, mmss } = useTimer();
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks((t) => [...t, { id: crypto.randomUUID(), title: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTask = (id) => setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  return (
    <section id="focus" className="relative z-10 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Target className="h-6 w-6 text-cyan-400" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Focus & Productivity</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Pomodoro Timer */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">Pomodoro</span>
              </div>
              <div className="flex gap-2">
                <button className={`rounded-md px-3 py-1 text-sm ${running ? 'bg-slate-800 text-slate-300' : 'bg-cyan-500 text-slate-900'}`} onClick={() => setRunning((r) => !r)}>
                  {running ? (
                    <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" /> Pause</span>
                  ) : (
                    <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" /> Start</span>
                  )}
                </button>
                <button className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800" onClick={() => { reset(1500); setRunning(false); }}>
                  Reset
                </button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="mx-auto w-fit rounded-2xl border border-slate-800 bg-slate-900 px-8 py-6 text-5xl font-semibold tracking-widest">
                {mmss}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <button className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800" onClick={() => reset(1500)}>25m</button>
                <button className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800" onClick={() => reset(300)}>5m</button>
                <button className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800" onClick={() => reset(600)}>10m</button>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span className="text-sm">Quick Tasks</span>
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                placeholder="e.g. Draft ER diagram, review lecture notes"
                className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button onClick={addTask} className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400">Add</button>
            </div>

            <ul className="mt-4 space-y-2">
              {tasks.length === 0 && (
                <li className="text-sm text-slate-400">No tasks yet. Add a few to stay focused.</li>
              )}
              {tasks.map((t) => (
                <li key={t.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <button onClick={() => toggleTask(t.id)} className="flex items-center gap-2 text-left">
                    <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} className="h-4 w-4 rounded border-slate-700 bg-slate-800" />
                    <span className={`text-sm ${t.done ? 'text-slate-400 line-through' : 'text-slate-200'}`}>{t.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
