import { NextRequest, NextResponse } from "next/server";
import { listInvites, createInvite, listGroups } from "@/lib/reach360";

export async function GET() {
  try {
    return NextResponse.json(await listInvites());
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { groupName, email, firstName, lastName } = await req.json();
  if (!groupName || !email || !firstName || !lastName) {
    return NextResponse.json(
      { error: "groupName, email, firstName, lastName are all required" },
      { status: 400 }
    );
  }

  try {
    // Find the group's ID by name
    const { groups } = await listGroups();
    console.log("Groups response:", groups);
    const group = groups.find((g: any) => g.name === groupName);

    if (!group) {
      return NextResponse.json(
        { error: `Group "${groupName}" not found` },
        { status: 404 }
      );
    }

    const invite = await createInvite(email, firstName, lastName, groupName);
    return NextResponse.json(invite, { status: 201 });
  } catch (err: any) {
    console.error("Error in invitations route:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
