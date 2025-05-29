// app/galeria/[slug]/page.tsx

import { client } from "@/src/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import GalleryLightbox from "@/components/GalleryLightbox";

interface Gallery {
  title: string;
  description: string;
  publishedAt: string;
  coverImageUrl?: string;
  images: { asset: { _id: string; url: string } }[];
}

type PageProps = {
  params: { slug: string };
};

export default function Page(props: PageProps) {
  return <GalleryContent {...props} />;
}

async function GalleryContent({ params }: PageProps) {
  const gallery: Gallery | null = await client.fetch(
    groq`*[_type == "gallery" && slug.current == $slug][0]{
      title,
      description,
      publishedAt,
      "coverImageUrl": coverImage.asset->url,
      images[] {
        asset-> {
          _id,
          url
        }
      }
    }`,
    { slug: params.slug }
  );

  if (!gallery) return notFound();

  return (
    <div>
      <header
        className="h-[50vh] flex flex-col justify-end text-white bg-green-700 bg-cover bg-center"
        style={{
          backgroundImage: gallery.coverImageUrl
            ? `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.7) 40%,
                rgba(0, 0, 0, 0.9) 100%
              ), url(${gallery.coverImageUrl})`
            : undefined,
        }}
      >
        <div className="bg-transparent bg-opacity-50 p-7">
          <h1 className="text-6xl font-bold">{gallery.title}</h1>
          {gallery.publishedAt && (
            <p className="text-lg italic">
              {new Date(gallery.publishedAt).toLocaleDateString("pl-PL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        <p className="text-xl mb-6">{gallery.description}</p>
        <GalleryLightbox images={gallery.images} title={gallery.title} />
      </main>
    </div>
  );
}
