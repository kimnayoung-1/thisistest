
import React from 'react';

export type PageId = 'home' | 'start-here' | 'level-up' | 'design-system' | 'asset-library' | 'utility-fonts';

export interface NavItem {
  id: PageId;
  label: string;
  icon: React.ReactNode;
}

export interface RoadmapLevel {
  title: string;
  description: string;
  items: {
    title: string;
    content: string;
  }[];
}

export interface QuickAccessItem {
  title: string;
  category: string;
  lastViewed?: string;
}

export interface OnboardingTask {
  id: string;
  title: string;
  description?: string;
  required: boolean;
  subItems?: string[];
  examples?: { ok: string; no: string };
  policy?: { allowed: string[]; restricted: string[] };
}

export interface OnboardingSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  tasks: OnboardingTask[];
}
