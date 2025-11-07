import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Let's connect</h3>
            <p className="mt-2 text-sm">Open to internships, collaborations, and research projects in Information Systems and data-driven products.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:text-white" href="#projects">Projects</a></li>
              <li><a className="hover:text-white" href="#focus">Focus Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Contact</h4>
            <p className="mt-2 text-sm">Email: youremail@example.com</p>
            <p className="text-sm">Location: Your City</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} IS Student • Built with a focus on productivity and great UX.
        </div>
      </div>
    </footer>
  );
}
