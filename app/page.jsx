import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Clock3 } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ServiceExplorer from "@/components/ServiceExplorer";
import ContactForm from "@/components/ContactForm";
import FloatingContact from "@/components/FloatingContact";

const chapters = [
  {
    code: "SPC—01",
    figure: "01",
    title: "L’espace comme système.",
    sector: "Tertiaire",
    scope: "Aménagement · CFO/CFA · Contrôle d’accès",
    image: "/images/brono-hero-office.webp",
    href: "/services/amenagement-bureaux-casablanca",
    note: "Un plateau professionnel conçu de la distribution électrique jusqu’au dernier alignement de cloison.",
  },
  {
    code: "MAT—02",
    figure: "02",
    title: "La matière comme signature.",
    sector: "Résidentiel",
    scope: "Restructuration · Agencement · Finitions",
    image: "/images/brono-villa.webp",
    href: "/services/renovation-villas-appartements-casablanca",
    note: "Des volumes transformés et des matières choisies pour durer, jusque dans les détails invisibles.",
  },
  {
    code: "ENV—03",
    figure: "03",
    title: "L’enveloppe comme présence.",
    sector: "Commercial",
    scope: "Façade · Métallerie · Signalétique",
    image: "/images/brono-facade.webp",
    href: "/services/facades-enseignes",
    note: "Une façade coordonnée avec l’éclairage et la signalétique pour imposer une identité nette.",
  },
];

const stages = [
  ["01", "Relever", "Diagnostic sur site, métrés et contraintes techniques."],
  ["02", "Concevoir", "Plans d’exécution, matériaux et phasage des lots."],
  ["03", "Coordonner", "Un pilote unique pour les équipes et les interfaces."],
  ["04", "Contrôler", "Suivi continu, essais et vérification des finitions."],
  ["05", "Livrer", "Réception, levée des réserves et site prêt à l’usage."],
];

export default function Home() {
  return (
    <main id="contenu">
      <Hero />

      <div className="signal-strip" aria-label="Expertises principales">
        <div><span>CFO / CFA</span><i /> <span>AMÉNAGEMENT</span><i /> <span>AUTOMATISATION</span><i /> <span>FAÇADES</span><i /> <span>SECOND ŒUVRE</span><i /> <span>CLÉS EN MAIN</span></div>
      </div>

      <section className="thesis section-pad">
        <div className="container thesis__layout">
          <Reveal className="thesis__index"><span>[ 00 ]</span><p>BRONO<br />TRAVAUX</p></Reveal>
          <Reveal className="thesis__statement">
            <p className="eyebrow">Notre conviction</p>
            <h2>Le haut niveau ne se voit pas seulement.<br /><em>Il se vérifie.</em></h2>
            <div className="thesis__detail"><span>01</span><p>Dans la précision d’un plan.</p><span>02</span><p>Dans la coordination des métiers.</p><span>03</span><p>Dans une finition qui ne laisse rien au hasard.</p></div>
          </Reveal>
          <Reveal className="thesis__aside"><ArrowDownRight /><p>BRONO réunit ingénierie technique, transformation des espaces et fabrication sur mesure dans une seule chaîne d’exécution.</p></Reveal>
        </div>
      </section>

      <section className="disciplines section-pad" id="expertises">
        <div className="container">
          <Reveal className="disciplines__head"><p className="eyebrow eyebrow--light">09 disciplines · 01 standard</p><h2>Tout ce qui doit<br /><em>fonctionner.</em><br />Tout ce qui doit<br /><em>marquer.</em></h2><p>Survolez une discipline pour lire notre périmètre. Ouvrez-la pour découvrir l’expertise complète.</p></Reveal>
          <ServiceExplorer />
        </div>
      </section>

      <section className="project-showcase section-pad" id="realisations">
        <div className="container project-showcase__intro">
          <Reveal><p className="eyebrow">Champs d’intervention</p><h2>Trois échelles.<br />Une même rigueur.</h2></Reveal>
          <Reveal><span>01—03</span><p>En attendant les photographies de chantier BRONO, ces vues conceptuelles montrent notre direction architecturale sans se présenter comme des réalisations livrées.</p><Link className="precision-link precision-link--dark" href="/realisations">Voir tous les univers <ArrowUpRight /></Link></Reveal>
        </div>
        <div className="container chapter-list">
          {chapters.map((chapter) => (
            <Reveal className="project-chapter" key={chapter.code}>
              <div className="project-chapter__rail"><span>{chapter.code}</span><span>{chapter.sector}</span></div>
              <Link href={chapter.href} className="project-chapter__image"><Image src={chapter.image} alt={`${chapter.title} — visualisation conceptuelle`} fill sizes="(max-width: 800px) 100vw, 64vw" /><span className="project-chapter__label">Image conceptuelle</span><span className="project-chapter__open"><ArrowUpRight /></span></Link>
              <div className="project-chapter__copy"><span>{chapter.figure}</span><h3>{chapter.title}</h3><p className="project-chapter__scope">{chapter.scope}</p><p>{chapter.note}</p><Link href={chapter.href}>Explorer l’expertise <ArrowRight /></Link></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="delivery-system section-pad" id="methode">
        <div className="container delivery-system__head"><Reveal><p className="eyebrow eyebrow--light">Système d’exécution</p><h2>Un chantier lisible.<br />Du relevé à la réception.</h2></Reveal><Reveal><strong>≤ 48H</strong><span>pour cadrer<br />et chiffrer</span></Reveal></div>
        <Reveal className="container execution-line" stagger>{stages.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="execution-line__node" /><h3>{title}</h3><p>{text}</p></article>)}</Reveal>
      </section>

      <section className="quality-code" id="engagements">
        <div className="quality-code__image"><Image src="/images/brono-facade.webp" alt="Détail de façade technique contemporaine" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="quality-code__panel"><Reveal><p className="eyebrow eyebrow--light">Code qualité / BT—Q4</p><h2>Ce que nous promettons doit pouvoir être contrôlé.</h2><p>Un interlocuteur direct. Des choix documentés. Un calendrier suivi. Une réception exigeante.</p><div className="quality-code__list"><div><span>01</span><p>Supervision technique directe</p><Check /></div><div><span>02</span><p>Matériaux sélectionnés rationnellement</p><Check /></div><div><span>03</span><p>Points de contrôle avant réception</p><Check /></div><div><span>04</span><p>Assistance technique post-livraison</p><Check /></div></div></Reveal></div>
      </section>

      <section className="contact-lab section-pad" id="contact">
        <div className="container contact-lab__head"><Reveal><p className="eyebrow">Démarrer / 01</p><h2>Donnez-nous la contrainte.<br /><em>Nous construirons la réponse.</em></h2></Reveal><Reveal className="contact-lab__note"><Clock3 /><p><strong>Premier retour sous 48 h</strong><br />Décrivez le projet. La demande sera préparée directement dans WhatsApp.</p></Reveal></div>
        <div className="container"><ContactForm /></div>
      </section>
      <FloatingContact />
    </main>
  );
}
