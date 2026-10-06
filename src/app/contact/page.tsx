import { dentist, fullName } from "@/data/dentist";
import { formatAddress } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Visit ${dentist.practiceName} — hours, parking, transit, and how to reach ${fullName}.`,
  path: "/contact",
});

export default function ContactPage() {
  const phoneHref = `tel:${dentist.phone.replace(/[^\d+]/g, "")}`;
  const mapsHref =
    dentist.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      formatAddress(dentist.address).replace(/\n/g, ", "),
    )}`;

  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Visit</SectionLabel>
            <SectionHeading as="h1">Contact</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Reach the practice by phone, email, or book a consultation
              online.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-6">
              <Reveal>
                <SectionLabel>Practice</SectionLabel>
                <p className="mt-3 font-serif text-3xl text-espresso">
                  {dentist.practiceName}
                </p>
                <address className="mt-6 whitespace-pre-line not-italic text-[1.05rem] leading-relaxed text-text-secondary">
                  {formatAddress(dentist.address)}
                </address>
                <ul className="mt-8 space-y-3 text-sm">
                  <li>
                    <a
                      href={phoneHref}
                      className="text-espresso underline-offset-4 hover:underline"
                    >
                      {dentist.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${dentist.email}`}
                      className="text-espresso underline-offset-4 hover:underline"
                    >
                      {dentist.email}
                    </a>
                  </li>
                </ul>
              </Reveal>

              <Reveal>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={mapsHref}>Get directions</Button>
                  <Button href={phoneHref} variant="secondary">
                    Call
                  </Button>
                  <Button href="/book" variant="secondary">
                    Book
                  </Button>
                </div>
              </Reveal>

              {(dentist.parkingInfo ||
                dentist.transitInfo ||
                dentist.accessibilityInfo) && (
                <Reveal>
                  <div className="space-y-8 border-t border-stone pt-10">
                    {dentist.parkingInfo && (
                      <div>
                        <SectionLabel>Parking</SectionLabel>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {dentist.parkingInfo}
                        </p>
                      </div>
                    )}
                    {dentist.transitInfo && (
                      <div>
                        <SectionLabel>Transit</SectionLabel>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {dentist.transitInfo}
                        </p>
                      </div>
                    )}
                    {dentist.accessibilityInfo && (
                      <div>
                        <SectionLabel>Accessibility</SectionLabel>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {dentist.accessibilityInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )}
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <SectionLabel>Hours</SectionLabel>
                <ul className="mt-6 divide-y divide-stone border-y border-stone">
                  {dentist.officeHours.map((row) => (
                    <li
                      key={row.day}
                      className="flex items-baseline justify-between gap-6 py-4 text-sm"
                    >
                      <span className="text-text">{row.day}</span>
                      <span
                        className={
                          row.closed
                            ? "text-taupe"
                            : "text-text-secondary"
                        }
                      >
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {dentist.socialLinks.length > 0 && (
                <Reveal delay={80}>
                  <div className="mt-12">
                    <SectionLabel>Connect</SectionLabel>
                    <ul className="mt-4 flex flex-wrap gap-4">
                      {dentist.socialLinks.map((link) => (
                        <li key={link.platform}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-[0.16em] text-espresso underline-offset-4 hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal delay={120}>
                <div className="mt-12 border border-stone bg-ivory px-6 py-8">
                  <p className="font-serif text-xl text-espresso">
                    Prefer to start online?
                  </p>
                  <p className="mt-3 text-sm text-text-secondary">
                    Request a virtual consultation before your first visit.
                  </p>
                  <Button
                    href="/virtual-consultation"
                    variant="secondary"
                    className="mt-6"
                    size="sm"
                  >
                    Virtual consultation
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
