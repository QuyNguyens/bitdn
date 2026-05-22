import BlogScreen from '@/views/BlogScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Công Nghệ | Bit Da Nang',
  description: 'Cập nhật tin tức công nghệ mới nhất, các giải pháp AI đột phá và bài phân tích chuyên sâu từ đội ngũ BIT Da Nang.',
};

const BlogPage = () => {
  return <BlogScreen />;
};

export default BlogPage;
