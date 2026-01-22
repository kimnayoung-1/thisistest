
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import StartHere from './pages/StartHere';
import LevelUp from './pages/LevelUp';
import DesignSystem from './pages/DesignSystem';
import AssetLibrary from './pages/AssetLibrary';
import UtilityFonts from './pages/UtilityFonts';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const navigateToOnboardingSection = (sectionId: string) => {
    setTargetSection(sectionId);
    setCurrentPage('start-here');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': 
        return <Home 
          completedTasks={completedTasks} 
          onNavigateToSection={navigateToOnboardingSection} 
        />;
      case 'start-here': 
        return <StartHere 
          completedTasks={completedTasks} 
          setCompletedTasks={setCompletedTasks} 
          targetSection={targetSection}
          setTargetSection={setTargetSection}
        />;
      case 'level-up': return <LevelUp />;
      case 'design-system': return <DesignSystem />;
      case 'asset-library': return <AssetLibrary />;
      case 'utility-fonts': return <UtilityFonts />;
      default: return <Home completedTasks={completedTasks} onNavigateToSection={navigateToOnboardingSection} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Sidebar currentPage={currentPage} onPageChange={(id) => {
        setCurrentPage(id);
        setTargetSection(null); // Reset target when switching via sidebar
      }} />
      <main className="flex-1 transition-all duration-300 relative h-screen overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
