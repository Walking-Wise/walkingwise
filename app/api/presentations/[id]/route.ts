import { NextRequest, NextResponse } from 'next/server';
import { getClassroomPresentationById } from '@/lib/db/queries';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const presentation = await getClassroomPresentationById(id);
  if (!presentation) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(presentation);
}
