import { JobDetail } from '@/types/jobCard';
import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

type JobDescriptionProps = {
  jobDetail: JobDetail;
};

const JobDescription = ({ jobDetail }: JobDescriptionProps) => {
  const { t } = useI18n();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary font-semibold text-2xl">{t('jobDetail.description.title')}</h1>
      <p>
        <span className="font-semibold">{t('jobDetail.description.jobTitle')} </span>
        {jobDetail.title}
      </p>
      <p>
        <span className="font-semibold">{t('jobDetail.description.location')} </span>
        {jobDetail.location}
      </p>
      <p>
        <span className="font-semibold">{t('jobDetail.description.jobType')} </span>
        {jobDetail.employmentType}
      </p>
      <p>
        {' '}
        <span className="font-semibold">{t('jobDetail.description.company')} </span>
      </p>
      <p className="leading-10">
        {t('jobDetail.description.companyDesc')}
      </p>
      <p>
        <span className="font-semibold">{t('jobDetail.description.candidate')} </span>
      </p>
      <p className="leading-10">
        {t('jobDetail.description.candidateDesc')}
      </p>
      <p>
        <span className="font-semibold">{t('jobDetail.description.responsibilities')} </span>
      </p>
      <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp1')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp2')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp3')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp4')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp5')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp6')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp7')}</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t('jobDetail.description.resp8')}</span>
        </li>
      </ul>
      <div className="flex flex-col gap-5 mt-20">
        <h1 className="text-primary font-semibold text-2xl">{t('jobDetail.description.requirementTitle')}</h1>
        <span>{t('jobDetail.description.reqEducation')}</span>
        <span>{t('jobDetail.description.reqExperience')}</span>
        <span>{t('jobDetail.description.reqTechSkills')}</span>
        <span>{t('jobDetail.description.reqGoodToHave')}</span>
        <span>{t('jobDetail.description.reqSoftSkills')}</span>
        <span>{t('jobDetail.description.reqAgile')}</span>
      </div>
    </div>
  );
};

export default JobDescription;
