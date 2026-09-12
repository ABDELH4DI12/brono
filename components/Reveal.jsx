"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = "", stagger = false }) {
  const element = useRef(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = stagger ? element.current.children : element.current;
    gsap.from(targets, {
      scrollTrigger: { trigger: element.current, start: "top 86%", once: true },
      opacity: 0,
      y: 34,
      duration: 0.85,
      stagger: stagger ? 0.09 : 0,
      ease: "power3.out",
    });
  }, { scope: element });
  return <div ref={element} className={className}>{children}</div>;
}
