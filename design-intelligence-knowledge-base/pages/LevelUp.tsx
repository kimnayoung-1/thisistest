
import React, { useState } from 'react';
import { RoadmapLevel } from '../types';

const LevelUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'junior' | 'middle' | 'senior'>('junior');

  const levels: Record<'junior' | 'middle' | 'senior', RoadmapLevel> = {
    junior: {
      title: 'Junior (Onboarding ~ 1년차)',
      description: '기초 다지기와 실무 프로세스 완벽 적응',
      items: [
        { title: '디자인 시스템 마스터', content: '우리 회사의 Foundations(Color, Typography, Grid)와 Components의 구조와 사용 규칙을 깊이 있게 이해합니다.' },
        { title: '개발 협업 및 핸드오프', content: 'Zeplin, Figma Dev Mode를 활용하여 마진, 패딩 등 세부 속성을 개발자에게 명확히 전달하는 법을 익힙니다.' },
        { title: 'UX 라이팅 가이드', content: '사용자의 행동을 유도하는 텍스트 톤앤매너 규칙을 학습합니다.' }
      ]
    },
    middle: {
      title: 'Middle (2 ~ 5년차)',
      description: '비즈니스 임팩트를 만드는 데이터 기반 디자인',
      items: [
        { title: '데이터 대시보드 리딩', content: 'GA4, Amplitude를 통해 사용자 행동 데이터를 직접 추출하고 디자인 가설을 검증합니다.' },
        { title: 'A/B 테스트 설계', content: '가설 수립부터 테스트 변수 설정, 결과 분석 보고서 작성까지의 사이클을 주도합니다.' },
        { title: '프로토타이핑 & 인터랙션', content: 'Protopie나 Framer를 사용하여 실제 프로덕트와 흡사한 인터랙션을 구현합니다.' }
      ]
    },
    senior: {
      title: 'Senior (5년차 이상)',
      description: '전략 수립과 리더십을 통한 조직 성장 견인',
      items: [
        { title: '주니어 멘토링 및 코칭', content: '동료의 디자인 피드백을 넘어, 커리어 로드맵 수립과 역량 성장을 돕는 멘토링 기법을 학습합니다.' },
        { title: '프로덕트 비전 수립', content: '비즈니스 전략을 디자인 언어로 번역하고, 로드맵 상의 우선순위를 이해관계자와 조율합니다.' },
        { title: '디자인 오퍼레이션(DesignOps)', content: '전체 디자인 팀의 생산성을 높이기 위한 자동화 툴과 협업 체계를 설계합니다.' }
      ]
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Level Up Roadmap</h1>
        <p className="text-slate-500 text-lg">성장은 혼자 하는 것이 아닙니다. 우리 회사와 함께하는 단계별 커리어 가이드를 확인해보세요.</p>
      </header>

      <div className="flex p-1 bg-slate-100 rounded-2xl mb-12 max-w-lg">
        {(['junior', 'middle', 'senior'] as const).map((level) => (
          <button
            key={level}
            onClick={() => setActiveTab(level)}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all capitalize ${
              activeTab === level ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 sticky top-10">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl mb-6">
              {activeTab === 'junior' ? '🌱' : activeTab === 'middle' ? '🚀' : '👑'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{levels[activeTab].title}</h2>
            <p className="text-slate-500 leading-relaxed mb-6">{levels[activeTab].description}</p>
            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
              커리큘럼 자세히 보기
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {levels[activeTab].items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100">Chapter {idx + 1}</span>
                <div className="h-px flex-1 bg-slate-50"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelUp;
