import { redirect } from "next/navigation";
import { getUser, getTeamForUser } from "@/lib/db/queries";
import CoursesClient from "./CoursesClient";

export default async function CoursesPage() {
  const user = await getUser();
  if (!user) redirect("/sign-in");

  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");

  return <CoursesClient initialUser={user} initialTeamData={teamData} />;
}
