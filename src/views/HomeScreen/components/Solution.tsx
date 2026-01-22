'use client';

import WrapComponent from '@/components/molicular/WrapComponent';
import { Button } from '@heroui/react';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <WrapComponent>
      <div className="flex w-full gap-10 lg:w-4/5">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="shrink-0"
        >
          <Image
            src="/images/work_image.png"
            alt="work image"
            width={520}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col justify-center gap-6"
        >
          <h3 className="text-2xl font-semibold">
            Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại
          </h3>

          <div className="space-y-3 text-gray-700">
            <p>
              Chúng tôi là đối tác đáng tin cậy trong việc phát triển phần mềm, thiết kế website, và
              chuyển đổi số cho các doanh nghiệp trong và ngoài nước.
            </p>
            <p>
              Với đội ngũ kỹ sư dày dạn kinh nghiệm, thành thạo nhiều ngôn ngữ lập trình và am hiểu
              sâu sắc nghiệp vụ, chúng tôi giúp khách hàng tối ưu quy trình và tạo ra giá trị bền
              vững qua công nghệ.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              className="w-fit"
              color="primary"
              endContent={<CircleArrowRight />}
            >
              Xem thêm
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </WrapComponent>
  );
};

export default Solution;
