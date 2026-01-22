
import React from 'react';
import { ICONS } from '../constants';

const DesignSystem: React.FC = () => {
  const categories = [
    { title: 'Foundations', items: ['Colors & Semantic Tokens', 'Typography Scale', 'Grid & Spacing', 'Iconography System'], icon: '📐' },
    { title: 'Components', items: ['Buttons & Actions', 'Forms & Inputs', 'Navigation Elements', 'Feedback & Overlays'], icon: '🍱' },
    { title: 'Patterns', items: ['Login & Onboarding', 'Search & Filtering', 'Dashboard Layouts', 'Data Visualization'], icon: '🧩' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <header className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold mb-4 uppercase tracking-widest">Documentation</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-noto">Design System</h1>
        <p className="text-slate-500 text-lg max-w-2xl">우리 팀의 일관된 제품 경험을 위한 단일 진실 공급원(SSOT)입니다.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">{cat.title}</h2>
            <ul className="space-y-3">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center justify-between text-sm text-slate-500 group-hover:text-slate-700 cursor-pointer hover:underline decoration-indigo-200">
                  {item}
                  <ICONS.ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Figma UI Kit 2.0</h3>
            <p className="text-slate-400 text-sm">최신 버전의 디자인 시스템 컴포넌트를 Figma Organization에서 확인하세요.</p>
          </div>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors shrink-0">
            Open in Figma
          </button>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none rotate-12">
          <ICONS.Box size={160} />
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
