// app/kontakt/page.tsx
import React from "react";

const KontaktPage = () => {
  return (
    <div>
      {" "}
      <header className="page-header">
        <h1 className="text-6xl p-7 font-bold">Kontakt</h1>
      </header>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-7">
        Jak skontaktować się z parafią Opatrzności Bożej w Jodłówce Wałkach?
      </h1>
      <h2 className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-600 mb-12 max-w-3xl mx-auto">
        Zachęcamy do bezpośredniego kontaktu z nami – osobiście, telefonicznie
        lub za pośrednictwem poczty elektronicznej.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-lg">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Ks. Proboszcz</h2>
            <p>Jan Majocha</p>
          </div>

          <div>
            <h2 className="font-semibold">Adres</h2>
            <p>
              Jodłówka-Wałki 53 K<br />
              33-150 Wola Rzędzińska
              <br />
              Małopolskie, Polska
            </p>
          </div>

          <div>
            <h2 className="font-semibold">E-mail</h2>
            <p>
              <a href="mailto:jodlowka_walki@diecezja.tarnow.pl">
                jodlowka_walki@diecezja.tarnow.pl
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Telefon</h2>
            <p>Parafia: 14 650 14 11</p>
            <p>Komórkowy (ks. Proboszcz): 664 716 493</p>
          </div>

          <div>
            <h2 className="font-semibold">Nr konta</h2>
            <p>81 8591 0007 3110 0310 7155 0002</p>
          </div>

          <div>
            <h2 className="font-semibold">Strona internetowa</h2>
            <p>
              <a
                href="http://parafia.jodlowka-walki.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                parafia.jodlowka-walki.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
