
"use client";

import { useState } from "react";

interface VideoCardProps {
  videoId: string;
  title: string;
}

export default function VideoCard({ videoId, title }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailQuality, setThumbnailQuality] = useState(0);

  const thumbnailOptions = [
    "maxresdefault.jpg",
    "sddefault.jpg",
    "hqdefault.jpg",
  ];

  return (
    <div className="aspect-video w-full overflow-hidden bg-[#202521]">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture; gyroscope; accelerometer"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block h-full w-full"
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/${thumbnailOptions[thumbnailQuality]}`}
            alt={title}
            className="h-full w-full object-cover"
            onError={() => {
              setThumbnailQuality((current) =>
                Math.min(current + 1, thumbnailOptions.length - 1)
              );
            }}
          />

          <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/30">
            <span className="flex h-16 w-20 items-center justify-center rounded-xl bg-red-600 text-2xl text-white shadow-lg transition group-hover:scale-110">
              ▶
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
