import { client } from "@/src/sanity/client";
import { groq } from "next-sanity";
import Link from "next/link";

const query = groq`*[_type == "gallery"] | order(publishedAt desc) {
  title,
  slug,
  description,
  publishedAt,
  "coverImageUrl": coverImage.asset->url
}`;

export default async function GalleryPage() {
  const galleries: {
    title: string;
    slug: { current: string };
    description: string;
    publishedAt: string;
    coverImageUrl: string;
  }[] = await client.fetch(query);

  return (
    <div>
      <header className="page-header">
        <h1 className="text-6xl p-7 font-bold">Galeria</h1>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4 grid gap-8 md:grid-cols-2">
        {galleries.map((gallery) => (
          <Link
            key={gallery.slug.current}
            href={`/galeria/${gallery.slug.current}`}
            className="group block  overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              {/* Background image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.6)
                  ), url(${gallery.coverImageUrl})`,
                }}
              />

              {/* Text content layer */}
              <div className="relative z-10 h-full flex flex-col justify-end text-white p-4">
                <h2 className="text-2xl font-bold">{gallery.title}</h2>
                <p className="text-sm italic">
                  {new Date(gallery.publishedAt).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
