import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import JobDescription from './JobDescription';
import { JobDetail } from '@/types/jobCard';
import JobApplicationForm from './JobApplicationForm';
import { useI18n } from '@/i18n/I18nProvider';

type TabKey = 'Job Details' | 'Application';
type JobTabsProps = {
  jobDetail: JobDetail;
};
export default function JobTabs({ jobDetail }: JobTabsProps) {
  const [selected, setSelected] = React.useState<TabKey>('Job Details');
  const { t } = useI18n();

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as TabKey)}
      >
        <Tab key="Job Details" title={t('jobDetail.tabs.jobDetails')}>
          <Card>
            <CardBody>
              <JobDescription jobDetail={jobDetail} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Application" title={t('jobDetail.tabs.application')}>
          <Card>
            <CardBody>
              <JobApplicationForm />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
