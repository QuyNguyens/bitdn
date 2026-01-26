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
    <div className="flex justify-center mt-14 bg-black/90 pt-16">
      <div className="w-full lg:w-4/5">
        <div className="flex flex-col lg:flex-row justify-center gap-10 px-3">
          <div className="flex flex-1 justify-between text-white">
            <div className="flex flex-col gap-10">
              <h1 className="text-4xl font-bold">{t('footer.headquarter')}</h1>
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
              <Button
                className="bg-black/90 text-white w-fit border border-gray-300"
                radius="full"
                endContent={<MoveRight />}
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/place/37+Thanh+Vinh+10,+Ho%C3%A0+Kh%C3%A1nh+B%E1%BA%AFc,+Li%C3%AAn+Chi%E1%BB%83u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam',
                    '_blank',
                  )
                }
              >
                {t('footer.getDirection')}
              </Button>
            </div>
            <div></div>
          </div>
          <div className="flex flex-1 flex-col gap-4 text-white">
            <h1 className="text-4xl font-bold">{t('footer.accompanyTitle')}</h1>
            <div className="w-4/5 md:w-3/5 grid grid-cols-2 gap-6">
              <Link href="/about-us" className="text-sm hover:underline text-gray-200">
                {t('footer.links.about')}
              </Link>
              <Link href="/service" className="text-sm hover:underline text-gray-200">
                {t('footer.links.service')}
              </Link>
              <Link href="/contact" className="text-sm hover:underline text-gray-200">
                {t('footer.links.contact')}
              </Link>
              <Link href="/carer" className="text-sm hover:underline text-gray-200">
                {t('footer.links.careers')}
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <h2> {t('footer.companyName')}</h2>
              <p className="text-xs text-gray-300">
                <span>{t('footer.registeredOffice')}: </span>
                {t('footer.registeredOfficeFull')}
              </p>
              <Button
                onClick={() => {
                  router.push('/contact');
                }}
                className="w-fit rounded-full mt-4"
                color="primary"
                startContent={<MailIcon />}
              >
                {t('footer.contactUs')}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center border-t border-gray-300 py-2">
          <span className="text-sm text-gray-300">Copyright @ 2026 BIT DA NANG.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
