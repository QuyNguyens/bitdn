'use client';

import Image from 'next/image';
import { Input, Button, Form, Textarea, addToast } from '@heroui/react';
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

  const handleSubmit = async (e: any) => {
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
        <Form
          className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 md:p-8 w-full flex flex-col gap-5"
          onSubmit={handleSubmit}
          noValidate
          onReset={() => {
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
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              isRequired
              name="firstName"
              label={t('contact.firstName.label')}
              labelPlacement="outside"
              placeholder={t('contact.firstName.placeholder')}
              value={form.firstName}
              onValueChange={(v) => updateField('firstName', v)}
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName}
            />

            <Input
              isRequired
              name="lastName"
              label={t('contact.lastName.label')}
              labelPlacement="outside"
              placeholder={t('contact.lastName.placeholder')}
              value={form.lastName}
              onValueChange={(v) => updateField('lastName', v)}
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName}
            />
          </div>

          <Input
            isRequired
            type="email"
            name="email"
            label={t('contact.email.label')}
            labelPlacement="outside"
            placeholder={t('contact.email.label')}
            value={form.email}
            onValueChange={(v) => updateField('email', v)}
            isInvalid={!!errors.email}
            errorMessage={errors.email}
          />

          <CountrySelect value={form.country} onChange={(v) => updateField('country', v)} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              isRequired
              name="company"
              label={t('contact.company.label')}
              labelPlacement="outside"
              placeholder={t('contact.company.placeholder')}
              value={form.company}
              onValueChange={(v) => updateField('company', v)}
              isInvalid={!!errors.company}
              errorMessage={errors.company}
            />

            <Input
              isRequired
              name="jobTitle"
              label={t('contact.jobTitle.label')}
              labelPlacement="outside"
              placeholder={t('contact.jobTitle.placeholder')}
              value={form.jobTitle}
              onValueChange={(v) => updateField('jobTitle', v)}
              isInvalid={!!errors.jobTitle}
              errorMessage={errors.jobTitle}
            />
          </div>

          <Input
            name="phone"
            label={t('contact.phone.label')}
            labelPlacement="outside"
            placeholder={t('contact.phone.placeholder')}
            value={form.phone}
            onValueChange={(v) => updateField('phone', v)}
          />

          <Textarea
            isRequired
            name="businessNeeds"
            label={t('contact.businessNeeds.label')}
            labelPlacement="outside"
            placeholder={t('contact.businessNeeds.placeholder')}
            minRows={4}
            value={form.businessNeeds}
            onValueChange={(v) => updateField('businessNeeds', v)}
            isInvalid={!!errors.businessNeeds}
            errorMessage={errors.businessNeeds}
          />

          <div className="w-full flex flex-col sm:flex-row justify-end gap-3 pt-3">
            <Button type="reset" variant="flat" radius="full" className="order-2 sm:order-1">
              {t('contact.actions.reset')}
            </Button>
            <Button
              color="primary"
              type="submit"
              radius="full"
              endContent={<MoveRight size={18} />}
              className="order-1 sm:order-2 font-medium"
            >
              {t('contact.actions.submit')}
            </Button>
          </div>
        </Form>
      </motion.div>
    </section>
  );
};

export default ContactFormSection;
