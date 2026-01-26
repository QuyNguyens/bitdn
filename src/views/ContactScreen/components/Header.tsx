'use client';

import { useI18n } from '@/i18n/I18nProvider';

const ContactHeader = () => {
  const { t } = useI18n();

  return (
    <div className="w-full py-16 text-center">
      <h2 className="text-3xl font-semibold md:text-4xl">
        {t('contact.header1')}{' '}
        <span className="bg-linear-to-r from-green-500 via-lime-500 to-orange-500 bg-clip-text text-transparent">
          {t('contact.header2')}
        </span>
      </h2>

      <p className="mt-4 text-xl text-gray-600">{t('contact.title')}</p>
    </div>
  );
};

export default ContactHeader;
