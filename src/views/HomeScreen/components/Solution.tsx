'use client';

import WrapComponent from '@/components/molicular/WrapComponent';
import { Button } from '@heroui/react';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const Solution = () => {
  const { t } = useI18n();

  return (
    <WrapComponent>
      <div className="flex flex-col lg:flex-row p-2 w-full gap-10 lg:w-4/5">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="shrink-0"
        >
          <Image
            src="/images/work_image.png"
            alt="work image"
            width={520}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col justify-center gap-6"
        >
          <h3 className="text-2xl font-semibold">{t('solution.title')}</h3>

          <div className="space-y-3 text-gray-700">
            <p>{t('solution.description1')}</p>
            <p>{t('solution.description2')}</p>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button className="w-fit" color="primary" endContent={<CircleArrowRight />}>
              {t('common.readMore')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </WrapComponent>
  );
};

export default Solution;
