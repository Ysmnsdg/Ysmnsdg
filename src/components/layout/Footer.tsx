import Link from "next/link";
import { dentist, fullName, navigation } from "@/data/dentist";
import { Container, GoldRule } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="surface-espresso">
      <Container wide className="py-20 md:py-28">
        <div className="mb-16 max-w-4xl">
          <p className="eyebrow mb-6 text-gold/80">Private Dentistry</p>
          <p className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-warm-white">
            {fullName.toUpperCase()}
          </p>
          <GoldRule className="mt-8 bg-gold/70" />
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-5 text-stone/70">Navigate</p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/75 transition-colors hover:text-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-sm text-warm-white/75 transition-colors hover:text-warm-white"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-stone/70">Contact</p>
            <address className="not-italic text-sm leading-7 text-warm-white/75">
              <p>{dentist.practiceName}</p>
              <p>{dentist.address.line1}</p>
              <p>
                {dentist.address.city}, {dentist.address.region}{" "}
                {dentist.address.postalCode}
              </p>
              <p className="mt-4">
                <a href={`tel:${dentist.phone.replace(/\s/g, "")}`} className="hover:text-warm-white">
                  {dentist.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${dentist.email}`} className="hover:text-warm-white">
                  {dentist.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="eyebrow mb-5 text-stone/70">Connect</p>
            <ul className="space-y-3">
              {dentist.socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    className="text-sm text-warm-white/75 transition-colors hover:text-warm-white"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-stone/70">
              <Link href="/privacy" className="hover:text-warm-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-warm-white">
                Terms
              </Link>
              <Link href="/faq" className="hover:text-warm-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-3xl text-xs leading-6 text-stone/60">
          {dentist.medicalDisclaimer}
        </p>
        <p className="mt-6 text-xs text-stone/45">
          © 2026 {dentist.practiceName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
