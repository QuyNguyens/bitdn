'use client';

import { useI18n } from '@/i18n/I18nProvider';

const TechStack = () => {
  const { t } = useI18n();

  const techs = [
    { name: 'C#', category: 'Backend' },
    { name: '.NET', category: 'Framework' },
    { name: 'Java', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Vue', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Linux', category: 'OS' },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...techs, ...techs];
  
  return (
    <div className="w-full py-24 flex flex-col items-center gap-12 bg-white overflow-hidden">
      <div className="text-center">
        <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">{t('homeExtra.techStack.badge')}</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-2">
          {t('homeExtra.techStack.title')}
        </h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto px-4 text-sm md:text-base">
          {t('homeExtra.techStack.subtitle')}
        </p>
      </div>

      {/* Marquee effect */}
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex gap-6 py-4 animate-marquee whitespace-nowrap">
          {duplicatedTechs.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-[#1761b6]/20 transition-all duration-300 flex flex-col gap-1 items-center min-w-[130px]"
            >
              <span className="font-bold text-gray-800 text-lg">{tech.name}</span>
              <span className="text-xs text-[#1761b6] font-medium bg-blue-50 px-2 py-0.5 rounded-full">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
