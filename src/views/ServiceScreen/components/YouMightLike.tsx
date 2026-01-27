'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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
    <section className="relative mx-auto w-full max-w-6xl px-2">
      {/* Title */}
      <h2 className="mb-10 text-center text-4xl font-bold">
        You{' '}
        <span className="bg-linear-to-r from-green-500 via-lime-500 to-orange-500 bg-clip-text text-transparent">
          Might Like
        </span>
      </h2>

      {/* Navigation buttons */}
      <button className="you-like-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow hover:bg-gray-100">
        <ChevronLeft size={20} />
      </button>

      <button className="you-like-next absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow hover:bg-gray-100">
        <ChevronRight size={20} />
      </button>
      <div className="w-full lg:w-4/5 mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.you-like-prev',
            nextEl: '.you-like-next',
          }}
          slidesPerView={1}
          spaceBetween={40}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center gap-10 lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-3/5">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="h-70 w-full object-cover lg:h-90"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5">
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>

                  <p className="mb-6 line-clamp-4 text-gray-600">{item.description}</p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3"
                  >
                    Read more <ArrowRight size={18} />
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
