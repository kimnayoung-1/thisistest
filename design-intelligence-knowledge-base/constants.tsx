
import React from 'react';
import { OnboardingSection } from './types';

export const COLORS = {
  primary: '#6366F1', // Subtle Violet
  secondary: '#2563EB', // Royal Blue
  bg: '#F8F9FA',
  border: '#E2E8F0',
  textMain: '#1A1A1A',
  textMuted: '#64748B'
};

export const ICONS = {
  Home: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Rocket: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
  ),
  Trophy: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  ),
  Search: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  ChevronRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
  ),
  Map: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
  ),
  CheckCircle: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  Box: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  ),
  Library: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
  ),
  Download: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  )
};

export const ONBOARDING_DATA: OnboardingSection[] = [
  {
    id: 'sec-1',
    title: '계정 및 보안',
    description: '업무 환경 구축을 위한 필수 보안 세팅',
    icon: '🔐',
    tasks: [
      {
        id: '1password',
        title: '1Password 설정',
        required: true,
        subItems: ['계정 활성화', '기본 사용 방법 숙지', '팀 내 금고 공유 원칙 확인'],
      },
      {
        id: 'vpn',
        title: '사내 VPN 연결법 (GlobalProtect)',
        required: true,
        subItems: ['설치 및 초기 인증', '외부 환경 접속 테스트', '유지관리 가이드 확인'],
      },
      {
        id: 'security-basic',
        title: '보안 기본 수칙 숙지',
        required: true,
        description: '개인 및 팀/회사 자산 보호 관점에서의 가이드',
      },
    ]
  },
  {
    id: 'sec-2',
    title: '디자인 환경 세팅',
    description: '디자인 업무를 바로 시작하기 위한 필수 환경 구성',
    icon: '🎨',
    tasks: [
      {
        id: 'figma-org',
        title: 'Figma Organization 가입',
        required: true,
        description: '공용 팀 / 프로젝트 권한 구조 안내 숙지',
      },
      {
        id: 'font-install',
        title: '폰트 파일 설치 가이드',
        required: true,
        subItems: ['Pretendard 전체 패밀리', 'Inter Variable', '기타 브랜드 전용 폰트'],
      },
      {
        id: 'plugins',
        title: '필수 플러그인 리스트 & 동기화',
        required: false,
        description: 'Stark, Similayer, Contrast 등 필수 도구 설치',
      },
    ]
  },
  {
    id: 'sec-3',
    title: '협업 룰',
    description: '팀 생산성을 높이기 위한 협업 기준',
    icon: '🤝',
    tasks: [
      {
        id: 'slack-rules',
        title: 'Slack 채널 입장 규칙',
        required: true,
        description: '공지 / 질문 / 공유 / 잡담 채널 구분 숙지',
      },
      {
        id: 'comm-manner',
        title: '커뮤니케이션 매너 & 템플릿',
        required: true,
        description: '질문 템플릿 제공 및 링크 공유 방식 숙달',
      },
      {
        id: 'nomenclature',
        title: '파일 네이밍 규칙 (Nomenclature)',
        required: true,
        examples: {
          ok: 'YYMMDD_ProjectName_Draft_v01',
          no: '제일진짜마지막_수정_222'
        },
        description: '왜 규칙이 필요한지 이유와 명시적인 예시 확인',
      },
    ]
  },
  {
    id: 'sec-4',
    title: 'AI 툴 활용',
    description: 'AI를 활용한 생산성 향상 가이드',
    icon: '🤖',
    tasks: [
      {
        id: 'ai-policy',
        title: 'AI 사용 정책 및 보안 가이드',
        required: true,
        policy: {
          allowed: ['아이디어 발산', '리서치 요약', 'UX 카피 초안 작성'],
          restricted: ['고객 개인정보 입력', '대외비 문서 업로드', '최종 비주얼 그대로 사용']
        },
        description: '“AI는 디자이너를 대체하지 않고, 생산성을 높이는 도구입니다.”',
      },
      {
        id: 'prompt-guide',
        title: '디자인 업무별 프롬프트 가이드',
        required: false,
        description: 'Midjourney, ChatGPT를 활용한 비주얼 생성 및 카피라이팅 가이드',
      },
    ]
  },
  {
    id: 'sec-5',
    title: '회사 생활 정보',
    description: '처음엔 물어보기 애매한 실무 정보 FAQ',
    icon: '🏢',
    tasks: [
      {
        id: 'vacation',
        title: '연차 사용 및 재택/외근 규정',
        required: true,
        description: '근무 규정 및 근태 관리 시스템 사용법',
      },
      {
        id: 'equipment',
        title: '장비 및 소프트웨어 요청 프로세스',
        required: false,
        description: '신규 라이선스 및 하드웨어 교체 절차',
      },
      {
        id: 'who-to-ask',
        title: '이건 누구한테 물어보지?',
        required: true,
        description: '업무별 담당자 검색 및 연락처 가이드',
      },
    ]
  }
];
