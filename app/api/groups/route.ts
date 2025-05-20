import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { groups, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const { name, reachId, userId } = await req.json();

    if (!name || !reachId || !userId) {
      return NextResponse.json(
        { error: "name, reachId, and userId are required" },
        { status: 400 }
      );
    }

    // Create the group
    const [group] = await db
      .insert(groups)
      .values({
        name,
        reachId,
      })
      .returning();

    // Update the user with the group ID
    await db
      .update(users)
      .set({ groupId: group.id })
      .where(eq(users.id, userId));

    return NextResponse.json(group, { status: 201 });
  } catch (err: any) {
    console.error("Error creating group:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create group" },
      { status: 500 }
    );
  }
} 