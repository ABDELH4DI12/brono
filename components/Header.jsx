"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Brand from "./Brand";

const nav = [
  ["Accueil", "/"],
  ["Expertises", "/#expertises"],
  ["Réalisations", "/realisations"],
  ["Méthode", "/#methode"],
  ["Engagements", "/#engagements"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`}>
      <div className="header-shell">
        <Brand light={!scrolled && !open} />
        <nav className="desktop-nav" aria-label="Navigation principale">
          {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:+212606077094" aria-label="Appeler BRONO TRAVAUX">
            <Phone size={17} /> <span>06 06 07 70 94</span>
          </a>
          <Link className="button button--small" href="/#contact">Démarrer un projet</Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {nav.map(([label, href], index) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__bottom">
          <div>
            <span>Contact direct</span>
            <a href="tel:+212606077094">06 06 07 70 94</a>
          </div>
          <Link className="button" href="/#contact" onClick={() => setOpen(false)}>Demander un devis</Link>
        </div>
      </div>
    </header>
  );
}
