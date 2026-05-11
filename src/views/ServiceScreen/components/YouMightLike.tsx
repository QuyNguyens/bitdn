'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

type SuggestItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type Props = {
  items: SuggestItem[];
};

const YouMightLikeSlider = ({ items }: Props) => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 md:px-6 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">Recommended</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2"
        >
          You <span className="text-gradient">Might Like</span>
        </motion.h2>
      </div>

      {/* Navigation buttons - placed at top right or sides */}
      <div className="flex justify-end gap-2 mb-4">
        <button className="you-like-prev p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronLeft size={18} className="text-gray-600" />
        </button>
        <button className="you-like-next p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.you-like-prev',
            nextEl: '.you-like-next',
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-4"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden h-full group">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#1761b6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1761b6] group/link w-fit"
                  >
                    Read more 
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default YouMightLikeSlider;
