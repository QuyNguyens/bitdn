'use client';
import { Clock, LucideIcon } from 'lucide-react';

type TextIconProps = {
  icon: LucideIcon;
  text: string;
  className?: string;
};

const TextIcon = ({ icon: Icon, text, className }: TextIconProps) => {
  return (
    <div className={`flex items-center gap-1 font-medium text-sm ${className}`}>
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
};

export default TextIcon;
