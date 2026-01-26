// utils/email.ts
export const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'live.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
];

const DEV_TEST_EMAILS = ['quynguyen123alq@gmail.com'];

export const isBusinessEmail = (email: string) => {
  const normalizedEmail = email.toLowerCase();

  if (process.env.NODE_ENV === 'development' && DEV_TEST_EMAILS.includes(normalizedEmail)) {
    return true;
  }

  const domain = normalizedEmail.split('@')[1];
  if (!domain) return false;

  return !FREE_EMAIL_DOMAINS.includes(domain);
};
