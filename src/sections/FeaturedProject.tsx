import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { Card3D } from '../components/Card3D';

interface FeaturedProjectProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onSelectProject }) => {
  const project = portfolioData.projects.find(p => p.id === 'amazon-data-analysis-dashboard') || portfolioData.projects[0];

  return (
    <section className="py-20 bg-slate-50/60 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      
      {/* Subtle background gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>Flagship Commercial Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Amazon Business Intelligence & Revenue Analytics
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Comprehensive annual sales report and interactive Power BI executive dashboard analyzing ₹6.30M in commercial transactions.
          </p>
        </div>

        <Card3D maxTilt={5} className="rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xl backdrop-blur-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* LEFT: 3D-Framed Dashboard Screenshot */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden bg-slate-950 group">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-300">Power BI Service • Executive View</span>
                  </div>
                  <span className="font-semibold text-emerald-400">100% Real Artifact</span>
                </div>
                
                <div className="relative overflow-hidden cursor-pointer" onClick={() => onSelectProject(project)}>
                  <img
                    src="/amazon_dashboard.png"
                    alt="Amazon BI Dashboard"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900/90 shadow-lg backdrop-blur-md">
                      Click to Expand Interactive Breakdown ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Metric Chips below image */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">Total Revenue</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">₹6.30M</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">Catalog SKUs</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">5,000</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">Average Order Value</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">₹1,259.80</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">Top Category</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Home (52%)</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Strategic Details & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Business Intelligence & Decision Support
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  End-to-end data pipeline cleaning unstructured transaction records, calculating derived metrics (Month, Total Sales, AOV, State geography), and designing an interactive Power BI dashboard equipped with multi-attribute slicers and geospatial heatmaps.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">✓</span>
                  <span><strong>18-Slide Report:</strong> Authored complete business presentation detailing seasonality, discounts, and regional distribution.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">✓</span>
                  <span><strong>Payment Optimization:</strong> Cash on Delivery (₹1.10M) and Credit Cards (₹1.07M) generate 34%+ of aggregate volume.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">✓</span>
                  <span><strong>Regional Growth:</strong> North region generated leading revenue (₹633,892) with product_111 as top seller.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Power BI', 'DAX Measures', 'Excel Data Cleaning', 'Geospatial Analytics', 'EDA', '18-Slide Report'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
                >
                  Inspect Full Case Study ↗
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
                >
                  GitHub Repository
                </a>
              </div>

            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
};
