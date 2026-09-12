"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { services } from "@/data/services";
import { useState } from "react";

const category = (number) => {
  if (["01", "02", "05"].includes(number)) return "Systèmes";
  if (["03", "04", "08"].includes(number)) return "Espaces";
  return "Enveloppe";
};

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = selected.icon;

  return (
    <div className="discipline-browser">
      <aside className="discipline-browser__focus" aria-live="polite">
        <div className="discipline-browser__code"><span>BT/{selected.number}</span><span>{category(selected.number)}</span></div>
        <div className="discipline-browser__glyph"><Icon strokeWidth={.9} /></div>
        <div>
          <p>{selected.description}</p>
          <ul>{selected.items.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </aside>

      <div className="discipline-browser__list">
        {services.map((service, index) => (
          <Link
            className={active === index ? "is-active" : ""}
            href={`/services/${service.slug}`}
            key={service.slug}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className="discipline-browser__number">{service.number}</span>
            <span className="discipline-browser__title">{service.title}</span>
            <span className="discipline-browser__category">{category(service.number)}</span>
            <span className="discipline-browser__action"><Plus /><ArrowUpRight /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
