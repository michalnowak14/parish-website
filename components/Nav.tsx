"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook } from "lucide-react";

const Nav = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        {/* Logo */}
        <Link href="/">
          <img src="/oko5.png" alt="Logo" />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          <NavLink href="/" label="Parafia" />
          <NavLink href="/ogloszenia" label="Ogłoszenia" />
          <NavLink href="/intencje" label="Intencje" />
          <NavLink href="/galeria" label="Galeria" />

          {/* Grupy parafialne dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="transition-colors duration-300 hover:text-amber-600 relative after:block after:h-[2px] after:bg-amber-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
            >
              Grupy parafialne
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg overflow-hidden transition-[max-height] duration-300 ${
                isDropdownOpen ? "max-h-[800px]" : "max-h-0"
                }`}
            >
              {[
                { label: "DSM", href: "/grupy-parafialne#dsm" },
                { label: "KSM", href: "/grupy-parafialne#ksm" },
                { label: "Liturgiczna Służba Ołtarza", href: "/grupy-parafialne#lso" },
                { label: "Chór Parafialny", href: "/grupy-parafialne#chor-parafialny" },
                { label: "Róże Różańcowe", href: "/grupy-parafialne#roze-rozancowe" },
                { label: "Akcja Katolicka Caritas", href: "/grupy-parafialne#caritas" },
                { label: "Straż Honorowa NSPJ", href: "/grupy-parafialne#straz-nspj" },
                { label: "Apostolat Margaretka", href: "/grupy-parafialne#apostolat" },
              ].map((item) => (
                <li key={item.href} className="px-4 py-2 hover:bg-amber-100">
                  <Link href={item.href} onClick={() => setIsDropdownOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <NavLink href="/kontakt" label="Kontakt" />

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100091175483659"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 transition-colors"
            >
              <Facebook />
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden z-30" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="absolute top-[15vh] left-0 w-full bg-black/80 backdrop-blur-md flex flex-col gap-4 px-8 py-6 md:hidden">
            <MobileLink href="/" label="Parafia" close={toggleMobileMenu} />
            <MobileLink href="/ogloszenia" label="Ogłoszenia" close={toggleMobileMenu} />
            <MobileLink href="/intencje" label="Intencje" close={toggleMobileMenu} />
            <MobileLink href="/galeria" label="Galeria" close={toggleMobileMenu} />

            <button className="m-auto" onClick={toggleDropdown}>
              Grupy parafialne
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col gap-2 text-sm ml-4">
                {[
                  "DSM",
                  "KSM",
                  "Liturgiczna Służba Ołtarza",
                  "Chór Parafialny",
                  "Róże różańcowe",
                  "Caritas",
                  "Straż NSPJ",
                  "Apostolat Margaretka",
                ].map((id) => (
                  <Link
                    key={id}
                    href={`/grupy-parafialne#${id}`}
                    onClick={toggleMobileMenu}
                  >
                    {id.replace("-", " ")}
                  </Link>
                ))}
              </div>
            )}

            <MobileLink href="/kontakt" label="Kontakt" close={toggleMobileMenu} />

            <a
              href="https://www.facebook.com/profile.php?id=100091175483659"
              target="_blank"
              rel="noopener noreferrer"
              className="m-auto hover:text-amber-300"
            >
              <Facebook />
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

/* Reusable components */
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <li className="relative group">
    <Link
      href={href}
      className="transition-colors duration-300 hover:text-amber-600 relative after:block after:h-[2px] after:bg-amber-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100"
    >
      {label}
    </Link>
  </li>
);

const MobileLink = ({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) => (
    <Link href={href} className="m-auto" onClick={close}>
      {label}
    </Link>
  );

export default Nav;
