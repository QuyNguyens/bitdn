import { MenuItem } from '@/types/menuItem';
import { Puzzle, Users, Rocket, Headset, Wallet, ShieldCheck } from 'lucide-react';

export const ROUTES = {
  home: '/',
  aboutUs: '/about-us',
  service: '/service',
  news: '/news',
  career: '/carer',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'menu.home',
    href: ROUTES.home,
  },
  {
    label: 'menu.aboutUs',
    href: ROUTES.aboutUs,
  },
  {
    label: 'menu.service',
    href: ROUTES.service,
  },
  {
    label: 'menu.news',
    href: ROUTES.news,
  },
  {
    label: 'menu.career',
    href: ROUTES.career,
  },
];

export const SERVICE_ITEMS = [
  {
    key: 'software',
    image: '/images/service_1.png',
  },
  {
    key: 'website',
    image: '/images/service_2.png',
  },
  {
    key: 'mobile',
    image: '/images/service_3.png',
  },
] as const;

export const ABOUT_US_ITEMS = [
  {
    key: 'design',
    image: '/images/about-us_design.png',
  },
  {
    key: 'development',
    image: '/images/about-us_development.png',
  },
  {
    key: 'deployment',
    image: '/images/about-us_deployment.png',
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    key: 'solution',
    icon: Puzzle,
  },
  {
    key: 'experience',
    icon: Users,
  },
  {
    key: 'fast',
    icon: Rocket,
  },
  {
    key: 'support',
    icon: Headset,
  },
  {
    key: 'cost',
    icon: Wallet,
  },
  {
    key: 'security',
    icon: ShieldCheck,
  },
];
