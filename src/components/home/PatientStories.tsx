"use client";

import { useState } from "react";
import { getFeaturedTestimonials } from "@/data/testimonials";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function PatientStories() {
  const items = getFeaturedTestimonials();
  const [index, setIndex] = useState(0);
  if (!items.length) return null;

  const current = items[index];

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionLabel>Patient Stories</SectionLabel>
        <SectionHeading>Words from those
          <br />
          we have cared for.
        </SectionHeading>

        <figure className="mt-14 border-t border-stone pt-12">
          <blockquote className="max-w-4xl font-serif text-[clamp(1.6rem,4vw,2.75rem)] leading-snug text-text">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-text">{current.patientIdentifier}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-taupe">
                {current.treatmentTitle}
                {current.verifiedGoogle ? " · Verified Google Review" : ""}
              </p>
            </div>
            <div className="flex items-center gap-3" role="group" aria-label="Testimonial navigation">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={cn("step-dot", i === index && "is-active")}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
