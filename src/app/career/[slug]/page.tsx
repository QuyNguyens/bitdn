import { Metadata } from 'next';
import { JOBS } from '@/constants/data';
import JobDetailScreen from '@/views/JobDetailScreen';

type Props = {
  params: Promise<{ slug: string }>;
};

const generateJobSlug = (title: string, id: string) => {
  return title.toLowerCase().replaceAll(' ', '-') + '-' + id;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => generateJobSlug(j.title, j.id) === slug);

  if (!job) {
    return {
      title: 'Tuyển dụng | Bit Da Nang',
      description: 'Khám phá cơ hội nghề nghiệp tại Bit Da Nang.',
    };
  }

  return {
    title: `${job.title} (${job.level}) | Tuyển dụng | Bit Da Nang`,
    description: `Ứng tuyển vị trí ${job.title} (${job.level}) tại Bit Da Nang. Hình thức: ${job.workType}, địa điểm: ${job.location}. Cập nhật mới nhất.`,
  };
}

const JobDetailPage = () => {
  return <JobDetailScreen />;
};

export default JobDetailPage;
