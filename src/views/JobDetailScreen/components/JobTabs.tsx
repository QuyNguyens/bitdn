import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import JobDescription from './JobDescription';
import { JobDetail } from '@/types/jobCard';
import JobApplicationForm from './JobApplicationForm';

type TabKey = 'Job Details' | 'Application';
type JobTabsProps = {
  jobDetail: JobDetail;
};
export default function JobTabs({ jobDetail }: JobTabsProps) {
  const [selected, setSelected] = React.useState<TabKey>('Job Details');

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as TabKey)}
      >
        <Tab key="Job Details" title="Job Details">
          <Card>
            <CardBody>
              <JobDescription jobDetail={jobDetail} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Application" title="Application">
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
