"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const blueprintPaths = [
  "M148 170 L306 78 L470 172 L307 269 Z",
  "M148 170 L148 393 L307 490 L307 269",
  "M470 172 L470 393 L307 490",
  "M148 282 L307 381 L470 284",
  "M227 124 L389 220 L389 439",
  "M228 441 L228 330 L389 235",
  "M307 78 L307 190 L470 284",
];

export default function Hero() {
  const scope = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    timeline
      .from(".precision-hero__word > span", { yPercent: 118, duration: 1.05, stagger: 0.11 })
      .from(".precision-hero__meta, .precision-hero__copy, .precision-hero__foot", { opacity: 0, y: 18, duration: 0.7, stagger: 0.08 }, 0.55)
      .from(".blueprint-line", { strokeDashoffset: 850, duration: 1.8, stagger: 0.07, ease: "power2.inOut" }, 0.22)
      .from(".blueprint-node", { scale: 0, transformOrigin: "center", duration: 0.4, stagger: 0.08 }, 1.18)
      .from(".material-window", { clipPath: "inset(100% 0 0 0)", duration: 1.15 }, 0.28);

    gsap.to(".technical-object", { y: -14, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, { scope });

  function moveLight(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <section className="precision-hero" ref={scope} onPointerMove={moveLight} id="top">
      <div className="precision-hero__grid" />
      <div className="precision-hero__glow" />
      <div className="material-window">
        <Image src="/images/brono-hero-office.webp" alt="Détail d’un espace professionnel aux finitions techniques intégrées" fill priority sizes="(max-width: 800px) 70vw, 36vw" />
        <span>Vue conceptuelle · 001</span>
      </div>

      <div className="technical-object" aria-hidden="true">
        <svg viewBox="0 0 620 570" role="presentation">
          {blueprintPaths.map((path, index) => <path key={path} className={`blueprint-line blueprint-line--${index + 1}`} d={path} pathLength="850" />)}
          <circle className="blueprint-node" cx="148" cy="170" r="5" />
          <circle className="blueprint-node" cx="470" cy="172" r="5" />
          <circle className="blueprint-node" cx="307" cy="490" r="5" />
          <circle className="blueprint-node" cx="307" cy="78" r="5" />
          <g className="blueprint-label"><line x1="468" y1="172" x2="550" y2="128" /><text x="555" y="126">CFA.02</text></g>
          <g className="blueprint-label"><line x1="147" y1="393" x2="68" y2="428" /><text x="8" y="438">NIV.00</text></g>
          <g className="blueprint-label"><line x1="389" y1="439" x2="514" y2="475" /><text x="521" y="481">AXE.B7</text></g>
        </svg>
      </div>

      <div className="container precision-hero__inner">
        <div className="precision-hero__meta"><span>BRONO / 01—09</span><span>Casablanca · Maroc</span><span>33.5731° N · 7.5898° W</span></div>
        <div className="precision-hero__statement">
          <p className="precision-hero__kicker">Ingénierie · Aménagement · Automatisation</p>
          <h1 aria-label="La précision prend forme">
            <span className="precision-hero__word"><span>LA <br className="precision-hero__mobile-break" />PRÉCISION</span></span>
            <span className="precision-hero__word precision-hero__word--shift"><span>PREND</span></span>
            <span className="precision-hero__word precision-hero__word--serif"><span>forme.</span></span>
          </h1>
        </div>
        <div className="precision-hero__copy"><span className="precision-hero__copy-index">[ A ]</span><p>Nous concevons et exécutons des espaces où chaque réseau, chaque matière et chaque détail travaille comme un seul système.</p><Link href="#expertises" aria-label="Découvrir nos expertises"><ArrowDownRight /></Link></div>
        <div className="precision-hero__foot"><Link className="precision-link" href="#contact">Étudier votre projet <ArrowUpRight /></Link><div><span>Devis</span><strong>≤ 48H</strong></div><div><span>Pilotage</span><strong>01 contact</strong></div></div>
      </div>
    </section>
  );
}
