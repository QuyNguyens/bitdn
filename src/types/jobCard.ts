export type JobCardProps = {
  title: string;
  level?: string; // Middle, Senior...
  status?: string; // Opening, Closed...
  employmentType: string; // Full-time
  category: string; // IT
  workType: string; // On-site / Remote
  location: string; // Hà Nội, VN
  postedDate: string; // Nov 24
  onViewMore?: () => void;
};

export type JobRequirement = {
  education: string;
  experience: string;
  techSkills: {
    mustHave: string[];
    goodToHave?: string[];
  };
  softSkills: string[];
};

export type JobDetail = {
  id: string;
  title: string;
  level: 'Intern' | 'Fresher' | 'Junior' | 'Middle' | 'Senior';
  status: 'Opening' | 'Closed';
  employmentType: 'Full-time' | 'Part-time' | 'Internship';
  category: string;
  workType: 'On-site' | 'Remote' | 'Hybrid';
  location: string;
  locationMatch: string;
  postedDate: string;

  keyResponsibilities: string[];
  jobRequirements: JobRequirement;
};
