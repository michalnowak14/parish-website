import Image from "next/image";
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";

// 🔍 GROQ Queries
const announcementsQuery = `*[_type == "announcement" && isActive == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  subtitle,
  body,
  publishedAt,
  "imageUrl": image.asset->url
}`;

const intencjeQuery = `*[_type == "intencja"] | order(date asc)[0...5] {
  _id,
  title,
  body,
  date
}`;

export default async function HomePage() {
  // 🟢 Pobieranie danych "na żywo" (bez cache)
  const [announcements, intencje] = await Promise.all([
    client.fetch(announcementsQuery, {}, { cache: "no-store" }),
    client.fetch(intencjeQuery, {}, { cache: "no-store" }),
  ]);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* HERO */}
      <section className="relative w-screen h-screen">
        <Image
          src="/main.jpg"
          alt="Parafia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Parafia Opatrzności Bożej
          </h1>
          <h2 className="text-xl md:text-2xl mt-4">w Jodłówce Wałkach</h2>
        </div>
      </section>

      {/* INFO OGÓLNE */}
      <section className="max-w-4xl mx-auto px-6 py-16 leading-relaxed text-lg space-y-8">
        <p>
          Witamy na stronie Parafii Opatrzności Bożej w Jodłówce-Wałkach!
          Znajdziesz tu wszystkie najważniejsze aktualności oraz informacje z
          życia naszej wspólnoty parafialnej.
        </p>

        <blockquote className="italic border-l-4 border-yellow-600 pl-4">
          “Zaufaj Panu z całego swojego serca i nie polegaj na własnym rozumie.”
          <br />
          <span className="font-semibold block mt-2">– Prz 3,5</span>
        </blockquote>
      </section>

      {/* 🕊️ OGŁOSZENIA */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-300">
        <h2 className="text-3xl font-bold mb-8">Ogłoszenia parafialne</h2>
        {announcements.length === 0 ? (
          <p>Brak aktualnych ogłoszeń.</p>
        ) : (
            <div className="grid md:grid-cols-2 gap-10">
              {announcements.map((item) => (
                <div key={item._id} className="border rounded-2xl shadow p-6 bg-white">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="rounded-xl mb-4 object-cover"
                    />
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
                  </p>
                  <PortableText value={item.body} />
                </div>
              ))}
            </div>
          )}
      </section>

      {/* 🙏 INTENCJE */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-300">
        <h2 className="text-3xl font-bold mb-8">Intencje mszalne</h2>
        {intencje.length === 0 ? (
          <p>Brak intencji.</p>
        ) : (
            <ul className="space-y-8">
              {intencje.map((i) => (
                <li key={i._id} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{i.title}</h3>
                  <p className="text-gray-600 mb-1">
                    {new Date(i.date).toLocaleDateString("pl-PL")}
                  </p>
                  <p className="text-gray-800">{i.body}</p>
                </li>
              ))}
            </ul>
          )}
      </section>
    </div>
  );
}
