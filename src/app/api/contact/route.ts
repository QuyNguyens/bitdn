import { NextResponse } from 'next/server';
import { isBusinessEmail } from '@/utils/email';
import { sendContactEmail } from '@/utils/mailer';
import type { ContactFormPayload } from '@/types/contact';

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactFormPayload;

    if (!isBusinessEmail(data.email)) {
      return NextResponse.json(
        { message: 'Please use a business email address.' },
        { status: 400 }
      );
    }

    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[CONTACT_API]', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
