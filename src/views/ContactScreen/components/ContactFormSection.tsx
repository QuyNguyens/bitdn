'use client';

import Image from 'next/image';
import { addToast } from '@heroui/react';
import { Check, MoveRight } from 'lucide-react';
import { useState } from 'react';
import CountrySelect from '@/components/molicular/CountrySelect';
import { ContactFormPayload } from '@/types/contact';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  const { t } = useI18n();
  const [country, setCountry] = useState<string>('VN');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<ContactFormPayload>({
    firstName: '',
    lastName: '',
    email: '',
    country: 'VN',
    company: '',
    jobTitle: '',
    phone: '',
    businessNeeds: '',
  });

  const updateField = (key: keyof ContactFormPayload, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    // Clear error when user types
    if (errors[key]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const handleReset = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      country: 'VN',
      company: '',
      jobTitle: '',
      phone: '',
      businessNeeds: '',
    });
    setCountry('VN');
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom validation
    const newErrors: Record<string, string> = {};
    if (!form.firstName) newErrors.firstName = t('contact.requiredError');
    if (!form.lastName) newErrors.lastName = t('contact.requiredError');
    if (!form.email) {
      newErrors.email = t('contact.requiredError');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t('contact.email.error');
    }
    if (!form.company) newErrors.company = t('contact.requiredError');
    if (!form.jobTitle) newErrors.jobTitle = t('contact.requiredError');
    if (!form.businessNeeds) newErrors.businessNeeds = t('contact.requiredError');
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;

    const newForm = {
      ...form,
      country: country,
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newForm),
    });

    if (!res.ok) {
      addToast({
        title: 'Send mail failed',
        description: 'Sorry! Please enter your business email',
        color: 'danger',
      });
      return;
    }

    addToast({
      title: 'Send mail success',
      description: 'Thank you! Please check your business email.',
      color: 'success',
    });
  };

  const inputClasses = (hasError: boolean) => `
    w-full px-4 py-2.5 bg-white border rounded-xl outline-none transition-all duration-200
    ${hasError 
      ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
      : 'border-gray-200 focus:border-[#1761b6] focus:ring-1 focus:ring-[#1761b6]'
    }
    placeholder:text-gray-400 text-gray-700 text-sm
  `;

  const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <section className="w-full lg:w-4/5 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-12 px-4 md:px-6 md:grid-cols-2 pb-12">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="overflow-hidden rounded-2xl shadow-lg group">
          <Image
            src="/images/contactUs.png"
            alt="Contact"
            width={600}
            height={450}
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 text-center">
          {t('contact.afterSubmitTitle')}
        </h3>

        <ul className="mt-5 space-y-4 text-gray-600">
          <li className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1761b6] shrink-0">
              <Check color="white" size={16} />
            </div>
            <span className="text-base md:text-lg">{t('contact.afterSubmitItems.0')}</span>
          </li>

          <li className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1761b6] shrink-0">
              <Check color="white" size={16} />
            </div>
            <span className="text-base md:text-lg">{t('contact.afterSubmitItems.1')}</span>
          </li>
        </ul>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <form
          className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 md:p-8 w-full flex flex-col gap-5"
          onSubmit={handleSubmit}
          onReset={handleReset}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className={labelClasses}>
                {t('contact.firstName.label')} <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder={t('contact.firstName.placeholder')}
                value={form.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                className={inputClasses(!!errors.firstName)}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
            </div>

            <div className="w-full">
              <label htmlFor="lastName" className={labelClasses}>
                {t('contact.lastName.label')} <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder={t('contact.lastName.placeholder')}
                value={form.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                className={inputClasses(!!errors.lastName)}
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="email" className={labelClasses}>
              {t('contact.email.label')} <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.email.label')}
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={inputClasses(!!errors.email)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="w-full">
            <CountrySelect value={form.country} onChange={(v) => updateField('country', v)} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full">
              <label htmlFor="company" className={labelClasses}>
                {t('contact.company.label')} <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder={t('contact.company.placeholder')}
                value={form.company}
                onChange={(e) => updateField('company', e.target.value)}
                className={inputClasses(!!errors.company)}
              />
              {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
            </div>

            <div className="w-full">
              <label htmlFor="jobTitle" className={labelClasses}>
                {t('contact.jobTitle.label')} <span className="text-red-500">*</span>
              </label>
              <input
                id="jobTitle"
                type="text"
                name="jobTitle"
                placeholder={t('contact.jobTitle.placeholder')}
                value={form.jobTitle}
                onChange={(e) => updateField('jobTitle', e.target.value)}
                className={inputClasses(!!errors.jobTitle)}
              />
              {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle}</p>}
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="phone" className={labelClasses}>
              {t('contact.phone.label')}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder={t('contact.phone.placeholder')}
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={inputClasses(false)}
            />
          </div>

          <div className="w-full">
            <label htmlFor="businessNeeds" className={labelClasses}>
              {t('contact.businessNeeds.label')} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="businessNeeds"
              name="businessNeeds"
              placeholder={t('contact.businessNeeds.placeholder')}
              rows={4}
              value={form.businessNeeds}
              onChange={(e) => updateField('businessNeeds', e.target.value)}
              className={`${inputClasses(!!errors.businessNeeds)} resize-none`}
            />
            {errors.businessNeeds && <p className="mt-1 text-xs text-red-500">{errors.businessNeeds}</p>}
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              type="reset"
              className="order-2 sm:order-1 px-8 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors duration-200"
            >
              {t('contact.actions.reset')}
            </button>
            <button
              type="submit"
              className="order-1 sm:order-2 px-8 py-2.5 rounded-full bg-[#1761b6] hover:bg-[#124d91] text-white font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('contact.actions.submit')}
              <MoveRight size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactFormSection;
