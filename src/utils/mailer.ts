import nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';
import type { ContactFormPayload } from '@/types/contact';

const TOKEN = '30451a1f90418ce7e20926c2a597f31d';

const transporter = nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
    sandbox: true,
    testInboxId: 4334748,
  }),
);

const sender = {
  address: 'contact@bitdn.test',
  name: 'Bit Da Nang',
};

export const sendContactEmail = async (data: ContactFormPayload) => {
  const html = `
  <div style="font-family:Arial;max-width:600px;margin:auto">
    <h2 style="color:#f97316">Thank you for contacting Bit Da Nang</h2>

    <p>Hi <b>${data.firstName}</b>,</p>

    <p>We’ve received your request with the following details:</p>

    <table style="width:100%;border-collapse:collapse">
      <tr><td><b>Company</b></td><td>${data.company}</td></tr>
      <tr><td><b>Job Title</b></td><td>${data.jobTitle}</td></tr>
      <tr><td><b>Country</b></td><td>${data.country}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone || '-'}</td></tr>
    </table>

    <p><b>Business Needs</b></p>
    <p>${data.businessNeeds}</p>

    <hr />
    <p style="font-size:12px;color:#777">
      Bit Da Nang – Software Outsourcing Partner
    </p>
  </div>
  `;

  await transporter.sendMail({
    from: sender,
    to: [data.email], // Mailtrap khuyên dùng array
    subject: 'We received your contact request',
    html,
    category: 'Contact Form',
  });
};
