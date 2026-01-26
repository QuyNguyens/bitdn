'use client';

import { LucideIcon } from 'lucide-react';

type UserItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
};

const UserItem = ({
  icon: Icon,
  title,
  description,
  titleClass = 'text-xl text-white font-semibold leading-relaxed',
  descriptionClass = 'text-sm text-gray-300 w-4/5',
}: UserItemProps) => {
  return (
    <div className="flex items-center gap-4 text-white">
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-700 border border-gray-400">
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* Content */}
      <div className="w-full space-y-1">
        <h4 className={titleClass}>{title}</h4>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default UserItem;
