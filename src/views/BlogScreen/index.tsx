'use client';

import { useState, useMemo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { YOU_MIGHT_LIKE_DATA, BLOG_TAGS } from '@/constants/data';
import { useI18n } from '@/i18n/I18nProvider';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Search, ArrowRight, BookOpen, Tag, TrendingUp, Users, FileText } from 'lucide-react';

// Map post IDs to their tag category for filtering
const POST_TAG_MAP: Record<string, string> = {
  '1': 'AI',
  '2': 'Business',
  '3': 'Tech',
  '4': 'Data',
  '5': 'DevOps',
  '6': 'Mobile',
  '7': 'Tech',
  '8': 'Design',
};

// Map post IDs to approximate read time (minutes)
const POST_READ_TIME: Record<string, number> = {
  '1': 6,
  '2': 5,
  '3': 7,
  '4': 5,
  '5': 6,
  '6': 8,
  '7': 7,
  '8': 5,
};

// Map post IDs to publish dates for each locale
const POST_DATE_KEYS: Record<string, string> = {
  '1': 'blog.posts.1.date',
  '2': 'blog.posts.2.date',
  '3': 'blog.posts.3.date',
  '4': 'blog.posts.4.date',
  '5': 'blog.posts.5.date',
  '6': 'blog.posts.6.date',
  '7': 'blog.posts.7.date',
  '8': 'blog.posts.8.date',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

const BlogScreen = () => {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Featured post is always the first one
  const featuredPost = YOU_MIGHT_LIKE_DATA[0];

  // Calculate filtered posts (all posts, not just the featured one)
  const filteredPosts = useMemo(() => {
    return YOU_MIGHT_LIKE_DATA.filter((post) => {
      const translatedTitle = t(`blog.posts.${post.id}.title`) || post.title;
      const translatedDesc = t(`blog.posts.${post.id}.desc`) || post.description;

      const matchesSearch =
        !searchQuery ||
        translatedTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        translatedDesc.toLowerCase().includes(searchQuery.toLowerCase());

      const postTag = POST_TAG_MAP[post.id] || '';
      const matchesTag = !selectedTag || postTag === selectedTag;

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag, t]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f7fb]">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1761b6] to-[#38bdf8] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* ===== Hero Banner ===== */}
      <div className="w-full bg-gradient-to-br from-[#0f2d5c] via-[#1761b6] to-[#1e40af] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-blue-100 flex items-center gap-2">
              <BookOpen size={12} />
              {t('blog.page.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            {t('blog.page.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed"
          >
            {t('blog.page.subtitle')}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center justify-center gap-8 mt-10"
          >
            {[
              { icon: FileText, value: '8+', label: t('blog.page.stats.articles') },
              { icon: Users, value: '10K+', label: t('blog.page.stats.readers') },
              { icon: TrendingUp, value: '7', label: t('blog.page.stats.topics') },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center flex flex-col items-center gap-1">
                <Icon size={18} className="text-blue-300 mb-1" />
                <span className="text-2xl font-extrabold text-white">{value}</span>
                <span className="text-blue-200/70 text-xs uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Featured Post ===== */}
      <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-6 -mt-10 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-[#1761b6]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#1761b6]">
              {t('blog.page.featuredPost')}
            </span>
          </div>
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={t(`blog.posts.${featuredPost.id}.title`) || featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#1761b6] text-white text-xs font-bold uppercase rounded-full tracking-wider shadow-md">
                  {POST_TAG_MAP[featuredPost.id]}
                </span>
              </div>
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {t(POST_DATE_KEYS[featuredPost.id]) || 'May 2026'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {t('blog.common.readTime', { time: POST_READ_TIME[featuredPost.id] || 5 })}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-[#1761b6] transition-colors leading-snug">
                  {t(`blog.posts.${featuredPost.id}.title`) || featuredPost.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {t(`blog.posts.${featuredPost.id}.desc`) || featuredPost.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1761b6] group/link w-fit mt-2">
                  {t('blog.common.readMore')}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* ===== Main Content: Sidebar + Grid ===== */}
      <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ---- Left Sidebar ---- */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">

            {/* Search Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
                <Search size={16} className="text-[#1761b6]" />
                {t('blog.page.searchLabel')}
              </h3>
              <div className="relative">
                <input
                  id="blog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('blog.page.searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1761b6]/40 focus:border-[#1761b6] transition-all text-sm"
                />
                <Search size={15} className="absolute left-3.5 top-3 text-gray-400" />
              </div>
            </div>

            {/* Popular Topics / Tags */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
                <Tag size={16} className="text-[#1761b6]" />
                {t('blog.common.popularTopics')}
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  id="tag-all"
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    selectedTag === null
                      ? 'bg-[#1761b6] border-[#1761b6] text-white shadow-sm'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-[#1761b6]/40 hover:text-[#1761b6]'
                  }`}
                >
                  {t('blog.page.allTopics')}
                </button>
                {BLOG_TAGS.map((tag) => (
                  <button
                    key={tag}
                    id={`tag-${tag.toLowerCase()}`}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedTag === tag
                        ? 'bg-[#1761b6] border-[#1761b6] text-white shadow-sm'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-[#1761b6]/40 hover:text-[#1761b6]'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-[#1761b6] to-[#0f2d5c] p-6 rounded-2xl text-white">
              <h3 className="font-bold mb-2 text-base">{t('blog.newsletter.communityTitle')}</h3>
              <p className="text-blue-100/80 text-xs leading-relaxed mb-4">
                {t('blog.newsletter.communityDesc')}
              </p>
              <Link
                href="/contact"
                id="newsletter-cta"
                className="block w-full text-center py-2.5 bg-white text-[#1761b6] text-xs font-bold rounded-xl hover:bg-blue-50 transition-all shadow-md"
              >
                {t('blog.newsletter.communityButton')}
              </Link>
            </div>
          </div>

          {/* ---- Blog Grid ---- */}
          <div className="lg:col-span-9">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                <BookOpen size={18} className="text-[#1761b6]" />
                {t('blog.page.latestArticles')}
                <span className="ml-2 px-2.5 py-0.5 bg-blue-100 text-[#1761b6] text-xs font-bold rounded-full">
                  {filteredPosts.length}
                </span>
              </h2>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs text-gray-500 hover:text-[#1761b6] font-semibold transition-colors flex items-center gap-1"
                >
                  ✕ #{selectedTag}
                </button>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
                <BookOpen size={40} className="text-gray-200 mx-auto mb-4" />
                <p className="text-gray-400 text-lg font-semibold">{t('blog.page.noResults')}</p>
                <button
                  id="reset-filter-btn"
                  onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                  className="mt-5 px-6 py-2.5 bg-[#1761b6] text-white text-sm font-bold rounded-xl hover:bg-[#0f4d9f] transition-all shadow-md"
                >
                  {t('blog.page.resetFilter')}
                </button>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filteredPosts.map((post) => {
                  const translatedTitle = t(`blog.posts.${post.id}.title`) || post.title;
                  const translatedDesc = t(`blog.posts.${post.id}.desc`) || post.description;
                  const postTag = POST_TAG_MAP[post.id] || 'Tech';
                  const readTime = POST_READ_TIME[post.id] || 5;
                  const dateKey = POST_DATE_KEYS[post.id];

                  return (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group"
                    >
                      {/* Thumbnail */}
                      <Link href={`/blog/${post.id}`} className="relative aspect-[16/9] w-full overflow-hidden block flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={translatedTitle}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#1761b6]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded-full tracking-wider z-10">
                          {postTag}
                        </span>
                      </Link>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                        <div className="space-y-2">
                          {/* Meta row */}
                          <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                            <span className="flex items-center gap-1">
                              <Calendar size={10} />
                              {t(dateKey) || 'May 2026'}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {t('blog.common.readTime', { time: readTime })}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1761b6] transition-colors line-clamp-2 leading-snug">
                            <Link href={`/blog/${post.id}`}>
                              {translatedTitle}
                            </Link>
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                            {translatedDesc}
                          </p>
                        </div>

                        {/* Read More */}
                        <Link
                          href={`/blog/${post.id}`}
                          id={`read-more-${post.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1761b6] group/link w-fit mt-1 border-b border-transparent hover:border-[#1761b6] pb-0.5 transition-all"
                        >
                          {t('blog.common.readMore')}
                          <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
