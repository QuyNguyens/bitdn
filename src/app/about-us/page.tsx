import AboutUsScreen from '@/views/AboutUsScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu | Bit Da Nang',
  description: 'Tìm hiểu về Bit Da Nang - đội ngũ, sứ mệnh và giá trị cốt lõi của công ty công nghệ hàng đầu tại Đà Nẵng.',
};

const AboutUsPage = () => {
  return <AboutUsScreen />;
};

export default AboutUsPage;
