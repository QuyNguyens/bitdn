import Image from 'next/image';
import { motion } from 'framer-motion';

type CardServiceItemProps = {
  image: string;
  title: string;
  description: string;
};

const CardServiceItem = ({ image, title, description }: CardServiceItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col items-center text-center gap-4 px-6 py-8 bg-white rounded-2xl shadow-sm hover:shadow-lg"
    >
      {/* Image */}
      <motion.div
        className="relative h-32 w-32"
        whileHover={{ rotate: 5 }}
        transition={{ type: 'spring' }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default CardServiceItem;
