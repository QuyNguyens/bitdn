import { JobDetail } from '@/types/jobCard';
import { SuggestItem } from '@/types/suggest';

export type SelectOption = {
  key: string;
  label: string;
};

export const JOB_POSITIONS: SelectOption[] = [
  { key: '', label: '' },

  { key: 'Frontend Developer', label: 'Frontend Developer' },
  { key: 'Backend Developer', label: 'Backend Developer' },
  { key: 'Fullstack Developer', label: 'Fullstack Developer' },

  { key: 'Mobile Developer', label: 'Mobile Developer' },
  { key: 'Android Developer', label: 'Android Developer' },
  { key: 'iOS Developer', label: 'iOS Developer' },

  { key: 'QA / Tester', label: 'QA / Tester' },
  { key: 'Automation QA', label: 'Automation QA' },

  { key: 'DevOps Engineer', label: 'DevOps Engineer' },
  { key: 'Cloud Engineer', label: 'Cloud Engineer' },

  { key: 'Data Engineer', label: 'Data Engineer' },
  { key: 'Data Analyst', label: 'Data Analyst' },
  { key: 'Machine Learning Engineer', label: 'Machine Learning Engineer' },

  { key: 'Game Developer', label: 'Game Developer' },
  { key: 'Embedded Engineer', label: 'Embedded Engineer' },

  { key: 'Tech Lead', label: 'Tech Lead' },
];

/* =======================
   Tỉnh / thành nổi bật ở Việt Nam
======================= */
export const VIETNAM_LOCATIONS: SelectOption[] = [
  { key: '', label: '' },
  { key: 'Hà Nội', label: 'Hà Nội' },
  { key: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
  { key: 'Đà Nẵng', label: 'Đà Nẵng' },
  { key: 'Cần Thơ', label: 'Cần Thơ' },
  { key: 'Hải Phòng', label: 'Hải Phòng' },
  { key: 'Bình Dương', label: 'Bình Dương' },
  { key: 'Đồng Nai', label: 'Đồng Nai' },
  { key: 'Quảng Ninh', label: 'Quảng Ninh' },
  { key: 'Khánh Hòa', label: 'Khánh Hòa' },
  { key: 'Bà Rịa - Vũng Tàu', label: 'Bà Rịa - Vũng Tàu' },
];

/* =======================
   Cấp bậc / vị trí (Intern → Senior)
======================= */
export const JOB_LEVELS: SelectOption[] = [
  { key: '', label: '' },
  { key: 'Intern', label: 'Intern' },
  { key: 'Fresher', label: 'Fresher' },
  { key: 'Junior', label: 'Junior' },
  { key: 'Middle', label: 'Middle' },
  { key: 'Senior', label: 'Senior' },
  { key: 'Team Lead', label: 'Team Lead' },
  { key: 'Principal', label: 'Principal' },
  { key: 'Engineering Manager', label: 'Engineering Manager' },
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
    locationMatch: 'Hà Nội',
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
    locationMatch: 'Hồ Chí Minh',
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
    location: 'Đà Nẵng, Việt Nam',
    locationMatch: 'Đà Nẵng',
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

export const YOU_MIGHT_LIKE_DATA: SuggestItem[] = [
  {
    id: '1',
    title: 'Top AI Trends in 2026: How Ready Are You?',
    description:
      '2025 marked a pivotal year for AI accelerated adoption across a wide range of industries. Looking ahead in 2026, understanding the emerging trends that will define the next phase of AI’s evolution is essential for businesses who want to stay competitive.',
    image: '/images/ai-trends-2026.png',
    href: '/#',
  },
  {
    id: '2',
    title: 'Generative AI in Business: Practical Use Cases',
    description:
      'From customer support automation to content generation and internal knowledge assistants, generative AI is transforming how modern businesses operate. Discover real-world use cases you can apply today.',
    image: '/images/generative-ai-business.png',
    href: '/#',
  },
  {
    id: '3',
    title: 'How AI Is Reshaping Software Development',
    description:
      'AI-powered coding assistants, automated testing, and intelligent code reviews are redefining the software development lifecycle. Learn how development teams can adapt and thrive in this new era.',
    image: '/images/ai-software-development.png',
    href: '/#',
  },
  {
    id: '4',
    title: 'AI & Data Privacy: What Companies Must Know',
    description:
      'As AI adoption grows, data privacy and regulatory compliance become critical challenges. This article explores best practices for building AI systems that respect user data and comply with global regulations.',
    image: '/images/dell-AI-Factory.png',
    href: '/#',
  },
];
