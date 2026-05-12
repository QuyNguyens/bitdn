'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { YOU_MIGHT_LIKE_DATA, BLOG_TAGS, BLOG_AUTHOR_INFO } from '@/constants/data';
import { useI18n } from '@/i18n/I18nProvider';
import Link from 'next/link';
import {
  ChevronRight,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  Mail,
  Tag,
  Bookmark,
  Shield,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

const BlogDetailScreen = () => {
  const params = useParams();
  const id = params.id as string;
  const { t } = useI18n();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subMessage, setSubMessage] = useState({ text: '', type: '' });

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const foundPost = YOU_MIGHT_LIKE_DATA.find((p) => p.id === id);
    setPost(foundPost);

    // Filter related posts (exclude current)
    const filtered = YOU_MIGHT_LIKE_DATA.filter((p) => p.id !== id).slice(0, 3);
    setRelatedPosts(filtered);
  }, [id]);

  const handleSubscribe = async (e: React.FormEvent, inputEmail?: string) => {
    e.preventDefault();
    const targetEmail = inputEmail || email;
    
    if (!targetEmail || !targetEmail.includes('@')) {
      setSubMessage({ text: t('blog.newsletter.invalidEmail'), type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setSubMessage({ text: '', type: '' });

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: targetEmail }),
      });

      if (res.ok) {
        setSubMessage({ text: t('blog.newsletter.success'), type: 'success' });
        setEmail('');
      } else {
        const errorData = await res.json();
        setSubMessage({ text: errorData.message || t('blog.newsletter.serverError'), type: 'error' });
      }
    } catch (error) {
      setSubMessage({ text: t('blog.newsletter.serverError'), type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">{t('blog.common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#1761b6] to-[#0b3d7a] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

        <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              {t('menu.home')}
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium truncate max-w-[200px] md:max-w-none">
              {t(`blog.posts.${id}.title`)}
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-bold uppercase tracking-wider text-blue-100">
                {t('blog.common.category')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-200 text-sm">{t('blog.common.readTime', { time: 5 })}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {t(`blog.posts.${id}.title`)}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-blue-100 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center border border-white/20">
                  <User size={18} />
                </div>
                <div>
                  <p className="font-bold text-white">{t('blog.common.authorTitle')}</p>
                  <p className="text-xs text-blue-300">{t('blog.common.authorRole')}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-300" />
                <span>May 11, 2026</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Share2 size={16} />
                  <span>{t('blog.common.share')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Main Image */}
              {post.image && (
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={t(`blog.posts.${id}.title`)}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                {/* Intro/Description */}
                <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-10 border-l-4 border-blue-600 pl-6 py-2">
                  {t(`blog.posts.${id}.desc`)}
                </p>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                  <p>{t(`blog.posts.${id}.content`)}</p>

                  <blockquote className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[#1761b6] italic text-xl text-gray-800 my-10 relative">
                    <span className="absolute top-4 left-4 text-6xl text-blue-100 font-serif opacity-50">
                      "
                    </span>
                    {t(`blog.posts.${id}.quote`)}
                  </blockquote>

                  <h2 className="text-3xl font-bold text-gray-900 pt-6">
                    {t(`blog.posts.${id}.detailTitle`)}
                  </h2>
                  <p>
                    {t(`blog.posts.${id}.detailContent`)}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-[#1761b6] mb-2 flex items-center gap-2">
                        <Zap size={18} /> {t(`blog.posts.${id}.feature1Title`)}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(`blog.posts.${id}.feature1Desc`)}
                      </p>
                    </div>
                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                        <Shield size={18} /> {t(`blog.posts.${id}.feature2Title`)}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(`blog.posts.${id}.feature2Desc`)}
                      </p>
                    </div>
                  </div>

                  <p>
                    {t(`blog.posts.${id}.conclusion`)}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900">{t('blog.posts.titleCommitment')}</h3>
                  <p>{t('common.servicePromise')}</p>
                </div>

                {/* Tags & Actions */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-400 mr-2">
                      <Tag size={18} />
                    </span>
                    {BLOG_TAGS.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#1761b6] transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer group">
                      <Bookmark size={20} className="group-hover:fill-current" />
                      <span className="text-sm font-medium">{t('blog.common.save')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-[#1761b6] border-4 border-white shadow-sm overflow-hidden">
                    <User size={48} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t('blog.common.authorTitle')}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                      {t('blog.common.authorDesc')}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <Link
                        href={BLOG_AUTHOR_INFO.linkedin}
                        className="text-gray-400 hover:text-[#1761b6] transition-colors"
                      >
                        <Linkedin size={18} />
                      </Link>
                      <Link
                        href={BLOG_AUTHOR_INFO.twitter}
                        className="text-gray-400 hover:text-[#1761b6] transition-colors"
                      >
                        <Twitter size={18} />
                      </Link>
                      <Link
                        href={BLOG_AUTHOR_INFO.mail}
                        className="text-gray-400 hover:text-[#1761b6] transition-colors"
                      >
                        <Mail size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Link
                href="/service"
                className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowLeft size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    {t('blog.common.back')}
                  </p>
                  <p className="font-bold text-gray-900 group-hover:text-[#1761b6] transition-colors">
                    {t('blog.common.backToList')}
                  </p>
                </div>
              </Link>
              <div className="p-6 bg-white rounded-2xl border border-gray-100 opacity-50 flex items-center justify-end text-right gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    {t('blog.common.next')}
                  </p>
                  <p className="font-bold text-gray-900">{t('blog.common.latestPost')}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                  <Clock size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Newsletter Sidebar */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  {t('blog.newsletter.title')}
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  {t('blog.newsletter.desc')}
                </p>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('blog.newsletter.placeholder')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    required
                  />
                  <button 
                    disabled={isSubmitting}
                    className="w-full mt-3 px-4 py-3 bg-[#1761b6] text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? t('blog.newsletter.processing') : t('blog.newsletter.button')}
                  </button>
                  {subMessage.text && (
                    <p className={`mt-2 text-xs font-medium ${subMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {subMessage.text}
                    </p>
                  )}
                </form>
              </div>

              {/* Related Posts Sidebar */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 border-b pb-4">{t('blog.common.relatedPosts')}</h4>
                <div className="space-y-6">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} href={post.href} className="flex gap-4 group">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={t(`blog.posts.${post.id}.title`)}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#1761b6] transition-colors line-clamp-2">
                          {t(`blog.posts.${post.id}.title`)}
                        </h5>
                        <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold flex items-center gap-1">
                          <Calendar size={10} /> May 2026
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags Sidebar */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 border-b pb-4">{t('blog.common.popularTopics')}</h4>
                <div className="flex flex-wrap gap-2">
                  {BLOG_TAGS.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-gray-100"
                      >
                        #{tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Social Share Sidebar */}
              <div className="bg-gradient-to-br from-[#1761b6] to-[#0b3d7a] p-8 rounded-3xl text-white shadow-xl">
                <h4 className="font-bold mb-4">{t('blog.common.shareTitle')}</h4>
                <p className="text-blue-100 text-xs mb-6 opacity-80 leading-relaxed">
                  {t('blog.common.shareDesc')}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <Facebook size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <Twitter size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <Linkedin size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <Mail size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Bottom */}
      <div className="w-full bg-white border-t border-gray-100 py-20 mt-12">
        <div className="w-full lg:w-3/5 mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            {t('blog.newsletter.communityTitle')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            {t('blog.newsletter.communityDesc')}
          </p>
          <div className="max-w-md mx-auto">
            <form 
              onSubmit={(e) => {
                const form = e.target as HTMLFormElement;
                const input = form.querySelector('input[type="email"]') as HTMLInputElement;
                handleSubscribe(e, input.value).then(() => {
                  if (subMessage.type !== 'error') input.value = '';
                });
              }} 
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button 
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#1761b6] text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? t('blog.newsletter.sending') : t('blog.newsletter.communityButton')}
              </button>
            </form>
            {subMessage.text && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm font-medium ${subMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}
              >
                {subMessage.text}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailScreen;
