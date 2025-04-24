import VideosPage from './VideosPageClient';

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
  const videos = await fetchVideos();
  return <VideosPage videos={videos} />;
}
