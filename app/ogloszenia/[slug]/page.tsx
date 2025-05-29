import { client } from "@/src/sanity/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    groq`*[_type == "announcement" && defined(slug.current)]{ slug }`
  );

  return slugs.map(({ slug }) => ({ slug: slug.current }));
}

export default async function AnnouncementPage({
  params,
}: {
  params: { slug: string };
}) {
  const announcement = await client.fetch(
    groq`*[_type == "announcement" && slug.current == $slug][0]{
      title,
      subtitle,
      publishedAt,
      "imageUrl": image.asset->url,
      body
    }`,
    { slug: params.slug }
  );

  return (
    <div>
      <header
        className="h-[50vh] flex flex-col justify-end text-white bg-green-700 bg-cover bg-center"
        style={{
          backgroundImage: announcement.imageUrl
            ? `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.9) 100%
  ), url(${announcement.imageUrl})`
            : undefined,
        }}
      >
        <div className="bg-transparent bg-opacity-50 p-7">
          <h1 className="text-6xl font-bold">{announcement.title}</h1>
          {announcement.publishedAt && (
            <p className="text-lg italic">
              {new Date(announcement.publishedAt).toLocaleDateString("pl-PL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {announcement.subtitle && (
          <p className="text-gray-500 mb-4 text-xl">{announcement.subtitle}</p>
        )}

        <article className="prose prose-lg max-w-none">
          <PortableText value={announcement.body} />
        </article>
        <Link
          href="/ogloszenia"
          className="inline-block mt-10 text-green-700 hover:text-green-900 font-semibold transition"
        >
          ← Wróć do ogłoszeń
        </Link>
      </main>
    </div>
  );
}
