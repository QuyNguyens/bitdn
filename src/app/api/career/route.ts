// app/api/job-application/route.ts
import { NextResponse } from 'next/server';
import { ApplicationFormPayload } from '@/types/contact';
import { sendJobApplicationEmail } from '@/utils/jobMailer';

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ApplicationFormPayload;

    if (!data.email || !data.fullName || !data.cvBase64) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await sendJobApplicationEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[JOB_APPLICATION_API]', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
