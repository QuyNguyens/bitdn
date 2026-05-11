'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useI18n();

  // Map slug to title (fallback to slug if not found)
  const titles: { [key: string]: string } = {
    design: 'Impressive UI Design',
    development: 'Flexible Application Development',
    deployment: 'Easy Deployment, Efficient Operation',
  };

  const title = titles[slug] || slug;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="w-full md:w-4/5 lg:w-3/5 mx-auto px-4 md:px-0 py-5 border-b border-gray-100 mt-20">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/about-us" className="text-gray-500 hover:text-[#1761b6] transition-colors">
            {t('menu.aboutUs')}
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-900 font-semibold">{title}</span>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto px-4 md:px-0 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">Chi Tiết Dịch Vụ</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2">{title}</h1>
          <div className="prose max-w-none text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
            <p>Đây là trang chi tiết cho dịch vụ <strong>{title}</strong> của Bit Da Nang.</p>
            <p>Chúng tôi luôn nỗ lực mang đến những giải pháp công nghệ tối ưu nhất, phù hợp với nhu cầu thực tế của từng doanh nghiệp. Nội dung chi tiết của phần này đang được đội ngũ biên tập cập nhật.</p>
            <p>Vui lòng liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào hoặc cần tư vấn sâu hơn về giải pháp này.</p>
          </div>
          
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#1761b6] hover:bg-[#1a4f8a] transition-colors">
              Liên Hệ Tư Vấn
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
