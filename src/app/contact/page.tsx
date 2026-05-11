import ContactScreen from '@/views/ContactScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên hệ | Bit Da Nang',
  description: 'Liên hệ với Bit Da Nang để trao đổi về nhu cầu phát triển phần mềm và giải pháp công nghệ cho doanh nghiệp của bạn.',
};

const ContactPage = () => {
  return <ContactScreen />;
};

export default ContactPage;
