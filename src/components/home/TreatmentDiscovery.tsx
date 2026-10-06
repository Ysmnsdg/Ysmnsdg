"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { concerns } from "@/data/concerns";
import { getTreatmentsByIds } from "@/data/treatments";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function TreatmentDiscovery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = concerns.find((c) => c.id === activeId);
  const suggested = useMemo(
    () => (active ? getTreatmentsByIds(active.treatmentIds) : []),
    [active],
  );

  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container>
        <SectionLabel>Guidance</SectionLabel>
        <SectionHeading>How can I help you?</SectionHeading>
        <GoldRule className="mt-8" />
        <p className="mt-6 max-w-2xl text-pretty text-text-secondary">
          Choose what brings you here. We will suggest relevant treatments as
          educational guidance — not a diagnosis. A clinical examination is
          always required before care begins.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {concerns.map((concern) => {
            const selected = activeId === concern.id;
            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => setActiveId(concern.id)}
                aria-pressed={selected}
                className={cn(
                  "border px-5 py-5 text-left transition-colors duration-300",
                  selected
                    ? "border-gold bg-ivory"
                    : "border-stone bg-warm-white hover:border-taupe",
                )}
              >
                <span className="block text-base text-text">{concern.label}</span>
                <span className="mt-2 block text-sm text-text-secondary">
                  {concern.description}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="mt-10 min-h-[8rem] border border-stone bg-ivory p-6 md:p-8"
          aria-live="polite"
        >
          {!active && (
            <p className="text-sm text-taupe">
              Select a concern above to see suggested treatments.
            </p>
          )}
          {active && (
            <div>
              <p className="eyebrow text-gold">Suggested pathways</p>
              <ul className="mt-5 space-y-4">
                {suggested.map((treatment) => (
                  <li key={treatment.id}>
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="group flex items-baseline justify-between gap-4 border-b border-stone/80 pb-3"
                    >
                      <span className="font-serif text-2xl text-text group-hover:text-espresso">
                        {treatment.title}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.16em] text-taupe">
                        Learn more →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
