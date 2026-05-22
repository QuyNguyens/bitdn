'use client';
import Banner from './components/Banner';
import { useParams } from 'next/navigation';
import { JOBS } from '@/constants/data';
import JobDetail from './components/JobDetail';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';

const JobDetailScreen = () => {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useI18n();

  const generateJobSlug = (title: string, id: string) => {
    return title.toLowerCase().replaceAll(' ', '-') + '-' + id;
  };

  const jobDetail = JOBS.find((j) => generateJobSlug(j.title, j.id) === slug);

  return (
    <div className="flex flex-col">
      <Banner />

      {/* Breadcrumb - outside banner */}
      <nav className="w-full md:w-4/5 lg:w-3/5 mx-auto px-4 md:px-0 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/career" className="text-gray-500 hover:text-[#1761b6] transition-colors">
            {t('jobDetail.banner.jobs')}
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-900 font-semibold">{jobDetail?.title}</span>
        </div>
      </nav>

      <div className="mt-6">
        <JobDetail jobDetail={jobDetail} />
      </div>
    </div>
  );
};

export default JobDetailScreen;
