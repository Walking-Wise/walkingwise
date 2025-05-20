import VideosPage from './VideosPageClient';
import { getTeamForUser, getUser } from "@/lib/db/queries";
import { redirect } from "next/navigation";

async function fetchVideos() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function Page() {
  const user = await getUser();
  if (!user) redirect("/sign-in");
  
  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");
  
  const videos = await fetchVideos();
  const isFreeUser = !teamData.planName;

  return <VideosPage videos={videos} isFreeUser={isFreeUser} />;
}
