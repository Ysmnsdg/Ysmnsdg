"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container, GoldRule } from "@/components/ui/Section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center bg-ivory pt-28">
      <Container>
        <p className="eyebrow text-taupe">Something went wrong</p>
        <h1 className="mt-4 font-serif text-4xl text-text md:text-5xl">
          We could not load this page.
        </h1>
        <GoldRule className="mt-8" />
        <p className="mt-6 max-w-md text-text-secondary">
          Please try again. If the problem continues, contact the practice
          directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
