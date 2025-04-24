import { NextResponse } from 'next/server';
import { getClassroomPresentations } from '@/lib/db/queries';

export async function GET() {
  const data = await getClassroomPresentations();
  return NextResponse.json(data);
}
