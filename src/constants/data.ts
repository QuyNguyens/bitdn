import { JobDetail } from '@/types/jobCard';

export type SelectOption = {
  key: string;
  label: string;
};

export const JOB_POSITIONS: SelectOption[] = [
  { key: 'frontend', label: 'Frontend Developer' },
  { key: 'backend', label: 'Backend Developer' },
  { key: 'fullstack', label: 'Fullstack Developer' },

  { key: 'mobile', label: 'Mobile Developer' },
  { key: 'android', label: 'Android Developer' },
  { key: 'ios', label: 'iOS Developer' },

  { key: 'qa', label: 'QA / Tester' },
  { key: 'automation-qa', label: 'Automation QA' },

  { key: 'devops', label: 'DevOps Engineer' },
  { key: 'cloud', label: 'Cloud Engineer' },

  { key: 'data', label: 'Data Engineer' },
  { key: 'data-analyst', label: 'Data Analyst' },
  { key: 'ml', label: 'Machine Learning Engineer' },

  { key: 'game', label: 'Game Developer' },
  { key: 'embedded', label: 'Embedded Engineer' },

  { key: 'tech-lead', label: 'Tech Lead' },
];

/* =======================
   Tỉnh / thành nổi bật ở Việt Nam
======================= */
export const VIETNAM_LOCATIONS: SelectOption[] = [
  { key: 'hn', label: 'Hà Nội' },
  { key: 'hcm', label: 'Hồ Chí Minh' },
  { key: 'dn', label: 'Đà Nẵng' },
  { key: 'ct', label: 'Cần Thơ' },
  { key: 'hp', label: 'Hải Phòng' },
  { key: 'bd', label: 'Bình Dương' },
  { key: 'dna', label: 'Đồng Nai' },
  { key: 'qn', label: 'Quảng Ninh' },
  { key: 'kh', label: 'Khánh Hòa' },
  { key: 'vt', label: 'Bà Rịa - Vũng Tàu' },
];

/* =======================
   Cấp bậc / vị trí (Intern → Senior)
======================= */
export const JOB_LEVELS: SelectOption[] = [
  { key: 'intern', label: 'Intern' },
  { key: 'fresher', label: 'Fresher' },
  { key: 'junior', label: 'Junior' },
  { key: 'middle', label: 'Middle' },
  { key: 'senior', label: 'Senior' },
  { key: 'lead', label: 'Team Lead' },
  { key: 'principal', label: 'Principal' },
  { key: 'manager', label: 'Engineering Manager' },
];

export const JOBS: JobDetail[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    level: 'Junior',
    status: 'Opening',
    employmentType: 'Full-time',
    category: 'IT',
    workType: 'Hybrid',
    location: 'Hà Nội, Việt Nam',
    postedDate: 'Nov 24',

    keyResponsibilities: [
      'Develop responsive web interfaces using React/Next.js',
      'Collaborate with UI/UX designers to implement designs',
      'Optimize applications for maximum speed and scalability',
      'Maintain clean and reusable code',
    ],

    jobRequirements: {
      education: 'B.E / B Tech in Computer Science, Software Engineering or related field',
      experience: '1+ year experience in Frontend development',
      techSkills: {
        mustHave: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        goodToHave: ['Next.js', 'Tailwind CSS', 'Figma'],
      },
      softSkills: [
        'Good communication skills',
        'Problem-solving mindset',
        'Ability to work in a team',
      ],
    },
  },

  {
    id: '2',
    title: 'Backend Developer',
    level: 'Middle',
    status: 'Opening',
    employmentType: 'Full-time',
    category: 'IT',
    workType: 'On-site',
    location: 'Hồ Chí Minh, Việt Nam',
    postedDate: 'Dec 01',

    keyResponsibilities: [
      'Design and develop RESTful APIs',
      'Work with databases and optimize queries',
      'Ensure security and performance of backend systems',
      'Collaborate with frontend and DevOps teams',
    ],

    jobRequirements: {
      education: 'B.E / B Tech/M Tech in Computer Science or Software Engineering',
      experience: '3+ years experience in Backend development',
      techSkills: {
        mustHave: ['Node.js', 'NestJS', 'REST API', 'PostgreSQL', 'Git'],
        goodToHave: ['Docker', 'Redis', 'Microservices'],
      },
      softSkills: [
        'Strong analytical skills',
        'Ownership mindset',
        'Good teamwork and communication',
      ],
    },
  },

  {
    id: '3',
    title: 'Fullstack Developer',
    level: 'Senior',
    status: 'Opening',
    employmentType: 'Full-time',
    category: 'IT',
    workType: 'Remote',
    location: 'Việt Nam',
    postedDate: 'Dec 10',

    keyResponsibilities: [
      'Build end-to-end web applications',
      'Architect scalable frontend & backend solutions',
      'Mentor junior developers',
      'Participate in system design and code reviews',
    ],

    jobRequirements: {
      education: 'B.E / B Tech/M Tech in Computer Science / Software Engineering',
      experience: '5+ years experience in Fullstack development',
      techSkills: {
        mustHave: ['React', 'Node.js', 'TypeScript', 'System Design', 'SQL & NoSQL'],
        goodToHave: ['AWS', 'Docker', 'CI/CD'],
      },
      softSkills: [
        'Leadership skills',
        'Excellent communication',
        'Agile mindset',
        'Ability to learn new technologies quickly',
      ],
    },
  },
];
