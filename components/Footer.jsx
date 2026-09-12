import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div><Brand light /><p>Aménagement, agencement & automatisation.<br />La rigueur technique au service de vos espaces.</p></div>
        <div className="footer__nav"><span>Navigation</span><Link href="/#expertises">Expertises</Link><Link href="/realisations">Réalisations</Link><Link href="/#methode">Notre méthode</Link><Link href="/#contact">Demander un devis</Link></div>
        <div className="footer__nav"><span>Contact direct</span><a href="tel:+212606077094"><Phone size={16} /> 06 06 07 70 94</a><a href="mailto:bronotravaux@gmail.com"><Mail size={16} /> bronotravaux@gmail.com</a><p><MapPin size={16} /> Casablanca, Maroc</p></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} BRONO TRAVAUX</span><span>Conception · Réalisation · Maintenance</span><a href="#top">Haut de page <ArrowUpRight size={14} /></a></div>
    </footer>
  );
}
