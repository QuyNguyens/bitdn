import { JobDetail } from '@/types/jobCard';
import { CheckCircle2 } from 'lucide-react';

type JobDescriptionProps = {
  jobDetail: JobDetail;
};

const JobDescription = ({ jobDetail }: JobDescriptionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary font-semibold text-2xl">Job Description</h1>
      <p>
        <span className="font-semibold">Job Title: </span>
        {jobDetail.title}
      </p>
      <p>
        <span className="font-semibold">Location: </span>
        {jobDetail.location}
      </p>
      <p>
        <span className="font-semibold">Job Type: </span>
        {jobDetail.employmentType}
      </p>
      <p>
        {' '}
        <span className="font-semibold">Company: </span>
      </p>
      <p className="leading-10">
        At Bit Da Nang, our people are at the heart of everything we do. Founded in March 2024, we
        are a growing software outsourcing company with a team of 45 passionate engineers, dedicated
        to delivering high-quality digital solutions for global partners. Through collaboration,
        technical excellence, and an agile mindset, we help businesses turn ideas into reliable,
        scalable software while building a positive, purpose-driven workplace for our team.
      </p>
      <p>
        <span className="font-semibold">Candidate: </span>
      </p>
      <p className="leading-10">
        We're looking for skilled software developers with technical expertise in systems control
        software, data modelling, conducting simulations testing and software integrations. An
        Experience with Object- Oriented Analysis and Design (OOAD), equipment control software
        development and virtual testing environments would be an added advantage. The Ideal
        candidate could come from Semiconductor, Medical equipment, Telecommunications or Aerospace
        domains.
      </p>
      <p>
        <span className="font-semibold">Key Responsibilities: </span>
      </p>
      <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Collaborate with cross-functional team members to collect requirements.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Understand customer processes and analyse the corresponding needs.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Design, develop, and conduct software unit testing for functionality.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Employ a CI/CD approach to make dynamic adjustments to products.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Troubleshoot and debug coding errors early in the development cycle.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>
            Participate in peer code reviews and contribute actively to the improvement of the
            software development process.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>Automate complex and repetitive engineering tasks.</span>
        </li>

        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>
            Maintain technical documentation for the software at all stages of development.
          </span>
        </li>
      </ul>
      <div className="flex flex-col gap-5 mt-20">
        <h1 className="text-primary font-semibold text-2xl">Job Requirement</h1>
        <span>
          Education: B.E / B Tech/M tech in Computer Science/ Computer applications/Software
          Engineering.
        </span>
        <span>Experience: Minimum 3+ years of experience in any of the relevant areas.</span>
        <span>
          Tech Skills: Must Haves - Proficiency in C++, Python, data analytics, Modelling, Git &
          Bitbucket.
        </span>
        <span>Good to have - experience in Simulink, Linux, BASH (Unix Shell)</span>
        <span>
          Soft Skills: Excellent communication, Strong problem-solving skills, enthusiastic team
          player,
        </span>
        <span>Agile mindset and ability to learn new technologies on the fly.</span>
      </div>
    </div>
  );
};

export default JobDescription;
