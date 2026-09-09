import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const publicRepos = [
    {
      name: "amazon-data-analysis-dashboard",
      desc: "Annual e-commerce business intelligence report (2023-2024), Excel cleaning data transformations, and executive Power BI dashboard analyzing ₹6.30M in sales.",
      language: "Power BI / DAX / Excel",
      stars: 0,
      url: "https://github.com/dattahadawale/amazon-data-analysis-dashboard"
    },
    {
      name: "email_placement_test",
      desc: "High-throughput inbox deliverability audit engine using multi-threaded IMAP SSL connections, Streamlit dashboard, and MongoDB persistence.",
      language: "Python (Streamlit + PyMongo)",
      stars: 0,
      url: "https://github.com/dattahadawale/email_placement_test"
    },
    {
      name: "Hadawale-Dattatray- (Stock Prediction)",
      desc: "Stock market forecasting suite featuring 4-layer stacked LSTM neural networks with Dropout in Keras, XGBoost, Random Forest, and Plotly charts.",
      language: "Python (TensorFlow / Jupyter)",
      stars: 0,
      url: "https://github.com/dattahadawale/Hadawale-Dattatray-"
    },
    {
      name: "Dattatray-",
      desc: "Developer profile workspace and configuration repository.",
      language: "Markdown",
      stars: 0,
      url: "https://github.com/dattahadawale/Dattatray-"
    }
  ];

  return (
    <section id="github" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              Code Transparency
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Verified GitHub Repositories
            </h3>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Direct access to all 4 public repositories on my GitHub account. Zero fabricated repositories or inflated metrics.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-all self-start"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Visit @dattahadawale on GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono"
                  >
                    {repo.name}
                  </a>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    {repo.language}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Public Repository
                </span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Browse Source</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
