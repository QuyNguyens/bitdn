type Props = {
  icon: any;
  title: string;
  desc: string;
};

const WhyChooseCard = ({ icon: Icon, title, desc }: Props) => {
  return (
    <div
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
    </div>
  );
};

export default WhyChooseCard;
