'use client';

import UserItem from '@/components/molicular/UserItem';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@heroui/react';
import { Building, MailIcon, PhoneIcon, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <div className="relative flex justify-center mt-14 bg-gradient-to-b from-[#0a0f1a] to-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full lg:w-4/5 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Vietnam Office */}
          <div className="flex flex-col gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1761b6] to-[#4ea5ff] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{t('footer.headquarter')}</h3>
            </div>
            <UserItem
              icon={Building}
              title={t('footer.registeredOffice')}
              description={t('footer.registeredOfficeFull')}
            />
            <UserItem
              icon={PhoneIcon}
              title={t('footer.phone')}
              description="(+84) 934 845 393"
            />
          </div>

          {/* Japan Office */}
          <div className="flex flex-col gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{t('footer.japanOffice')}</h3>
            </div>
            <UserItem
              icon={Building}
              title={t('footer.japanCompanyName')}
              description={t('footer.japanAddress')}
            />
          </div>

          {/* Quick Links & Contact */}
          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-xl font-bold tracking-tight">{t('footer.quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/about-us" className="text-sm text-gray-400 hover:text-[#4ea5ff] transition-colors duration-300">
                {t('footer.links.about')}
              </Link>
              <Link href="/service" className="text-sm text-gray-400 hover:text-[#4ea5ff] transition-colors duration-300">
                {t('footer.links.service')}
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-[#4ea5ff] transition-colors duration-300">
                {t('footer.links.contact')}
              </Link>
              <Link href="/career" className="text-sm text-gray-400 hover:text-[#4ea5ff] transition-colors duration-300">
                {t('footer.links.careers')}
              </Link>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-lg font-medium">{t('footer.companyName')}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-gray-300">{t('footer.registeredOffice')}: </span>
                {t('footer.registeredOfficeFull')}
              </p>
              <Button
                onClick={() => router.push('/contact')}
                className="w-fit rounded-full mt-2 bg-white/10 hover:bg-[#1761b6] text-white border border-white/20 hover:border-transparent transition-all duration-300 px-6 py-5"
                startContent={<MailIcon size={18} />}
              >
                {t('footer.contactUs')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex justify-center border-t border-white/10 pt-8">
          <span className="text-sm text-gray-500 font-light tracking-wide">
            {t('footer.copyright')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
