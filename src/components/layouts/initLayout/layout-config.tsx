import { ComponentType } from 'react';

export type TLayoutConfig = {
  pathname?: string[];
  prefixPathname?: string;
  Layout: ComponentType<{ children: React.ReactNode }>;
};

export const LAYOUT_CONFIG: TLayoutConfig[] = [

];
