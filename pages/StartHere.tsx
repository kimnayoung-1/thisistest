
import React, { useEffect, useRef } from 'react';
import { ICONS, ONBOARDING_DATA } from '../constants';

interface StartHereProps {
  completedTasks: Set<string>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<Set<string>>>;
  targetSection: string | null;
  setTargetSection: (id: string | null) => void;
}

const StartHere: React.FC<StartHereProps> = ({ 
  completedTasks, 
  setCompletedTasks, 
  targetSection, 
  setTargetSection 
}) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const totalTasks = ONBOARDING_DATA.reduce((acc, sec) => acc + sec.tasks.length, 0);
  const progress = Math.round((completedTasks.size / totalTasks) * 100);

  const toggleTask = (id: string) => {
    setCompletedTasks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    if (targetSection && sectionRefs.current[targetSection]) {
      sectionRefs.current[targetSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Reset after scroll
      const timer = setTimeout(() => setTargetSection(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [targetSection, setTargetSection]);

  return (
    <div className="max-w-4xl mx-auto py-16 px-8 relative">
      {/* Progress Header */}
      <div className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md pt-4 pb-6 mb-8 -mx-4 px-4 flex items-center justify-between border-b border-slate-100 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="h-2.5 w-48 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-out ${progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={`text-sm font-bold ${progress === 100 ? 'text-emerald-600' : 'text-indigo-600'}`}>{progress}% 완료</span>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          {completedTasks.size} / {totalTasks} 태스크 완료
        </div>
      </div>

      <header className="mb-16 pb-10 border-b border-slate-100">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold mb-4 uppercase tracking-widest font-inter">Onboarding</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6 font-noto">Welcome Aboard! 🚀</h1>
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl shadow-indigo-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <ICONS.Rocket size={140} />
          </div>
          <p className="text-lg font-medium leading-relaxed max-w-2xl relative z-10 font-noto">
            "반갑습니다! 당신의 창의성이 우리 팀에 새로운 숨결을 불어넣어 줄 것이라 믿습니다.<br/>
            복잡한 설정들은 이 가이드가 도와드릴게요. 이제 최고의 디자인을 시작할 준비만 하시면 됩니다. 우리는 당신이 합류하게 되어 진심으로 기쁩니다!"
          </p>
          <div className="mt-6 flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full border-2 border-indigo-400 overflow-hidden">
              <img src="https://picsum.photos/100/100?random=1" alt="Leader" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-indigo-100 font-semibold">— Design Team Leader & Onboarding Manager</p>
          </div>
        </div>
      </header>

      <div className="space-y-20 mb-24">
        {ONBOARDING_DATA.map((section) => (
          <section 
            key={section.id} 
            ref={el => sectionRefs.current[section.id] = el}
            className={`relative scroll-mt-24 transition-all duration-500 ${targetSection === section.id ? 'ring-2 ring-indigo-500/20 rounded-3xl bg-indigo-500/5 p-4 -m-4' : ''}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-2xl border shadow-sm flex items-center justify-center text-2xl transition-all ${targetSection === section.id ? 'bg-indigo-600 text-white border-indigo-600 scale-110 shadow-lg' : 'bg-white border-slate-200'}`}>
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 font-noto">{section.title}</h2>
                <p className="text-slate-500 text-sm">{section.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {section.tasks.map((task) => (
                <div 
                  key={task.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    completedTasks.has(task.id) 
                      ? 'border-indigo-100 bg-indigo-50/10 shadow-sm opacity-75' 
                      : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className={`w-6 h-6 rounded-lg border-2 mt-0.5 flex items-center justify-center transition-all ${
                          completedTasks.has(task.id)
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'bg-white border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        {completedTasks.has(task.id) && <ICONS.CheckCircle size={14} strokeWidth={3} />}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`font-bold transition-all ${completedTasks.has(task.id) ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                            {task.title}
                          </h3>
                          {task.required ? (
                            <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-tight">필수</span>
                          ) : (
                            <span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-tight">선택</span>
                          )}
                        </div>
                        {task.description && <p className="text-sm text-slate-500 mb-3">{task.description}</p>}
                        
                        {task.subItems && (
                          <ul className="mt-3 space-y-2">
                            {task.subItems.map((sub, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}

                        {task.examples && (
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                              <p className="text-[10px] font-bold text-emerald-600 mb-1 uppercase tracking-widest">Correct ⭕</p>
                              <code className="text-xs text-emerald-700 font-mono">{task.examples.ok}</code>
                            </div>
                            <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                              <p className="text-[10px] font-bold text-red-600 mb-1 uppercase tracking-widest">Wrong ❌</p>
                              <code className="text-xs text-red-700 font-mono">{task.examples.no}</code>
                            </div>
                          </div>
                        )}

                        {task.policy && (
                          <div className="mt-4 space-y-3">
                            <div>
                              <p className="text-[10px] font-bold text-indigo-600 mb-1 uppercase tracking-widest">권장 사항 (Possible)</p>
                              <div className="flex flex-wrap gap-2">
                                {task.policy.allowed.map(p => (
                                  <span key={p} className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">{p}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-amber-600 mb-1 uppercase tracking-widest">금지 및 주의 (Strict/Caution)</p>
                              <div className="flex flex-wrap gap-2">
                                {task.policy.restricted.map(p => (
                                  <span key={p} className="text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">{p}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {progress === 100 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
            <span className="text-xl">🏆</span>
            <span className="font-bold">모든 온보딩 과정을 완료하셨습니다! 팀에 합류하신 것을 환영합니다.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartHere;
