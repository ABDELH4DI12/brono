import Link from "next/link";

export default function Brand({ light = false }) {
  return (
    <Link className={`brand${light ? " brand--light" : ""}`} href="/" aria-label="BRONO TRAVAUX — Accueil">
      <span className="brand__mark" aria-hidden="true">
        <span>B</span>
      </span>
      <span className="brand__name">
        <strong>BRONO</strong>
        <small>TRAVAUX</small>
      </span>
    </Link>
  );
}
