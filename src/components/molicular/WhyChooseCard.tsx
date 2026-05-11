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
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
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
        bg-white
        border border-gray-200
        p-8
        text-center
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-[#1761b6]/30
      "
    >
      <div
        className="
          mx-auto
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-[#1761b6]/10
          text-[#1761b6]
          transition-all
          duration-300
          group-hover:bg-[#1761b6]
          group-hover:text-white
          group-hover:shadow-lg
        "
      >
        <Icon size={26} />
      </div>

      <h3 className="mb-3 text-lg font-bold text-gray-900 tracking-tight">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default WhyChooseCard;
