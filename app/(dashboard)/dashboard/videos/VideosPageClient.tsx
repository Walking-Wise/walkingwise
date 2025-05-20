"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Video } from "@/lib/db/schema";
import styles from "@/app/styles/ResourceCard.module.css";

interface VideosPageProps {
  videos: Video[];
  isFreeUser: boolean;
}

export default function VideosPage({ videos, isFreeUser }: VideosPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  useEffect(() => {
    const idParam = searchParams?.get("id") || "";
    if (idParam) {
      const match = videos.find((v) => String(v.id) === idParam);
      if (match) {
        // Only set active video if user has access to it
        if (!isFreeUser || videos.indexOf(match) === 0) {
          setActiveVideo(match);
        } else {
          router.replace('/pricing');
        }
      }
    }
  }, [searchParams, videos, isFreeUser, router]);

  const handleVideoClick = (video: Video) => {
    const index = videos.indexOf(video);
    if (isFreeUser && index > 0) {
      router.push('/pricing');
    } else {
      setActiveVideo(video);
      router.replace(`/dashboard/videos?id=${video.id}`, {
        scroll: false,
      });
    }
  };

  const closeModal = () => {
    setActiveVideo(null);
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.delete("id");
    router.replace(`/dashboard/videos?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Video Library
      </h1>

      <div className={styles.resourceGrid}>
        {videos.map((video, index) => (
          <article
            key={video.id}
            onClick={() => handleVideoClick(video)}
            className={styles.card}
          >
            <Image
              src={video.imageUrl || ""}
              alt={`${video.title} thumbnail`}
              width={400}
              height={225}
              className={styles.cardImage}
            />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>
                {video.title}
                {isFreeUser && index > 0 && (
                  <span className="ml-2 text-sm text-orange-500">
                    (Upgrade to Access)
                  </span>
                )}
              </h2>
            </div>
          </article>
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
