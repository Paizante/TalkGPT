import { IconName } from '@/components/ui/Icon';

export interface Pillar {
  icon: IconName;
  title: string;
  text: string;
}

export interface Step {
  icon: IconName;
  title: string;
  text: string;
}

export interface Category {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
}
