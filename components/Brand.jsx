import Link from "next/link";

export default function Brand({ light = false }) {
  return (
    <Link className={`brand${light ? " brand--light" : ""}`} href="/" aria-label="BRONO TRAVAUX — Accueil">
      <img className="brand__logo" src="/images/logo-brono-travaux.png" alt="" aria-hidden="true" />
    </Link>
  );
}
