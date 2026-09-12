"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Bonjour BRONO TRAVAUX, je souhaite demander une étude.",
      `Nom : ${data.get("name")}`,
      `Téléphone : ${data.get("phone")}`,
      `Projet : ${data.get("project")}`,
      `Localisation : ${data.get("location")}`,
      `Détails : ${data.get("message") || "Non précisé"}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/212606077094?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field"><label htmlFor="name">Nom / société</label><input id="name" name="name" required placeholder="Votre nom" autoComplete="name" /></div>
      <div className="field"><label htmlFor="phone">Téléphone</label><input id="phone" name="phone" required type="tel" placeholder="06 00 00 00 00" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="project">Type de projet</label><select id="project" name="project" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Aménagement de bureaux</option><option>Rénovation résidentielle</option><option>Installation électrique</option><option>Réseaux & sécurité</option><option>Automatisation & accès</option><option>Façade, enseigne ou métallerie</option><option>Autre projet</option></select></div>
      <div className="field"><label htmlFor="location">Localisation</label><input id="location" name="location" required placeholder="Casablanca, Rabat…" /></div>
      <div className="field field--full"><label htmlFor="message">Parlez-nous de votre besoin <span>(optionnel)</span></label><textarea id="message" name="message" rows="3" placeholder="Surface, délai souhaité, contraintes…" /></div>
      <div className="form-submit"><p>{sent ? <><CheckCircle2 size={17} /> Votre demande est prête dans WhatsApp.</> : "Réponse et premier cadrage sous 48 heures ouvrées."}</p><button className="button button--dark" type="submit">Envoyer via WhatsApp <ArrowUpRight size={18} /></button></div>
    </form>
  );
}
