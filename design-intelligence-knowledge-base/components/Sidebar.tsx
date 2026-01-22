
import React from 'react';
import { PageId, NavItem } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  currentPage: PageId;
  onPageChange: (id: PageId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const mainMenu: NavItem[] = [
    { id: 'home', label: '대시보드', icon: <ICONS.Home /> },
    { id: 'start-here', label: '신규 입사자 가이드', icon: <ICONS.Rocket /> },
    { id: 'level-up', label: '연차별 로드맵', icon: <ICONS.Trophy /> },
  ];

  const resourceMenu: NavItem[] = [
    { id: 'design-system', label: 'Design System', icon: <ICONS.Box /> },
    { id: 'asset-library', label: 'Asset Library', icon: <ICONS.Library /> },
    { id: 'utility-fonts', label: 'Utility & Fonts', icon: <ICONS.Download /> },
  ];

  const renderNavGroup = (title: string, items: NavItem[]) => (
    <div className="mb-8">
      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2 font-inter">{title}</div>
      <nav className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              currentPage === item.id
                ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm shadow-indigo-100/50'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <span className={currentPage === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}>
              {item.icon}
            </span>
            <span className="text-[14px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <aside className="w-72 h-screen border-r border-slate-200 bg-white sticky top-0 flex flex-col p-6 z-50 overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 px-2 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
          D
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800">Design Intel</span>
      </div>

      <div className="flex-1">
        {renderNavGroup('Main Menu', mainMenu)}
        {renderNavGroup('Resources', resourceMenu)}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100 shrink-0">
        <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
          <img src="https://picsum.photos/40/40" alt="Profile" className="w-9 h-9 rounded-full bg-slate-200 object-cover" />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-slate-800 truncate">Alex Kim</p>
            <p className="text-xs text-slate-500 truncate">Product Designer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
