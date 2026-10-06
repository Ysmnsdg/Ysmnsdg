import { faqCategories, faqItems } from "@/data/faq";
import { dentist } from "@/data/dentist";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata, faqJsonLd } from "@/lib/seo";
import type { FaqCategory } from "@/data/types";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers about appointments, treatments, implants, payment, dental anxiety, and aftercare.",
  path: "/faq",
});

export default function FaqPage() {
  const jsonLd = faqJsonLd(
    faqItems.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  );

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Questions</SectionLabel>
            <SectionHeading as="h1">FAQ</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Clear answers to common questions. Search or filter by topic.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <FaqExplorer
            items={faqItems}
            categories={faqCategories as readonly FaqCategory[]}
          />

          <div className="mt-16 flex flex-col gap-6 border-t border-stone pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-sm text-text-secondary">
              Still unsure? A conversation often helps more than another article.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/book">Book consultation</Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
