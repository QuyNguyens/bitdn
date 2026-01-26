import { JOBS } from '@/constants/data';
import JobCard from './JobCard';
import { useRouter } from 'next/navigation';

type Props = {};

const JobItems = (props: Props) => {
  const router = useRouter();
  const generateJobSlug = (title: string, id: string) => {
    return title.toLowerCase().replaceAll(' ', '-') + '-' + id;
  };
  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <h1 className="text-4xl font-medium">Vị trí đang tuyển dụng</h1>
      <p className="mt-6">Hành trình đáng nhớ bắt đầu từ những cơ hội tuyệt vời!</p>
      <div className="mt-6 flex flex-col gap-4">
        {JOBS.map((job) => {
          return (
            <JobCard
              key={job.id}
              title={job.title}
              level={job.level}
              status={job.status}
              employmentType={job.employmentType}
              category={job.category}
              workType={job.workType}
              location={job.location}
              postedDate={job.postedDate}
              onViewMore={() => router.push(`/career/${generateJobSlug(job.title, job.id)}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobItems;
