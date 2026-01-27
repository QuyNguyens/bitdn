export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  company: string;
  jobTitle: string;
  phone?: string;
  businessNeeds: string;
};

export type ApplicationFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  cv?: File;
  coverLetter?: File;
  cvBase64?: string; // file upload
  cvName?: string;
  coverLetterBase64?: string;
  coverLetterName?: string;
};
