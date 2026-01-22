
import React from 'react';
import { ICONS } from '../constants';

const AssetLibrary: React.FC = () => {
  const assets = [
    { title: 'Brand Logos', count: '12 Items', tags: ['SVG', 'PNG', 'AI'], icon: '🎨' },
    { title: 'System Icons', count: '450+ Icons', tags: ['SVG Only', 'Figma Library'], icon: '✨' },
    { title: '3D Illustrations', count: '24 Items', tags: ['High-Res', 'Transparent'], icon: '🧊' },
    { title: 'Motion Lottie Files', count: '15 Items', tags: ['JSON', 'Web-Ready'], icon: '🎬' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <header className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold mb-4 uppercase tracking-widest">Resources</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-noto">Asset Library</h1>
        <p className="text-slate-500 text-lg">디자인 효율을 극대화하기 위한 고품질 디자인 에셋 창고입니다.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {assets.map((asset, idx) => (
          <div key={idx} className="group bg-white p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
              {asset.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-emerald-700 transition-colors">{asset.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{asset.count}</p>
              <div className="flex gap-2">
                {asset.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-medium border border-slate-100">{tag}</span>
                ))}
              </div>
            </div>
            <ICONS.Download size={20} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center hover:border-indigo-300 hover:bg-indigo-50/10 transition-all cursor-pointer group">
        <p className="text-slate-400 font-medium group-hover:text-indigo-500">에셋 요청하기</p>
        <p className="text-xs text-slate-400 mt-1">찾으시는 에셋이 없나요? 디자인 오퍼레이션 팀에 요청하세요.</p>
      </div>
    </div>
  );
};

export default AssetLibrary;
