import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-screen h-screen">
        <Image
          src="/main2.jpeg" // Replace with your image path
          alt="Parafia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Parafia Opatrzności Bożej
          </h1>
          <h2 className="text-xl md:text-2xl mt-4">w Jodłówce - Wałkach</h2>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 leading-relaxed text-lg space-y-8">
        <p>
          Witamy na stronie Parafii Opatrzności Bożej w Jodłówce-Wałkach!
          Znajdziesz tu wszystkie najważniejsze aktualności oraz informacje z
          życia naszej wspólnoty parafialnej. Zapraszamy do wspólnej modlitwy,
          zaangażowania w grupy parafialne oraz do przeżywania liturgii w duchu
          wiary i jedności.
        </p>

        <blockquote className="italic border-l-4 border-yellow-600 pl-4">
          “Zaufaj Panu z całego swojego serca i nie polegaj na własnym rozumie.”
          <br />
          <span className="font-semibold block mt-2">– Prz 3,5</span>
        </blockquote>

        <div>
          <h3 className="text-xl font-semibold">Msze Św. i Nabożeństwa</h3>
          <div className="mt-2 space-y-4">
            <p>
              <strong>Niedziela i święta:</strong>
              <br />
              godz. 7:00, 10:00, 15:00
            </p>

            <p>
              <strong>Dni powszednie:</strong>
              <br />
              poniedziałek, wtorek, czwartek, sobota – godz. 7:00
              <br />
              środa, piątek – godz. 18:00{" "}
              <span className="italic">(czas zimowy godz. 17:00)</span>
            </p>

            <p>
              <strong>Odpust parafialny:</strong>
              <br />
              ostatnia niedziela września
            </p>

            <p>
              <strong>Nowenna do Bożej Opatrzności:</strong>
              <br />
              pierwszy czwartek miesiąca, godz. 18:00
            </p>

            <p>
              <strong>Gorzkie Żale w Wielkim Poście:</strong>
              <br />
              niedziela godz. 14:00
            </p>

            <p>
              <strong>Droga krzyżowa w Wielkim Poście:</strong>
              <br />
              piątek godz. 17:00
            </p>

            <p>
              <strong>Roraty:</strong>
              <br />
              godz. 7:00
            </p>

            <p>
              <strong>Nowenna do Matki Bożej Nieustającej Pomocy:</strong>
              <br />
              środa godz. 18:00{" "}
              <span className="italic">(17:00 w czasie zimowym)</span>
            </p>

            <p>
              <strong>Nowenna do Miłosierdzia Bożego:</strong>
              <br />
              piątek po Mszy Św.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}