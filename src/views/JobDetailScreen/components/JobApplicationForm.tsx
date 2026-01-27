'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { ApplicationFormPayload } from '@/types/contact';
import { fileToBase64 } from '@/utils/converBase64';
import { Button, Form, Input } from '@heroui/react';
import { Upload, FileText } from 'lucide-react';
import { useState } from 'react';

export default function JobApplicationForm() {
  const { t } = useI18n();

  const [form, setForm] = useState<ApplicationFormPayload>({
    fullName: '',
    email: '',
    phone: '',
    cv: undefined,
    coverLetter: undefined,
  });

  const updateField = (key: keyof ApplicationFormPayload, value: string | File | undefined) => {
    setForm((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileChange = (key: 'cv' | 'coverLetter', file?: File) => {
    updateField(key, file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.cv || !form.coverLetter) return;

    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      cvName: form.cv.name,
      cvBase64: await fileToBase64(form.cv),
      coverLetterName: form.coverLetter.name,
      coverLetterBase64: form.coverLetter ? await fileToBase64(form.coverLetter) : undefined,
    };

    try {
      await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('ERROR: [SUBMIT_APPLICATION_FORM] ', error);
    }
  };

  return (
    <Form className="w-full space-y-10" onSubmit={handleSubmit}>
      {/* ===== Upload CV ===== */}
      <section className="w-full">
        <h3 className="text-xl font-semibold text-primary">
          CV or resume <span className="text-primary">*</span>
        </h3>
        <p className="mt-1 text-sm text-gray-500">Upload your CV or resume file</p>

        <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white py-8 text-center transition hover:border-primary">
          {form.cv ? (
            <>
              <FileText className="h-8 w-8 text-primary" />
              <p className="mt-2 text-sm font-medium">{form.cv.name}</p>
            </>
          ) : (
            <>
              <Upload className="h-8 w-8 text-primary" />
              <p className="mt-2 font-medium">Upload your CV here</p>
            </>
          )}

          <p className="mt-1 text-xs text-gray-500">
            Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 20MB
          </p>

          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFileChange('cv', e.target.files?.[0])}
          />
        </label>
      </section>

      {/* ===== Application Information ===== */}
      <section className="w-full">
        <h3 className="text-xl font-semibold text-primary">Application&apos;s information</h3>
        <p className="mt-1 text-sm text-gray-500">Fill out the information below</p>

        <div className="mt-5 flex flex-col gap-4">
          <Input
            isRequired
            name="fullName"
            label={t('contact.fullName.label')}
            labelPlacement="outside"
            placeholder={t('contact.fullName.placeholder')}
            value={form.fullName}
            onValueChange={(v) => updateField('fullName', v)}
          />

          <Input
            isRequired
            type="email"
            name="email"
            label={t('contact.email.label')}
            labelPlacement="outside"
            placeholder={t('contact.email.placeholder')}
            value={form.email}
            onValueChange={(v) => updateField('email', v)}
            errorMessage={t('contact.email.error')}
          />

          <Input
            name="phone"
            label={t('contact.phone.label')}
            labelPlacement="outside"
            placeholder={t('contact.phone.placeholder')}
            value={form.phone}
            onValueChange={(v) => updateField('phone', v)}
          />
        </div>
      </section>

      {/* ===== Upload Cover Letter ===== */}
      <section className="w-full">
        <h3 className="text-xl font-semibold text-primary">
          Cover letter <span className="text-primary">*</span>
        </h3>
        <p className="mt-1 text-sm text-gray-500">Upload your cover letter</p>

        <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white py-8 text-center transition hover:border-primary">
          {form.coverLetter ? (
            <>
              <FileText className="h-8 w-8 text-primary" />
              <p className="mt-2 text-sm font-medium">{form.coverLetter.name}</p>
            </>
          ) : (
            <>
              <Upload className="h-8 w-8 text-primary" />
              <p className="mt-2 font-medium">Upload your Cover Letter here</p>
            </>
          )}

          <p className="mt-1 text-xs text-gray-500">
            Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 20MB
          </p>

          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFileChange('coverLetter', e.target.files?.[0])}
          />
        </label>
      </section>

      {/* ===== Submit Button (BOTTOM) ===== */}
      <div className="pt-6">
        <Button type="submit" className="w-full bg-primary text-white">
          Submit Application
        </Button>
      </div>
    </Form>
  );
}
