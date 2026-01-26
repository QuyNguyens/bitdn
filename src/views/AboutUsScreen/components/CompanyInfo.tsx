'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import Link from 'next/link';

const CompanyInfoCard = () => {
  const { t } = useI18n();

  return (
    <div className="w-full lg:w-4/5 px-2">
      <div className="mb-10 w-full flex justify-center">
        <span className="text-3xl bg-linear-to-r from-green-500 via-lime-500 to-orange-500 bg-clip-text text-transparent">
          {t('company.profile')}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left image */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/companyInfo.png" // đổi path theo project
            alt="FPT Japan Holdings"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right content */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li>
              <span className="font-semibold">{t('company.name')}：</span>
              {t('company.nameValue')}
              <br />
              <span className="text-gray-600">({t('company.nameEn')})</span>
            </li>

            <li>
              <span className="font-semibold">{t('company.ceo')}：</span>
              {t('company.ceoValue')}
            </li>

            <li>
              <span className="font-semibold">{t('company.shareholder')}：</span>
              {t('company.shareholderValue')}
            </li>

            <li>
              <span className="font-semibold">{t('company.capital')}：</span>
              {t('company.capitalValue')}
            </li>

            <li>
              <span className="font-semibold">{t('company.founded')}：</span>
              {t('company.foundedValue')}
            </li>

            <li>
              <span className="font-semibold">{t('company.employees')}：</span>
              {t('company.employeesValue')}
              <span className="text-gray-500"> {t('company.employeesNote')}</span>
            </li>

            <li className="pt-2">
              <Link href="/#" className="text-orange-600 hover:underline font-medium">
                {t('company.profileDownload')}
              </Link>
              <span className="text-gray-500"> {t('company.profileDate')}</span>
            </li>

            <li>
              <Link href="/#" className="text-orange-600 hover:underline font-medium">
                {t('company.video')}
              </Link>
              <span className="text-gray-500"> {t('company.videoDate')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoCard;
