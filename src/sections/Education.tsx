import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Academic & Certifications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Professional Credentials
          </h3>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Solid computer engineering degree from Pune University complemented by specialized data analytics credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Degree Card */}
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    Graduated with Distinction
                  </span>
                  {edu.cgpa && (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {edu.location} • {edu.period}
                </p>

                <div className="space-y-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {edu.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-500 font-bold">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Certification Card */}
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                    Professional Certification
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {cert.period}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                  {cert.issuer}
                </p>

                <div className="space-y-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {cert.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
