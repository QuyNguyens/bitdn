import Image from 'next/image';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

type AboutUsItemProps = {
  image: string;
  title: string;
  description: string;
};

const AboutUsItem = ({ image, title, description }: AboutUsItemProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm hover:shadow-lg"
    >
      {/* Image */}
      <motion.div
        className="relative h-45 w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">{title}</h3>

        <p className="line-clamp-2 text-sm text-gray-600">{description}</p>

        <motion.div className="mt-auto flex justify-end" whileHover={{ scale: 1.05 }}>
          <Button size="sm" color="secondary" className="w-fit">
            {t('common.readMore').toUpperCase()}...
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsItem;
