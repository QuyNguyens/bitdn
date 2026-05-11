import ServiceScreen from '@/views/ServiceScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dịch vụ | Bit Da Nang',
  description: 'Khám phá các dịch vụ phát triển phần mềm, ứng dụng di động và giải pháp công nghệ chuyên nghiệp từ Bit Da Nang.',
};

const ServicePage = () => {
  return <ServiceScreen />;
};

export default ServicePage;
