import { NextRequest, NextResponse } from "next/server";
import { enrollGroupInLearningPath } from "@/lib/reach360";

const learningPathId = process.env.REACH360_LEARNING_PATH_ID;

export async function POST(req: NextRequest) {
  if (!learningPathId) throw new Error("REACH360_LEARNING_PATH_ID is not set");

  const { groupId } = await req.json();
  await enrollGroupInLearningPath(groupId, learningPathId);

  return NextResponse.json({ ok: true }, { status: 200 });
}