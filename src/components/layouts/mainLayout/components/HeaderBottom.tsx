'use client';
import React from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react';
import NextLink from 'next/link';
import { MENU_ITEMS } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

export default function HeaderBottom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <Navbar
      className="sticky top-0 z-50 bg-white border-b border-gray-100/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] px-2"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="h-10 flex items-center">
          <NextLink href="/" aria-label="Go to home">
            <Image
              src="/logo/logo_bit.png"
              alt="logo bitdn"
              width={200}
              height={56}
              className="h-14 w-auto object-contain cursor-pointer"
              priority
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarItem key={item.label}>
              <motion.div
                className="relative"
                initial="rest"
                animate={isActive ? 'hover' : 'rest'}
                whileHover="hover"
              >
                <NextLink
                  href={item.href}
                  className={`
              relative pb-1 font-medium transition-colors
              ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'}
            `}
                >
                  {t(item.label)}
                </NextLink>

                {/* Underline */}
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-primary"
                />
              </motion.div>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className="hidden md:flex">
          <NextLink href="/contact" className="btn-primary text-xs px-5 py-2.5 shadow-sm">
            {t('common.contact')}
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu className="pt-6 pb-8 px-6 bg-white flex flex-col gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-t border-gray-100/50">
        {MENU_ITEMS.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <NextLink
                className={`w-full flex items-center px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary font-medium'
                }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </NextLink>
            </NavbarMenuItem>
          );
        })}
        
        <NavbarMenuItem className="mt-4 pt-6 border-t border-gray-100/80 md:hidden">
          <NextLink
            href="/contact"
            className="w-full flex justify-center btn-primary py-3.5 rounded-2xl shadow-md font-medium text-white transition-transform active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('common.contact')}
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu> */}
    </Navbar>
  );
}
