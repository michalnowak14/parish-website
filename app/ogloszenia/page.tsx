// app/announcements/page.tsx
import { client } from "@/src/sanity/client";
import { groq } from "next-sanity";
import AnnouncmentCard from "@/components/AnnouncmentCard";

const query = groq`
  *[_type == "announcement" && isActive == true] | order(publishedAt desc) {
    title,
    subtitle,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

export default async function AnnouncementsPage() {
  const announcements = await client.fetch(query);

  return (
    <div>
      <header className="page-header">
        <h1 className="text-6xl p-7 font-bold">Ogłoszenia</h1>
      </header>
      <section className="w-[80vw] m-auto">
        <h3 className="text-center p-7">
          Ogłoszenia duszpasterskie to miejsce, gdzie co tydzień znajdziesz
          najważniejsze informacje dotyczące życia naszej parafii.
        </h3>
        <ul className="p-6 flex flex-wrap gap-6 justify-center">
          {announcements.map((a: any) => (
            <AnnouncmentCard
              key={a.slug}
              imageUrl={a.imageUrl}
              title={a.title}
              subtitle={a.subtitle}
              slug={a.slug}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
