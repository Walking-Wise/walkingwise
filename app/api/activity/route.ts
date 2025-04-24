import { NextResponse } from 'next/server';
import { getActivityLogs } from '@/lib/db/queries';

export async function GET() {
  const data = await getActivityLogs();
  return NextResponse.json(data);
}
