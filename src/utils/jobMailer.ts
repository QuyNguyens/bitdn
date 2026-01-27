// utils/jobMailer.ts
import nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';
import { ApplicationFormPayload } from '@/types/contact';

const TOKEN = '30451a1f90418ce7e20926c2a597f31d';

const transporter = nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
    sandbox: true,
    testInboxId: 4334748,
  }),
);

const sender = {
  address: 'careers@bitdn.test',
  name: 'Bit Da Nang Careers',
};

export const sendJobApplicationEmail = async (data: ApplicationFormPayload) => {
  const html = `
  <div style="font-family:Arial;max-width:600px;margin:auto">
    <h2 style="color:#f97316">New Job Application</h2>

    <p><b>Full name:</b> ${data.fullName}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone || '-'}</p>

    <hr />
    <p style="font-size:12px;color:#777">
      Bit Da Nang – Careers System
    </p>
  </div>
  `;

  const attachments = [
    {
      filename: data.cvName,
      content: data.cvBase64,
      encoding: 'base64',
    },
  ];

  if (data.coverLetterBase64) {
    attachments.push({
      filename: data.coverLetterName!,
      content: data.coverLetterBase64,
      encoding: 'base64',
    });
  }

  await transporter.sendMail({
    from: sender,
    to: ['hr@bitdn.test'], // gửi về email của bạn
    subject: `New Job Application - ${data.fullName}`,
    html,
    attachments,
    category: 'Job Application',
  });
};
