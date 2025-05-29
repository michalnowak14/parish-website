"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook } from "lucide-react";

const Nav = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNewsDropdownOpen(false);
  };
  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen(!isNewsDropdownOpen);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex items-center h-[15vh] fixed top-0 left-0 z-20 text-white transition-colors duration-300 ${
        isScrolled ? "bg-red-950/80" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between w-full px-8">
        <div>
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {[
            { label: "Parafia", href: "/" },
            { label: "Galeria", href: "/galeria" },
            { label: "Kontakt", href: "/kontakt" },
          ].map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="transition-colors duration-300 hover:text-amber-600 relative after:block after:h-[2px] after:bg-amber-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Aktualności dropdown */}
          <li className="relative group">
            <button
              onClick={toggleNewsDropdown}
              className="cursor-pointer transition-colors duration-300 hover:text-amber-600 relative after:block after:h-[2px] after:bg-amber-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100"
            >
              Aktualności
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isNewsDropdownOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              {[
                { label: "Ogłoszenia", href: "/ogloszenia" },
                { label: "Intencje", href: "/intencje" },
              ].map((item) => (
                <li
                  key={item.href}
                  className="px-4 py-2 hover:bg-amber-100 hover:text-amber-900 transition-colors duration-200"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsNewsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Grupy parafialne dropdown */}
          <li className="relative group">
            <button
              onClick={toggleDropdown}
              className="cursor-pointer transition-colors duration-300 hover:text-amber-600 relative after:block after:h-[2px] after:bg-amber-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100"
            >
              Grupy parafialne
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isDropdownOpen ? "max-h-[800px]" : "max-h-0"
              }`}
            >
              {[
                { label: "DSM", href: "/grupy-parafialne#dsm" },
                { label: "KSM", href: "/grupy-parafialne#ksm" },
                {
                  label: "Liturgiczna Służba Ołtarza",
                  href: "/grupy-parafialne#lso",
                },
                {
                  label: "Chór Parafialny",
                  href: "/grupy-parafialne#chor-parafialny",
                },
                {
                  label: "Róże Różańcowe",
                  href: "/grupy-parafialne#roze-rozancowe",
                },
                {
                  label: "Akcja Katolicka Caritas",
                  href: "/grupy-parafialne#caritas",
                },
                {
                  label: "Straż Honorowa NSPJ",
                  href: "/grupy-parafialne#straz-nspj",
                },
                {
                  label: "Apostolat Margaretka",
                  href: "/grupy-parafialne#apostolat",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="px-4 py-2 hover:bg-amber-100 hover:text-amber-900 transition-colors duration-200"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100091175483659"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 transition-colors duration-300"
            >
              <Facebook />
            </a>
          </li>
        </ul>

        {/* Mobile nav toggle */}
        <div className="md:hidden z-30" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile nav menu */}
        {isMobileOpen && (
          <div className="absolute top-[15vh] left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col gap-4 px-8 py-6 md:hidden z-20">
            {[
              { label: "Parafia", href: "/" },
              { label: "Galeria", href: "/galeria" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.href}
                className="m-auto"
                href={item.href}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <button className="m-auto" onClick={toggleNewsDropdown}>
              Aktualności
            </button>
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ml-4 flex flex-col gap-2 text-sm ${
                isNewsDropdownOpen ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <Link href="/ogloszenia" onClick={toggleMobileMenu}>
                Ogłoszenia
              </Link>
              <Link href="/intencje" onClick={toggleMobileMenu}>
                Intencje
              </Link>
            </div>

            <button className="m-auto" onClick={toggleDropdown}>
              Grupy parafialne
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ml-4 flex flex-col gap-2 text-sm ${
                isDropdownOpen ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              {/* Group items here */}
              <Link href="/grupy-parafialne#dsm" onClick={toggleMobileMenu}>
                DSM
              </Link>
              <Link href="/grupy-parafialne#ksm" onClick={toggleMobileMenu}>
                KSM
              </Link>
              <Link href="/grupy-parafialne#lso" onClick={toggleMobileMenu}>
                Liturgiczna Służba Ołtarza
              </Link>
              <Link
                href="/grupy-parafialne#chor-parafialny"
                onClick={toggleMobileMenu}
              >
                Chór Parafialny
              </Link>
              <Link
                href="/grupy-parafialne#roze-rozancowe"
                onClick={toggleMobileMenu}
              >
                Róże Różańcowe
              </Link>
              <Link href="/grupy-parafialne#caritas" onClick={toggleMobileMenu}>
                Akcja Katolicka Caritas
              </Link>
              <Link
                href="/grupy-parafialne#straz-nspj"
                onClick={toggleMobileMenu}
              >
                Straż Honorowa NSPJ
              </Link>
              <Link
                href="/grupy-parafialne#apostolat"
                onClick={toggleMobileMenu}
              >
                Apostolat Margaretka
              </Link>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100091175483659"
              target="_blank"
              rel="noopener noreferrer"
              className="m-auto hover:text-amber-300 transition-colors duration-300"
            >
              <Facebook />
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
