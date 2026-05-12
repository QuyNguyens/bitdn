import { NextResponse } from 'next/server';
import { sendSubscriptionEmail } from '@/utils/mailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Email không hợp lệ.' },
        { status: 400 }
      );
    }

    await sendSubscriptionEmail(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[SUBSCRIBE_API]', error);
    return NextResponse.json(
      { message: 'Đã xảy ra lỗi hệ thống.' },
      { status: 500 }
    );
  }
}
