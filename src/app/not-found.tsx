import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, GoldRule } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory pt-28">
      <Container>
        <p className="eyebrow text-taupe">404</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] text-text">
          This page
          <br />
          could not be found.
        </h1>
        <GoldRule className="mt-8" />
        <p className="mt-6 max-w-md text-text-secondary">
          The link may be outdated, or the page may have moved. Return home or
          book a consultation instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
        <p className="mt-8 text-sm text-taupe">
          Or visit{" "}
          <Link href="/treatments" className="underline underline-offset-4">
            treatments
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
