import { getTeamForUser, getUser } from "@/lib/db/queries";
import ImplementationPage from "./ImplementationPage";
import { redirect } from "next/navigation";

export default async function ImplementationPageWrapper() {
  const user = await getUser();
  if (!user) redirect("/sign-in");
  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");
  if (!teamData.planName) {
    redirect("/pricing");
  }

  return (
    <ImplementationPage
      completedOnboarding={user?.completedOnboarding ?? false}
    />
  );
}
