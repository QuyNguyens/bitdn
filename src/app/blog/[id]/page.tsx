import { Metadata } from 'next';
import { YOU_MIGHT_LIKE_DATA } from '@/constants/data';
import BlogDetailScreen from '@/views/BlogDetailScreen';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = YOU_MIGHT_LIKE_DATA.find((p) => p.id === id);

  if (!post) {
    return {
      title: 'Blog | Bit Da Nang',
      description: 'Tin tức & Xu hướng Công nghệ tại Bit Da Nang.',
    };
  }

  return {
    title: `${post.title} | Blog | Bit Da Nang`,
    description: post.description,
  };
}

const BlogDetailPage = () => {
  return <BlogDetailScreen />;
};

export default BlogDetailPage;
