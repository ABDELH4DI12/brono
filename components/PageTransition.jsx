"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function getLabel(pathname) {
  if (pathname === "/") return "Accueil";
  if (pathname.startsWith("/realisations")) return "Réalisations";
  if (pathname.startsWith("/services/")) return "Expertise";
  return "BRONO TRAVAUX";
}

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const root = useRef(null);
  const darkPanel = useRef(null);
  const copperPanel = useRef(null);
  const label = useRef(null);
  const progress = useRef(null);
  const firstRender = useRef(true);
  const transitioning = useRef(false);
  const pendingHash = useRef("");
  const fallbackTimer = useRef(null);

  function unlock() {
    transitioning.current = false;
    pendingHash.current = "";
    document.documentElement.classList.remove("route-is-changing");
    gsap.set(root.current, { visibility: "hidden" });
    gsap.set([darkPanel.current, copperPanel.current], { xPercent: -101 });
  }

  useEffect(() => {
    function handleNavigation(event) {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname) return;

      event.preventDefault();
      if (transitioning.current) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nextUrl = `${destination.pathname}${destination.search}${destination.hash}`;
      if (reducedMotion) {
        router.push(nextUrl);
        return;
      }

      transitioning.current = true;
      pendingHash.current = destination.hash;
      label.current.textContent = getLabel(destination.pathname);
      document.documentElement.classList.add("route-is-changing");
      router.prefetch(destination.pathname);

      clearTimeout(fallbackTimer.current);
      gsap.killTweensOf([root.current, darkPanel.current, copperPanel.current, label.current, progress.current]);
      gsap.set(root.current, { visibility: "visible" });
      gsap.set([darkPanel.current, copperPanel.current], { xPercent: -101 });
      gsap.set(label.current, { autoAlpha: 0, y: 28 });
      gsap.set(progress.current, { scaleX: 0, transformOrigin: "left" });

      gsap.timeline({
        onComplete: () => router.push(nextUrl),
      })
        .to(darkPanel.current, { xPercent: 0, duration: 0.43, ease: "expo.inOut" })
        .to(copperPanel.current, { xPercent: 0, duration: 0.49, ease: "expo.inOut" }, 0.07)
        .to(label.current, { autoAlpha: 1, y: 0, duration: 0.24, ease: "power3.out" }, 0.28)
        .to(progress.current, { scaleX: 1, duration: 0.27, ease: "power2.inOut" }, 0.28);

      fallbackTimer.current = window.setTimeout(unlock, 6000);
    }

    // Capture before Next's delegated Link handler so the route cannot swap
    // until the covering animation has completed.
    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      clearTimeout(fallbackTimer.current);
    };
  }, [router]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!transitioning.current) return;

    clearTimeout(fallbackTimer.current);
    if (pendingHash.current) {
      const targetId = decodeURIComponent(pendingHash.current.slice(1));
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }

    gsap.timeline({
      delay: 0.07,
      onComplete: unlock,
    })
      .to(label.current, { autoAlpha: 0, y: -24, duration: 0.2, ease: "power2.in" })
      .to(copperPanel.current, { xPercent: 101, duration: 0.5, ease: "expo.inOut" }, 0.06)
      .to(darkPanel.current, { xPercent: 101, duration: 0.55, ease: "expo.inOut" }, 0.1);
  }, [pathname]);

  return (
    <div className="route-wipe" ref={root} aria-hidden="true">
      <div className="route-wipe__panel route-wipe__panel--dark" ref={darkPanel} />
      <div className="route-wipe__panel route-wipe__panel--copper" ref={copperPanel}>
        <div className="route-wipe__grid" />
        <div className="route-wipe__meta"><span>BRONO / TRANSITION</span><span>33.5731° N · 7.5898° W</span></div>
        <div className="route-wipe__content">
          <span className="route-wipe__index">[ 00—01 ]</span>
          <p ref={label}>BRONO TRAVAUX</p>
          <div className="route-wipe__progress"><span ref={progress} /></div>
        </div>
        <div className="route-wipe__mark">B</div>
      </div>
    </div>
  );
}
