'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import { SLUG_DETAILS_DATA } from '@/constants/data';

type FAQItem = {
  q: string;
  a: string;
};

type WhyChooseUsItem = {
  title: string;
  desc: string;
};

export default function AboutUsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useI18n();

  const title = t(`features.${slug}.title`) || slug;
  const description = t(`features.${slug}.description`);
  const content = t(`features.${slug}.content`);
  const currentFeatures = t(`features.${slug}.list`) as unknown as string[] || [];

  const slugConfig = SLUG_DETAILS_DATA[slug] || SLUG_DETAILS_DATA.default;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#1761b6] to-[#0b3d7a] text-white pt-32 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-x-32 translate-y-32 blur-3xl" />
        
        <div className="w-full lg:w-4/5 mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {t('menu.home')}
            </Link>
            <ChevronRight size={14} />
            <Link href="/about-us" className="hover:text-white transition-colors">
              {t('menu.aboutUs')}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-semibold truncate">{title}</span>
          </nav>

          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
            {t('common.serviceDetail') || 'Service Detail'}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
            {title}
          </h1>
          <p className="text-blue-100 mt-6 text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-4/5 mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1761b6]">
                  <Layers size={22} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t('common.overview')}</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-6 text-base md:text-lg leading-relaxed">
                <p>{content}</p>
                <p className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-[#1761b6] italic text-gray-700">
                  {t('common.servicePromise')}
                </p>
              </div>

              {currentFeatures.length > 0 && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50/50 transition-colors group">
                      <CheckCircle2 size={20} className="text-[#1761b6] mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-gray-800">{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 px-2 flex items-center gap-3">
                {t('serviceExtra.commitments.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slugConfig.benefits.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-4 shadow-blue-100 shadow-lg">
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t(`features.${slug}.benefits.${item.key}.title`)}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {t(`features.${slug}.benefits.${item.key}.desc`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                {t('serviceExtra.process.title')}
              </h3>
              <div className="relative space-y-10">
                {/* Timeline line */}
                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-100" />
                
                {slugConfig.process.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-[#1761b6] z-10 shadow-sm">
                      <step.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t(`features.${slug}.process.${step.key}.title`)}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {t(`features.${slug}.process.${step.key}.desc`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Cpu size={24} className="text-blue-400" />
                {t('common.techUsed') || 'Technology Stack'}
              </h3>
              <div className="flex flex-wrap gap-4">
                {slugConfig.tech.map((t: string, idx: number) => (
                  <div key={idx} className="px-5 py-2.5 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors font-medium">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 px-2 flex items-center gap-3">
                <HelpCircle size={24} className="text-blue-600" />
                {t('serviceExtra.faq.title')}
              </h3>
              <div className="space-y-4">
                {(t(`features.${slug}.faqs`) as unknown as FAQItem[] || []).map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                      <span className="text-blue-600">Q:</span> {faq.q}
                    </h4>
                    <p className="text-gray-600 pl-7 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#1761b6] to-[#0b3d7a] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {t(`features.${slug}.cta.title`)}
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed opacity-90 relative z-10">
                  {t(`features.${slug}.cta.desc`)}
                </p>
                <Link href="/contact" className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-lg font-bold rounded-2xl text-[#1761b6] bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20 active:scale-95 relative z-10">
                  {t('common.contact')}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>

              {/* Company Info Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
                  {t('serviceExtra.whyChooseUs.title') || 'Why choose BIT Da Nang?'}
                </h3>
                <div className="space-y-6">
                  {(t('serviceExtra.whyChooseUs.items') as unknown as WhyChooseUsItem[] || []).map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1.5 h-full min-h-[40px] bg-blue-100 rounded-full overflow-hidden">
                        <div className="w-full h-1/2 bg-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Services Link */}
              <Link href="/about-us" className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                <span className="font-bold text-gray-900">{t('common.viewOtherServices') || 'View other services'}</span>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
