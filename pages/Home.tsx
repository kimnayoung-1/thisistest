
import React from 'react';
import { ICONS, ONBOARDING_DATA } from '../constants';
import { QuickAccessItem } from '../types';

interface HomeProps {
  completedTasks: Set<string>;
  onNavigateToSection: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ completedTasks, onNavigateToSection }) => {
  const quickAccess: QuickAccessItem[] = [
    { title: 'Global Design System Tokens', category: 'Design System', lastViewed: '2시간 전' },
    { title: 'Slack Communication Rule v1.2', category: 'Collaboration', lastViewed: '어제' },
    { title: 'Handoff Protocol with Engineering', category: 'Process', lastViewed: '3일 전' },
  ];

  const recommendations = [
    { title: '데이터 드리븐 디자인 시작하기', duration: '15분', level: 'Intermediate' },
    { title: 'Figma Auto-Layout Masterclass', duration: '45분', level: 'Beginner' },
  ];

  // Tracker Logic
  const totalTasks = ONBOARDING_DATA.reduce((acc, sec) => acc + sec.tasks.length, 0);
  const progressPercent = Math.round((completedTasks.size / totalTasks) * 100);

  const getSectionStatus = (sectionId: string) => {
    const section = ONBOARDING_DATA.find(s => s.id === sectionId);
    if (!section) return 'none';
    const sectionTasks = section.tasks.map(t => t.id);
    const completedInSection = sectionTasks.filter(id => completedTasks.has(id)).length;
    
    if (completedInSection === sectionTasks.length) return 'completed';
    if (completedInSection > 0) return 'in-progress';
    return 'not-started';
  };

  const getMicroCopy = () => {
    if (progressPercent === 100) return "온보딩 완료! 이제 실무에 집중하세요 🚀";
    if (progressPercent >= 80) return "마지막 단계만 남았어요!";
    return "지금까지 잘 진행 중이에요 👏";
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-8">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 font-noto">안녕하세요, Alex 님!<br/>오늘 어떤 디자인 지식이 필요하신가요?</h1>
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <ICONS.Search />
          </div>
          <input
            type="text"
            placeholder="디자인 시스템, 폰트 가이드, 협업 룰 등을 검색해보세요"
            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all text-lg"
          />
        </div>
      </section>

      {/* Onboarding Tracker Card */}
      <section className="mb-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Onboarding Tracker</h2>
              <p className="text-slate-500 text-sm">온보딩 진행 상황을 한눈에 확인하세요</p>
            </div>
            {progressPercent === 100 && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold animate-pulse">Onboarding Complete</span>
            )}
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-bold text-slate-800">{getMicroCopy()}</span>
              <span className="text-2xl font-black text-indigo-600 font-inter">{progressPercent}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-in-out ${progressPercent === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ONBOARDING_DATA.map((section) => {
              const status = getSectionStatus(section.id);
              return (
                <button
                  key={section.id}
                  onClick={() => onNavigateToSection(section.id)}
                  className={`group relative p-4 rounded-2xl border transition-all text-left ${
                    status === 'completed' 
                      ? 'bg-emerald-50/30 border-emerald-100' 
                      : status === 'in-progress'
                        ? 'bg-indigo-50/30 border-indigo-100 ring-1 ring-indigo-200 ring-offset-2'
                        : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl">{section.icon}</span>
                    {status === 'completed' ? (
                      <div className="bg-emerald-500 text-white rounded-full p-0.5">
                        <ICONS.CheckCircle size={14} strokeWidth={3} />
                      </div>
                    ) : status === 'in-progress' ? (
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
                    ) : null}
                  </div>
                  <h4 className={`text-xs font-bold leading-tight ${status === 'completed' ? 'text-emerald-700' : status === 'in-progress' ? 'text-indigo-700' : 'text-slate-700'}`}>
                    {section.title}
                  </h4>
                  <div className={`mt-1 h-0.5 w-6 rounded-full ${status === 'completed' ? 'bg-emerald-200' : status === 'in-progress' ? 'bg-indigo-200' : 'bg-slate-100 group-hover:bg-slate-200'}`}></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              최근 본 문서
            </h2>
            <button className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">전체보기</button>
          </div>
          <div className="space-y-3">
            {quickAccess.map((item, idx) => (
              <div key={idx} className="group bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-indigo-500 mb-1 uppercase tracking-wide">{item.category}</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">{item.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400">{item.lastViewed}</p>
                  <ICONS.ChevronRight className="ml-auto text-slate-300 group-hover:text-indigo-400 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              추천 강의
            </h2>
          </div>
          <div className="space-y-4">
            {recommendations.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl border border-slate-200 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ICONS.Rocket size={64} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-100 text-[10px] font-bold text-slate-500 mb-2">{item.level}</span>
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item.duration} 강의
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
