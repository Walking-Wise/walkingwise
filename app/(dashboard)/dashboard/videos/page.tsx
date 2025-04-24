// app/dashboard/videos/page.tsx (Server Component)
import { getAllVideos } from '@/lib/db/queries';
import VideosPage from './VideosPageClient';

export default async function Page() {
  const videos = await getAllVideos();
  return <VideosPage videos={videos} />;
}
