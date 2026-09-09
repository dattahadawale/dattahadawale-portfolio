import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ThreeDWorkspace } from '../components/ThreeDWorkspace';

interface HeroProps {
  onSelectProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Depth Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/15 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-emerald-500/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: Recruiter Hook & Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Interactive Professional Profile & Recruiter Badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-1">
              <div className="relative group cursor-pointer">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-[3px] bg-gradient-to-tr from-indigo-600 via-indigo-400 to-emerald-400 shadow-xl shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <img src="/profile.png" alt={portfolioData.personal.name} className="w-full h-full object-cover object-top rounded-[13px]" />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-slate-900/95 border border-emerald-500/70 text-[10px] font-bold text-emerald-300 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active @ Cloudlead</span>
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold">Data Analyst @ Cloudlead Technology (Pune)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 justify-center sm:justify-start">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Pune, Maharashtra, India</span>
                  <span className="text-slate-400">•</span>
                  <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-indigo-600 font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-0.5">
                  <a href="/dattatray_portfolio_card.png" download="Hadawale_Dattatray_Portfolio_Card.png" className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 rounded-lg transition-all hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Download Photo Card with Link</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 justify-center lg:justify-start">
                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pune, Maharashtra, India</span>
                <span className="text-slate-400">•</span>
                <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-indigo-600 font-semibold transition-colors">
                  {portfolioData.personal.phone}
                </a>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                {portfolioData.personal.name}
              </h1>

              <p className="mt-3 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500">
                {portfolioData.personal.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Data Analyst with verified industry impact at <strong>Cloudlead Technology</strong> and <strong>Dasa Technology</strong> (+31% stock clearance, +22% sales). Building automated Power BI dashboards, concurrent Python automation, and scalable MongoDB databases.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Hadawale_Dattatray_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all hover:scale-105"
              >
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all hover:scale-105"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Verified Stats Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              {portfolioData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE: Interactive 3D Workstation Scene (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-[480px] rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/50 to-white/20 dark:from-slate-900/50 dark:to-slate-950/20 backdrop-blur-xl shadow-2xl p-2 relative overflow-hidden group">
              
              {/* Subtle top indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[11px] text-slate-400 bg-white/70 dark:bg-slate-900/70 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Interactive 3D Workspace • Drag to Rotate</span>
              </div>

              {/* Three.js Canvas */}
              <ThreeDWorkspace />

              {/* Bottom floating badge */}
              <div className="absolute bottom-4 right-4 z-20 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-full border border-indigo-200/60 dark:border-indigo-800/60 backdrop-blur-md">
                WebGL 60FPS
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
