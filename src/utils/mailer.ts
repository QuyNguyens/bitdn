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

export const sendSubscriptionEmail = async (email: string) => {
  const html = `
  <div style="font-family:Arial;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px">
    <h2 style="color:#1761b6">Chào mừng bạn đến với BIT Da Nang</h2>
    <p>Cảm ơn bạn đã đăng ký nhận tin tức mới nhất từ chúng tôi.</p>
    <p>Chúng tôi sẽ gửi cho bạn những cập nhật thú vị về công nghệ, AI và các giải pháp phần mềm hàng đầu định kỳ.</p>
    <hr />
    <p style="font-size:12px;color:#777">
      Đây là email tự động, vui lòng không trả lời.
    </p>
  </div>
  `;

  await transporter.sendMail({
    from: sender,
    to: [email],
    subject: 'Xác nhận đăng ký nhận tin tại BIT Da Nang',
    html,
    category: 'Newsletter Subscription',
  });
};
