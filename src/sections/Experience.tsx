import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span>Verified Industry Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Industry Impact
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on professional experience delivering business intelligence dashboards, KPI monitoring, and commercial optimization in Pune, India.
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl border shadow-sm transition-all ${
                exp.isCurrent
                  ? 'bg-gradient-to-r from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-slate-900 dark:to-slate-900 border-indigo-200/80 dark:border-indigo-800/60 ring-1 ring-indigo-500/20'
                  : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.organization}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Current Company
                      </span>
                    )}
                  </div>
                  <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                    {exp.role}
                  </p>
                </div>
                
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-right bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 self-start sm:self-auto">
                  <p className="font-bold text-slate-800 dark:text-slate-200">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
