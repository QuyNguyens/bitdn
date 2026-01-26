'use client';

import Image from 'next/image';
import { Input, Button, Form, Textarea, toast, addToast } from '@heroui/react';
import { Check, MoveRight } from 'lucide-react';
import { useState } from 'react';
import CountrySelect from '@/components/molicular/CountrySelect';
import { ContactFormPayload } from '@/types/contact';
import { useI18n } from '@/i18n/I18nProvider';

const ContactFormSection = () => {
  const { t } = useI18n();
  const [country, setCountry] = useState<string>('VN');

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
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
    <section className="w-full lg:w-4/5 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
      {/* LEFT */}
      <div>
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/contactUs.png"
            alt="Contact"
            width={600}
            height={450}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-gray-900 text-center">
          {t('contact.afterSubmitTitle')}
        </h3>

        <ul className="mt-4 space-y-4 text-gray-600">
          <li className="flex items-center gap-3">
            <Button isIconOnly color="primary" radius="full" className="mt-1" size="sm">
              <Check color="white" />
            </Button>

            <span className="text-xl">{t('contact.afterSubmitItems.0')}</span>
          </li>

          <li className="flex items-center gap-3">
            <Button isIconOnly color="primary" radius="full" className="mt-1" size="sm">
              <Check color="white" />
            </Button>

            <span className="text-xl">
              <span className="text-xl">{t('contact.afterSubmitItems.1')}</span>
            </span>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <Form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
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
        }}
      >
        <Input
          isRequired
          name="firstName"
          label={t('contact.firstName.label')}
          labelPlacement="outside"
          placeholder={t('contact.firstName.placeholder')}
          value={form.firstName}
          onValueChange={(v) => updateField('firstName', v)}
        />

        <Input
          isRequired
          name="lastName"
          label={t('contact.lastName.label')}
          labelPlacement="outside"
          placeholder={t('contact.lastName.placeholder')}
          value={form.lastName}
          onValueChange={(v) => updateField('lastName', v)}
        />

        <Input
          isRequired
          type="email"
          name="email"
          label={t('contact.email.label')}
          labelPlacement="outside"
          placeholder={t('contact.email.label')}
          value={form.email}
          onValueChange={(v) => updateField('email', v)}
          errorMessage={t('contact.email.error')}
        />

        <CountrySelect value={form.country} onChange={(v) => updateField('country', v)} />

        <Input
          isRequired
          name="company"
          label={t('contact.company.label')}
          labelPlacement="outside"
          placeholder={t('contact.company.placeholder')}
          value={form.company}
          onValueChange={(v) => updateField('company', v)}
        />

        <Input
          isRequired
          name="jobTitle"
          label={t('contact.jobTitle.label')}
          labelPlacement="outside"
          placeholder={t('contact.jobTitle.placeholder')}
          value={form.jobTitle}
          onValueChange={(v) => updateField('jobTitle', v)}
        />

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
        />

        <div className="w-full flex justify-end gap-3 pt-2">
          <Button type="reset" variant="flat" radius="full">
            {t('contact.actions.reset')}
          </Button>
          <Button color="primary" type="submit" radius="full" endContent={<MoveRight />}>
            {t('contact.actions.submit')}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ContactFormSection;
