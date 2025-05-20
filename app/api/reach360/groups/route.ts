import { NextRequest, NextResponse } from 'next/server';
import { listGroups, createGroup } from '@/lib/reach360';

export async function GET() {
  try {
    return NextResponse.json(await listGroups());
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: '“name” is required' }, { status: 400 });
  }

  try {
    const group = await createGroup(name);
    return NextResponse.json(group, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
