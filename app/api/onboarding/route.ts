import { NextResponse } from 'next/server';
import { getCurrentUserWithOnboardingStatus } from '@/lib/db/queries';

export async function GET() {
  const data = await getCurrentUserWithOnboardingStatus();
  return NextResponse.json(data);
}
