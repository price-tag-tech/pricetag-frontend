import { ReactNode } from 'react';

export interface FilterOption {
  id: string;
  label: string;
  width?: string;
}

export interface FilterState {
  [key: string]: any;
}

export interface FilterSectionConfig {
  id: string;
  title: string;
  icon: ReactNode;
  type: 'buttons' | 'priceRange' | 'checkbox' | 'radio';
  options?: FilterOption[];
  defaultExpanded?: boolean;
}