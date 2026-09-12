import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Réalisations & univers de projets",
  description: "Découvrez les univers d’intervention de BRONO TRAVAUX : bureaux, rénovation résidentielle, installations techniques et façades à Casablanca.",
  alternates: { canonical: "/realisations" },
};

const universes = [
  { number: "01", title: "Plateau tertiaire connecté", service: "Aménagement · Électricité · Réseaux", image: "/images/brono-hero-office.webp", href: "/services/amenagement-bureaux-casablanca", copy: "Un environnement professionnel où l’architecture, l’éclairage et les systèmes techniques travaillent ensemble." },
  { number: "02", title: "Villa contemporaine", service: "Rénovation · Agencement · Finitions", image: "/images/brono-villa.webp", href: "/services/renovation-villas-appartements-casablanca", copy: "Une rénovation globale pensée autour des volumes, de la lumière et de la qualité des détails." },
  { number: "03", title: "Façade commerciale", service: "Façade · Métallerie · Signalétique", image: "/images/brono-facade.webp", href: "/services/facades-enseignes", copy: "Une enveloppe précise et durable qui prolonge l’identité de l’entreprise dans l’espace public." },
];

export default function RealisationsPage() {
  return <main id="contenu" className="realisations-page"><section className="inner-hero"><div className="container"><p className="eyebrow">Univers de projets</p><h1>Construire avec précision.<br /><em>Finir avec exigence.</em></h1><div className="inner-hero__bottom"><p>Ces visualisations présentent les univers d’intervention de BRONO TRAVAUX. Elles seront remplacées par les études de cas réelles dès réception des photographies chantier.</p><span>Casablanca · Maroc</span></div></div></section><section className="universes section-pad"><div className="container">{universes.map((item, index) => <Reveal className={`universe universe--${index % 2 ? "reverse" : "default"}`} key={item.number}><Link href={item.href} className="universe__image"><Image src={item.image} alt={`${item.title}, visualisation d’ambiance`} fill sizes="(max-width: 800px) 100vw, 62vw" /><span>Visualisation d’ambiance</span></Link><div className="universe__copy"><span>{item.number}</span><p className="eyebrow">{item.service}</p><h2>{item.title}</h2><p>{item.copy}</p><Link className="text-link" href={item.href}>Découvrir l’expertise <ArrowUpRight size={17} /></Link></div></Reveal>)}</div></section><section className="project-cta"><div className="container"><h2>Votre projet sera<br />le prochain à prendre forme.</h2><Link className="button" href="/#contact">Démarrer une étude <ArrowUpRight size={18} /></Link></div></section></main>;
}
