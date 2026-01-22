
import React from 'react';
import { ICONS } from '../constants';

const UtilityFonts: React.FC = () => {
  const fonts = [
    { name: 'Pretendard Variable', version: 'v1.3.8', type: 'Primary Sans', size: '12.4MB' },
    { name: 'Inter Variable', version: 'v4.0', type: 'Secondary Sans', size: '8.2MB' },
    { name: 'JetBrains Mono', version: 'v2.304', type: 'Monospace', size: '4.1MB' },
  ];

  const tools = [
    { name: 'Stark', description: 'Accessibility Contrast Checker', link: '#' },
    { name: 'Contrast', description: 'Real-time Color Contrast Plugin', link: '#' },
    { name: 'Similayer', description: 'Advanced Layer Selection', link: '#' },
    { name: 'Batch Styler', description: 'Global Style Updater', link: '#' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <header className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold mb-4 uppercase tracking-widest">Downloads & Tools</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-noto">Utility & Fonts</h1>
        <p className="text-slate-500 text-lg">업무 생산성을 지원하는 필수 폰트와 강력한 플러그인을 만나보세요.</p>
      </header>

      <section className="mb-20">
        <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
          Font Resources
        </h2>
        <div className="space-y-4">
          {fonts.map((font, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-lg hover:shadow-blue-500/5 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">Aa</div>
                <div>
                  <h3 className="font-bold text-slate-800">{font.name}</h3>
                  <div className="flex gap-3 text-xs text-slate-400 mt-1">
                    <span>{font.type}</span>
                    <span>•</span>
                    <span>{font.version}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-slate-300 font-mono">{font.size}</span>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                  <ICONS.Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
          Essential Figma Plugins
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
              <h3 className="font-bold text-slate-800 mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-500">{tool.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                Go to Figma Community
                <ICONS.ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UtilityFonts;
