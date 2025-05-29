// app/intencje/page.tsx
import { client } from "@/src/sanity/client";

type Intencja = {
  _id: string;
  title: string;
  body: string;
  date: string;
};

const getIntencje = async (): Promise<Intencja[]> => {
  const query = `*[_type == "intencja"] | order(date desc){
    _id, title, body, date
  }`;
  return await client.fetch(query);
};

export default async function IntencjePage() {
  const intencje = await getIntencje();

  return (
    <div>
      <header className="page-header">
        <h1 className="text-6xl p-7 font-bold">Intencje mszalne</h1>
      </header>
      <div className="max-w-3xl mx-auto py-12 px-4">
        {intencje.map((intencja) => (
          <div key={intencja._id} className="mb-6 p-4 rounded bg-white shadow">
            <h2 className="text-xl font-semibold mb-5">{intencja.title}</h2>

            <p className="text-gray-800 whitespace-pre-line">{intencja.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
