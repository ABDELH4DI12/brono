import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL("https://bronotravaux.ma"),
  title: {
    default: "BRONO TRAVAUX | Aménagement, rénovation & installations techniques",
    template: "%s | BRONO TRAVAUX",
  },
  description:
    "BRONO TRAVAUX conçoit et réalise vos projets d’aménagement, rénovation, électricité, sécurité et automatisation à Casablanca et au Maroc.",
  keywords: [
    "entreprise travaux Casablanca",
    "rénovation Casablanca",
    "aménagement bureaux Casablanca",
    "électricité courant faible Maroc",
    "automatisation contrôle accès Casablanca",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BRONO TRAVAUX — La maîtrise technique, jusque dans la finition.",
    description:
      "Un interlocuteur unique pour vos projets techniques, aménagements et rénovations clés en main.",
    url: "https://bronotravaux.ma",
    siteName: "BRONO TRAVAUX",
    locale: "fr_MA",
    type: "website",
    images: [{ url: "/images/brono-hero-office.webp", width: 2048, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRONO TRAVAUX",
    description: "Aménagement, agencement & automatisation au Maroc.",
    images: ["/images/brono-hero-office.webp"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "GeneralContractor"],
  name: "BRONO TRAVAUX",
  url: "https://bronotravaux.ma",
  email: "bronotravaux@gmail.com",
  telephone: "+212606077094",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  areaServed: { "@type": "Country", name: "Morocco" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <PageTransition />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
