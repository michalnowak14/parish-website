import React from "react";

export default function Page() {
  return (
    <div>
      {" "}
      <header className="page-header">
        <h1 className="text-6xl p-7 font-bold">
          Standardy ochrony małoletnich
        </h1>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <section>
          <div className="mt-8 text-center">
            <a
              href="/Standardy_Parafie.pdf"
              download
              className="inline-block px-6 py-3  text-emerald-900 rounded-lg "
            >
              Pobierz PDF: Standardy Parafii
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Standardy ochrony małoletnich w Parafii Opatrzności Bożej w
            Jodłówce-Wałkach – Skrót
          </h2>
          <h3 className="text-xl font-semibold mt-4">
            Bezpieczne zasady kontaktu
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Wybieraj oficjalne, ogólnodostępne i przygotowane miejsca spotkań.
            </li>
            <li>Unikaj przebywania z dorosłym w odizolowanych warunkach.</li>
            <li>
              Nie przebywaj w parafialnych pomieszczeniach mieszkalnych bez
              opieki rodzica lub opiekuna.
            </li>
            <li>Zawsze pozostawaj pod opieką osoby dorosłej.</li>
            <li>
              Nie bądź pod wyłączną opieką innego dziecka (chyba że regulamin
              stanowi inaczej).
            </li>
            <li>
              Spotkania w domach muszą odbywać się w grupie, nigdy
              indywidualnie.
            </li>
            <li>Nie podróżuj prywatnymi samochodami bez zgody rodziców.</li>
            <li>Nie przechodź na "ty" z dorosłymi.</li>
            <li>Unikaj wypowiedzi o treści seksualnej w obecności dzieci.</li>
            <li>Zakaz przemocy fizycznej i psychicznej wobec dzieci.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Bezpieczne wyjazdy</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Rodzice są informowani o spotkaniach, wymagana pisemna zgoda.
            </li>
            <li>
              Określenie zasad odbioru dzieci i komunikacji elektronicznej.
            </li>
            <li>Wypoczynek dzieci musi być zgodny z przepisami prawa.</li>
            <li>Zgoda rodziców na wyjazdy po zapoznaniu się z planem.</li>
            <li>
              Rodzice mają prawo do kontaktu z dzieckiem i opiekunem podczas
              wyjazdu.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">
            Bezpieczny kontakt w środowisku cyfrowym
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Używaj parafialnego komunikatora lub służbowego e-maila.</li>
            <li>Brak wiadomości po 22:00 bez zgody rodziców.</li>
            <li>
              Internet w parafiach musi być zabezpieczony przed nieodpowiednimi
              treściami.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">
            Pozostałe zasady bezpiecznej parafii
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Sakramenty tylko w miejscach do tego przeznaczonych (konfesjonał,
              kaplica, biuro).
            </li>
            <li>Podczas odwiedzin chorych obecność osoby trzeciej.</li>
            <li>
              Wizyty duszpasterskie tylko z dojrzałymi osobami, nigdy
              samodzielnie z niepełnoletnimi.
            </li>
            <li>
              Pamiętaj o bezpieczeństwie, szacunku i zaufaniu. Informuj
              bliskich, jeśli coś Cię niepokoi.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">
            Sposób reagowania na oskarżenia lub niewłaściwe zachowania
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Zgłaszaj złe zachowania policji lub instytucji kościelnej.</li>
            <li>Zgłoszenia należy badać i informować rodziców.</li>
            <li>W przypadku przemocy między dziećmi – działaj z rodzicami.</li>
            <li>
              Proboszcz i delegat diecezjalny współpracują przy zgłoszeniach.
            </li>
            <li>
              Każde zgłoszenie traktuj poważnie i postępuj zgodnie z procedurą.
            </li>
            <li>Osoba zgłaszająca ma prawo do informacji o działaniach.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">
            Jak pomagać skrzywdzonym dzieciom?
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Dziecko musi być wysłuchane i otrzymać wsparcie.</li>
            <li>
              Informacja o dostępnej, bezpłatnej pomocy dla dziecka i rodziny.
            </li>
            <li>
              Pomoc duszpasterska obejmuje odbudowę relacji z Bogiem i
              Kościołem.
            </li>
            <li>Wspólnota grupy parafialnej także może otrzymać wsparcie.</li>
            <li>
              Informacja o wydarzeniach powinna być przekazana z zachowaniem
              poufności.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Wsparcie i kontakt</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>116 111 – Telefon Zaufania dla dzieci i młodzieży (24h/7)</li>
            <li>
              800 120 002 – Ogólnopolskie Pogotowie Przemocy w Rodzinie
              „Niebieska Linia” (24h/7)
            </li>
            <li>
              22 668 70 00 – Poradnia dla osób pokrzywdzonych przestępstwem
              (12:00 – 18:00)
            </li>
            <li>112 – Numer alarmowy</li>
            <li>niebieskalinia@niebieskalinia.info</li>
          </ul>
          <p className="mt-4">
            <strong>Osoba zaufania w parafii:</strong> Elżbieta Biel
          </p>
          <p>
            <strong>Kontakt:</strong> 691 943 095
          </p>
        </section>
      </main>
    </div>
  );
}
