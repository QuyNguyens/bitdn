import { motion, Variants } from 'framer-motion';

type Props = {
  icon: any;
  title: string;
  desc: string;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} satisfies Variants;

const WhyChooseCard = ({ icon: Icon, title, desc }: Props) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group
        rounded-2xl
        bg-white/90
        p-6
        text-center
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          mx-auto
          mb-4
          flex
          h-14
          w-14
          border
          border-orange-700
          items-center
          justify-center
          rounded-full
          bg-orange-100
          text-orange-600
          transition
          group-hover:bg-orange-500
          group-hover:text-white
        "
      >
        <Icon size={26} />
      </div>

      <h3 className="mb-2 text-base font-semibold text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default WhyChooseCard;
