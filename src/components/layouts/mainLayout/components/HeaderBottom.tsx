'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react';
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
    <Navbar className="bg-white shadow-2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="h-10 flex items-center">
          <Link href="/" aria-label="Go to home">
            <img
              src="/logo/logo_bit.jpg"
              alt="logo bitdn"
              className="h-14 w-auto object-contain cursor-pointer"
            />
          </Link>
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
                <Link
                  href={item.href}
                  className={`
              relative pb-1 font-medium transition-colors
              ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'}
            `}
                >
                  {t(item.label)}
                </Link>

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
      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MENU_ITEMS.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? 'primary' : index === MENU_ITEMS.length - 1 ? 'danger' : 'foreground'
              }
              href={item.href}
              size="lg"
            >
              {t(item.label)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
