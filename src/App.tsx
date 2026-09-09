import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Hero } from './sections/Hero';
import { FeaturedProject } from './sections/FeaturedProject';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { GitHubSection } from './sections/GitHubSection';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { ProjectItem } from './types/portfolio';
import { portfolioData } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleSelectProjectById = (projectId: string) => {
    const found = portfolioData.projects.find(p => p.id === projectId);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-indigo-500 selection:text-white">
      
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero onSelectProject={handleSelectProjectById} />
        <FeaturedProject onSelectProject={setSelectedProject} />
        <Experience />
        <FeaturedProjects onSelectProject={setSelectedProject} />
        <Skills />
        <Education />
        <GitHubSection />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};

export default App;
