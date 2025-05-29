import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left section */}
        <div>
          <h2 className="text-lg font-semibold">Parafia Jodłówka-Wałki</h2>
          <p className="text-sm text-amber-700">
            &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone
          </p>
        </div>

        <div className="text-sm">
          <p>Telefon: 14 650 14 11</p>
          <p className="text-amber-700">jodlowka_walki@diecezja.tarnow.pl</p>
        </div>
        <div className="text-sm">
          <a href="/standardy-ochrony-maloletnich">
            Standardy Ochrony Małoletnich
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
