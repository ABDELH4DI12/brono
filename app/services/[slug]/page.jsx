import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { getService, services } from "@/data/services";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Intervention à Casablanca et partout au Maroc. Étude et devis sous 48 heures.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.description, images: [service.image] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === slug);
  const next = services[(index + 1) % services.length];
  const Icon = service.icon;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: { "@type": "Country", name: "Morocco" },
    provider: { "@type": "GeneralContractor", name: "BRONO TRAVAUX", telephone: "+212606077094" },
  };

  return (
    <main id="contenu" className="service-page">
      <section className="service-hero">
        <Image src={service.image} alt={`${service.title} par BRONO TRAVAUX`} fill priority sizes="100vw" />
        <div className="service-hero__shade" />
        <div className="container service-hero__content"><Link className="back-link" href="/#expertises"><ArrowLeft size={17} /> Toutes les expertises</Link><p className="eyebrow eyebrow--light">Expertise {service.number}</p><h1>{service.title}</h1><p>{service.description}</p><span className="concept-label">Visualisation d’ambiance</span></div>
      </section>

      <section className="service-detail section-pad"><div className="container service-detail__grid"><Reveal><Icon className="service-detail__icon" strokeWidth={1.2} /><p className="eyebrow">Notre intervention</p><h2>{service.short}</h2><p>Notre équipe prend en charge l’étude, la préparation, l’exécution et le contrôle de chaque lot. Vous gardez un interlocuteur unique et une vision claire du planning jusqu’à la réception.</p></Reveal><Reveal className="scope-list"><p className="eyebrow">Périmètre de prestation</p>{service.items.map((item, itemIndex) => <div key={item}><span>0{itemIndex + 1}</span><p>{item}</p><Check size={18} /></div>)}</Reveal></div></section>

      <section className="service-proof section-pad"><div className="container"><Reveal className="service-proof__head"><p className="eyebrow eyebrow--light">L’exigence BRONO</p><h2>Une exécution maîtrisée,<br />pas une succession d’intervenants.</h2></Reveal><Reveal className="proof-grid" stagger><article><strong>01</strong><h3>Étude technique</h3><p>Relevé des contraintes, dimensionnement et choix rationnel des solutions.</p></article><article><strong>02</strong><h3>Planning clair</h3><p>Phasage des interventions et coordination des différents corps d’état.</p></article><article><strong>03</strong><h3>Contrôle continu</h3><p>Suivi de chantier, points qualité et réception soignée des ouvrages.</p></article></Reveal></div></section>

      <section className="next-service"><div className="container"><p>Expertise suivante</p><Link href={`/services/${next.slug}`}><span>{next.title}</span><ArrowRight /></Link></div></section>
      <section className="service-cta"><div className="container"><div><p className="eyebrow eyebrow--light">Votre projet mérite une étude précise</p><h2>Échangeons avec un interlocuteur technique.</h2></div><div><a className="button" href="/#contact">Demander un devis <ArrowRight size={18} /></a><a className="service-cta__phone" href="tel:+212606077094"><Phone size={17} /> 06 06 07 70 94</a></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
