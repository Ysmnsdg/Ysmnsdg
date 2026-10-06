"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { journeySteps } from "@/data/faq";
import { cn } from "@/lib/utils";

export function PatientExperience() {
  const [openId, setOpenId] = useState(journeySteps[0]?.id ?? "");

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>The Experience</SectionLabel>
          <SectionHeading>
            Your experience,
            <br />
            considered at every step.
          </SectionHeading>
          <GoldRule className="mt-6" />
          <p className="mt-6 text-pretty text-base leading-relaxed text-text-secondary md:text-lg">
            From first conversation to long-term care — each step is designed to
            reduce uncertainty and keep you in control.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-stone">
          {journeySteps.map((step) => {
            const open = openId === step.id;
            return (
              <li key={step.id} className="border-b border-stone">
                <button
                  type="button"
                  className="flex w-full items-start gap-6 py-6 text-left md:items-center md:gap-10"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? "" : step.id)}
                >
                  <span className="font-serif text-2xl text-gold md:text-3xl">
                    {step.number}
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-2xl text-text md:text-3xl">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-sm text-text-secondary md:text-base">
                      {step.description}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-2 text-gold transition-transform duration-300",
                      open && "rotate-45",
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 pb-8 pl-14 text-sm leading-relaxed text-text-secondary md:pl-20">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
