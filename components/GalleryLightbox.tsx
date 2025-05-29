"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageAsset {
  asset: {
    _id: string;
    url: string;
  };
}

interface Props {
  images: ImageAsset[];
  title: string;
}

export default function GalleryLightbox({ images, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <div
            key={image.asset._id}
            className="relative w-full h-48 cursor-pointer rounded shadow overflow-hidden"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={image.asset.url}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={i === 0} // optional: prioritize first image
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 bg-black/70 bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="relative w-[90vw] h-[90vh] max-w-[1200px] max-h-[900px] rounded shadow-lg">
            <Image
              src={images[lightboxIndex].asset.url}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + images.length) % images.length
              );
            }}
            className="absolute left-4 text-white text-3xl font-bold select-none"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % images.length);
            }}
            className="absolute right-4 text-white text-3xl font-bold select-none"
          >
            ›
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 text-white text-3xl font-bold select-none"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
