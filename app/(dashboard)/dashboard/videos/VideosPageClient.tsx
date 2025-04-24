"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "@/lib/db/schema";

export default function VideosPage({ videos }: { videos: Video[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      const match = videos.find((v) => String(v.id) === idParam);
      if (match) setActiveVideo(match);
    }
  }, [searchParams, videos]);

  const closeModal = () => {
    setActiveVideo(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("id");
    router.replace(`/dashboard/videos?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Video Library
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            onClick={() => {
              setActiveVideo(video);
              router.replace(`/dashboard/videos?id=${video.id}`, {
                scroll: false,
              });
            }}
            className="pt-0 cursor-pointer transition-shadow hover:shadow-lg"
          >
            <CardHeader className="p-0">
              <Image
                src={video.imageUrl || ""}
                alt={`${video.title} thumbnail`}
                width={400}
                height={225}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-base">{video.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!activeVideo}
        onClose={closeModal}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {activeVideo && (
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl p-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">{activeVideo.title}</h2>
            <video src={activeVideo.url} controls className="w-full rounded" />
          </div>
        )}
      </Dialog>
    </section>
  );
}
