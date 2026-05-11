import UserItem from '@/components/molicular/UserItem';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@heroui/react';
import { Building, Mail, MailIcon, MoveRight, Phone, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <div className="relative flex justify-center mt-14 bg-gradient-to-b from-[#0a0f1a] to-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full lg:w-4/5">
        <div className="flex flex-col lg:flex-row justify-center gap-16 px-6">
          <div className="flex flex-1 justify-between text-white">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {t('footer.headquarter')}
              </h1>
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
          </div>
          <div className="flex flex-1 flex-col gap-6 text-white">
            <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {t('footer.accompanyTitle')}
            </h1>
            <div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
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
            <div className="flex flex-col gap-3 mt-4">
              <h2 className="text-lg font-medium">{t('footer.companyName')}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-gray-300">{t('footer.registeredOffice')}: </span>
                {t('footer.registeredOfficeFull')}
              </p>
              <Button
                onClick={() => {
                  router.push('/contact');
                }}
                className="w-fit rounded-full mt-4 bg-white/10 hover:bg-[#1761b6] text-white border border-white/20 hover:border-transparent transition-all duration-300 px-6 py-5"
                startContent={<MailIcon size={18} />}
              >
                {t('footer.contactUs')}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center border-t border-white/10 pt-8">
          <span className="text-sm text-gray-500 font-light tracking-wide">
            &copy; 2026 BIT DA NANG. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
