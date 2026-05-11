import CarerScreen from '@/views/CarerScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tuyển dụng | Bit Da Nang',
  description: 'Khám phá cơ hội nghề nghiệp tại Bit Da Nang - Tuyển dụng lập trình viên, kỹ sư phần mềm và các vị trí công nghệ tại Đà Nẵng.',
};

const CarerPage = () => {
  return <CarerScreen />;
};

export default CarerPage;
