import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">Erreur 404</p><h1>Cette page n’existe pas.</h1><p>Revenez à l’accueil pour découvrir les expertises BRONO TRAVAUX.</p><Link className="button button--dark" href="/">Retour à l’accueil</Link></main>;
}
