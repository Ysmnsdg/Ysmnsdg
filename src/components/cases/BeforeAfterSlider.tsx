"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const labelId = useId();

  return (
    <div className={cn("relative overflow-hidden bg-stone select-none", className)}>
      <div className="relative aspect-[16/10] w-full touch-none">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-[100vw] max-w-none md:w-[80vw]">
            <div className="absolute inset-0" style={{ width: `${10000 / Math.max(position, 1)}%` }}>
              <Image
                src={before.src}
                alt={before.alt}
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-[1] w-px bg-gold"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 z-[1] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-warm-white shadow-[var(--shadow-soft)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="text-[0.65rem] tracking-widest text-espresso">↔</span>
        </div>

        <span className="pointer-events-none absolute left-4 top-4 z-[1] bg-espresso/70 px-3 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-warm-white">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 z-[1] bg-espresso/70 px-3 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-warm-white">
          After
        </span>

        <label htmlFor={labelId} className="sr-only">
          Compare before and after images
        </label>
        <input
          id={labelId}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          aria-valuetext={`${position} percent before image visible`}
        />
      </div>
    </div>
  );
}
