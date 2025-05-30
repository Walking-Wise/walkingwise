import { NextRequest, NextResponse } from "next/server";
import { getGroupMembers, createInvite } from "@/lib/reach360";
import { db } from "@/lib/db/drizzle";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    // Get user's group
    const user = await db.query.users.findFirst({
      where: eq(users.id, parseInt(userId, 10)),
      with: {
        group: true,
      },
    });

    if (!user?.group) {
      return NextResponse.json({ error: "User has no group" }, { status: 404 });
    }

    // Get group members from Reach360
    const {users: members} = await getGroupMembers(user.group.reachId);

    // Check if user is in the group
    const isInGroup = members.find((member: any) => member.email === user.email);

    

    return NextResponse.json({ isInGroup });
  } catch (err: any) {
    console.error("Error checking group membership:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    // Get user and their group
    const user = await db.query.users.findFirst({
      where: eq(users.id, parseInt(userId, 10)),
      with: {
        group: true,
      },
    });

    if (!user?.group) {
      return NextResponse.json({ error: "User has no group" }, { status: 404 });
    }

    const firstName = user.name?.split(" ")[0] || "";
    const lastName = user.name?.split(" ").slice(1).join(" ") || "";

    // Resend invite
    await createInvite(user.email, firstName, lastName, user.group.name);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error resending invite:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 